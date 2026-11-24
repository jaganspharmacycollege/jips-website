import fs from 'fs';
import path from 'path';
import { AcademicCalendarItem, DEFAULT_CALENDAR_SLOTS } from './academic-calendars-types';

export * from './academic-calendars-types';

const TARGET_DB_PATHS = [
    path.join(process.cwd(), 'data', 'jips_database.json'),
    '/Users/vinayvakati/jips-college-website/data/jips_database.json',
    '/Users/vinayvakati/jips-admin/data/jips_database.json',
];

export function getAcademicCalendars(): AcademicCalendarItem[] {
    for (const p of TARGET_DB_PATHS) {
        try {
            if (fs.existsSync(p)) {
                const raw = fs.readFileSync(p, 'utf-8');
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
    }
    return DEFAULT_CALENDAR_SLOTS;
}

export function saveAcademicCalendars(items: AcademicCalendarItem[]) {
    for (const p of TARGET_DB_PATHS) {
        try {
            const dir = path.dirname(p);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            let data: Record<string, unknown> = {};
            if (fs.existsSync(p)) {
                try {
                    data = JSON.parse(fs.readFileSync(p, 'utf-8'));
                } catch {
                    data = {};
                }
            }
            data.academic_calendars = items;
            fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf-8');
        } catch {
            // ignore inaccessible paths
        }
    }
}
