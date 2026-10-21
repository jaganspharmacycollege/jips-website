'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './TrainingPlacementCell.module.css';

const trainingPhases = [
    {
        phase: 'Phase 01',
        tier: 'Aptitude & Verbal Mastery',
        duration: 'Semester 5 & 6',
        desc: 'Quantitative arithmetic, logical reasoning, professional email etiquette, and GD presentation practice.',
    },
    {
        phase: 'Phase 02',
        tier: 'Technical & cGMP Audits',
        duration: 'Semester 7',
        desc: 'Intensive review of pharmacopeial testing, instrumental HPLC operations, and regulatory submission guidelines.',
    },
    {
        phase: 'Phase 03',
        tier: 'Corporate Mock Interviews',
        duration: 'Semester 7 & 8',
        desc: 'Simulated HR interviews conducted by visiting corporate HR executives from major pharmaceutical firms.',
    },
    {
        phase: 'Phase 04',
        tier: 'On-Campus Placement Drives',
        duration: 'Semester 8',
        desc: 'Direct written assessments, technical interview panels, and on-spot appointment letter distributions.',
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

export default function TrainingPlacementCell() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Placement Cell Roadmap">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CAREER READINESS ROADMAP</span>
                    <h2 className={styles.sectionTitle}>Training &amp; Placement Cell (T&amp;P)</h2>
                    <p className={styles.sectionSubtext}>
                        Our structured 4-phase grooming curriculum transforms pharmacy scholars into industry-ready clinical scientists.
                    </p>
                </motion.div>

                <div className={styles.roadmapGrid}>
                    {trainingPhases.map((phase, idx) => (
                        <motion.div
                            key={phase.phase}
                            className={styles.phaseCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.phaseTag}>{phase.phase}</span>
                                <span className={styles.durationTag}>{phase.duration}</span>
                            </div>

                            <h3 className={styles.phaseHeading}>{phase.tier}</h3>
                            <p className={styles.phaseDesc}>{phase.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}