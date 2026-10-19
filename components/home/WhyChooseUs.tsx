'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

interface PillarAdvantage {
    id: string;
    icon: React.ReactNode;
    title: string;
    summary: string;
    stat: string;
    statLabel: string;
}

interface Testimonial {
    id: string;
    name: string;
    degree: string;
    roleCompany: string;
    batch: string;
    avatar: string;
    quote: string;
    badge: string;
}

const advantages: PillarAdvantage[] = [

    {
        id: 'labs',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31L4.69 19.3A2 2 0 006.45 22h11.1a2 2 0 001.76-2.7L14 9.31V2" />
                <path d="M8.5 2h7" />
                <path d="M14 9.3h-4" />
            </svg>
        ),
        title: 'Central Instrumentation & R&D Labs',
        summary: 'Dedicated analytical facilities equipped with reverse-phase HPLC, UV-Vis Spectrophotometers, and dissolution apparatus.',
        stat: '18+',
        statLabel: 'Patents & Research Grants',
    },
    {
        id: 'clinical',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
        title: 'Hospital Ward & Bedside Pharmacotherapy',
        summary: 'Direct clinical clerkship programs providing real-world therapeutic drug monitoring and ADR screening experiences.',
        stat: '750+',
        statLabel: 'Bed Multi-Speciality Tie-ups',
    },
    {
        id: 'placements',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
        ),
        title: 'Consistent High-Package Placement Track',
        summary: 'Proactive corporate campus drives ensuring top career starts in multinational drug formulation and QC corporations.',
        stat: '₹7.0 LPA',
        statLabel: 'Highest Package Offered',
    },
];

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Ananya Sharma',
        degree: 'Pharm.D (Doctor of Pharmacy)',
        roleCompany: 'Clinical Pharmacist @ Apollo Health City',
        batch: 'Batch 2024',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        quote: 'The hospital ward rotations and daily drug therapy rounds helped me transition smoothly from academic theory to direct patient healthcare with full confidence.',
        badge: 'Campus Placed',
    },
    {
        id: '2',
        name: 'K. Rajesh Varma',
        degree: 'M.Pharm (Pharmaceutics)',
        roleCompany: 'R&D Formulation Scientist @ Dr. Reddy’s',
        batch: 'Batch 2023',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        quote: 'Having round-the-clock access to advanced HPLC instrumentation and guidance from experienced faculty made my final-year dissertation publication possible in an indexed journal.',
        badge: 'Research Fellow',
    },
    {
        id: '3',
        name: 'P. Sai Teja',
        degree: 'B.Pharm (Bachelor of Pharmacy)',
        roleCompany: 'Quality Assurance Executive @ Hetero Drugs',
        batch: 'Batch 2024',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        quote: 'The rigorous industrial training modules, mock interviews, and regulatory compliance workshops conducted by the placement cell directly cleared my first campus technical interview.',
        badge: 'Corporate Recruit',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
        filter: 'blur(4px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const shouldReduceMotion = useReducedMotion();

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handleNextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentStory = testimonials[activeTestimonial];

    return (
        <section ref={sectionRef} className={styles.sectionWrapper}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Editorial Section Header */}
                <motion.div className={styles.headerBlock} variants={itemVariants}>
                    <div className={styles.eyebrowRow}>
                        <span className={styles.eyebrowLine} />
                        <span className={styles.eyebrowText}>The Institutional Advantage</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Why Choose Our College of Pharmaceutical Sciences
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        A premier academic environment where modern drug discovery, hospital-interlinked clinical clerkship, and industry placements converge.
                    </p>
                </motion.div>

                {/* Unique Split Interactive Showcase */}
                <div className={styles.showcaseGrid}>

                    {/* Left Column: 4 Institutional Pillars */}
                    <div className={styles.pillarsColumn}>
                        {advantages.map((adv) => (
                            <motion.div
                                key={adv.id}
                                className={styles.advantageCard}
                                variants={itemVariants}
                                whileHover={shouldReduceMotion ? {} : { x: 4, transition: { duration: 0.2 } }}
                            >
                                <div className={styles.cardHeaderRow}>
                                    <div className={styles.iconCircle}>{adv.icon}</div>
                                    <div className={styles.cardStatBadge}>
                                        <span className={styles.statVal}>{adv.stat}</span>
                                        <span className={styles.statLbl}>{adv.statLabel}</span>
                                    </div>
                                </div>

                                <h3 className={styles.advantageTitle}>{adv.title}</h3>
                                <p className={styles.advantageSummary}>{adv.summary}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Dynamic Student Spotlight Showcase */}
                    <motion.div className={styles.spotlightColumn} variants={itemVariants}>
                        <div className={styles.spotlightCard}>

                            {/* Header inside Spotlight */}
                            <div className={styles.spotlightTopRow}>
                                <div className={styles.badgeWrapper}>
                                    <span className={styles.badgePulseDot} />
                                    <span className={styles.badgeTag}>{currentStory.badge}</span>
                                </div>
                                <span className={styles.batchTag}>{currentStory.batch}</span>
                            </div>

                            {/* Big Quote */}
                            <blockquote className={styles.quoteBlock}>
                                <svg className={styles.quoteSvg} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className={styles.quoteText}>{currentStory.quote}</p>
                            </blockquote>

                            {/* Student Identity Footer */}
                            <div className={styles.authorProfileRow}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src={currentStory.avatar}
                                        alt={currentStory.name}
                                        fill
                                        sizes="64px"
                                        className={styles.avatarImg}
                                    />
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>{currentStory.name}</h4>
                                    <p className={styles.authorDegree}>{currentStory.degree}</p>
                                    <p className={styles.authorRole}>{currentStory.roleCompany}</p>
                                </div>
                            </div>

                            {/* Testimonial Navigators */}
                            <div className={styles.navigationControls}>
                                <div className={styles.dotsTrack}>
                                    {testimonials.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            type="button"
                                            onClick={() => setActiveTestimonial(dotIdx)}
                                            className={`${styles.navDot} ${dotIdx === activeTestimonial ? styles.activeDot : ''}`}
                                            aria-label={`Go to testimonial ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>

                                <div className={styles.arrowBtnGroup}>
                                    <button
                                        type="button"
                                        onClick={handlePrevTestimonial}
                                        className={styles.ctrlBtn}
                                        aria-label="Previous Testimonial"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextTestimonial}
                                        className={styles.ctrlBtn}
                                        aria-label="Next Testimonial"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Proof Strip below spotlight */}
                        <div className={styles.verificationBanner}>
                            <div className={styles.verifyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <p className={styles.verifyText}>
                                <strong>100% Verified Graduate Alumni</strong> across hospitals, clinical research organizations, and manufacturing hubs globally.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}