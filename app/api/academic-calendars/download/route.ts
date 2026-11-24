import { NextResponse } from 'next/server';
import { getDb, isFirebaseConfigured } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { DEFAULT_CALENDAR_SLOTS } from '@/lib/academic-calendars-types';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Missing calendar slot ID' }, { status: 400 });
        }

        // 1. Fetch document from live Firestore
        if (isFirebaseConfigured()) {
            try {
                const db = getDb();
                if (db) {
                    const snap = await getDoc(doc(db, 'academic_calendars', id));
                    if (snap.exists()) {
                        const data = snap.data();
                        if (data && typeof data.fileData === 'string' && data.fileData.includes('base64,')) {
                            const base64Content = data.fileData.split('base64,')[1];
                            const pdfBuffer = Buffer.from(base64Content, 'base64');
                            const fileName = data.fileName || `${id}-calendar.pdf`;

                            return new Response(pdfBuffer, {
                                status: 200,
                                headers: {
                                    'Content-Type': 'application/pdf',
                                    'Content-Disposition': `inline; filename="${fileName}"`,
                                    'Content-Length': pdfBuffer.length.toString(),
                                    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
                                },
                            });
                        }
                    }
                }
            } catch (err) {
                console.warn('[Academic Calendars Download] Firestore fetch warning:', err);
            }
        }

        // 2. Fallback to bundled static calendar slot
        const slot = DEFAULT_CALENDAR_SLOTS.find((s) => s.id === id);
        if (slot && slot.fileUrl && !slot.fileUrl.startsWith('/api/')) {
            return NextResponse.redirect(new URL(slot.fileUrl, request.url));
        }

        return NextResponse.json({ error: 'Academic calendar document not found' }, { status: 404 });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Download error';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
