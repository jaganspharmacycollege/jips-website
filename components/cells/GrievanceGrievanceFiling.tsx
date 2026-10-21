'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Send, CheckCircle2, Lock, FileText, Clock } from 'lucide-react';
import styles from './GrievanceGrievanceFiling.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function GrievanceGrievanceFiling() {
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
    };

    return (
        <section className={styles.sectionWrap} id="lodge-grievance" aria-label="Lodge Grievance Portal">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Column: Statutory Rights */}
                    <div className={styles.leftInfo}>
                        <span className={styles.kickerBadge}>CONFIDENTIAL &amp; TIME-BOUND</span>
                        <h2 className={styles.heading}>Statutory Grievance Submission Portal</h2>
                        <p className={styles.lead}>
                            Students and staff may lodge legitimate grievances regarding academic assessments, library matters, campus safety, or harassment directly with the respective statutory committee.
                        </p>

                        <div className={styles.guaranteeBox}>
                            <div className={styles.guaranteeItem}>
                                <Lock size={18} className={styles.guaranteeIcon} />
                                <div>
                                    <strong>Strict Confidentiality:</strong> Identity is shielded throughout committee inquiry procedures.
                                </div>
                            </div>
                            <div className={styles.guaranteeItem}>
                                <Clock size={18} className={styles.guaranteeIcon} />
                                <div>
                                    <strong>48-Hour Turnaround:</strong> Initial preliminary hearing scheduled within two working days.
                                </div>
                            </div>
                        </div>

                        <div className={styles.downloadFormLinkWrap}>
                            <Link href="/downloads/forms#anti-ragging-form" className={styles.pdfFormLink}>
                                <FileText size={16} />
                                <span>Download Statutory Affidavit Form</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Confidential Form */}
                    <div className={styles.rightForm}>
                        {submitted ? (
                            <div className={styles.successCard}>
                                <CheckCircle2 size={32} className={styles.successIcon} />
                                <div>
                                    <h3 className={styles.successTitle}>Representation Lodged!</h3>
                                    <p className={styles.successText}>
                                        Your confidential grievance reference number has been recorded. The committee convener will contact you via your verified institutional email.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="cellTarget">Select Statutory Committee *</label>
                                    <select id="cellTarget" required className={styles.select}>
                                        <option value="grievance">Student &amp; Faculty Grievance Cell (SGRC)</option>
                                        <option value="icc">Internal Complaints Committee (ICC / POSH)</option>
                                        <option value="antiragging">Anti-Ragging Committee</option>
                                        <option value="scst">SC/ST &amp; Minority Welfare Cell</option>
                                        <option value="iqac">Internal Quality Assurance Cell (IQAC)</option>
                                    </select>
                                </div>

                                <div className={styles.twoInputsRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="grievantName">Full Name *</label>
                                        <input type="text" id="grievantName" required placeholder="Full registered name" className={styles.input} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="grievantRoll">Roll / Employee Number *</label>
                                        <input type="text" id="grievantRoll" required placeholder="e.g. 23JAGP0101" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.twoInputsRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="grievantEmail">Official / Personal Email *</label>
                                        <input type="email" id="grievantEmail" required placeholder="user@gmail.com" className={styles.input} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="grievantMobile">Contact Mobile *</label>
                                        <input type="tel" id="grievantMobile" required placeholder="10-digit mobile" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="grievanceDetails">Detailed Representation *</label>
                                    <textarea
                                        id="grievanceDetails"
                                        required
                                        rows={4}
                                        placeholder="Provide specific factual details, dates, and background..."
                                        className={styles.textarea}
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <Send size={15} />
                                    <span>Submit Confidential Grievance</span>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}