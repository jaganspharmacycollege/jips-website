'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, BookOpen, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

const formsSummary = [
    { name: 'Admission & Enrollment Application Form (2026-27)', code: 'JIPS/ADM/01', size: '1.2 MB' },
    { name: 'Bonafide, Study & Conduct Certificate Application', code: 'JIPS/ACAD/02', size: '540 KB' },
    { name: 'Institutional Transit Fleet & Bus Pass Form', code: 'JIPS/TRAN/03', size: '680 KB' },
    { name: 'Campus Hostel Accommodation & Code of Conduct Undertaking', code: 'JIPS/HOST/04', size: '890 KB' },
];

const syllabusSummary = [
    { name: 'B. Pharmacy (B.Pharm) — Full 8 Semesters', reg: 'PCI Unified 2026', size: '4.2 MB' },
    { name: 'M.Pharm (Pharmaceutics) — 4 Semesters', reg: 'PCI PG Regulations', size: '2.8 MB' },
    { name: 'M.Pharm (Pharmaceutical Analysis) — 4 Semesters', reg: 'PCI PG Regulations', size: '2.9 MB' },
    { name: 'Doctor of Pharmacy (Pharm.D) — Complete 6 Years', reg: 'PCI Clinical Regulations', size: '5.6 MB' },
];

export default function DownloadsOverviewPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>OFFICIAL REPOSITORY</span>
                    <h1 className={styles.heroTitle}>Downloads &amp; Resources</h1>
                    <p className={styles.heroLead}>
                        Access official institutional application templates, student clearance forms, and PCI-approved curriculum syllabi for undergraduate, postgraduate, and clinical pharmacy programs.
                    </p>
                </div>
            </section>

            {/* 2. Overview Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    {/* Section 1: Application Forms Summary */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.headerLeft}>
                                <div className={styles.iconBox}>
                                    <FileText size={22} />
                                </div>
                                <div>
                                    <h2 className={styles.blockTitle}>Application Forms</h2>
                                    <p className={styles.blockDesc}>
                                        Printable documents for admissions, certificates, transport, and hostel accommodation.
                                    </p>
                                </div>
                            </div>
                            <Link href="/downloads/forms" className={styles.viewAllBtn}>
                                <span>View All Forms</span>
                                <ArrowRight size={15} />
                            </Link>
                        </div>

                        <div className={styles.listContainer}>
                            {formsSummary.map((item, idx) => (
                                <motion.div
                                    key={item.code}
                                    className={styles.rowCard}
                                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <div className={styles.leftInfo}>
                                        <div className={styles.iconCircleGold}>
                                            <FileText size={18} />
                                        </div>
                                        <div>
                                            <h3 className={styles.itemTitle}>{item.name}</h3>
                                            <div className={styles.tagsRow}>
                                                <span className={styles.codeTag}>{item.code}</span>
                                                <span className={styles.sizeTag}>{item.size}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/downloads/forms" className={styles.downloadBtn}>
                                        <Download size={14} />
                                        <span>Download PDF</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Syllabus Copy Summary */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.headerLeft}>
                                <div className={styles.iconBoxGold}>
                                    <BookOpen size={22} />
                                </div>
                                <div>
                                    <h2 className={styles.blockTitle}>Syllabus Copies</h2>
                                    <p className={styles.blockDesc}>
                                        PCI and JNTUA curriculum copies with complete semester and annual credit distributions.
                                    </p>
                                </div>
                            </div>
                            <Link href="/downloads/syllabus" className={styles.viewAllBtnGold}>
                                <span>View All Syllabi</span>
                                <ArrowRight size={15} />
                            </Link>
                        </div>

                        <div className={styles.listContainer}>
                            {syllabusSummary.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    className={styles.rowCard}
                                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <div className={styles.leftInfo}>
                                        <div className={styles.iconCircleGold}>
                                            <BookOpen size={18} />
                                        </div>
                                        <div>
                                            <h3 className={styles.itemTitle}>{item.name}</h3>
                                            <div className={styles.tagsRow}>
                                                <span className={styles.regTag}>{item.reg}</span>
                                                <span className={styles.sizeTag}>{item.size}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/downloads/syllabus" className={styles.downloadBtn}>
                                        <Download size={14} />
                                        <span>Download PDF</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Administrative Notice */}
                    <div className={styles.noticeBox}>
                        <ShieldCheck size={22} className={styles.noticeIcon} />
                        <p className={styles.noticeText}>
                            All official downloads are verified by the Directorate of Academic Affairs and the Examination Cell. Hard copies of filled forms should be submitted at the Administrative Office between 9:00 AM and 4:30 PM.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}