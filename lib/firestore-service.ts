import fs from 'fs';
import path from 'path';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getDb, isFirebaseConfigured } from './firebase';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'jips_database.json');
const SHARED_ADMIN_DATA_PATH = '/Users/vinayvakati/jips-admin/data/jips_database.json';

export interface AdmissionApplicationData {
    id?: string;
    applicationId?: string;
    applicantName: string;
    gender: string;
    fatherName: string;
    dob: string;
    email: string;
    mobile: string;
    program: string;
    admissionQuota: string;
    rank?: string;
    intermediateScore: string;
    address: string;
    status?: 'Pending' | 'Contacted' | 'Verified' | 'Admitted' | 'Rejected';
    submittedAt?: string;
    submittedDate?: string;
    createdAt?: unknown;
    source?: string;
}

interface DatabaseSchema {
    admission_applications: AdmissionApplicationData[];
}

function readLocalDb(): DatabaseSchema {
    const defaultData: DatabaseSchema = {
        admission_applications: [],
    };

    // 1. Read from statically scoped data file
    try {
        if (fs.existsSync(DATA_FILE_PATH)) {
            const content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
            if (content.trim()) {
                const parsed = JSON.parse(content);
                if (parsed.admission_applications && Array.isArray(parsed.admission_applications)) {
                    return parsed;
                }
            }
        }
    } catch (e) {
        console.error(`Error reading database from ${DATA_FILE_PATH}:`, e);
    }

    // 2. Fallback to local admin file if available in dev
    try {
        if (fs.existsSync(/*turbopackIgnore: true*/ SHARED_ADMIN_DATA_PATH)) {
            const content = fs.readFileSync(/*turbopackIgnore: true*/ SHARED_ADMIN_DATA_PATH, 'utf-8');
            if (content.trim()) {
                const parsed = JSON.parse(content);
                if (parsed.admission_applications && Array.isArray(parsed.admission_applications)) {
                    return parsed;
                }
            }
        }
    } catch {
        // Ignore in production
    }

    return defaultData;
}

function writeLocalDb(data: DatabaseSchema) {
    // 1. Write to local website database file
    try {
        const dir = path.dirname(DATA_FILE_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        let existing: Record<string, unknown> = {};
        if (fs.existsSync(DATA_FILE_PATH)) {
            try {
                existing = JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'));
            } catch {
                existing = {};
            }
        }
        const merged = { ...existing, ...data };
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(merged, null, 2), 'utf-8');
    } catch (e) {
        console.error(`Error writing database to ${DATA_FILE_PATH}:`, e);
    }

    // 2. Mirror to shared admin directory if present in dev
    try {
        if (fs.existsSync(/*turbopackIgnore: true*/ SHARED_ADMIN_DATA_PATH)) {
            let existing: Record<string, unknown> = {};
            try {
                existing = JSON.parse(fs.readFileSync(/*turbopackIgnore: true*/ SHARED_ADMIN_DATA_PATH, 'utf-8'));
            } catch {
                existing = {};
            }
            const merged = { ...existing, ...data };
            fs.writeFileSync(/*turbopackIgnore: true*/ SHARED_ADMIN_DATA_PATH, JSON.stringify(merged, null, 2), 'utf-8');
        }
    } catch {
        // Ignore in production
    }
}

function appendRecordLocally(record: AdmissionApplicationData) {
    try {
        const db = readLocalDb();
        if (!db.admission_applications) {
            db.admission_applications = [];
        }

        // Deduplicate before saving: match by applicationId or id
        const keyToMatch = record.applicationId || record.id;
        const existingIndex = db.admission_applications.findIndex(
            (item) =>
                (item.applicationId && item.applicationId === keyToMatch) ||
                (item.id && item.id === keyToMatch)
        );

        if (existingIndex >= 0) {
            db.admission_applications[existingIndex] = {
                ...db.admission_applications[existingIndex],
                ...record,
            };
        } else {
            db.admission_applications.unshift(record);
        }

        writeLocalDb(db);
    } catch (e) {
        console.error('Error appending record to local sync DB:', e);
    }
}

export async function saveAdmissionApplication(data: Omit<AdmissionApplicationData, 'id' | 'applicationId' | 'status' | 'submittedAt' | 'submittedDate'>) {
    const now = new Date();
    // Generate unified Application ID as the unique primary key
    const applicationId = `JIPS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const id = applicationId;
    const submittedAt = now.toISOString();
    const submittedDate = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const record: AdmissionApplicationData = {
        id,
        applicationId,
        ...data,
        status: 'Pending',
        submittedAt,
        submittedDate,
        source: 'header_admission_form',
    };

    // 1. Save to local shared database (deduplicated)
    appendRecordLocally(record);

    // 2. Also save to Firebase Firestore using applicationId as the document ID
    let firestoreSuccess = false;

    if (isFirebaseConfigured()) {
        try {
            const db = getDb();
            if (db) {
                // Using setDoc with applicationId as document ID guarantees 1-to-1 consistency
                await setDoc(doc(db, 'admission_applications', applicationId), {
                    ...record,
                    createdAt: serverTimestamp(),
                });
                firestoreSuccess = true;
                console.log(`[Firestore] Successfully stored admission application with ID: ${applicationId}`);
            }
        } catch (error) {
            console.error('[Firestore] Error saving admission application to Firestore:', error);
        }
    }

    return {
        success: true,
        id: applicationId,
        applicationId,
        firestoreSaved: firestoreSuccess,
        data: record,
    };
}
