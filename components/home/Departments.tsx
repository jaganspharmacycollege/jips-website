'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import styles from './Departments.module.css';

interface Department {
    id: number;
    title: string;
    hod: string;
    degree: string;
    tagline: string;
    description: string;
    pills: string[];
    image: string;
    link: string;
}

// Five Core Departments from Section 2.4 - Department Highlights Showcase
const departmentsData: Department[] = [
    {
        id: 0,
        title: 'Pharmaceutics',
        hod: 'Dr P. Durga Seshu Priya (HOD)',
        degree: 'B.Pharm • Pharm.D',
        tagline: 'Formulation science and drug delivery',
        description:
            'Focuses on converting drug substances into safe, stable dosage forms. Students master formulation technology, physical pharmacy, biopharmaceutics, and cGMP industrial manufacturing.',
        pills: ['Tablets & Capsules', 'Biopharmaceutics', 'cGMP Practice'],
        image: '/departments/pharmaceutics.jpg',
        link: '/departments#pharmaceutics',
    },
    {
        id: 1,
        title: 'Pharmacology',
        hod: 'Mrs K. Sushmitha (HOD)',
        degree: 'B.Pharm • Pharm.D',
        tagline: 'Drug action, safety and screening',
        description:
            'Studies how drugs interact with biological systems and evaluates their therapeutic safety. Combines theory with ethical experimental screening, pharmacokinetics, and pharmacovigilance.',
        pills: ['Drug Action', 'Preclinical Screening', 'Pharmacovigilance'],
        image: '/departments/pharmacology.jpg',
        link: '/departments#pharmacology',
    },
    {
        id: 2,
        title: 'Pharmaceutical Chemistry',
        hod: 'Dr S. Shobha (HOD)',
        degree: 'B.Pharm • Pharm.D',
        tagline: 'Drug design, synthesis and analysis',
        description:
            'Covers organic synthesis, rational molecular drug design, and structure–activity relationships. Provides rigorous hands-on training in UV-Vis spectroscopy, chromatography, and drug quality control.',
        pills: ['Medicinal Chemistry', 'UV & HPLC Assay', 'In Silico Design'],
        image: '/departments/pharmaceutical-chemistry.jpg',
        link: '/departments#pharmaceutical-chemistry',
    },
    {
        id: 3,
        title: 'Pharmacognosy',
        hod: 'Dr J V Suresh (Principal & HOD)',
        degree: 'B.Pharm • Pharm.D',
        tagline: 'Herbal drugs and natural products',
        description:
            'Deals with natural medicinal compounds derived from botanical sources. Students identify, evaluate, and extract herbal bioactives through transverse microscopy and living medicinal plant specimens.',
        pills: ['Herbal Drugs', 'Phytochemistry', 'Microscopy Lab'],
        image: '/departments/pharmacognosy.jpg',
        link: '/departments#pharmacognosy',
    },
    {
        id: 4,
        title: 'Pharmacy Practice / Pharm.D',
        hod: 'Dr P. Narayana Swamy (Vice Principal & HOD)',
        degree: 'Pharm.D • B.Pharm',
        tagline: 'Clinical and hospital-based pharmacy',
        description:
            'Prepares students for patient-centred hospital and community roles. Encompasses daily clinical ward clerkships, medication safety reviews, bedside patient counseling, and therapeutic drug monitoring.',
        pills: ['Hospital Clerkship', 'Patient Counseling', 'Clinical Safety'],
        image: '/departments/pharmacy-practice.jpg',
        link: '/departments#pharmacy-practice',
    },
];

// Staggered Container Sequence
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

// Smooth Slide-Up with Optical Blur Clearance
const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
        filter: 'blur(4px)',
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Departments() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isPaused, setIsPaused] = useState(false);
    const total = departmentsData.length;

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 2500);
        return () => clearInterval(interval);
    }, [isPaused, total]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const getCardStyle = (index: number) => {
        let diff = index - activeIndex;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const absDiff = Math.abs(diff);

        if (absDiff > 2) {
            return {
                opacity: 0,
                pointerEvents: 'none' as const,
                transform: `translateX(${diff * 220}px) scale(0.6) translateZ(-400px)`,
                zIndex: 0,
            };
        }

        const translateX = diff * 250;
        const rotateY = diff * -24;
        const translateZ = -absDiff * 160;
        const scale = 1 - absDiff * 0.12;
        const opacity = 1 - absDiff * 0.28;
        const zIndex = 10 - absDiff;

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity,
            zIndex,
        };
    };

    return (
        <section
            className={styles.departmentsSection}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Header Block with in-view animation */}
                <motion.div className={styles.headingBlock} variants={itemVariants}>
                    <span className={styles.eyebrow}>Five Departments | Learning, Research and Professional Practice</span>
                    <h2 className={styles.sectionTitle}>
                        Five Core Academic Departments
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        JIPS offers its pharmacy programmes through five core departments. Each department combines classroom teaching with practical laboratory training, so that students gain the scientific knowledge and hands-on skills needed for industry, hospitals, research and regulatory careers.
                    </p>
                </motion.div>

                {/* 3D Stage Carousel with in-view animation */}
                <motion.div className={styles.stageViewport} variants={itemVariants}>
                    <div className={styles.cardsTrack}>
                        {departmentsData.map((dept, index) => {
                            const isActive = index === activeIndex;
                            const cardStyle = getCardStyle(index);

                            return (
                                <div
                                    key={dept.id}
                                    className={`${styles.card3D} ${isActive ? styles.activeCard : ''}`}
                                    style={cardStyle}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={styles.cardImageContainer}>
                                        <Image
                                            src={dept.image}
                                            alt={dept.title}
                                            fill
                                            priority={index === 2}
                                            sizes="(max-width: 768px) 300px, 380px"
                                            className={styles.cardImage}
                                        />
                                        <div className={styles.imageOverlay} />
                                        <span className={styles.degreeTag}>{dept.degree}</span>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <span className={styles.deptHead}>
                                            <UserCheck size={12} />
                                            {dept.hod}
                                        </span>
                                        <h3 className={styles.deptTitle}>{dept.title}</h3>
                                        <span className={styles.deptTagline}>{dept.tagline}</span>
                                        <p className={styles.deptDesc}>{dept.description}</p>

                                        <div className={styles.pillsRow}>
                                            {dept.pills.map((pill, i) => (
                                                <span key={i} className={styles.pillTag}>
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href={dept.link} className={styles.exploreLink}>
                                            <span>Explore Department</span>
                                            <svg
                                                className={styles.arrowIcon}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Controls Bar with in-view animation */}
                <motion.div className={styles.controlsBar} variants={itemVariants}>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className={styles.navBtn}
                        aria-label="Previous Department"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div className={styles.dotsGroup}>
                        {departmentsData.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        className={styles.navBtn}
                        aria-label="Next Department"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
