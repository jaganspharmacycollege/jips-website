'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Stethoscope,
    HeartPulse,
    Award,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    FileText,
    Activity,
    Bed,
    ShieldAlert,
    ArrowRight,
    Hospital,
} from 'lucide-react';
import styles from './page.module.css';

const curriculumBreakdown = [
    {
        phase: 'Years 1 & 2',
        stage: 'Foundational Biomedical & Pharmaceutical Sciences',
        courses: [
            'Human Anatomy & Physiology and Pathophysiology',
            'Pharmaceutics & Pharmaceutical Inorganic Chemistry',
            'Medical Biochemistry & Clinical Microbiology',
            'Pharmacology I & Pathological Mechanisms',
            'Pharmacognosy & Phytopharmaceuticals',
            'Community Pharmacy & Hospital Dispensing Practices',
        ],
    },
    {
        phase: 'Years 3 & 4',
        stage: 'Clinical Pharmacology & Pharmacotherapeutics',
        courses: [
            'Pharmacology II & Toxicology (Organ Toxicity)',
            'Pharmacotherapeutics I & II (Cardiovascular, CNS, Respiratory)',
            'Pharmaceutical Analysis & Quality Validation',
            'Hospital Pharmacy & Patient Safety Management',
            'Clinical Toxicology & Poison Emergency Protocols',
            'Biopharmaceutics & Clinical Pharmacokinetics (TDM)',
        ],
    },
    {
        phase: 'Year 5',
        stage: 'Clinical Research, Pharmacoepidemiology & Clerkship',
        courses: [
            'Clinical Research Methodology & Biostatistics',
            'Pharmacoepidemiology & Pharmacoeconomics',
            'Clinical Pharmacokinetics & Pharmacogenomics',
            'Ward Round Participation & Ambulatory Care Clerkship',
            'Adverse Drug Reaction (ADR) Monitoring & Pharmacovigilance',
            'Faculty-Supervised Hospital Clinical Project Work',
        ],
    },
    {
        phase: 'Year 6',
        stage: 'Full-Time Clinical Hospital Internship Residency',
        courses: [
            'Medicine Ward Specialty Rotation (6 Months Mandatory)',
            'Surgery Ward Posting (2 Months)',
            'Pediatrics & Neonatal Intensive Care (2 Months)',
            'Specialty Elective Posting: ICU / Nephrology / Oncology (2 Months)',
            'Direct Bedside Patient Medication Reviews',
            'Physician-Collaborative Prescribing Interventions',
        ],
    },
];

const clinicalRotations = [
    {
        dept: 'Internal Medicine & Critical Care',
        icon: Bed,
        focus: 'In-patient rounds, polypharmacy drug interaction checks, and antibiotic stewardship monitoring in the ICU and step-down units.',
        tag: 'Critical Care',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    },
    {
        dept: 'Pediatrics & Neonatology',
        icon: HeartPulse,
        focus: 'Body surface area (BSA) weight-based pediatric dosing, neonatal fluid calculations, and vaccine immunogenicity evaluations.',
        tag: 'Pediatrics',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
    },
    {
        dept: 'Cardiology & Clinical Oncology',
        icon: Activity,
        focus: 'Anticoagulation clinic dosing protocols (Warfarin/DOACs), chemotherapy dose-intensity calculations, and antiemetic regimen safety.',
        tag: 'Super-Specialty',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop',
    },
];

/* ==========================================================================
   ANIMATION VARIANTS (Cinematic & Slow Momentum)
   ========================================================================== */
const fromLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.4, ease: 'easeOut' },
    },
};

const fromRight: Variants = {
    hidden: { opacity: 0, x: 75 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.45, delay: 0.15, ease: 'easeOut' },
    },
};

const fromTop: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.4, delay: 0.35, ease: 'easeOut' },
    },
};

const riseUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, delay: customDelay, ease: 'easeOut' },
    }),
};

