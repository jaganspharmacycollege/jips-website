'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Briefcase, Send, CheckCircle2, Upload } from 'lucide-react';
import styles from './FacultyRecruitmentForm.module.css';

export default function FacultyRecruitmentForm() {
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
        <div ref={containerRef} className={styles.formSectionWrapper} id="faculty-recruitment">
            <motion.div
                className={styles.formCard}
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
            >
                <div className={styles.headerBlock}>
                    <div className={styles.recruitmentBadge}>
                        <Briefcase size={14} />
                        <span>ACADEMIC APPOINTMENTS 2026-27</span>
                    </div>
                    <h2 className={styles.formTitle}>Faculty Recruitment Application</h2>
                    <p className={styles.formSubtitle}>
                        Inviting qualified doctorate and post-graduate academicians to apply for Professor, Associate Professor, and Assistant Professor openings across pharmaceutical disciplines.
                    </p>
                </div>

                {submitted ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={30} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>Application Submitted to Scrutiny Cell!</h3>
                            <p className={styles.successText}>
                                Your academic dossier and research credentials have been logged. The Dean of Faculty Affairs will contact shortlisted candidates for panel interviews.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        {/* Candidate Identity */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="facultyName">Applicant Full Name *</label>
                                <input type="text" id="facultyName" required placeholder="e.g., Dr. K. Ramesh" className={styles.inputField} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="postApplied">Post Applied For *</label>
                                <select id="postApplied" required className={styles.selectField} defaultValue="assistant">
                                    <option value="professor">Professor &bull; HOD</option>
                                    <option value="associate">Associate Professor</option>
                                    <option value="assistant">Assistant Professor</option>
                                    <option value="preceptor">Pharm.D Clinical Preceptor</option>
                                </select>
                            </div>
                        </div>

                        {/* Department & Qualifications */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="deptChoice">Specialization Department *</label>
                                <select id="deptChoice" required className={styles.selectField} defaultValue="ceutics">
                                    <option value="ceutics">Pharmaceutics &amp; NDDS</option>
                                    <option value="pharmacology">Pharmacology &amp; Clinical Pharmacy</option>
                                    <option value="analysis">Pharmaceutical Analysis &amp; QA</option>
                                    <option value="chemistry">Pharmaceutical Chemistry</option>
                                    <option value="cognosy">Pharmacognosy &amp; Natural Products</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="highestQual">Highest Qualification *</label>
                                <select id="highestQual" required className={styles.selectField} defaultValue="phd">
                                    <option value="phd">Ph.D. Awarded (Full-Time)</option>
                                    <option value="phd-thesis">Ph.D. Thesis Submitted</option>
                                    <option value="mpharm">M.Pharm (First Class)</option>
                                    <option value="pharmd">Pharm.D / Pharm.D (PB)</option>
                                </select>
                            </div>
                        </div>

                        {/* Contacts */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="facEmail">Email Address *</label>
                                <input type="email" id="facEmail" required placeholder="user@gmail.com" className={styles.inputField} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="facPhone">Mobile Number *</label>
                                <input type="tel" id="facPhone" required placeholder="10-digit number" className={styles.inputField} />
                            </div>
                        </div>

                        {/* Experience & Research Metrics */}
                        <div className={styles.threeColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="teachingExp">Teaching Exp. (Years) *</label>
                                <input type="number" id="teachingExp" required placeholder="e.g., 5" className={styles.inputField} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="scopusPapers">Scopus Papers Published *</label>
                                <input type="number" id="scopusPapers" required placeholder="e.g., 12" className={styles.inputField} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="patentsCount">Patents Filed / Granted</label>
                                <input type="number" id="patentsCount" placeholder="e.g., 2" className={styles.inputField} />
                            </div>
                        </div>

                        {/* Research Brief */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="researchSummary">Brief Research Thrust &amp; Laboratory Competency *</label>
                            <textarea
                                id="researchSummary"
                                required
                                rows={3}
                                placeholder="Highlight chromatographic techniques (HPLC), animal handling, or formulation scale-up expertise..."
                                className={styles.textareaField}
                            />
                        </div>

                        {/* Resume Upload Link / Mock */}
                        <div className={styles.resumeBox}>
                            <Upload size={18} className={styles.uploadIcon} />
                            <div>
                                <strong className={styles.uploadHead}>Enclose Detailed Curriculum Vitae (CV)</strong>
                                <span className={styles.uploadSub}>Accepted formats: PDF up to 5 MB with Scopus author ID and list of publications.</span>
                            </div>
                            <input type="file" required accept=".pdf,.doc,.docx" className={styles.fileInput} />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <Send size={15} />
                            <span>Submit Faculty Candidature</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}