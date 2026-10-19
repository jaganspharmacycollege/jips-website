'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Award,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    FileText,
    GraduationCap,
    Sparkles,
} from 'lucide-react';
import styles from './page.module.css';

const semesterModules = [
    {
        sem: 'Year 1: Foundations',
        id: 'y1',
        courses: [
            'Human Anatomy and Physiology I & II',
            'Pharmaceutical Analysis I & Inorganic Chemistry',
            'Pharmaceutics I (Theory & Practical Lab)',
            'Remedial Biology / Remedial Mathematics',
            'Biochemistry & Pathophysiology',
            'Pharmaceutical Microbiology & Sterile Techniques',
        ],
    },
    {
        sem: 'Year 2: Compounding & Synthesis',
        id: 'y2',
        courses: [
            'Pharmaceutical Organic Chemistry II & III',
            'Physical Pharmaceutics I & II',
            'Pharmacology I (Mechanism of Drug Action)',
            'Pharmacognosy & Phytochemistry I',
            'Medicinal Chemistry I',
            'Pharmaceutical Engineering & Unit Operations',
        ],
    },
    {
        sem: 'Year 3: Advanced Therapeutics',
        id: 'y3',
        courses: [
            'Medicinal Chemistry II & III',
            'Pharmacology II & III (Toxicology & Trials)',
            'Herbal Drug Technology',
            'Biopharmaceutics & Pharmacokinetics',
            'Pharmaceutical Biotechnology',
            'Pharmacy Law & Regulatory Ethics',
        ],
    },
    {
        sem: 'Year 4: Clinical & Capstone',
        id: 'y4',
        courses: [
            'Instrumental Methods of Analysis (HPLC/UV-Vis)',
            'Industrial Pharmacy II & Pilot Plant Scale-Up',
            'Pharmacy Practice & Hospital Bedside Rounds',
            'Novel Drug Delivery Systems (NDDS)',
            'Biostatistics & Research Methodology',
            'Mandatory Industrial Project & Practice School',
        ],
    },
];

const labShowcase = [
    {
        title: 'Advanced Chromatography & Analysis',
        desc: 'High-Performance Liquid Chromatography (HPLC), double-beam UV-Vis spectrophotometers, and precision dissolution suites for USP pharmacopeial assay validation.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        tag: 'Analytical Suite',
    },
    {
        title: 'Pharmaceutics & Pilot Compounding',
        desc: 'Equipped with rotary 16-station tablet compression machinery, fluid bed dryers, and sterile coating pans replicating modern cGMP industrial manufacturing.',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?q=80&w=800&auto=format&fit=crop',
        tag: 'Formulation Suite',
    },
    {
        title: 'Clinical Pharmacology & Simulation',
        desc: 'Computer-aided molecular modeling suites, digital organ-bath plethysmometers, and direct hospital ward clerkships at partnered clinical institutions.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
        tag: 'Clinical Care',
    },
];

/* ==========================================================================
   ANIMATION VARIANTS (Cinematic & Re-triggering)
   ========================================================================== */
const fromLeftVariants: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.35,
            ease: 'easeOut',
        },
    },
};

const fromRightVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.45,
            delay: 0.15,
            ease: 'easeOut',
        },
    },
};

const fromTopVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            delay: 0.35,
            ease: 'easeOut',
        },
    },
};

const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25,
            delay: customDelay,
            ease: 'easeOut',
        },
    }),
};

const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: 'easeOut',
        },
    },
};

