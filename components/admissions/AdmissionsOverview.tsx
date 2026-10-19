'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './AdmissionsOverview.module.css';

interface SubPageCard {
    title: string;
    desc: string;
    href: string;
    tag: string;
    icon: string;
}

const admissionSubPages: SubPageCard[] = [
    {
        title: 'Eligibility & Selection',
        desc: 'Minimum qualifying percentages, intermediate subject criteria, and entrance exam requirements for B.Pharm & M.Pharm.',
        href: '/admissions/eligibility',
        tag: 'Criteria',
        icon: '📋',
    },
    {
        title: 'Seat Matrix & Intake',
        desc: 'Category-A (Convenor Convener quota) and Category-B (Management/NRI) distribution approved by PCI.',
        href: '/admissions/seat-matrix',
        tag: 'Capacity',
        icon: '🏛️',
    },
    {
        title: 'Fee Structure',
        desc: 'Government regulatory committee approved tuition breakdown, lab amenities, and transparent payment schedules.',
        href: '/admissions/fee-structure',
        tag: 'Tuition',
        icon: '💳',
    },
    {
        title: 'Scholarships & Reimbursement',
        desc: 'AP State Government Jagananna Vidya Deevena (JVD), merit endowments, and financial assistance schemes.',
        href: '/admissions/scholarships',
        tag: 'Aid & Grants',
        icon: '🎓',
    },
    {
        title: 'Step-by-Step Procedure',
        desc: 'Online web counseling registration, certificate verification procedure, and physical reporting guidelines.',
        href: '/admissions/procedure',
        tag: 'Process',
        icon: '🔄',
    },
    {
        title: 'Brochure & Downloads',
        desc: 'Download institutional information handbook, syllabus copies, and offline enquiry application templates.',
        href: '/admissions/downloads',
        tag: 'Resources',
        icon: '📄',
    },
];

