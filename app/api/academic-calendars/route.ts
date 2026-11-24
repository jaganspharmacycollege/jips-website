import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import {
    getAcademicCalendars,
    saveAcademicCalendars,
    AcademicCalendarItem,
    DEFAULT_CALENDAR_SLOTS,
} from '@/lib/academic-calendars-service';
import { getDb, isFirebaseConfigured } from '@/lib/firebase';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

const WEBSITE_UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'academic-calendars');
const ADMIN_UPLOAD_DIR = '/Users/vinayvakati/jips-admin/public/uploads/academic-calendars';

function formatBytes(bytes: number, decimals = 1) {
    if (bytes === 0) return '0 KB';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// GET /api/academic-calendars
export async function GET() {
    try {
        const localList = getAcademicCalendars();
        const map = new Map<string, AcademicCalendarItem>();

        // Populate base records
        for (const item of localList) {
            map.set(item.id, item);
        }

        // Try Firestore sync if available
        if (isFirebaseConfigured()) {
            try {
                const db = getDb();
                if (db) {
                    const snap = await getDocs(collection(db, 'academic_calendars'));
                    for (const d of snap.docs) {
                        const data = d.data() as AcademicCalendarItem;
                        if (data && data.id) {
                            map.set(data.id, {
                                ...(map.get(data.id) || {}),
                                ...data,
                            });
                        }
                    }
                }
            } catch (fsErr) {
                console.warn('[Academic Calendars] Firestore read notice:', fsErr);
            }
        }

        const result = Array.from(map.values());
        return NextResponse.json({
            success: true,
            count: result.length,
            data: result,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Internal error';
        console.error('[Academic Calendars API] GET Error:', error);
        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}

// POST /api/academic-calendars (Upload PDF & update slot)
export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File | null;
        const id = (formData.get('id') as string)?.trim();
        const programId = (formData.get('programId') as string)?.trim() as 'bpharm' | 'mpharm' | 'pharmd';
        const year = parseInt((formData.get('year') as string) || '1', 10);
        const academicYear = (formData.get('academicYear') as string)?.trim() || '2025–2026';
        const regulation = (formData.get('regulation') as string)?.trim() || 'PCI Regulations';
        const notifNo = (formData.get('notifNo') as string)?.trim() || `JNTUA/DAA/${programId?.toUpperCase()}/AC/2025-26`;
        const title = (formData.get('title') as string)?.trim();
        const uploadedBy = (formData.get('uploadedBy') as string)?.trim() || 'Academic Cell Admin';

        if (!id) {
            return NextResponse.json({ success: false, error: 'Missing calendar slot ID (e.g. bpharm-1).' }, { status: 400 });
        }

        if (!file || typeof file === 'string') {
            return NextResponse.json({ success: false, error: 'Please select a valid PDF file to upload.' }, { status: 400 });
        }

        const fileName = file.name || `${id}-calendar.pdf`;
        const lowerName = fileName.toLowerCase();
        if (!lowerName.endsWith('.pdf') && file.type !== 'application/pdf') {
            return NextResponse.json({ success: false, error: 'Only PDF documents (.pdf) are permitted for academic calendars.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileSize = formatBytes(buffer.length);

        // Sanitize file name for safe URL and disk storage
        const safeBaseName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const targetFileName = `${id}_${safeBaseName.endsWith('.pdf') ? safeBaseName : safeBaseName + '.pdf'}`;

        // Ensure target directories exist
        const targetDirs = [WEBSITE_UPLOAD_DIR, ADMIN_UPLOAD_DIR];
        for (const dir of targetDirs) {
            try {
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
                const targetFilePath = path.join(dir, targetFileName);
                fs.writeFileSync(targetFilePath, buffer);
            } catch (writeErr) {
                console.warn(`[Academic Calendars] Warning writing to ${dir}:`, writeErr);
            }
        }

        const fileUrl = `/uploads/academic-calendars/${targetFileName}`;
        const nowIso = new Date().toISOString();

        // Load existing calendars and find/update target slot
        const currentList = getAcademicCalendars();
        const existingIdx = currentList.findIndex((item) => item.id === id);

        let defaultFallback = DEFAULT_CALENDAR_SLOTS.find((item) => item.id === id);
        if (!defaultFallback) {
            defaultFallback = {
                id,
                programId: programId || 'bpharm',
                programName: programId === 'mpharm' ? 'M.Pharmacy' : programId === 'pharmd' ? 'Pharm.D' : 'B.Pharmacy',
                year: year || 1,
                yearLabel: `${year}st Year`,
                title: title || `${programId?.toUpperCase()} Academic Calendar`,
                regulation,
                academicYear,
                notifNo,
                issueDate: new Date().toLocaleDateString('en-GB'),
                fileName: targetFileName,
                fileUrl,
                fileSize,
                uploadedAt: nowIso,
                uploadedBy,
                status: 'Published',
            };
        }

        const updatedItem: AcademicCalendarItem = {
            ...(existingIdx >= 0 ? currentList[existingIdx] : defaultFallback),
            id,
            programId: programId || (existingIdx >= 0 ? currentList[existingIdx].programId : defaultFallback.programId),
            programName: (programId === 'mpharm' ? 'M.Pharmacy' : programId === 'pharmd' ? 'Pharm.D' : 'B.Pharmacy'),
            year: year || (existingIdx >= 0 ? currentList[existingIdx].year : defaultFallback.year),
            yearLabel: (existingIdx >= 0 ? currentList[existingIdx].yearLabel : defaultFallback.yearLabel),
            title: title || (existingIdx >= 0 ? currentList[existingIdx].title : defaultFallback.title),
            regulation: regulation || (existingIdx >= 0 ? currentList[existingIdx].regulation : defaultFallback.regulation),
            academicYear: academicYear || (existingIdx >= 0 ? currentList[existingIdx].academicYear : defaultFallback.academicYear),
            notifNo: notifNo || (existingIdx >= 0 ? currentList[existingIdx].notifNo : defaultFallback.notifNo),
            issueDate: new Date().toLocaleDateString('en-GB'),
            fileName: targetFileName,
            fileUrl,
            fileSize,
            uploadedAt: nowIso,
            uploadedBy,
            status: 'Published',
        };

        if (existingIdx >= 0) {
            currentList[existingIdx] = updatedItem;
        } else {
            currentList.push(updatedItem);
        }

        saveAcademicCalendars(currentList);

        // Firestore sync if configured
        if (isFirebaseConfigured()) {
            try {
                const db = getDb();
                if (db) {
                    await setDoc(doc(db, 'academic_calendars', id), updatedItem, { merge: true });
                }
            } catch (fsErr) {
                console.warn('[Academic Calendars] Firestore write notice:', fsErr);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Academic calendar for ${updatedItem.programName} (${updatedItem.yearLabel}) uploaded and published successfully!`,
            item: updatedItem,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to upload academic calendar.';
        console.error('[Academic Calendars API] POST Error:', error);
        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}
