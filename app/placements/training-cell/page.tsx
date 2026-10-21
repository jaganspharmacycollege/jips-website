'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { CheckCircle2, Mail } from 'lucide-react';
import styles from './page.module.css';

const trainingPhases = [
    {
        phase: 'Phase 01',
        stage: 'Aptitude & Verbal Mastery',
        timeline: 'Semester 5 & 6',
        desc: 'Intensive quantitative aptitude, logical reasoning puzzles, verbal communication drills, and corporate group discussion simulations.',
        outcomes: ['Speed-math shortcuts for written tests', 'Mock group discussions on healthcare topics', 'Professional resume drafting & LinkedIn branding'],
    },
    {
        phase: 'Phase 02',
        stage: 'Technical & cGMP Regulatory Audits',
        timeline: 'Semester 7',
        desc: 'Hands-on refresher in pharmacopeial monograph testing, HPLC instrument operating protocols, and ICH Q2(R1) method validation criteria.',
        outcomes: ['Instrumental troubleshooting (HPLC / UV-Vis)', 'USFDA & cGMP documentation standards', 'Quality by Design (QbD) scale-up essentials'],
    },
    {
        phase: 'Phase 03',
        stage: 'Corporate Mock Interview Panels',
        timeline: 'Semester 7 & 8',
        desc: 'Simulated 1-on-1 technical and HR interview sessions conducted by visiting corporate HR executives and pharmaceutical industry veterans.',
        outcomes: ['Personalized feedback on technical depth', 'Body language and stress management tactics', 'Salary and relocation negotiation guidance'],
    },
    {
        phase: 'Phase 04',
        stage: 'On-Campus Placement Drives',
        timeline: 'Semester 8',
        desc: 'Full-day recruitment drives with written testing, technical shortlisting panels, and on-spot appointment letter distributions.',
        outcomes: ['Multi-tier placement opportunities', 'Pre-placement talk (PPT) interactive Q&A', 'Immediate corporate joining roadmap'],
    },
];

const cellCoordinators = [
    {
        name: 'Dr. K. Ramesh Babu',
        role: 'Training & Placement Officer (TPO)',
        qual: 'M.Pharm, Ph.D. (Pharmaceutics)',
        email: 'placements@jips.edu.in',
        phone: '+91 98480 12345',
        scope: 'Directing corporate relations, campus recruitment drives, and industry placement MoUs.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Dr. V. Santhosh Kumar',
        role: 'Clinical Placement Coordinator',
        qual: 'Pharm.D, Ph.D., Clinical Specialist',
        email: 'clinicalplacements@jips.edu.in',
        phone: '+91 98480 23456',
        scope: 'Coordinating hospital ward residency placements, CRO appointments, and pharmacovigilance ties.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function TrainingCellPage() {
    const shouldReduceMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.pageRoot}>
            {/* 1. HERO BANNER */}
            <section ref={heroRef} className={styles.heroSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : heroY,
                            opacity: shouldReduceMotion ? 1 : heroOpacity,
                        }}
                    >
                        <span className={styles.menuPath}>Menu path: Placements &rsaquo; Training &amp; Placement Cell</span>
                        <h1 className={styles.heroTitle}>Training &amp; Placement Cell (T&amp;P)</h1>
                        <p className={styles.heroLead}>
                            Guiding student career transformations through industry-aligned aptitude training, technical mock interviews, and corporate campus placement drives connecting scholars with global pharmaceutical employers.
                        </p>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>100%</strong>
                                <span className={styles.statLbl}>Placement Assistance</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>4 Phases</strong>
                                <span className={styles.statLbl}>Career Readiness Program</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>₹8.5 LPA</strong>
                                <span className={styles.statLbl}>Highest Package</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. FOUR-PHASE TRAINING CURRICULUM */}
            <section className={styles.roadmapSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>CAREER EMPOWERMENT</span>
                        <h2 className={styles.sectionHeading}>4-Phase Career Readiness Framework</h2>
                        <p className={styles.sectionSubtext}>
                            Progressively structured modules ensuring every student masters aptitude, technical theory, and executive corporate interviews.
                        </p>
                    </motion.div>

                    <div className={styles.phasesGrid}>
                        {trainingPhases.map((phase, idx) => (
                            <motion.article
                                key={phase.phase}
                                className={styles.phaseCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.phaseTopBar}>
                                    <span className={styles.phasePill}>{phase.phase}</span>
                                    <span className={styles.timelinePill}>{phase.timeline}</span>
                                </div>

                                <h3 className={styles.phaseTitle}>{phase.stage}</h3>
                                <p className={styles.phaseDesc}>{phase.desc}</p>

                                <div className={styles.outcomesBox}>
                                    <h4 className={styles.outcomesHeading}>Key Outcomes:</h4>
                                    <ul className={styles.outcomesList}>
                                        {phase.outcomes.map((item, oIdx) => (
                                            <li key={oIdx}>
                                                <CheckCircle2 size={15} className={styles.checkIcon} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CELL COORDINATORS & LEADERSHIP */}
            <section className={styles.coordinatorsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>PLACEMENT LEADERSHIP</span>
                        <h2 className={styles.sectionHeading}>T&amp;P Cell Coordinators</h2>
                        <p className={styles.sectionSubtext}>
                            Dedicated faculty placement officers liaising with corporate recruiters, clinical hospitals, and research laboratories.
                        </p>
                    </motion.div>

                    <div className={styles.coordinatorsGrid}>
                        {cellCoordinators.map((tpo, idx) => (
                            <motion.div
                                key={tpo.name}
                                className={styles.coordCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.coordImgWrap}>
                                    <Image
                                        src={tpo.image}
                                        alt={tpo.name}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 220px"
                                        className={styles.coordPhoto}
                                    />
                                    <span className={styles.coordBadge}>{tpo.role}</span>
                                </div>

                                <div className={styles.coordInfo}>
                                    <h3 className={styles.coordName}>{tpo.name}</h3>
                                    <span className={styles.coordQual}>{tpo.qual}</span>
                                    <p className={styles.coordScope}>{tpo.scope}</p>

                                    <div className={styles.coordContact}>
                                        <span className={styles.contactEmail}>
                                            <Mail size={14} /> {tpo.email}
                                        </span>
                                        <span className={styles.contactPhone}>{tpo.phone}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}