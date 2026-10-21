'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, Clock } from 'lucide-react';
import styles from './BonafideCertificateForm.module.css';

export default function BonafideCertificateForm() {
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
        <div ref={containerRef} className={styles.formSectionWrapper} id="bonafide-form">
            <motion.div
                className={styles.formCard}
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
            >
                <div className={styles.headerBlock}>
                    <span className={styles.docCodeBadge}>JIPS/ACAD/CERT-02</span>
                    <h2 className={styles.formTitle}>Bonafide Certificate Request</h2>
                    <p className={styles.formSubtitle}>
                        Request official Study, Conduct, and Bonafide certificates for education loan processing, passport verification, bus passes, and state scholarship portals.
                    </p>
                </div>

                {submitted ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={30} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>Request Submitted to Academic Desk!</h3>
                            <p className={styles.successText}>
                                Your application has been forwarded to the administrative verification desk. Issuance turnaround time: <strong>2 working days</strong>.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="studentName">Student Name *</label>
                                <input type="text" id="studentName" required placeholder="Full registered name" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="hallTicket">Roll / Hall Ticket Number *</label>
                                <input type="text" id="hallTicket" required placeholder="e.g., 22JAGP0101" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="courseDegree">Program &amp; Current Year *</label>
                                <select id="courseDegree" required className={styles.selectField} defaultValue="bpharm-3">
                                    <option value="bpharm-1">B.Pharm - 1st Year</option>
                                    <option value="bpharm-2">B.Pharm - 2nd Year</option>
                                    <option value="bpharm-3">B.Pharm - 3rd Year</option>
                                    <option value="bpharm-4">B.Pharm - 4th Year</option>
                                    <option value="mpharm-1">M.Pharm - 1st Year</option>
                                    <option value="mpharm-2">M.Pharm - 2nd Year</option>
                                    <option value="pharmd">Pharm.D (All Years)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="purpose">Purpose of Certificate *</label>
                                <select id="purpose" required className={styles.selectField} defaultValue="bank-loan">
                                    <option value="bank-loan">Bank Education Loan</option>
                                    <option value="scholarship">State / National Scholarship Portal</option>
                                    <option value="passport">Passport / Visa Application</option>
                                    <option value="bus-pass">APSRTC Student Bus Pass</option>
                                    <option value="other">Other Official Verification</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="studentEmail">Student Email *</label>
                                <input type="email" id="studentEmail" required placeholder="user@gmail.com" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="studentMobile">Mobile Number *</label>
                                <input type="tel" id="studentMobile" required placeholder="10-digit number" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="remarks">Additional Specific Notes / Remarks (Optional)</label>
                            <textarea id="remarks" rows={2} placeholder="Mention bank branch or scholarship name if needed" className={styles.textareaField} />
                        </div>

                        <div className={styles.noticeBox}>
                            <Clock size={16} className={styles.noticeIcon} />
                            <span>Certificates can be collected from Academic Counter 2 between 2:00 PM and 4:30 PM.</span>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <Send size={15} />
                            <span>Submit Certificate Request</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}