export default function PharmDPage() {
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.pharmdRoot}>
            {/* 1. CLINICAL GRAND-ROUNDS HERO */}
            <section className={styles.clinicalHero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroContent}
                        variants={fromLeft}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.badgeLine}>
                            <span className={styles.pillBadge}>DOCTORAL CLINICAL HEALTHCARE</span>
                            <span className={styles.codeBadge}>EAPCET CODE: JAGP</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            Doctor of Pharmacy <br />
                            <span className={styles.goldText}>Pharm.D (6-Year Degree)</span>
                        </h1>

                        <p className={styles.heroLead}>
                            A prestigious clinical doctoral degree approved by the Pharmacy Council of India (PCI) and affiliated with JNTUA. Bridging the gap between physicians and patients through hospital ward rounds, therapeutic drug monitoring, and clinical pharmacotherapy residency[cite: 7, 9].
                        </p>

                        <div className={styles.heroBtnGroup}>
                            <Link href="/admissions/admission-process" className={styles.primaryBtn}>
                                <span>Apply for 2026 Batch</span>
                                <ChevronRight size={16} />
                            </Link>
                            <a href="#curriculum" className={styles.secondaryBtn}>
                                <span>6-Year Syllabus Plan</span>
                            </a>
                        </div>

                        {/* Quick Metrics */}
                        <div className={styles.heroMetrics}>
                            <div className={styles.metricCell}>
                                <span className={styles.metricVal}>06 Yrs</span>
                                <span className={styles.metricLbl}>5 Yrs + 1 Yr Residency</span>
                            </div>
                            <div className={styles.metricSep} />
                            <div className={styles.metricCell}>
                                <span className={styles.metricVal}>30 Seats</span>
                                <span className={styles.metricLbl}>Annual Sanctioned</span>
                            </div>
                            <div className={styles.metricSep} />
                            <div className={styles.metricCell}>
                                <span className={styles.metricVal}>Clinical</span>
                                <span className={styles.metricLbl}>Hospital Bedside Postings</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Hospital Imagery Duo Frame */}
                    <div className={styles.heroVisualCluster}>
                        {/* Small Stethoscope Frame (Drops from TOP) */}
                        <motion.div
                            className={styles.accentBadgeFrame}
                            variants={fromTop}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
                                alt="Clinical Pharmacist Bedside Care"
                                fill
                                priority
                                sizes="(max-width: 425px) 120px, 180px"
                                className={styles.accentImg}
                            />
                            <div className={styles.accentTag}>
                                <Stethoscope size={14} className={styles.stethIcon} />
                                <span>Ward Rounds</span>
                            </div>
                        </motion.div>

                        {/* Main Hospital Visual (Slides from RIGHT) */}
                        <motion.div
                            className={styles.mainVisualCard}
                            variants={fromRight}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                                alt="Hospital Clinical Ward Pharmacy"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 600px"
                                className={styles.mainImg}
                            />
                            <div className={styles.visualOverlayGradient} />

                            <div className={styles.floatingHighlightBadge}>
                                <Hospital size={18} className={styles.hospitalIcon} />
                                <div>
                                    <span className={styles.floatBadgeTitle}>Multi-Specialty Rotations</span>
                                    <span className={styles.floatBadgeSubtitle}>Partnered Teaching Hospital Postings</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. THREE CLINICAL PILLARS */}
            <section className={styles.pillarsSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.sectionBadge}>PATIENT-FOCUSED DOCTORATE</span>
                        <h2 className={styles.sectionTitle}>The Clinical Pharmacy Advantage</h2>
                        <p className={styles.sectionSubtitle}>
                            Empowering healthcare clinicians who optimize patient medication regimens directly alongside physicians.
                        </p>
                    </motion.div>

                    <div className={styles.threePillarsGrid}>
                        <motion.div
                            className={styles.pillarCard}
                            custom={0.1}
                            variants={riseUp}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <HeartPulse size={26} />
                            </div>
                            <h3 className={styles.pillarTitle}>Direct Patient Bedside Rounds</h3>
                            <p className={styles.pillarDesc}>
                                Active daily participation with attending physicians, evaluating clinical laboratory markers and patient drug responses.
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.pillarCard}
                            custom={0.25}
                            variants={riseUp}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <Activity size={26} />
                            </div>
                            <h3 className={styles.pillarTitle}>Therapeutic Drug Monitoring (TDM)</h3>
                            <p className={styles.pillarDesc}>
                                Dose adjustments for narrow therapeutic index drugs (Vancomycin, Aminoglycosides, Digoxin, Phenytoin) based on serum levels.
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.pillarCard}
                            custom={0.4}
                            variants={riseUp}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.pillarIconBox}>
                                <ShieldAlert size={26} />
                            </div>
                            <h3 className={styles.pillarTitle}>Pharmacovigilance &amp; ADRs</h3>
                            <p className={styles.pillarDesc}>
                                Detecting, recording, and reporting adverse drug events to the Pharmacovigilance Programme of India (PvPI).
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. 6-YEAR STEPPED CURRICULUM ARCHITECTURE */}
            <section className={styles.curriculumSection} id="curriculum">
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.sectionBadge}>PROGRESSION TIMELINE</span>
                        <h2 className={styles.sectionTitle}>6-Year Academic &amp; Residency Roadmap</h2>
                        <p className={styles.sectionSubtitle}>
                            Progress through five years of intensive didactic coursework followed by a full 365-day hospital clinical clerkship.
                        </p>
                    </motion.div>

                    <div className={styles.phaseSelectorRow}>
                        {curriculumBreakdown.map((item, idx) => (
                            <button
                                key={item.phase}
                                type="button"
                                className={`${styles.phaseTabBtn} ${activeTab === idx ? styles.activePhaseTab : ''}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {item.phase}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        className={styles.phaseDisplayBox}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.phaseHeader}>
                            <div>
                                <span className={styles.phaseKicker}>{curriculumBreakdown[activeTab].phase}</span>
                                <h3 className={styles.phaseTitle}>{curriculumBreakdown[activeTab].stage}</h3>
                            </div>
                            <span className={styles.pciPill}>PCI Approved Framework[cite: 7]</span>
                        </div>

                        <div className={styles.coursesGrid}>
                            {curriculumBreakdown[activeTab].courses.map((course, cIdx) => (
                                <div key={cIdx} className={styles.courseItem}>
                                    <CheckCircle2 size={18} className={styles.checkIcon} />
                                    <span>{course}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. CLINICAL ROTATION SUITES */}
            <section className={styles.rotationsSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.sectionBadge}>HOSPITAL POSTINGS</span>
                        <h2 className={styles.sectionTitle}>Key Clinical Department Rotations</h2>
                        <p className={styles.sectionSubtitle}>
                            Hands-on hospital training where scholars evaluate prescriptions, monitor toxicology, and counsel patients.
                        </p>
                    </motion.div>

                    <div className={styles.rotationGrid}>
                        {clinicalRotations.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.dept}
                                    className={styles.rotationCard}
                                    custom={idx * 0.18}
                                    variants={riseUp}
                                    initial={shouldReduceMotion ? false : 'hidden'}
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className={styles.rotationImgWrap}>
                                        <Image
                                            src={item.image}
                                            alt={item.dept}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            className={styles.rotationImg}
                                        />
                                        <span className={styles.rotationTag}>{item.tag}</span>
                                    </div>
                                    <div className={styles.rotationBody}>
                                        <div className={styles.iconCircle}>
                                            <Icon size={20} />
                                        </div>
                                        <h3 className={styles.rotationHeading}>{item.dept}</h3>
                                        <p className={styles.rotationDesc}>{item.focus}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. CAREER DESTINATIONS & ROLES */}
            <section className={styles.careerSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.careerHeroCard}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.careerLeft}>
                            <span className={styles.careerBadge}>GLOBAL HEALTHCARE OPPORTUNITIES</span>
                            <h2 className={styles.careerHeading}>Where Pharm.D Graduates Excel</h2>
                            <p className={styles.careerText}>
                                With direct clinical expertise, our graduates secure key clinical and industry roles in tertiary hospitals, global contract research organizations (CROs), and health authority centers in India and abroad.
                            </p>

                            <div className={styles.rolesPillsWrap}>
                                <span className={styles.roleChip}>Hospital Clinical Pharmacist</span>
                                <span className={styles.roleChip}>ICU Clinical Specialist</span>
                                <span className={styles.roleChip}>Clinical Trial Manager (CRO)</span>
                                <span className={styles.roleChip}>Medical Science Liaison (MSL)</span>
                                <span className={styles.roleChip}>Pharmacovigilance Executive</span>
                                <span className={styles.roleChip}>Clinical Data Associate</span>
                            </div>
                        </div>

                        <div className={styles.careerRight}>
                            <h4 className={styles.recruiterHeader}>Primary Hospital &amp; Industry Ties</h4>
                            <p className={styles.recruiterSub}>Healthcare organizations offering residency and placement:</p>
                            <div className={styles.recruiterGrid}>
                                <div className={styles.recruiterBox}>Apollo Hospitals</div>
                                <div className={styles.recruiterBox}>KIMS Healthcare</div>
                                <div className={styles.recruiterBox}>Manipal Hospitals</div>
                                <div className={styles.recruiterBox}>IQVIA Clinical</div>
                                <div className={styles.recruiterBox}>Novartis Health</div>
                                <div className={styles.recruiterBox}>Parexel International</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. CALL TO ACTION STRIP */}
            <section className={styles.ctaSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.ctaBox}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div>
                            <h3 className={styles.ctaHeading}>Step into Clinical Pharmacy Leadership</h3>
                            <p className={styles.ctaBody}>
                                Learn about EAPCET counseling codes, state quota eligibility, and hospital residency programs.
                            </p>
                        </div>
                        <div className={styles.ctaButtonGroup}>
                            <Link href="/admissions/tuition-fee" className={styles.btnSecondary}>
                                <FileText size={16} />
                                <span>Tuition Fees</span>
                            </Link>
                            <Link href="/admissions/admission-process" className={styles.btnPrimary}>
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