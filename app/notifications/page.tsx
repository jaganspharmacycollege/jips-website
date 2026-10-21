'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Calendar, ChevronRight, Clock, Search, AlertCircle } from 'lucide-react';
import styles from './page.module.css';

interface NotificationItem {
    id: string;
    title: string;
    category: 'admission' | 'exam' | 'scholarship' | 'placement';
    categoryLabel: string;
    refNo: string;
    publishDate: string;
    isUrgent?: boolean;
    desc: string;
    actionLabel: string;
    actionUrl: string;
}

const notificationsFeed: NotificationItem[] = [
    {
        id: 'notif-1',
        title: 'Admissions Open for Academic Year 2026-27: B.Pharm, M.Pharm & Pharm.D Programs',
        category: 'admission',
        categoryLabel: 'Admissions',
        refNo: 'JIPS/ADM/NOTIF/2026/01',
        publishDate: '15-10-2026',
        isUrgent: true,
        desc: 'Applications are officially invited for B.Pharmacy (4 Years), M.Pharmacy in Pharmaceutics & Analysis, and Doctor of Pharmacy (Pharm.D 6 Years). AP EAPCET / PGECET State Web Counseling Code: JAGP.',
        actionLabel: 'Apply for Admission',
        actionUrl: '/downloads/forms',
    },
    {
        id: 'notif-2',
        title: 'JNTUA End Semester Practical Examinations Schedule & Hall Tickets Issuance',
        category: 'exam',
        categoryLabel: 'Examinations',
        refNo: 'JNTUA/EXAM/PHARM/PRAC/2026',
        publishDate: '10-10-2026',
        isUrgent: true,
        desc: 'Practical end examinations for all semesters commence from 16th November 2026. Students with minimum 75% aggregate attendance must collect their verified hall tickets from the college examination branch counter.',
        actionLabel: 'View Exam Calendar',
        actionUrl: '/academics/calendar',
    },
    {
        id: 'notif-3',
        title: 'Govt. Fee Reimbursement (Jagananna Vidya Deevena - JVD) Biometric Authentication',
        category: 'scholarship',
        categoryLabel: 'Scholarships',
        refNo: 'JIPS/SCHOL/JVD/Q3-2026',
        publishDate: '05-10-2026',
        desc: 'All eligible undergraduate and postgraduate scholarship beneficiaries must complete mandatory village/ward secretarial biometric e-KYC authentication before the quarterly fee disbursement deadline.',
        actionLabel: 'Download Declaration Form',
        actionUrl: '/downloads/forms',
    },
    {
        id: 'notif-4',
        title: 'Annual Mega Campus Recruitment Drive Commencing with Top Pharmaceutical MNCs',
        category: 'placement',
        categoryLabel: 'Placements',
        refNo: 'JIPS/TPO/DRIVE/2026-27',
        publishDate: '28-09-2026',
        desc: "The Training & Placement Cell announces on-campus recruitment written tests and technical interviews by Dr. Reddy's Laboratories, Hetero Drugs, and Aurobindo Pharma for outgoing final-year cohorts.",
        actionLabel: 'Placement Guidelines',
        actionUrl: '/placements/recruiters',
    },
    {
        id: 'notif-5',
        title: 'Anti-Ragging Statutory Undertaking & Parent Declaration Submission Notice',
        category: 'admission',
        categoryLabel: 'Statutory Notice',
        refNo: 'JIPS/PROC/AR/2026',
        publishDate: '20-09-2026',
        desc: 'In compliance with Supreme Court directives and PCI guidelines, all students and parents must submit their signed anti-ragging affidavit to the Proctorial Board before attending clinical and laboratory sessions.',
        actionLabel: 'Anti-Ragging Affidavit',
        actionUrl: '/downloads/forms',
    },
    {
        id: 'notif-6',
        title: 'JNTUA Semester Theory Re-Evaluation & Challenge Valuation Application Window',
        category: 'exam',
        categoryLabel: 'Examinations',
        refNo: 'JNTUA/DAA/REV/CIRCULAR-08',
        publishDate: '12-09-2026',
        desc: 'Students seeking script recount, photo verification, or challenge valuation for previously concluded university theory examinations must deposit the prescribed bank challan within 10 days of results declaration.',
        actionLabel: 'Download Revaluation Form',
        actionUrl: '/downloads/forms',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function NotificationsPage() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    const filteredNotices = notificationsFeed.filter((item) => {
        const matchesCat = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <div className={styles.pageRoot}>
            {/* 1. HERO SECTION */}
            <section ref={heroRef} className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : heroY,
                            opacity: shouldReduceMotion ? 1 : heroOpacity,
                        }}
                    >
                        <div className={styles.breadcrumbBadge}>
                            <span className={styles.pulseDot} />
                            <span>OFFICIAL INSTITUTIONAL BULLETIN &bull; SESSION 2026-27</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            Official Circulars &amp; <br />
                            <span className={styles.goldText}>Academic Notifications</span>
                        </h1>

                        <p className={styles.heroLead}>
                            Stay informed with gazetted university notices, examination timetables, admission announcements, scholarship disbursement updates, and campus recruitment circulars.
                        </p>

                        <div className={styles.heroStatsBar}>
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>JAGP</strong>
                                <span className={styles.statLabel}>EAPCET / PGECET Code</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>JNTUA</strong>
                                <span className={styles.statLabel}>Affiliated Gazettes</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>24/7</strong>
                                <span className={styles.statLabel}>Digital Notice Board</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. FILTER & NOTIFICATIONS LIST SECTION */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    {/* Category Filter Pills & Search */}
                    <div className={styles.toolbar}>
                        <div className={styles.searchBox}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search circulars by title, reference number, or topic..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>

                        <div className={styles.filterPillsRow}>
                            {[
                                { id: 'all', label: 'All Circulars' },
                                { id: 'admission', label: 'Admissions' },
                                { id: 'exam', label: 'Examinations' },
                                { id: 'scholarship', label: 'Scholarships (JVD)' },
                                { id: 'placement', label: 'Placements' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`${styles.filterBtn} ${activeCategory === tab.id ? styles.activeFilterBtn : ''}`}
                                    onClick={() => setActiveCategory(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Notifications Feed */}
                    <div className={styles.noticesStack}>
                        {filteredNotices.map((notice, idx) => (
                            <motion.article
                                key={notice.id}
                                className={`${styles.noticeCard} ${notice.isUrgent ? styles.urgentBorder : ''}`}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.badgeCluster}>
                                        <span className={styles.categoryBadge}>{notice.categoryLabel}</span>
                                        {notice.isUrgent && (
                                            <span className={styles.urgentPill}>
                                                <span className={styles.urgentPulse} />
                                                Important Notice
                                            </span>
                                        )}
                                    </div>

                                    <div className={styles.publishDate}>
                                        <Calendar size={14} className={styles.calIcon} />
                                        <span>{notice.publishDate}</span>
                                    </div>
                                </div>

                                <span className={styles.refCode}>{notice.refNo}</span>
                                <h2 className={styles.noticeHeading}>{notice.title}</h2>
                                <p className={styles.noticeBody}>{notice.desc}</p>

                                <div className={styles.cardFooter}>
                                    <div className={styles.footerNote}>
                                        <Clock size={14} />
                                        <span>Official Circular &bull; Administration Desk</span>
                                    </div>

                                    <Link href={notice.actionUrl} className={styles.actionBtn}>
                                        <span>{notice.actionLabel}</span>
                                        <ChevronRight size={15} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Physical Verification Advisory Note */}
                    <div className={styles.advisoryCard}>
                        <AlertCircle size={24} className={styles.advisoryIcon} />
                        <div>
                            <h3 className={styles.advisoryTitle}>Official Verification &amp; Attestation Desk</h3>
                            <p className={styles.advisoryText}>
                                Hard copies of all university circulars, hall tickets, and fee receipts can be verified at the JIPS Administrative Counter 2 on working days between 9:00 AM and 4:30 PM.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}