export default function BPharmPage() {
    const shouldReduceMotion = useReducedMotion();
    const [activeSemTab, setActiveSemTab] = useState('y1');

    return (
        <div className={styles.pageWrapper}>
            {/* 1. CINEMATIC HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    {/* Text slides in from LEFT */}
                    <motion.div
                        className={styles.heroContent}
                        variants={fromLeftVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.badgeLine}>
                            <span className={styles.pillBadge}>PCI &amp; AICTE APPROVED</span>
                            <span className={styles.codeBadge}>EAPCET CODE: JAGP</span>
                        </div>

                        <h1 className={styles.heroHeading}>
                            Bachelor of Pharmacy <br />
                            <span className={styles.gradientHeading}>B.Pharm Degree</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            A prestigious 4-year undergraduate professional curriculum affiliated with JNTUA[cite: 7, 9].
                            Integrating translational drug discovery, cGMP pilot compounding, and clinical
                            patient rounds to mold ethical leaders in global pharmaceutical sciences.
                        </p>

                        <div className={styles.heroBtnGroup}>
                            <Link href="/admissions/admission-process" className={styles.primaryBtn}>
                                <span>Apply for 2026 Batch</span>
                                <ChevronRight size={16} />
                            </Link>
                            <a href="#curriculum" className={styles.secondaryBtn}>
                                <span>Course Syllabus</span>
                            </a>
                        </div>

                        <div className={styles.quickStatRow}>
                            <div className={styles.statUnit}>
                                <span className={styles.statDigit}>4 Yrs</span>
                                <span className={styles.statCaption}>8 Semesters</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statUnit}>
                                <span className={styles.statDigit}>100</span>
                                <span className={styles.statCaption}>Annual Seats</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statUnit}>
                                <span className={styles.statDigit}>100%</span>
                                <span className={styles.statCaption}>Placement Record</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Container */}
                    <div className={styles.heroVisualWrapper}>
                        {/* Small image drops in from TOP */}
                        <motion.div
                            className={styles.accentPhotoFrame}
                            variants={fromTopVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop"
                                alt="Pharmacist Compounding Formulation"
                                fill
                                priority
                                sizes="(max-width: 425px) 110px, 170px"
                                className={styles.accentImg}
                            />
                        </motion.div>

                        {/* Main large image enters from RIGHT */}
                        <motion.div
                            className={styles.mainVisualCard}
                            variants={fromRightVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000&auto=format&fit=crop"
                                alt="Pharmaceutical Research Laboratory at JIPS"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 600px"
                                className={styles.heroMainImg}
                            />
                            <div className={styles.visualOverlayGradient} />

                            <div className={styles.floatingHighlightBadge}>
                                <Sparkles size={18} className={styles.sparkleIcon} />
                                <div>
                                    <span className={styles.floatBadgeTitle}>Translational Science</span>
                                    <span className={styles.floatBadgeSubtitle}>Modern formulation pilot plants</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PROGRAM ADVANTAGES / PILLARS */}
            <section className={styles.pillarsSection}>
                <div className={styles.sectionInner}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={fadeInUpVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>ACADEMIC EXCELLENCE</span>
                        <h2 className={styles.sectionTitle}>Engineered for Global Impact</h2>
                        <p className={styles.sectionSubtitle}>
                            Experience an international pharmaceutical education standard benchmarked against industry expectations.
                        </p>
                    </motion.div>

                    <div className={styles.threePillarsGrid}>
                        <motion.div
                            className={styles.pillarCard}
                            custom={0.1}
                            variants={fadeInUpVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <Award size={24} />
                            </div>
                            <h3 className={styles.pillarTitle}>Section 12 Certified</h3>
                            <p className={styles.pillarDesc}>
                                Full compliance with the Pharmacy Council of India, granting immediate registered pharmacist licensure upon degree completion[cite: 7].
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.pillarCard}
                            custom={0.25}
                            variants={fadeInUpVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <GraduationCap size={24} />
                            </div>
                            <h3 className={styles.pillarTitle}>Doctoral Mentorship</h3>
                            <p className={styles.pillarDesc}>
                                Learn under published professors holding active patent filings and sponsored research grants in novel drug delivery systems.
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.pillarCard}
                            custom={0.4}
                            variants={fadeInUpVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <BookOpen size={24} />
                            </div>
                            <h3 className={styles.pillarTitle}>GPAT &amp; NIPER Prep</h3>
                            <p className={styles.pillarDesc}>
                                Built-in seminar modules and competitive exam preparation to help students secure government fellowships for postgraduate tracks.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE 8-SEMESTER SYLLABUS MATRIX */}
            <section className={styles.curriculumSection} id="curriculum">
                <div className={styles.sectionInner}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={fadeInUpVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>STRUCTURED MATRIX</span>
                        <h2 className={styles.sectionTitle}>Curriculum &amp; Course Syllabus</h2>
                        <p className={styles.sectionSubtitle}>
                            CBCS credit scheme meticulously mapped across 4 academic years and 8 semesters.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.tabScrollWrap}
                        variants={fadeInUpVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.tabButtonsRow}>
                            {semesterModules.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`${styles.semTabBtn} ${activeSemTab === item.id ? styles.activeTabBtn : ''}`}
                                    onClick={() => setActiveSemTab(item.id)}
                                >
                                    {item.sem}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.curriculumContainer}
                        variants={scaleInVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {semesterModules
                            .filter((m) => m.id === activeSemTab)
                            .map((module) => (
                                <div key={module.id} className={styles.curriculumBox}>
                                    <div className={styles.boxHeader}>
                                        <div>
                                            <h3 className={styles.boxTitle}>{module.sem} Subjects</h3>
                                            <p className={styles.boxSubtitle}>Mandatory Theory, Practical Labs &amp; Continuous Internal Evaluation</p>
                                        </div>
                                        <span className={styles.statusTag}>PCI Compliant</span>
                                    </div>

                                    <div className={styles.modulesGrid}>
                                        {module.courses.map((course, idx) => (
                                            <div key={idx} className={styles.subjectItem}>
                                                <CheckCircle2 size={18} className={styles.bulletCheck} />
                                                <span className={styles.subjectName}>{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. VISUAL LABORATORY SUITES */}
            <section className={styles.labsShowcaseSection}>
                <div className={styles.sectionInner}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={fadeInUpVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>RESEARCH INFRASTRUCTURE</span>
                        <h2 className={styles.sectionTitle}>World-Class Laboratory Ecosystem</h2>
                        <p className={styles.sectionSubtitle}>
                            14 specialized departmental analytical suites outfitted with modern pharmaceutical instrumentation.
                        </p>
                    </motion.div>

                    <div className={styles.labGrid}>
                        {labShowcase.map((lab, index) => (
                            <motion.div
                                key={lab.title}
                                className={styles.labCard}
                                custom={index * 0.18}
                                variants={fadeInUpVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.labImgContainer}>
                                    <Image
                                        src={lab.image}
                                        alt={lab.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className={styles.labImg}
                                    />
                                    <span className={styles.labTag}>{lab.tag}</span>
                                </div>
                                <div className={styles.labBody}>
                                    <h3 className={styles.labHeading}>{lab.title}</h3>
                                    <p className={styles.labDescription}>{lab.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CAREER OUTCOMES & RECRUITMENT */}
            <section className={styles.careerSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.careerHeroCard}>
                        {/* Left column flies from left */}
                        <motion.div
                            className={styles.careerLeftCol}
                            variants={fromLeftVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <span className={styles.careerBadge}>CAREER PATHWAYS</span>
                            <h2 className={styles.careerHeadline}>Where B.Pharm Opens Doors</h2>
                            <p className={styles.careerText}>
                                Our alumni excel across multinational pharmaceutical formulation, quality control,
                                clinical trials, and government drug administration.
                            </p>

                            <div className={styles.rolesPillWrap}>
                                <span className={styles.rolePill}>Formulation Scientist</span>
                                <span className={styles.rolePill}>Quality Assurance (QA/QC)</span>
                                <span className={styles.rolePill}>Regulatory Affairs Executive</span>
                                <span className={styles.rolePill}>Hospital Pharmacist</span>
                                <span className={styles.rolePill}>Govt Drug Inspector</span>
                                <span className={styles.rolePill}>Clinical Research Associate</span>
                            </div>
                        </motion.div>

                        {/* Right column flies from right */}
                        <motion.div
                            className={styles.careerRightCol}
                            variants={fromRightVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <h4 className={styles.recruiterHeader}>Key Recruiting Partners</h4>
                            <p className={styles.recruiterText}>
                                Regular on-campus selection drives by India&apos;s leading healthcare enterprises:
                            </p>
                            <div className={styles.recruiterLogoGrid}>
                                <div className={styles.logoItem}>Hetero Drugs</div>
                                <div className={styles.logoItem}>Dr. Reddy&apos;s</div>
                                <div className={styles.logoItem}>Aurobindo</div>
                                <div className={styles.logoItem}>Divi&apos;s Labs</div>
                                <div className={styles.logoItem}>Sun Pharma</div>
                                <div className={styles.logoItem}>Apollo Hospitals</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION STRIP */}
            <section className={styles.ctaStripSection}>
                <div className={styles.sectionInner}>
                    <motion.div
                        className={styles.ctaBox}
                        variants={fadeInUpVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.ctaTextGroup}>
                            <h3 className={styles.ctaHeader}>Begin Your Journey in Pharmaceutical Sciences</h3>
                            <p className={styles.ctaBody}>
                                Explore entrance exam counseling (Code: JAGP), Category-B admissions, and fee reimbursement schemes.
                            </p>
                        </div>
                        <div className={styles.ctaButtonGroup}>
                            <Link href="/admissions/tuition-fee" className={styles.ctaSecBtn}>
                                <FileText size={16} />
                                <span>Tuition Fees</span>
                            </Link>
                            <Link href="/admissions/admission-process" className={styles.ctaPriBtn}>
                                <span>Admission Process</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}