'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GraduationCap, Send, CheckCircle2, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import styles from './AdmissionApplicationForm.module.css';

interface FormState {
    applicantName: string;
    gender: string;
    fatherName: string;
    dob: string;
    email: string;
    mobile: string;
    program: string;
    admissionQuota: string;
    rank: string;
    intermediateScore: string;
    address: string;
}

const initialFormState: FormState = {
    applicantName: '',
    gender: 'male',
    fatherName: '',
    dob: '',
    email: '',
    mobile: '',
    program: 'bpharm',
    admissionQuota: 'convener',
    rank: '',
    intermediateScore: '',
    address: '',
};

export default function AdmissionApplicationForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submittedData, setSubmittedData] = useState<{
        applicationId: string;
        submittedDate: string;
        applicantName: string;
        program: string;
        quota: string;
    } | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-18px', '18px']);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const res = await fetch('/api/admissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Failed to submit admission application.');
            }

            setSubmittedData({
                applicationId: data.applicationId || 'JIPS-2026-CONFIRMED',
                submittedDate: data.data?.submittedDate || new Date().toLocaleString(),
                applicantName: formData.applicantName,
                program: formData.program,
                quota: formData.admissionQuota,
            });

            // Reset form
            setFormData(initialFormState);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            console.error('Submission error:', err);
            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setSubmittedData(null);
        setSubmitError(null);
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

                {submittedData ? (
                    <div className={styles.successCard}>
                        <CheckCircle2 size={36} className={styles.successIcon} />
                        <div>
                            <h3 className={styles.successTitle}>Application Registered Successfully!</h3>
                            <p className={styles.successText}>
                                Thank you, <strong>{submittedData.applicantName}</strong>. Your candidate application has been securely recorded in our admission system and synced with the admissions desk.
                            </p>
                            <div className={styles.refCodeBadge}>
                                Application Ref ID: {submittedData.applicationId}
                            </div>
                            <span className={styles.submittedDateStamp}>
                                Recorded On: {submittedData.submittedDate}
                            </span>
                            <div>
                                <button type="button" onClick={handleReset} className={styles.submitAgainBtn}>
                                    <RefreshCw size={14} />
                                    <span>Submit Another Application</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.formBody}>
                        {submitError && (
                            <div className={styles.errorMessage}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <AlertCircle size={16} />
                                    <span>{submitError}</span>
                                </div>
                            </div>
                        )}

                        {/* Row 1: Candidate Name & Gender */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="applicantName">Candidate Full Name (as per SSC) *</label>
                                <input
                                    type="text"
                                    id="applicantName"
                                    required
                                    placeholder="e.g., Ramesh Kumar Reddy"
                                    value={formData.applicantName}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="gender">Gender *</label>
                                <select
                                    id="gender"
                                    required
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={styles.selectField}
                                >
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
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="dob">Date of Birth *</label>
                                <input
                                    type="date"
                                    id="dob"
                                    required
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                />
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                />
                            </div>
                        </div>

                        {/* Row 4: Program & Quota */}
                        <div className={styles.twoColRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="program">Program of Choice *</label>
                                <select
                                    id="program"
                                    required
                                    value={formData.program}
                                    onChange={handleChange}
                                    className={styles.selectField}
                                >
                                    <option value="bpharm">Bachelor of Pharmacy (B.Pharm - 4 Years)</option>
                                    <option value="mpharm-ceutics">M.Pharm (Pharmaceutics - 2 Years)</option>
                                    <option value="mpharm-analysis">M.Pharm (Pharmaceutical Analysis - 2 Years)</option>
                                    <option value="pharmd">Doctor of Pharmacy (Pharm.D - 6 Years)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="admissionQuota">Admission Category *</label>
                                <select
                                    id="admissionQuota"
                                    required
                                    value={formData.admissionQuota}
                                    onChange={handleChange}
                                    className={styles.selectField}
                                >
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
                                    value={formData.rank}
                                    onChange={handleChange}
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
                                    value={formData.intermediateScore}
                                    onChange={handleChange}
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
                                value={formData.address}
                                onChange={handleChange}
                                className={styles.textareaField}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.submitBtn}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    <span>Submitting Application...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    <span>Submit Admission Application</span>
                                </>
                            )}
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
