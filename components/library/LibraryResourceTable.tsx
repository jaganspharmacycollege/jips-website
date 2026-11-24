'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion, type Variants } from 'framer-motion';
import { CheckCircle2, BookOpen, FileCheck } from 'lucide-react';
import styles from './LibraryResourceTable.module.css';

interface StatRow {
    resource: string;
    count: number;
    suffix?: string;
    description: string;
}

interface PrintJournal {
    sNo: number;
    title: string;
    frequency: 'Quarterly' | 'Bi-Annual';
    period: string;
    publisher: string;
}

const resourcesList: StatRow[] = [
    {
        resource: 'Exact Total Book Volumes',
        count: 5279,
        suffix: '',
        description: 'Curriculum textbooks, monographs and pharmacopeial treatises in circulation',
    },
    {
        resource: 'Exact Total Book Titles',
        count: 879,
        suffix: '',
        description: 'Distinct academic and reference subjects cataloged in library register',
    },
    {
        resource: 'National & International Print Journals',
        count: 10,
        suffix: '',
        description: 'Active peer-reviewed print subscriptions via Pharma Intelligence',
    },
    {
        resource: 'E-Journals & Database Subscriptions',
        count: 200,
        suffix: '+',
        description: 'Online journals, database collections & NDigital online library platform',
    },
    {
        resource: 'Internet-Enabled Digital Workstations',
        count: 0,
        suffix: '',
        description: 'Dedicated standalone terminals (remote scholar digital access enabled)',
    },
];

const subscribedPrintJournals: PrintJournal[] = [
    {
        sNo: 1,
        title: 'International Journal of Phytopharmacology',
        frequency: 'Quarterly',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 2,
        title: 'International Journal of Pharmacy & Therapeutics',
        frequency: 'Quarterly',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 3,
        title: 'International Journal of Biological & Pharmaceutical Research',
        frequency: 'Quarterly',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 4,
        title: 'International Journal of Phytopharmacy Research',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 5,
        title: 'International Journal of Preclinical and Pharmaceutical Research',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 6,
        title: 'International Journal of Pharmaceutical Development and Technology',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 7,
        title: 'International Journal of Current Pharmaceutical and Clinical Research',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 8,
        title: 'International Journal of Pharmaceutical Research and Analysis',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 9,
        title: 'International Journal of Medicinal Chemistry and Analysis',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
    {
        sNo: 10,
        title: 'International Journal of Pharmacology and Toxicology',
        frequency: 'Bi-Annual',
        period: '01-Jul-2025 to 30-Jun-2026',
        publisher: 'Pharma Intelligence',
    },
];

// Animated Number Component that counts from 0 up to target
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: false, amount: 0.3 });
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (latest) => Math.floor(latest).toLocaleString());
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (isInView && !shouldReduceMotion) {
            motionVal.set(0);
            const controls = animate(motionVal, value, {
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
            });
            return controls.stop;
        } else {
            motionVal.set(value);
        }
    }, [isInView, value, motionVal, shouldReduceMotion]);

    return (
        <span ref={countRef} className={styles.counterText}>
            {shouldReduceMotion ? value.toLocaleString() : <motion.span>{rounded}</motion.span>}
            {suffix}
        </span>
    );
}

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function LibraryResourceTable() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.tableSection} aria-label="Library Resource Inventory">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>INVENTORY &amp; ASSETS</span>
                    <h2 className={styles.sectionTitle}>Library Holdings &amp; Resources Count</h2>
                    <p className={styles.sectionSubtitle}>
                        A comprehensive quantitative record of our print holdings, physical journals, and subscribed online databases.
                    </p>
                </motion.div>

                {/* Structured Institutional Ledger Table */}
                <motion.div
                    className={styles.tableWrapperCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.ledgerHeaderRow}>
                        <div className={styles.colResourceHead}>Resource</div>
                        <div className={styles.colCountHead}>Count</div>
                    </div>

                    <div className={styles.ledgerBody}>
                        {resourcesList.map((item, idx) => (
                            <motion.div
                                key={item.resource}
                                className={styles.ledgerRow}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.colResource}>
                                    <div className={styles.resourceName}>{item.resource}</div>
                                    <div className={styles.resourceDesc}>{item.description}</div>
                                </div>

                                <div className={styles.colCount}>
                                    <AnimatedCounter value={item.count} suffix={item.suffix} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Table Bottom Verification Ribbon */}
                    <div className={styles.tableFooterRibbon}>
                        <span className={styles.footerNote}>
                            * Official library inventory confirmed in accordance with PCI, AICTE, and JNTUA statutory filings.
                        </span>
                    </div>
                </motion.div>

                {/* Subscribed Print Journals Directory (10 Titles) */}
                <motion.div
                    className={styles.journalsCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                >
                    <div className={styles.journalsHeader}>
                        <div>
                            <h3 className={styles.journalsHeading}>Subscribed National &amp; International Print Journals</h3>
                            <p className={styles.journalsSub}>
                                Current print subscriptions active from 01-Jul-2025 to 30-Jun-2026
                            </p>
                        </div>
                        <span className={styles.invoiceBadge}>
                            <FileCheck size={14} />
                            <span>10 Peer-Reviewed Journals Subscribed</span>
                        </span>
                    </div>

                    <div className={styles.tableResponsive}>
                        <table className={styles.journalsTable}>
                            <thead>
                                <tr>
                                    <th className={styles.tdSNo}>S.No</th>
                                    <th>Journal Title</th>
                                    <th>Frequency</th>
                                    <th>Subscription Period</th>
                                    <th>Subscription Provider</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribedPrintJournals.map((j) => (
                                    <tr key={j.sNo}>
                                        <td className={styles.tdSNo}>{j.sNo}</td>
                                        <td className={styles.tdTitle}>
                                            <BookOpen size={14} style={{ display: 'inline', marginRight: '8px', color: '#0b3954' }} />
                                            {j.title}
                                        </td>
                                        <td className={styles.tdFreq}>
                                            <span className={j.frequency === 'Quarterly' ? styles.badgeQuarterly : styles.badgeBiAnnual}>
                                                {j.frequency}
                                            </span>
                                        </td>
                                        <td className={styles.tdPeriod}>{j.period}</td>
                                        <td className={styles.tdPublisher}>{j.publisher}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.journalsFooter}>
                        <CheckCircle2 size={15} className={styles.footerIcon} />
                        <span>
                            All 10 print journals are received in the central reading room and archived in bound volumes for research reference.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}