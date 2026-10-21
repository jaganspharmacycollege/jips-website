'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    type Variants,
} from 'framer-motion';
import {
    ArrowRight,
    PhoneCall,
    Search,
    CheckCircle2,
    BookOpen,
    Building2,
    Receipt,
    GraduationCap,
    FileCheck2,
    FileDown,
} from 'lucide-react';
import styles from './AdmissionsOverview.module.css';

interface SubPageCard {
    title: string;
    desc: string;
    href: string;
    tag: string;
    icon: React.ReactNode;
}

const admissionSubPages: SubPageCard[] = [
    {
        title: 'Eligibility & Selection',
        desc: 'Minimum qualifying percentages, intermediate subject criteria, and entrance exam requirements for B.Pharm & M.Pharm.',
        href: '/admissions/eligibility',
        tag: 'Criteria',
        icon: <BookOpen size={22} />,
    },
    {
        title: 'Seat Matrix & Intake',
        desc: 'Category-A (Convenor quota) and Category-B (Management/NRI) distribution approved by PCI.',
        href: '/admissions/seat-matrix',
        tag: 'Capacity',
        icon: <Building2 size={22} />,
    },
    {
        title: 'Fee Structure',
        desc: 'Government regulatory committee approved tuition breakdown, lab amenities, and transparent payment schedules.',
        href: '/admissions/fee-structure',
        tag: 'Tuition',
        icon: <Receipt size={22} />,
    },
    {
        title: 'Scholarships & Reimbursement',
        desc: 'AP State Government Jagananna Vidya Deevena (JVD), merit endowments, and financial assistance schemes.',
        href: '/admissions/scholarships',
        tag: 'Aid & Grants',
        icon: <GraduationCap size={22} />,
    },
    {
        title: 'Step-by-Step Procedure',
        desc: 'Online web counseling registration, certificate verification procedure, and physical reporting guidelines.',
        href: '/admissions/procedure',
        tag: 'Process',
        icon: <FileCheck2 size={22} />,
    },
    {
        title: 'Brochure & Downloads',
        desc: 'Download institutional information handbook, syllabus copies, and offline enquiry application templates.',
        href: '/admissions/downloads',
        tag: 'Resources',
        icon: <FileDown size={22} />,
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

// Viewport Re-triggerable Entrance Variants (once: false)
const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const smoothRiseItem: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const visualEntrance: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
        },
    },
};

