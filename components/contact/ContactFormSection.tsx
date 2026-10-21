'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Send, CheckCircle2, PhoneCall, Mail, Building } from 'lucide-react';
import styles from './ContactFormSection.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function ContactFormSection() {
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
    };

    return (
        <section className={styles.sectionWrap} id="enquiry-form" aria-label="Enquiry and Contact Form">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Column: Info & Departments */}
                    <div className={styles.leftPane}>
                        <span className={styles.eyebrow}>ADMISSIONS &amp; GENERAL INQUIRY</span>
                        <h2 className={styles.heading}>Send Us an Official Message</h2>
                        <p className={styles.lead}>
                            Whether you are an aspiring pharmacy student inquiring about B.Pharm, M.Pharm, or Pharm.D admissions, or a parent seeking fee details, our administrative desk responds within 24 working hours.
                        </p>

                        <div className={styles.deptList}>
                            <div className={styles.deptItem}>
                                <Building size={16} className={styles.deptIcon} />
                                <div>
                                    <strong>Admissions Office:</strong> +91 98480 12345 (EAPCET Code: JAGP)
                                </div>
                            </div>
                            <div className={styles.deptItem}>
                                <Mail size={16} className={styles.deptIcon} />
                                <div>
                                    <strong>Examinations Cell:</strong> exams@jips.edu.in
                                </div>
                            </div>
                            <div className={styles.deptItem}>
                                <PhoneCall size={16} className={styles.deptIcon} />
                                <div>
                                    <strong>Principal Chambers:</strong> 0861-238100 / +91 98480 23456
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className={styles.rightPane}>
                        {submitted ? (
                            <div className={styles.successCard}>
                                <CheckCircle2 size={32} className={styles.successIcon} />
                                <div>
                                    <h3 className={styles.successTitle}>Enquiry Successfully Sent!</h3>
                                    <p className={styles.successText}>
                                        Thank you for reaching out to JIPS. Our admissions counselor will contact you shortly via phone and email.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="enquiryType">Inquiry Category *</label>
                                    <select id="enquiryType" required className={styles.select}>
                                        <option value="admissions">B.Pharm / M.Pharm / Pharm.D Admissions (EAPCET Code: JAGP)</option>
                                        <option value="fees">Fee Structure &amp; Scholarship (JVD) Details</option>
                                        <option value="hostel">Campus Hostel &amp; Transportation Facility</option>
                                        <option value="general">General Administrative Inquiry</option>
                                    </select>
                                </div>

                                <div className={styles.twoCol}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="fullName">Full Name *</label>
                                        <input type="text" id="fullName" required placeholder="Enter your full name" className={styles.input} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="contactPhone">Mobile Number *</label>
                                        <input type="tel" id="contactPhone" required placeholder="10-digit mobile number" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="emailAddr">Email Address *</label>
                                    <input type="email" id="emailAddr" required placeholder="user@gmail.com" className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="message">Your Message or Query *</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Mention course of interest (B.Pharm, Pharm.D) or specific question..."
                                        className={styles.textarea}
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <Send size={15} />
                                    <span>Submit Inquiry</span>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}