'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import styles from './AlumniRegistrationForm.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function AlumniRegistrationForm() {
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <section className={styles.sectionWrap} id="alumni-register" aria-label="Alumni Registration Portal">
            <div className={styles.container}>
                <motion.div
                    className={styles.registerCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Column: Association Privileges */}
                    <div className={styles.infoCol}>
                        <span className={styles.kickerBadge}>STAY CONNECTED</span>
                        <h2 className={styles.heading}>Register with the Alumni Association</h2>
                        <p className={styles.lead}>
                            Join the official JIPS Alumni Network to mentor current students, receive invitation circulars for annual reunions, and connect with fellow alumni across global healthcare enterprises.
                        </p>

                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <span>Receive life membership certificate and digital alumni directory access</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <span>Participate as guest speaker in campus training webinars and placement panels</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <span>Lifelong access to campus digital library consortia and guest research facilities</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Registration Form */}
                    <div className={styles.formCol}>
                        <h3 className={styles.formTitle}>Alumni Enrollment Form</h3>
                        <p className={styles.formSubtitle}>Update your current professional profile and contact details.</p>

                        {submitted ? (
                            <div className={styles.successBox}>
                                <CheckCircle2 size={24} className={styles.successIcon} />
                                <div>
                                    <strong>Registration Received!</strong>
                                    <p>Welcome to the JIPS Global Alumni Network. Our team will verify your alumni record shortly.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="alumniName">Full Name *</label>
                                    <input type="text" id="alumniName" required placeholder="Enter full name" className={styles.input} />
                                </div>

                                <div className={styles.twoInputsRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="programGraduated">Program Completed *</label>
                                        <select id="programGraduated" className={styles.select} defaultValue="bpharm">
                                            <option value="bpharm">B.Pharmacy</option>
                                            <option value="mpharm-ceutics">M.Pharm (Pharmaceutics)</option>
                                            <option value="mpharm-analysis">M.Pharm (Analysis)</option>
                                            <option value="pharmd">Doctor of Pharmacy (Pharm.D)</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="graduationYear">Passing Year *</label>
                                        <input type="text" id="graduationYear" required placeholder="e.g. 2022" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.twoInputsRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="currentCompany">Current Organization / Hospital *</label>
                                        <input type="text" id="currentCompany" required placeholder="Company or Hospital name" className={styles.input} />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="designation">Current Designation *</label>
                                        <input type="text" id="designation" required placeholder="e.g. Research Scientist" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.twoInputsRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" required placeholder="user@gmail.com" className={styles.input} />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="mobile">Mobile / WhatsApp *</label>
                                        <input type="tel" id="mobile" required placeholder="Phone number" className={styles.input} />
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <Send size={15} />
                                    <span>Submit Alumni Registration</span>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}