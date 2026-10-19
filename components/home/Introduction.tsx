'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import styles from './Introduction.module.css';

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

const visualVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -35,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(3px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Introduction() {
    const sectionRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section ref={sectionRef} className={styles.introSection}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Left Side: Photo Composition & Heritage */}
                <motion.div
                    className={styles.visualCol}
                    variants={visualVariants}
                >
                    <div className={styles.frameWrapper}>
                        <div className={styles.imageBox}>
                            <Image
                                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
                                alt="Pharmaceutical Research and Laboratory Facility"
                                fill
                                priority
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
                                className={styles.introImage}
                            />
                            <div className={styles.imageOverlay} />
                        </div>

                        {/* Architectural Accent Box */}
                        <motion.div
                            className={styles.accentBadge}
                            variants={itemVariants}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                            transition={{ duration: 0.25 }}
                        >
                            <span className={styles.badgeYear}>2005</span>
                            <span className={styles.badgeLabel}>Year Established</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Editorial Context & Key Information */}
                <motion.div
                    className={styles.contentCol}
                    variants={contentVariants}
                >
                    <motion.div className={styles.eyebrowGroup} variants={itemVariants}>
                        <span className={styles.eyebrowLine} />
                        <span className={styles.eyebrowText}>Welcome to Jagan&apos;s Institute</span>
                    </motion.div>

                    <motion.h2 className={styles.headline} variants={itemVariants}>
                        A benchmark of academic rigor in pharmaceutical sciences.
                    </motion.h2>

                    <motion.p className={styles.leadParagraph} variants={itemVariants}>
                        Established in 2005 at Nellore, Andhra Pradesh, Jagan&apos;s Institute of Pharmaceutical Sciences is an autonomous center for professional healthcare education, drug discovery research, and clinical pharmacy practice.
                    </motion.p>

                    <motion.p className={styles.bodyParagraph} variants={itemVariants}>
                        Operating under statutory approvals from the Pharmacy Council of India (PCI) and affiliated with Jawaharlal Nehru Technological University Anantapur (JNTUA), the institution combines clinical hospital clerkships with formulation laboratories.
                    </motion.p>

                    {/* Statutory Credential Badges Grid */}
                    <motion.div className={styles.credentialsGrid} variants={itemVariants}>
                        <div className={styles.credItem}>
                            <span className={styles.credDot} />
                            <div>
                                <strong className={styles.credTitle}>PCI Approved</strong>
                                <p className={styles.credSubtitle}>Pharmacy Council of India, New Delhi</p>
                            </div>
                        </div>

                        <div className={styles.credItem}>
                            <span className={styles.credDot} />
                            <div>
                                <strong className={styles.credTitle}>JNTUA Affiliated</strong>
                                <p className={styles.credSubtitle}>Autonomous Curriculum &amp; Standards</p>
                            </div>
                        </div>

                        <div className={styles.credItem}>
                            <span className={styles.credDot} />
                            <div>
                                <strong className={styles.credTitle}>NAAC Accredited</strong>
                                <p className={styles.credSubtitle}>Quality Assured Higher Education</p>
                            </div>
                        </div>

                        <div className={styles.credItem}>
                            <span className={styles.credDot} />
                            <div>
                                <strong className={styles.credTitle}>AP EAPCET &amp; PGECET</strong>
                                <p className={styles.credSubtitle}>State Counseling Codes: JAGN &amp; JAGN1</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Link */}
                    <motion.div className={styles.actionRow} variants={itemVariants}>
                        <Link href="/about" className={styles.discoverBtn}>
                            <span>Read Institutional Profile</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}