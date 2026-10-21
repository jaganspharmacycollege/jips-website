'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertOctagon } from 'lucide-react';
import styles from './AntiRaggingDeclarationForm.module.css';

export default function AntiRaggingDeclarationForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-16px', '16px']);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
    };

    return (
        <div ref={containerRef} className={styles.formSectionWrapper} id="anti-ragging-form">
            <motion.div
                className={styles.formCard}
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
            >
                <div className={styles.headerBlock}>
                    <div className={styles.statutoryBadge}>
                        <AlertOctagon size={15} />
                        <span>UGC &amp; PCI STATUTORY MANDATE</span>
                    </div>
                    <h2 className={styles.formTitle}>Anti-Ragging Undertaking &amp; Affidavit</h2>
                    <p className={styles.formSubtitle}>
                        Mandatory annual affidavit by student and parent affirming complete compliance with Supreme Court directives and zero-tolerance ragging regulations.
                    </p>
                </div>

                {submitted ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={30} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>Affidavit Recorded!</h3>
                            <p className={styles.successText}>
                                Your statutory declaration has been archived in the collegiate Proctorial Disciplinary Cell.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="studentNameAR">Student Full Name *</label>
                                <input type="text" id="studentNameAR" required placeholder="Full name as registered" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="registrationNo">Roll / Registration Number *</label>
                                <input type="text" id="registrationNo" required placeholder="College Roll / Hall Ticket No" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="parentNameAR">Father / Mother / Guardian Name *</label>
                                <input type="text" id="parentNameAR" required placeholder="Parent or guardian name" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="parentPhoneAR">Parent Mobile Number *</label>
                                <input type="tel" id="parentPhoneAR" required placeholder="Emergency contact mobile" className={styles.inputField} />
                            </div>
                        </div>

                        <div className={styles.affidavitTextCard}>
                            <h4 className={styles.affidavitHead}>Statutory Affirmation:</h4>
                            <p className={styles.affidavitContent}>
                                I hereby declare that I am aware of the law regarding prohibition of ragging as well as the Supreme Court and PCI directions. I solemnly resolve that I will not indulge in any act of physical harassment, psychological bullying, or verbal abuse on or off the campus. In case of violation, I am aware that I am liable for immediate suspension and criminal penal action.
                            </p>

                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    required
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className={styles.checkboxInput}
                                />
                                <span>I and my parent / guardian agree to the statutory anti-ragging terms.</span>
                            </label>
                        </div>

                        <button type="submit" disabled={!agreed} className={styles.submitBtn}>
                            <ShieldCheck size={16} />
                            <span>Submit Anti-Ragging Undertaking</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}