'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    CalendarDays,
    Download,
    FileText,
    Clock,
    AlertCircle,
    ChevronRight,
    CalendarCheck2,
    Eye,
    GraduationCap,
    CheckCircle2,
} from 'lucide-react';
import styles from './page.module.css';
import {
    AcademicCalendarItem,
    DEFAULT_CALENDAR_SLOTS,
} from '@/lib/academic-calendars-types';

interface CalendarEvent {
    event: string;
    startDate: string;
    endDate: string;
    duration: string;
    status: 'Completed' | 'Ongoing' | 'Upcoming';
}

// Course-specific schedules mapped to JNTUA norms
const schedulesByCourse: Record<'bpharm' | 'mpharm' | 'pharmd', { title: string; subtitle: string; events: CalendarEvent[] }> = {
    bpharm: {
        title: 'B. Pharmacy (B.Pharm) Semester Schedule',
        subtitle: 'PCI Semester Pattern (Odd Semester - 2026-27)',
        events: [
            {
                event: 'Commencement of Classwork (First Spell of Instructions)',
                startDate: '14-07-2026',
                endDate: '05-09-2026',
                duration: '8 Weeks',
                status: 'Completed',
            },
            {
                event: 'First Mid-Term Examinations (Objective & Descriptive)',
                startDate: '07-09-2026',
                endDate: '12-09-2026',
                duration: '1 Week',
                status: 'Completed',
            },
            {
                event: 'Second Spell of Instructions & Laboratory Practical Sessions',
                startDate: '14-09-2026',
                endDate: '07-11-2026',
                duration: '8 Weeks',
                status: 'Ongoing',
            },
            {
                event: 'Second Mid-Term Examinations',
                startDate: '09-11-2026',
                endDate: '14-11-2026',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'Preparation Holidays & End Practical Examinations',
                startDate: '16-11-2026',
                endDate: '21-11-2026',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'JNTUA End Semester Theory Examinations',
                startDate: '23-11-2026',
                endDate: '05-12-2026',
                duration: '2 Weeks',
                status: 'Upcoming',
            },
        ],
    },
    mpharm: {
        title: 'M. Pharmacy (M.Pharm) Postgraduate Schedule',
        subtitle: 'Semester Pattern: Pharmaceutics & Pharmaceutical Analysis',
        events: [
            {
                event: 'Commencement of Advanced PG Instructions (First Spell)',
                startDate: '03-08-2026',
                endDate: '26-09-2026',
                duration: '8 Weeks',
                status: 'Completed',
            },
            {
                event: 'First Mid-Term Sessional & Practical Lab Assessment',
                startDate: '28-09-2026',
                endDate: '03-10-2026',
                duration: '1 Week',
                status: 'Completed',
            },
            {
                event: 'Second Spell of Classwork, Seminar & R&D Lab Hours',
                startDate: '05-10-2026',
                endDate: '28-11-2026',
                duration: '8 Weeks',
                status: 'Ongoing',
            },
            {
                event: 'Second Mid-Term Sessional & Journal Club Colloquium',
                startDate: '30-11-2026',
                endDate: '05-12-2026',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'Thesis Protocol Submission & Practical End Exams',
                startDate: '07-12-2026',
                endDate: '12-12-2026',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'JNTUA Postgraduate Regular End Examinations',
                startDate: '14-12-2026',
                endDate: '24-12-2026',
                duration: '10 Days',
                status: 'Upcoming',
            },
        ],
    },
    pharmd: {
        title: 'Doctor of Pharmacy (Pharm.D) Annual Clinical Schedule',
        subtitle: 'PCI Annual Examination & Hospital Ward Clerkship Pattern',
        events: [
            {
                event: 'Commencement of Classwork & Hospital Bedside Postings',
                startDate: '17-08-2026',
                endDate: '07-11-2026',
                duration: '12 Weeks',
                status: 'Ongoing',
            },
            {
                event: 'First Sessional Examinations (Theory & Clinical Practicals)',
                startDate: '09-11-2026',
                endDate: '16-11-2026',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'Second Spell of Instruction & Ambulatory Care Rounds',
                startDate: '18-11-2026',
                endDate: '06-02-2027',
                duration: '12 Weeks',
                status: 'Upcoming',
            },
            {
                event: 'Second Sessional Examinations',
                startDate: '08-02-2027',
                endDate: '15-02-2027',
                duration: '1 Week',
                status: 'Upcoming',
            },
            {
                event: 'Third Spell of Instructions & Pharmacovigilance Postings',
                startDate: '17-02-2027',
                endDate: '08-05-2027',
                duration: '12 Weeks',
                status: 'Upcoming',
            },
            {
                event: 'Third Sessional & JNTUA Annual Theory/Clinical Exams',
                startDate: '17-05-2027',
                endDate: '05-06-2027',
                duration: '3 Weeks',
                status: 'Upcoming',
            },
        ],
    },
};

const fromLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.4, ease: 'easeOut' },
    },
};

const fromRight: Variants = {
    hidden: { opacity: 0, x: 75 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.45, delay: 0.15, ease: 'easeOut' },
    },
};

const fromTop: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.4, delay: 0.35, ease: 'easeOut' },
    },
};

const riseUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, delay: customDelay, ease: 'easeOut' },
    }),
};

export default function AcademicCalendarPage() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCourseFilter, setActiveCourseFilter] = useState<'bpharm' | 'mpharm' | 'pharmd'>('bpharm');
    const [selectedProgram, setSelectedProgram] = useState<'all' | 'bpharm' | 'mpharm' | 'pharmd'>('all');
    const [calendars, setCalendars] = useState<AcademicCalendarItem[]>(DEFAULT_CALENDAR_SLOTS);

    useEffect(() => {
        let isMounted = true;
        async function fetchCalendars() {
            try {
                const res = await fetch('/api/academic-calendars', { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.data) && isMounted) {
                        setCalendars(data.data);
                    }
                }
            } catch (err) {
                console.warn('[Academic Calendar] Live fetch error, using default static slots:', err);
            }
        }
        fetchCalendars();
        return () => {
            isMounted = false;
        };
    }, []);

    const selectedSchedule = schedulesByCourse[activeCourseFilter];

    const bpharmCalendars = calendars.filter((c) => c.programId === 'bpharm');
    const mpharmCalendars = calendars.filter((c) => c.programId === 'mpharm');
    const pharmdCalendars = calendars.filter((c) => c.programId === 'pharmd');

    const programGroups = [
        {
            id: 'bpharm' as const,
            title: '1. B.Pharmacy Academic Calendars',
            subtitle: 'Bachelor of Pharmacy — 4-Year Undergraduate Degree',
            durationBadge: '4 Years (Year 1 to Year 4)',
            description:
                'PCI approved curriculum. Complete year-wise academic calendars with instruction spells, mid-term examinations, and university lab evaluations.',
            items: bpharmCalendars,
            accentClass: styles.groupBpharm,
            badgeClass: styles.pillBpharm,
        },
        {
            id: 'mpharm' as const,
            title: '2. M.Pharmacy Academic Calendars',
            subtitle: 'Master of Pharmacy — 2-Year Postgraduate Degree',
            durationBadge: '2 Years (Year 1 & Year 2)',
            description:
                'Specializations in Pharmaceutics and Pharmaceutical Analysis. Year 1 advanced coursework, Year 2 research protocol, colloquium & thesis defense.',
            items: mpharmCalendars,
            accentClass: styles.groupMpharm,
            badgeClass: styles.pillMpharm,
        },
        {
            id: 'pharmd' as const,
            title: '3. Pharm.D Academic Calendars',
            subtitle: 'Doctor of Pharmacy — 6-Year Integrated Clinical Doctorate',
            durationBadge: '6 Years (Year 1 to Year 6)',
            description:
                'Comprehensive 6-year clinical program with 5 years of annual didactic study & ward postings plus 1 full year of intensive hospital internship.',
            items: pharmdCalendars,
            accentClass: styles.groupPharmd,
            badgeClass: styles.pillPharmd,
        },
    ];

    const activeGroups =
        selectedProgram === 'all'
            ? programGroups
            : programGroups.filter((g) => g.id === selectedProgram);

    return (
        <div className={styles.calendarRoot}>
            {/* 1. CINEMATIC HERO WITH ASYMMETRIC DUAL IMAGERY */}
            <section className={styles.calendarHero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroMetaSide}
                        variants={fromLeft}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.kickerGroup}>
                            <span className={styles.kickerPill}>ACADEMIC TIMELINES</span>
                            <span className={styles.kickerGold}>JNTUA AFFILIATED SCHEDULES</span>
                        </div>

                        <h1 className={styles.heroHeading}>
                            Academic Calendar <br />
                            <span className={styles.goldText}>Academic Year 2026-27</span>
                        </h1>

                        <p className={styles.heroSummary}>
                            Official gazetted schedules approved by Jawaharlal Nehru Technological University Anantapur and the Pharmacy Council of India. Plan semester instructional spells, mid-term examinations, clinical ward postings, and external laboratory evaluations.
                        </p>

                        <div className={styles.heroBtnGroup}>
                            <a href="#official-jntua-downloads" className={styles.primaryBtn}>
                                <Download size={16} />
                                <span>Download JNTUA Calendars</span>
                            </a>
                            <a href="#semester-schedule" className={styles.secondaryBtn}>
                                <span>Semester Schedules</span>
                            </a>
                        </div>

                        <div className={styles.quickMetricsBar}>
                            <div className={styles.metricItem}>
                                <span className={styles.metricDigit}>16 Wks</span>
                                <span className={styles.metricLabel}>Instruction Per Sem</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricDigit}>75%</span>
                                <span className={styles.metricLabel}>Min. Attendance Req.</span>
                            </div>
                            <div className={styles.metricDivider} />
                            <div className={styles.metricItem}>
                                <span className={styles.metricDigit}>2 Mids</span>
                                <span className={styles.metricLabel}>Continuous Evaluation</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.heroVisualCluster}>
                        <motion.div
                            className={styles.accentPhotoFrame}
                            variants={fromTop}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop"
                                alt="Student Reviewing Academic Timetable"
                                fill
                                priority
                                sizes="(max-width: 425px) 120px, 180px"
                                className={styles.accentImg}
                            />
                            <div className={styles.accentBadge}>
                                <Clock size={14} className={styles.accentIcon} />
                                <span>Active Term</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.mainVisualCard}
                            variants={fromRight}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                                alt="Academic Lecture Hall and Campus Schedule"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 600px"
                                className={styles.mainImg}
                            />
                            <div className={styles.visualOverlayGradient} />

                            <div className={styles.floatingHighlightBadge}>
                                <CalendarCheck2 size={18} className={styles.calendarIcon} />
                                <div>
                                    <span className={styles.floatBadgeTitle}>JNTUA Notifications</span>
                                    <span className={styles.floatBadgeSubtitle}>Gazetted Schedules Validated</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. OFFICIAL JNTUA CALENDAR PDF DOWNLOAD LEDGER */}
            <section className={styles.downloadLedgerSection} id="official-jntua-downloads">
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.sectionBadge}>OFFICIAL GAZETTES &amp; NOTIFICATIONS</span>
                        <h2 className={styles.sectionTitle}>Official Academic Calendar PDF Downloads</h2>
                        <p className={styles.sectionSubtitle}>
                            Official JNTUA and PCI gazetted academic calendars categorized across all programs and study years. Download official circulars directly.
                        </p>
                    </motion.div>

                    {/* Program Filter Tabs */}
                    <div className={styles.calendarFilterRow}>
                        <button
                            type="button"
                            className={`${styles.filterPillBtn} ${selectedProgram === 'all' ? styles.activeFilterPill : ''}`}
                            onClick={() => setSelectedProgram('all')}
                        >
                            <span>All Programs</span>
                            <span className={styles.filterPillCount}>{calendars.length}</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterPillBtn} ${selectedProgram === 'bpharm' ? styles.activeFilterPill : ''}`}
                            onClick={() => setSelectedProgram('bpharm')}
                        >
                            <span>B.Pharmacy (4 Years)</span>
                            <span className={styles.filterPillCount}>{bpharmCalendars.length}</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterPillBtn} ${selectedProgram === 'mpharm' ? styles.activeFilterPill : ''}`}
                            onClick={() => setSelectedProgram('mpharm')}
                        >
                            <span>M.Pharmacy (2 Years)</span>
                            <span className={styles.filterPillCount}>{mpharmCalendars.length}</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterPillBtn} ${selectedProgram === 'pharmd' ? styles.activeFilterPill : ''}`}
                            onClick={() => setSelectedProgram('pharmd')}
                        >
                            <span>Pharm.D (6 Years)</span>
                            <span className={styles.filterPillCount}>{pharmdCalendars.length}</span>
                        </button>
                    </div>

                    {/* Program Grouped Sections */}
                    <div className={styles.programGroupsWrapper}>
                        {activeGroups.map((group) => (
                            <div key={group.id} className={`${styles.programGroupSection} ${group.accentClass}`}>
                                <div className={styles.programGroupHeader}>
                                    <div className={styles.programGroupHeaderLeft}>
                                        <div className={styles.programGroupTitleRow}>
                                            <div className={styles.programGroupIconWrap}>
                                                <GraduationCap size={20} />
                                            </div>
                                            <h3 className={styles.programGroupTitle}>{group.title}</h3>
                                            <span className={`${styles.programPillBadge} ${group.badgeClass}`}>
                                                {group.durationBadge}
                                            </span>
                                        </div>
                                        <p className={styles.programGroupSubtitle}>{group.subtitle}</p>
                                        <p className={styles.programGroupDesc}>{group.description}</p>
                                    </div>
                                    <div className={styles.programGroupHeaderRight}>
                                        <span className={styles.calendarAvailableTag}>
                                            <CheckCircle2 size={14} />
                                            <span>{group.items.length} Year{group.items.length > 1 ? 's' : ''} Available</span>
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.jntuaGrid}>
                                    {group.items.map((item, idx) => (
                                        <motion.div
                                            key={item.id}
                                            className={`${styles.jntuaCard} ${
                                                item.programId === 'bpharm'
                                                    ? styles.cardBorderBpharm
                                                    : item.programId === 'mpharm'
                                                    ? styles.cardBorderMpharm
                                                    : styles.cardBorderPharmd
                                            }`}
                                            custom={idx * 0.08}
                                            variants={riseUp}
                                            initial={shouldReduceMotion ? false : 'hidden'}
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.15 }}
                                        >
                                            <div className={styles.jntuaCardTop}>
                                                <div className={styles.cardHeaderLeft}>
                                                    <span
                                                        className={`${styles.programPill} ${
                                                            item.programId === 'bpharm'
                                                                ? styles.pillBpharm
                                                                : item.programId === 'mpharm'
                                                                ? styles.pillMpharm
                                                                : styles.pillPharmd
                                                        }`}
                                                    >
                                                        {item.programName}
                                                    </span>
                                                    <span className={styles.yearTagPill}>{item.yearLabel}</span>
                                                </div>
                                                <span className={styles.fileSizeBadge}>{item.fileSize || 'PDF'}</span>
                                            </div>

                                            <div className={styles.cardIconAndTitle}>
                                                <div
                                                    className={`${styles.pdfIconWrap} ${
                                                        item.programId === 'bpharm'
                                                            ? styles.iconWrapBpharm
                                                            : item.programId === 'mpharm'
                                                            ? styles.iconWrapMpharm
                                                            : styles.iconWrapPharmd
                                                    }`}
                                                >
                                                    <FileText size={22} />
                                                </div>
                                                <div>
                                                    <h4 className={styles.programTitle}>{item.title}</h4>
                                                    <span className={styles.academicYearText}>
                                                        Academic Year {item.academicYear}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className={styles.regulationBox}>
                                                <span className={styles.regulationLabel}>Norms / Regulation:</span>
                                                <span className={styles.regulationValue}>{item.regulation}</span>
                                            </div>

                                            <div className={styles.metaRow}>
                                                <div className={styles.metaField}>
                                                    <span className={styles.metaKey}>Gazette Ref:</span>
                                                    <span className={styles.notifCode}>{item.notifNo}</span>
                                                </div>
                                                <div className={styles.metaField}>
                                                    <span className={styles.metaKey}>Date:</span>
                                                    <span className={styles.notifDate}>{item.issueDate}</span>
                                                </div>
                                            </div>

                                            <div className={styles.cardActionsRow}>
                                                <a
                                                    href={item.fileUrl}
                                                    download={item.fileName}
                                                    className={styles.downloadButton}
                                                    title={`Download ${item.title}`}
                                                >
                                                    <Download size={15} />
                                                    <span>Download PDF</span>
                                                </a>
                                                <a
                                                    href={item.fileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.previewButton}
                                                    title={`View ${item.title}`}
                                                >
                                                    <Eye size={14} />
                                                    <span>View</span>
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DYNAMIC ACTIVE SEMESTER INSTRUCTION TIMETABLE */}
            <section className={styles.scheduleSection} id="semester-schedule">
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.sectionBadge}>SEMESTER TRACKER</span>
                        <h2 className={styles.sectionTitle}>Program-Specific Academic Milestones</h2>
                        <p className={styles.sectionSubtitle}>
                            Select a course below to review its official instruction blocks, sessional exams, and university evaluations.
                        </p>
                    </motion.div>

                    {/* Program Switcher Tabs */}
                    <div className={styles.filterTabRow}>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeCourseFilter === 'bpharm' ? styles.activeFilter : ''}`}
                            onClick={() => setActiveCourseFilter('bpharm')}
                        >
                            B. Pharmacy (B.Pharm)
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeCourseFilter === 'mpharm' ? styles.activeFilter : ''}`}
                            onClick={() => setActiveCourseFilter('mpharm')}
                        >
                            M. Pharmacy (M.Pharm)
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeCourseFilter === 'pharmd' ? styles.activeFilter : ''}`}
                            onClick={() => setActiveCourseFilter('pharmd')}
                        >
                            Doctor of Pharmacy (Pharm.D)
                        </button>
                    </div>

                    {/* Active Schedule Display */}
                    <motion.div
                        key={activeCourseFilter}
                        className={styles.scheduleTableCard}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.tableBannerTitle}>
                            <div>
                                <h3 className={styles.bannerCourseTitle}>{selectedSchedule.title}</h3>
                                <span className={styles.bannerCourseSubtitle}>{selectedSchedule.subtitle}</span>
                            </div>
                            <span className={styles.activeCourseCodeBadge}>CODE: JAGP</span>
                        </div>

                        <div className={styles.tableHeaderRow}>
                            <span className={styles.colEvent}>Academic Event / Activity</span>
                            <span className={styles.colDate}>Start Date</span>
                            <span className={styles.colDate}>End Date</span>
                            <span className={styles.colDuration}>Duration</span>
                            <span className={styles.colStatus}>Status</span>
                        </div>

                        <div className={styles.tableBody}>
                            {selectedSchedule.events.map((row, index) => (
                                <div key={index} className={styles.tableRow}>
                                    <div className={styles.cellEvent}>
                                        <CalendarDays size={16} className={styles.cellIcon} />
                                        <span>{row.event}</span>
                                    </div>
                                    <div className={styles.cellDate}>
                                        <span className={styles.mobileLabel}>Start: </span>
                                        <span>{row.startDate}</span>
                                    </div>
                                    <div className={styles.cellDate}>
                                        <span className={styles.mobileLabel}>End: </span>
                                        <span>{row.endDate}</span>
                                    </div>
                                    <div className={styles.cellDuration}>
                                        <span className={styles.mobileLabel}>Duration: </span>
                                        <span>{row.duration}</span>
                                    </div>
                                    <div className={styles.cellStatus}>
                                        <span
                                            className={`${styles.statusPill} ${row.status === 'Completed'
                                                    ? styles.statusCompleted
                                                    : row.status === 'Ongoing'
                                                        ? styles.statusOngoing
                                                        : styles.statusUpcoming
                                                }`}
                                        >
                                            {row.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. ACADEMIC & EXAMINATION STATUTORY REGULATIONS */}
            <section className={styles.regulationsSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.regulationNoticeCard}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.noticeIconWrap}>
                            <AlertCircle size={28} className={styles.alertNoticeIcon} />
                        </div>

                        <div className={styles.noticeContent}>
                            <h3 className={styles.noticeTitle}>Mandatory JNTUA Academic Regulations &amp; Rules</h3>
                            <ul className={styles.noticeList}>
                                <li>
                                    <strong>Attendance Requirement:</strong> A student must acquire a minimum of 75% aggregate attendance in all subjects across theory and laboratory sessions to be permitted for end-semester examinations.
                                </li>
                                <li>
                                    <strong>Condonation Rules:</strong> Condonation of shortage of attendance between 65% and 75% may be granted by the Academic Council solely on genuine medical grounds accompanied by valid medical certificates.
                                </li>
                                <li>
                                    <strong>Internal Evaluation:</strong> Internal marks are computed according to JNTUA norms. Continuous assessment includes mid-term examinations, lab day-to-day evaluation, and student seminar colloquiums.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. CALL TO ACTION STRIP */}
            <section className={styles.ctaSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.ctaBox}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.ctaTextGroup}>
                            <h3 className={styles.ctaHeading}>Need Assistance with Academic Schedules?</h3>
                            <p className={styles.ctaBody}>
                                Contact our academic cell or examination branch for hall ticket verifications, fee payment deadlines, and timetable inquiries.
                            </p>
                        </div>

                        <div className={styles.ctaButtonGroup}>
                            <Link href="/admissions/tuition-fee" className={styles.btnSecondary}>
                                <FileText size={16} />
                                <span>Tuition Fees</span>
                            </Link>
                            <Link href="/admissions/admission-process" className={styles.btnPrimary}>
                                <span>Admissions Portal</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}