const admissionSteps = [
    {
        step: '01',
        title: 'Entrance Qualifying',
        desc: 'Appear and qualify in AP EAPCET (for B.Pharm) or AP PGECET / GPAT (for M.Pharm).',
    },
    {
        step: '02',
        title: 'Web Counseling',
        desc: 'Register for web options and prioritize counselling code JAGP in official portal.',
    },
    {
        step: '03',
        title: 'Allotment & Verification',
        desc: 'Download the provisional seat allotment order and complete document verification.',
    },
    {
        step: '04',
        title: 'Campus Reporting',
        desc: 'Submit original certificates at JIPS campus, finalize enrollment, and attend orientation.',
    },
];

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function AdmissionsOverview() {
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className={styles.admissionsWrapper} aria-label="Admissions Overview">
            {/* 1. Hero Admissions Banner */}
            <div className={styles.heroSection}>
                <motion.div
                    className={styles.heroContainer}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.counsellingBadge}>
                        <span>AP EAPCET &amp; PGECET COUNSELLING CODE:</span>
                        <strong className={styles.codePill}>JAGP</strong>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Step Into a Career of <br />
                        <span className={styles.highlightText}>Pharmaceutical Excellence</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Join Andhra Pradesh&apos;s reputed pharmacy institution. Offering PCI-approved
                        B.Pharm and M.Pharm programs supported by modernized research compounding facilities,
                        expert mentors, and 100% placement track records.
                    </p>

                    <div className={styles.heroCtaGroup}>
                        <a href="#enquiry-form" className={styles.primaryCta}>
                            Register Admission Enquiry
                        </a>
                        <a href="tel:+919848012345" className={styles.secondaryCta}>
                            Call Helpdesk: +91 98480 12345
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* 2. Key Highlights Strip */}
            <div className={styles.highlightStrip}>
                <div className={styles.stripContainer}>
                    <div className={styles.stripItem}>
                        <span className={styles.stripValue}>B.Pharm</span>
                        <span className={styles.stripLabel}>4-Year Bachelor Degree</span>
                    </div>
                    <div className={styles.stripDivider} />
                    <div className={styles.stripItem}>
                        <span className={styles.stripValue}>M.Pharm</span>
                        <span className={styles.stripLabel}>Pharmaceutics &amp; Analysis</span>
                    </div>
                    <div className={styles.stripDivider} />
                    <div className={styles.stripItem}>
                        <span className={styles.stripValue}>JVD Eligible</span>
                        <span className={styles.stripLabel}>Full Govt. Fee Reimbursement</span>
                    </div>
                    <div className={styles.stripDivider} />
                    <div className={styles.stripItem}>
                        <span className={styles.stripValue}>100% Placement</span>
                        <span className={styles.stripLabel}>Corporate Hiring Drives</span>
                    </div>
                </div>
            </div>

            {/* 3. Four-Step Admission Journey */}
            <div className={styles.processSection}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeadingBlock}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                    >
                        <span className={styles.subTag}>STREAMLINED ADMISSIONS</span>
                        <h2 className={styles.sectionHeading}>Your Path to Enrollment</h2>
                        <p className={styles.sectionSubtext}>
                            Follow these clear milestones for both Convenor Quota (Category-A) and Management Admissions (Category-B).
                        </p>
                    </motion.div>

                    <div className={styles.stepsGrid}>
                        {admissionSteps.map((step, idx) => (
                            <motion.div
                                key={step.step}
                                className={styles.stepCard}
                                custom={idx * 0.1}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.stepNumberBadge}>{step.step}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Sub-Pages / Categories Directory */}
            <div className={styles.directorySection}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeadingBlock}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                    >
                        <span className={styles.subTag}>ADMISSIONS DIRECTORY</span>
                        <h2 className={styles.sectionHeading}>Explore Specific Information</h2>
                        <p className={styles.sectionSubtext}>
                            Find granular breakdowns on intake criteria, annual fees, and statutory reservation procedures.
                        </p>
                    </motion.div>

                    <div className={styles.directoryGrid}>
                        {admissionSubPages.map((page, idx) => (
                            <motion.div
                                key={page.href}
                                className={styles.dirCard}
                                custom={idx * 0.08}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.dirCardTop}>
                                    <span className={styles.dirIcon}>{page.icon}</span>
                                    <span className={styles.dirTag}>{page.tag}</span>
                                </div>
                                <h3 className={styles.dirTitle}>{page.title}</h3>
                                <p className={styles.dirDesc}>{page.desc}</p>
                                <Link href={page.href} className={styles.dirLink}>
                                    <span>Review Details</span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Document Checklist & Fast Enquiry Form */}
            <div className={styles.enquirySection} id="enquiry-form">
                <div className={styles.sectionContainer}>
                    <div className={styles.enquiryGrid}>
                        {/* Left: Document Verification Checklist */}
                        <motion.div
                            className={styles.checklistCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.subTagWhite}>VERIFICATION ESSENTIALS</span>
                            <h3 className={styles.checklistTitle}>Mandatory Certificates for Reporting</h3>
                            <p className={styles.checklistDesc}>
                                Original certificates and two sets of self-attested photocopies required during admission confirmation:
                            </p>
                            <ul className={styles.checkList}>
                                <li>AP EAPCET / PGECET Rank Card &amp; Hall Ticket</li>
                                <li>Provisional Seat Allotment Order</li>
                                <li>SSC (10th) Marks Memo &amp; Intermediate (10+2) Pass Certificate</li>
                                <li>Study &amp; Conduct Certificates (Class 6th to Intermediate)</li>
                                <li>Transfer Certificate (T.C.) &amp; Migration Certificate</li>
                                <li>Integrated Community (Caste) &amp; Income Certificate (if applicable)</li>
                                <li>Aadhaar Card copy &amp; 4 Passport-size photographs</li>
                            </ul>
                        </motion.div>

                        {/* Right: Quick Lead Form */}
                        <motion.div
                            className={styles.formCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className={styles.formTitle}>Admission Enquiry Form</h3>
                            <p className={styles.formDesc}>
                                Submit your details. Our admissions counseling counselor will assist you with seat availability and fee guidance.
                            </p>

                            {submitted ? (
                                <div className={styles.successMessage}>
                                    ✓ Your enquiry has been received! Our admissions team will reach out shortly.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.formLayout}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="studentName">Student Full Name *</label>
                                        <input
                                            type="text"
                                            id="studentName"
                                            required
                                            placeholder="e.g. Ramesh Kumar"
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <div className={styles.twoInputsRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phoneNumber">Mobile Number *</label>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                required
                                                placeholder="10-digit number"
                                                className={styles.formInput}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="courseSelect">Interested Program *</label>
                                            <select id="courseSelect" className={styles.formSelect} required defaultValue="bpharm">
                                                <option value="bpharm">B.Pharmacy (4 Years)</option>
                                                <option value="mpharm-ceutics">M.Pharm (Pharmaceutics)</option>
                                                <option value="mpharm-analysis">M.Pharm (Analysis)</option>
                                                <option value="lateral-entry">B.Pharm Lateral Entry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="rankDetail">EAPCET / PGECET Rank (Optional)</label>
                                        <input
                                            type="text"
                                            id="rankDetail"
                                            placeholder="Enter hall ticket or estimated rank"
                                            className={styles.formInput}
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        Submit Admission Request
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}