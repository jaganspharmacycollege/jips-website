'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GraduationCap, Send, CheckCircle2 } from 'lucide-react';
import styles from './AdmissionApplicationForm.module.css';

export default function AdmissionApplicationForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-18px', '18px']);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
    };

    return (
        <div ref={containerRef} className={styles.formSectionWrapper} id="admission-form">
            <motion.div
                className={styles.formCard}
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
            >
                <div className={styles.headerBlock}>
                    <div className={styles.badgeLine}>
                        <GraduationCap size={15} className={styles.badgeIcon} />
                        <span>ACADEMIC YEAR 2026-27 ENROLLMENT</span>
                    </div>
                    <h2 className={styles.formTitle}>Admission Application Form</h2>
                    <p className={styles.formSubtitle}>
                        Submit your candidate profile for B.Pharm, M.Pharm, or Pharm.D programs under Convenor Code (JAGP) or Category-B Management quota.
                    </p>
                </div>

                {submitted ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={32} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>Application Registered Successfully!</h3>
                            <p className={styles.successText}>
                                Your application reference code has been generated. Our admissions officer will contact you regarding document verification and counseling details.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        {/* Row 1: Candidate Name & Gender */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="applicantName">Candidate Full Name (as per SSC) *</label>
                                <input
                                    type="text"
                                    id="applicantName"
                                    required
                                    placeholder="e.g., Ramesh Kumar Reddy"
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="gender">Gender *</label>
                                <select id="gender" required className={styles.selectField} defaultValue="male">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 2: Parents & DOB */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="fatherName">Father / Guardian Name *</label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    required
                                    placeholder="Enter father or guardian name"
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="dob">Date of Birth *</label>
                                <input type="date" id="dob" required className={styles.inputField} />
                            </div>
                        </div>

                        {/* Row 3: Contacts */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="user@gmail.com"
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="mobile">Mobile Number (WhatsApp) *</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    required
                                    placeholder="10-digit mobile number"
                                    className={styles.inputField}
                                />
                            </div>
                        </div>

                        {/* Row 4: Program & Quota */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="program">Program of Choice *</label>
                                <select id="program" required className={styles.selectField} defaultValue="bpharm">
                                    <option value="bpharm">Bachelor of Pharmacy (B.Pharm - 4 Years)</option>
                                    <option value="mpharm-ceutics">M.Pharm (Pharmaceutics - 2 Years)</option>
                                    <option value="mpharm-analysis">M.Pharm (Pharmaceutical Analysis - 2 Years)</option>
                                    <option value="pharmd">Doctor of Pharmacy (Pharm.D - 6 Years)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="admissionQuota">Admission Category *</label>
                                <select id="admissionQuota" required className={styles.selectField} defaultValue="convener">
                                    <option value="convener">Convenor Quota (AP EAPCET/PGECET: JAGP)</option>
                                    <option value="management">Category-B Management Quota</option>
                                    <option value="lateral">B.Pharm Lateral Entry (ECET)</option>
                                    <option value="nri">NRI / PIO Quota</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 5: Rank & Marks */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="rank">EAPCET / PGECET / GPAT Rank (If Qualified)</label>
                                <input
                                    type="text"
                                    id="rank"
                                    placeholder="Enter Hall Ticket number or estimated rank"
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="intermediateScore">Intermediate / 10+2 Aggregate Percentage *</label>
                                <input
                                    type="text"
                                    id="intermediateScore"
                                    required
                                    placeholder="e.g., 88.5%"
                                    className={styles.inputField}
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="address">Permanent Postal Address *</label>
                            <textarea
                                id="address"
                                required
                                rows={3}
                                placeholder="Door No, Street, Mandal, District, Pincode"
                                className={styles.textareaField}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <Send size={16} />
                            <span>Submit Admission Application</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}