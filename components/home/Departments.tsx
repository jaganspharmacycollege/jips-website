'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import styles from './Departments.module.css';

interface Department {
    id: number;
    title: string;
    code: string;
    degree: string;
    description: string;
    image: string;
    link: string;
}

const departmentsData: Department[] = [
    {
        id: 0,
        title: 'Pharmaceutics',
        code: 'DEPT-PCEUT',
        degree: 'B. Pharm / M. Pharm',
        description:
            'Focusing on dosage form design, modern drug delivery technologies, bioavailability enhancement, and industrial manufacturing machinery.',
        image:
            'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
        link: '/departments/pharmaceutics',
    },
    {
        id: 1,
        title: 'Pharmacology',
        code: 'DEPT-PCOL',
        degree: 'B. Pharm / M. Pharm',
        description:
            'Investigation of cellular drug actions, clinical therapeutics, screening models, pharmacokinetics, and toxicological assessments.',
        image:
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        link: '/departments/pharmacology',
    },
    {
        id: 2,
        title: 'Pharmaceutical Chemistry',
        code: 'DEPT-PCHEM',
        degree: 'B. Pharm / M. Pharm',
        description:
            'Advanced synthetic chemistry, molecular modeling, rational drug development, analytical quality assurance, and spectral analysis.',
        image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        link: '/departments/pharmaceutical-chemistry',
    },
    {
        id: 3,
        title: 'Pharmacy Practice & Pharm.D',
        code: 'DEPT-PRAC',
        degree: 'Pharm. D / Clinical Clerkship',
        description:
            'Hospital wards training, patient profile review, adverse drug reaction monitoring, and therapeutic drug optimization in clinical settings.',
        image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        link: '/departments/pharmacy-practice',
    },
    {
        id: 4,
        title: 'Pharmacognosy & Phytomedicine',
        code: 'DEPT-PCOG',
        degree: 'Natural Medicine & Extraction',
        description:
            'Standardization of herbal therapeutics, isolation of natural bioactive constituents, secondary metabolites, and phytochemistry research.',
        image:
            'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
        link: '/departments/pharmacognosy',
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
    const shouldReduceMotion = useReducedMotion();
    const total = departmentsData.length;

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 2000);
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
                    <span className={styles.eyebrow}>Academic Divisions</span>
                    <h2 className={styles.sectionTitle}>
                        Specialized Departments &amp; Laboratories
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        State-of-the-art facilities driving formulation science, computational drug design, and patient healthcare.
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
                                        <span className={styles.deptCode}>{dept.code}</span>
                                        <h3 className={styles.deptTitle}>{dept.title}</h3>
                                        <p className={styles.deptDesc}>{dept.description}</p>

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