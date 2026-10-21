'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';
import styles from './LibraryRulesServices.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function LibraryRulesServices() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.rulesSection} aria-label="Library Rules & Services">
            <div className={styles.container}>
                <motion.div
                    className={styles.rulesCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Column: Operating Hours & Borrowing Quotas */}
                    <div className={styles.leftCol}>
                        <span className={styles.kickerTag}>BORROWING &amp; CIRCULATION</span>
                        <h2 className={styles.heading}>Lending Quotas &amp; Timings</h2>
                        <p className={styles.lead}>
                            Operating with automated barcode issuing kiosks to support seamless, equitable book lending for scholars and faculty.
                        </p>

                        <div className={styles.scheduleBox}>
                            <div className={styles.timeRow}>
                                <Clock size={16} className={styles.timeIcon} />
                                <div>
                                    <span className={styles.timeDay}>Monday – Saturday:</span>
                                    <strong className={styles.timeVal}>8:00 AM – 6:00 PM</strong>
                                </div>
                            </div>
                            <div className={styles.timeRow}>
                                <Clock size={16} className={styles.timeIcon} />
                                <div>
                                    <span className={styles.timeDay}>Examination Weeks:</span>
                                    <strong className={styles.timeVal}>Extended up to 8:00 PM</strong>
                                </div>
                            </div>
                        </div>

                        <div className={styles.quotasGrid}>
                            <div className={styles.quotaCell}>
                                <strong className={styles.quotaVal}>04 Books</strong>
                                <span className={styles.quotaLbl}>B.Pharm Undergraduates (14 Days)</span>
                            </div>
                            <div className={styles.quotaCell}>
                                <strong className={styles.quotaVal}>06 Books</strong>
                                <span className={styles.quotaLbl}>M.Pharm &amp; Pharm.D Scholars (21 Days)</span>
                            </div>
                            <div className={styles.quotaCell}>
                                <strong className={styles.quotaVal}>10 Books</strong>
                                <span className={styles.quotaLbl}>Faculty &amp; Research Scholars (Semester)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Rules of Conduct */}
                    <div className={styles.rightCol}>
                        <h3 className={styles.conductTitle}>Statutory Rules of Conduct</h3>
                        <ul className={styles.rulesList}>
                            <li>
                                <CheckCircle2 size={16} className={styles.ruleCheck} />
                                <span><strong>Institutional Identity:</strong> A valid student/faculty barcoded ID card is mandatory for entry and material checkout.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={16} className={styles.ruleCheck} />
                                <span><strong>Silence &amp; Protocol:</strong> Strict pin-drop silence must be maintained in the central reading room and periodical galleries.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={16} className={styles.ruleCheck} />
                                <span><strong>Reference Non-Circulation:</strong> Reference encyclopedias, pharmacopoeias (IP/USP/BP), and loose issues of journals cannot be removed from the premises.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={16} className={styles.ruleCheck} />
                                <span><strong>Digital Decorum:</strong> Digital library computers are reserved strictly for academic research, e-journal searches, and educational browsing.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}