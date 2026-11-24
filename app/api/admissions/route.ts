import { NextResponse } from 'next/server';
import { saveAdmissionApplication } from '@/lib/firestore-service';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            applicantName,
            gender,
            fatherName,
            dob,
            email,
            mobile,
            program,
            admissionQuota,
            rank,
            intermediateScore,
            address,
        } = body;

        if (!applicantName || !email || !mobile) {
            return NextResponse.json(
                { success: false, error: 'Please fill in all required fields (Name, Email, Mobile).' },
                { status: 400 }
            );
        }

        const result = await saveAdmissionApplication({
            applicantName: String(applicantName).trim(),
            gender: String(gender || 'male'),
            fatherName: String(fatherName || '').trim(),
            dob: String(dob || ''),
            email: String(email).trim(),
            mobile: String(mobile).trim(),
            program: String(program || 'bpharm'),
            admissionQuota: String(admissionQuota || 'convener'),
            rank: String(rank || '').trim(),
            intermediateScore: String(intermediateScore || '').trim(),
            address: String(address || '').trim(),
        });

        return NextResponse.json({
            success: true,
            applicationId: result.applicationId,
            id: result.id,
            firestoreSaved: result.firestoreSaved,
            data: result.data,
            message: 'Admission application stored successfully.',
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to process admission application';
        console.error('API Error in /api/admissions POST:', error);
        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}