const cardRiseVariant: Variants = {
    hidden: { opacity: 0, y: 38 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function AdmissionsOverview() {
    const shouldReduceMotion = useReducedMotion();
    const [submitted, setSubmitted] = useState(false);

    // Scroll targets for multi-section parallax
    const heroRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);
    const directoryRef = useRef<HTMLDivElement>(null);
    const enquiryRef = useRef<HTMLDivElement>(null);

    // 1. Hero Continuous Parallax Bindings
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const smoothHero = useSpring(heroScroll, { stiffness: 100, damping: 26 });
    const heroTextY = useTransform(smoothHero, [0, 1], ['0%', '24%']);
    const heroDoctorY = useTransform(smoothHero, [0, 1], ['0%', '12%']);
    const heroBackdropY = useTransform(smoothHero, [0, 1], ['0%', '-18%']);
    const heroBackdropSmallY = useTransform(smoothHero, [0, 1], ['0%', '35%']);

    // 2. Process Section Continuous Parallax Bindings
    const { scrollYProgress: processScroll } = useScroll({
        target: processRef,
        offset: ['start end', 'end start'],
    });
    const smoothProcess = useSpring(processScroll, { stiffness: 90, damping: 25 });
    const processCardsY = useTransform(smoothProcess, [0, 1], ['25px', '-25px']);

    // 3. Directory Section Continuous Parallax Bindings
    const { scrollYProgress: directoryScroll } = useScroll({
        target: directoryRef,
        offset: ['start end', 'end start'],
    });
    const smoothDirectory = useSpring(directoryScroll, { stiffness: 90, damping: 25 });
    const dirCardsY = useTransform(smoothDirectory, [0, 1], ['30px', '-30px']);

    // 4. Enquiry Section Parallax
    const { scrollYProgress: enquiryScroll } = useScroll({
        target: enquiryRef,
        offset: ['start end', 'end start'],
    });
    const smoothEnquiry = useSpring(enquiryScroll, { stiffness: 90, damping: 25 });
    const enquiryLeftY = useTransform(smoothEnquiry, [0, 1], ['20px', '-20px']);
    const enquiryRightY = useTransform(smoothEnquiry, [0, 1], ['-20px', '20px']);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className={styles.admissionsWrapper} aria-label="Admissions Overview">
            {/* 1. Hero Admissions Banner with Continuous Multi-Layer Parallax */}
            <div ref={heroRef} className={styles.heroSection}>
                <div className={styles.heroLayout}>
                    {/* Left Hero Column: Staggered Bottom-Up Text Cascading */}
                    <motion.div
                        className={styles.heroLeftCol}
                        variants={containerStagger}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }}
                        style={{ y: shouldReduceMotion ? 0 : heroTextY }}
                    >
                        <motion.div variants={smoothRiseItem} className={styles.counsellingBadge}>
                            <span>AP EAPCET &amp; PGECET CODE:</span>
                            <strong className={styles.codePill}>JAGP</strong>
                        </motion.div>

                        <motion.h1 variants={smoothRiseItem} className={styles.heroTitle}>
                            Premier Pharmaceutical Education for a <br />
                            <span className={styles.highlightText}>Global Healthcare Career</span>
                        </motion.h1>

                        <motion.p variants={smoothRiseItem} className={styles.heroSubtitle}>
                            Join Andhra Pradesh&apos;s reputed pharmacy institute. Offering PCI &amp; AICTE-approved
                            B.Pharm and M.Pharm programs supported by cutting-edge compounding laboratories,
                            esteemed mentors, hospital clerkships, and consistent 100% placement records.
                        </motion.p>

                        <motion.div variants={smoothRiseItem} className={styles.heroActionRow}>
                            <a href="#enquiry-form" className={styles.primaryCta}>
                                <span>Admission Enquiry</span>
                                <span className={styles.ctaPlayIcon}>
                                    <ArrowRight size={15} />
                                </span>
                            </a>

                            <a href="tel:+919848012345" className={styles.secondaryCta}>
                                <PhoneCall size={16} />
                                <span>+91 98480 12345</span>
                            </a>
                        </motion.div>

                        <motion.div variants={smoothRiseItem} className={styles.searchPillWidget}>
                            <div className={styles.searchIconBtn}>
                                <Search size={18} />
                            </div>
                            <div className={styles.searchWidgetText}>
                                <strong>Explore Course Options</strong>
                                <span>B.Pharm, M.Pharm (Ceutics &amp; Analysis), Pharm.D</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Hero Column: Medical Professional Visual with Floating Parallax */}
                    <motion.div
                        className={styles.heroRightCol}
                        variants={visualEntrance}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }}
                        style={{ y: shouldReduceMotion ? 0 : heroDoctorY }}
                    >
                        {/* Parallax Background Circles */}
                        <motion.div
                            className={styles.heroBackdropShape}
                            style={{ y: shouldReduceMotion ? 0 : heroBackdropY }}
                        />
                        <motion.div
                            className={styles.heroBackdropShapeSmall}
                            style={{ y: shouldReduceMotion ? 0 : heroBackdropSmallY }}
                        />

                        {/* Top-Right Online Status Pill */}
                        <motion.div
                            className={styles.statusPill}
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                        >
                            <span className={styles.statusDot} />
                            <span>Admissions Desk Open</span>
                        </motion.div>

                        {/* Enlarged Cutout Professional Image */}
                        <div className={styles.doctorImgWrapper} style={{ position: 'relative' }}>
                            <Image
                                src="/backgrounds/pstd.png"
                                alt="JIPS Clinical Pharmacist & Faculty Mentor"
                                fill
                                priority
                                sizes="(max-width: 768px) 380px, (max-width: 1280px) 540px, 680px"
                                className={styles.doctorImg}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 2. Key Highlights Strip with Sequential Lift */}
                <motion.div
                    className={styles.highlightStrip}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.stripContainer}>
                        <div className={styles.stripItem}>
                            <strong className={styles.stripValue}>B.Pharm</strong>
                            <span className={styles.stripLabel}>4-Year Bachelor Degree</span>
                        </div>
                        <div className={styles.stripDivider} />
                        <div className={styles.stripItem}>
                            <strong className={styles.stripValue}>M.Pharm</strong>
                            <span className={styles.stripLabel}>Pharmaceutics &amp; Analysis</span>
                        </div>
                        <div className={styles.stripDivider} />
                        <div className={styles.stripItem}>
                            <strong className={styles.stripValue}>JVD Eligible</strong>
                            <span className={styles.stripLabel}>Full Govt. Fee Reimbursement</span>
                        </div>
                        <div className={styles.stripDivider} />
                        <div className={styles.stripItem}>
                            <strong className={styles.stripValue}>100%</strong>
                            <span className={styles.stripLabel}>Placement Assistance</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3. Four-Step Admission Journey with Parallax Progression */}
            <div ref={processRef} className={styles.processSection}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeadingBlock}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className={styles.subTag}>STREAMLINED ADMISSIONS</span>
                        <h2 className={styles.sectionHeading}>Your Path to Enrollment</h2>
                        <p className={styles.sectionSubtext}>
                            Follow these clear milestones for both Convenor Quota (Category-A) and Management Admissions (Category-B).
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.stepsGrid}
                        style={{ y: shouldReduceMotion ? 0 : processCardsY }}
                    >
                        {admissionSteps.map((step, idx) => (
                            <motion.div
                                key={step.step}
                                className={styles.stepCard}
                                custom={idx}
                                variants={cardRiseVariant}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.stepNumberBadge}>{step.step}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 4. Sub-Pages / Categories Directory with Parallax Float */}
            <div ref={directoryRef} className={styles.directorySection}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeadingBlock}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className={styles.subTag}>ADMISSIONS DIRECTORY</span>
                        <h2 className={styles.sectionHeading}>Explore Specific Information</h2>
                        <p className={styles.sectionSubtext}>
                            Find granular breakdowns on intake criteria, annual fees, and statutory reservation procedures.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.directoryGrid}
                        style={{ y: shouldReduceMotion ? 0 : dirCardsY }}
                    >
                        {admissionSubPages.map((page, idx) => (
                            <motion.div
                                key={page.href}
                                className={styles.dirCard}
                                custom={idx}
                                variants={cardRiseVariant}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.18 }}
                            >
                                <div className={styles.dirCardTop}>
                                    <span className={styles.dirIconWrap}>{page.icon}</span>
                                    <span className={styles.dirTag}>{page.tag}</span>
                                </div>
                                <h3 className={styles.dirTitle}>{page.title}</h3>
                                <p className={styles.dirDesc}>{page.desc}</p>
                                <Link href={page.href} className={styles.dirLink}>
                                    <span>Review Details</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 5. Document Checklist & Fast Enquiry Form with Opposite Parallax Drift */}
            <div ref={enquiryRef} className={styles.enquirySection} id="enquiry-form">
                <div className={styles.sectionContainer}>
                    <div className={styles.enquiryGrid}>
                        {/* Left: Document Verification Checklist */}
                        <motion.div
                            className={styles.checklistCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: shouldReduceMotion ? 0 : enquiryLeftY }}
                        >
                            <span className={styles.subTagWhite}>VERIFICATION ESSENTIALS</span>
                            <h3 className={styles.checklistTitle}>Mandatory Certificates for Reporting</h3>
                            <p className={styles.checklistDesc}>
                                Original certificates and two sets of self-attested photocopies required during admission confirmation:
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>AP EAPCET / PGECET Rank Card &amp; Hall Ticket</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>Provisional Seat Allotment Order</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>SSC (10th) Marks Memo &amp; Intermediate (10+2) Pass Certificate</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>Study &amp; Conduct Certificates (Class 6th to Intermediate)</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>Transfer Certificate (T.C.) &amp; Migration Certificate</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>Integrated Community (Caste) &amp; Income Certificate (if applicable)</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>Identity Proof (copy) &amp; 4 Passport-size photographs</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right: Quick Lead Form */}
                        <motion.div
                            className={styles.formCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: shouldReduceMotion ? 0 : enquiryRightY }}
                        >
                            <h3 className={styles.formTitle}>Admission Enquiry Form</h3>
                            <p className={styles.formDesc}>
                                Submit your details. Our admissions counseling team will assist you with seat availability and fee guidance.
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
                                            <select
                                                id="courseSelect"
                                                className={styles.formSelect}
                                                required
                                                defaultValue="bpharm"
                                            >
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