import fs from 'fs';
import path from 'path';
import { AcademicCalendarItem, DEFAULT_CALENDAR_SLOTS } from './academic-calendars-types';

export * from './academic-calendars-types';

const DB_FILE_PATH = path.join(process.cwd(), 'data', 'jips_database.json');
const LOCAL_ADMIN_DB_PATH = '/Users/vinayvakati/jips-admin/data/jips_database.json';

export function getAcademicCalendars(): AcademicCalendarItem[] {
    try {
        if (fs.existsSync(DB_FILE_PATH)) {
            const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
            if (raw.trim()) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed.academic_calendars) && parsed.academic_calendars.length > 0) {
                    return parsed.academic_calendars;
                }
            }
        }
    } catch {
        // fallback
    }
    return DEFAULT_CALENDAR_SLOTS;
}

export function saveAcademicCalendars(items: AcademicCalendarItem[]) {
    // 1. Write to local website database file (statically scoped)
    try {
        const dir = path.dirname(DB_FILE_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        let data: Record<string, unknown> = {};
        if (fs.existsSync(DB_FILE_PATH)) {
            try {
                data = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf-8'));
            } catch {
                data = {};
            }
        }
        data.academic_calendars = items;
        fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.warn('[Academic Calendars] Warning writing local DB:', err);
    }

    // 2. Mirror to local admin directory if present during local development
    try {
        if (fs.existsSync(/*turbopackIgnore: true*/ LOCAL_ADMIN_DB_PATH)) {
            let adminData: Record<string, unknown> = {};
            try {
                adminData = JSON.parse(fs.readFileSync(/*turbopackIgnore: true*/ LOCAL_ADMIN_DB_PATH, 'utf-8'));
            } catch {
                adminData = {};
            }
            adminData.academic_calendars = items;
            fs.writeFileSync(/*turbopackIgnore: true*/ LOCAL_ADMIN_DB_PATH, JSON.stringify(adminData, null, 2), 'utf-8');
        }
    } catch {
        // Ignore in cloud / production environments
    }
}
