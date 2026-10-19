'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './PedagogyFramework.module.css';

interface Pillar {
    id: string;
    title: string;
    description: string;
}

const leftPillars: Pillar[] = [
    {
        id: 'inquiry',
        title: 'Inquiry & Curiosity',
        description:
            'We nurture lifelong scientific curiosity through hands-on drug formulation, questioning, problem-solving, and laboratory discovery.',
    },
    {
        id: 'competency',
        title: 'Competency & Skills',
        description:
            'Skill development is intentional—analytical instrumentation, clinical compounding, digital literacy, and critical thinking.',
    },
    {
        id: 'wellbeing',
        title: 'Well-being & Mindfulness',
        description:
            'Mind, body, and ethical standards are embedded into daily clinical practice—safe healthcare environments and mental wellness.',
    },
];

const rightPillars: Pillar[] = [
    {
        id: 'conceptual',
        title: 'Conceptual Understanding',
        description:
            'Learners build deep mechanistic understanding using active clinical cases, interdisciplinary connections, and real-life drug therapy.',
    },
    {
        id: 'character',
        title: 'Character & Values',
        description:
            'Every lesson integrates value-based ethics, helping future pharmacists cultivate empathy, patient safety, integrity, and cGMP compliance.',
    },
];

const PillarBadgeIcon = () => (
    <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 19.5v-13A2.5 2.5 0 0 1 6.5 4H20v14H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 7.5h10" />
        <path d="M6 11h10" />
        <path d="M12 2a3.5 3.5 0 0 0-2 6.3V10h4V8.3A3.5 3.5 0 0 0 12 2z" />
    </svg>
);

// Heading Variants: Slide Down from Top
const headingVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Student Graphic: Slides from Bottom to Top
const studentVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Left Column Pillars: Slide from Left to Right
const leftTextVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// Right Column Pillars: Slide from Right to Left
const rightTextVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function PedagogyFramework() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrapper} aria-label="Pedagogy Framework">
            {/* 1. Top Section Header */}
            <motion.div
                className={styles.headerBlock}
                variants={shouldReduceMotion ? undefined : headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
            >

                <h2 className={styles.mainHeading}>
                    Our Core Pillars of <span className={styles.headingHighlight}>Pharmaceutical Learning</span>
                </h2>

            </motion.div>

            {/* 2. Student Image Backdrop (Bottom to Top) */}
            <motion.div
                className={styles.bgContainer}
                variants={shouldReduceMotion ? undefined : studentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
            >
                <Image
                    src="/backgrounds/student_bg.png"
                    alt="JIPS Pharmacy Scholar Foundation"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.bgImage}
                />
            </motion.div>

            {/* 3. Content Pillars Grid */}
            <div className={styles.container}>
                {/* Left Column: Slides from Left */}
                <div className={styles.leftColumn}>
                    {leftPillars.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.pillarRowLeft}
                            custom={index * 0.15}
                            variants={shouldReduceMotion ? undefined : leftTextVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.25 }}
                        >
                            <div className={styles.textContentLeft}>
                                <h3 className={styles.pillarTitle}>{item.title}</h3>
                                <p className={styles.pillarDescription}>{item.description}</p>
                            </div>
                            <div className={styles.iconRingOuter}>
                                <div className={styles.iconDiskInner}>
                                    <PillarBadgeIcon />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Center Space: Preserves student graphic */}
                <div className={styles.centerSpacePreserver} />

                {/* Right Column: Slides from Right */}
                <div className={styles.rightColumn}>
                    {rightPillars.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.pillarRowRight}
                            custom={0.15 + index * 0.15}
                            variants={shouldReduceMotion ? undefined : rightTextVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.25 }}
                        >
                            <div className={styles.iconRingOuter}>
                                <div className={styles.iconDiskInner}>
                                    <PillarBadgeIcon />
                                </div>
                            </div>
                            <div className={styles.textContentRight}>
                                <h3 className={styles.pillarTitle}>{item.title}</h3>
                                <p className={styles.pillarDescription}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}