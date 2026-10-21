'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import styles from './TransferCertificateForm.module.css';

export default function TransferCertificateForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-16px', '16px']);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
    };

    return (
        <div ref={containerRef} className={styles.formSectionWrapper} id="tc-form">
            <motion.div
                className={styles.formCard}
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
            >
                <div className={styles.headerBlock}>
                    <span className={styles.docCodeBadge}>JIPS/ACAD/TC-03</span>
                    <h2 className={styles.formTitle}>Transfer Certificate (T.C.) &amp; Clearance</h2>
                    <p className={styles.formSubtitle}>
                        Application for graduating scholars or transferring students to request official Transfer Certificate (T.C.), Migration Certificate, and Course Completion clearance.
                    </p>
                </div>

                {submitted ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={30} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>T.C. Application Lodged!</h3>
                            <p className={styles.successText}>
                                No-dues clearance verification initiated across the Central Library, Departmental Labs, and Accounts Cell.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="studentNameTC">Student Name (as per Marks Memo) *</label>
                                <input type="text" id="studentNameTC" required placeholder="Full registered name" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="rollNumberTC">JNTUA Hall Ticket Number *</label>
                                <input type="text" id="rollNumberTC" required placeholder="e.g., 20JAGP0150" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="programPassed">Course Completed *</label>
                                <select id="programPassed" required className={styles.selectField} defaultValue="bpharm">
                                    <option value="bpharm">B.Pharmacy (4 Years)</option>
                                    <option value="mpharm-ceutics">M.Pharm (Pharmaceutics)</option>
                                    <option value="mpharm-analysis">M.Pharm (Pharmaceutical Analysis)</option>
                                    <option value="pharmd">Doctor of Pharmacy (Pharm.D)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="passYear">Year of Passing / Leaving *</label>
                                <input type="text" id="passYear" required placeholder="e.g., 2026" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="reasonTC">Reason for T.C. Request *</label>
                                <select id="reasonTC" required className={styles.selectField} defaultValue="higher-studies">
                                    <option value="higher-studies">Higher Studies (M.Pharm / Ph.D / Foreign MS)</option>
                                    <option value="employment">Corporate Employment Joining</option>
                                    <option value="relocation">Relocation / Transfer</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="clearanceStatus">No-Dues Status *</label>
                                <select id="clearanceStatus" required className={styles.selectField} defaultValue="yes">
                                    <option value="yes">All Library &amp; Lab Dues Cleared</option>
                                    <option value="pending">Dues Pending (Clearance in Progress)</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.clearanceNotice}>
                            <ShieldAlert size={18} className={styles.alertIcon} />
                            <span>Original SSC marks memo must be verified at the counter before physical T.C. handover.</span>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <Send size={15} />
                            <span>Apply for Transfer Certificate</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}