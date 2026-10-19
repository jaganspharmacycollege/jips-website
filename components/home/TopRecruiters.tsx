'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import styles from './TopRecruiters.module.css';

interface RecruiterLogo {
    id: string;
    name: string;
    logo: string;
}

const row1Recruiters: RecruiterLogo[] = [
    { id: 'r1-1', name: 'Pfizer Healthcare', logo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-2', name: "Dr. Reddy's Laboratories", logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-3', name: 'Sun Pharmaceutical', logo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-4', name: 'Cipla Therapeutics', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-5', name: 'Novartis Healthcare', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-6', name: 'Biocon Biologics', logo: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-7', name: 'AstraZeneca Clinical', logo: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=600&q=80' },
    { id: 'r1-8', name: 'Torrent Pharmaceuticals', logo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80' },
];

const row2Recruiters: RecruiterLogo[] = [
    { id: 'r2-1', name: 'Apollo Hospitals Clinical', logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-2', name: 'Hetero Drugs Research', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-3', name: 'Lupin Pharmaceuticals', logo: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-4', name: 'Aurobindo Pharma', logo: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-5', name: 'GlaxoSmithKline R&D', logo: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-6', name: 'Glenmark Pharmaceuticals', logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-7', name: 'Zydus Lifesciences', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
    { id: 'r2-8', name: 'Divis Laboratories', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
];

const row3Recruiters: RecruiterLogo[] = [
    { id: 'r3-1', name: 'Fortis Healthcare', logo: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-2', name: 'Mankind Pharma', logo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-3', name: 'Biocon Biologics', logo: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-4', name: 'Sun Pharmaceutical', logo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-5', name: 'Cipla Therapeutics', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-6', name: 'Novartis Healthcare', logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-7', name: 'Pfizer Healthcare', logo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { id: 'r3-8', name: "Dr. Reddy's Laboratories", logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 26, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TopRecruiters() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const shouldReduceMotion = useReducedMotion();

    return (
        <section ref={sectionRef} className={styles.sectionWrapper}>
            <div className={styles.radialGlow} />

            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header Block */}
                <motion.div className={styles.headerBlock} variants={headerVariants}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.badgeDot} />
                        <span className={styles.badgeText}>Industry Alliances</span>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        Our Leading Placement &amp; Corporate Partners
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Global healthcare organizations, high-throughput analytical laboratories, and formulation giants that actively recruit our graduates.
                    </p>
                </motion.div>

                {/* 100% Flat Gapless Dual-Track Marquee */}
                <motion.div
                    className={styles.flatStage}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0 }
                            : shouldReduceMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Row 1: Forward Direction (Left to Right) */}
                    <div className={styles.marqueeRow}>
                        <div className={`${styles.trackGroup} ${styles.animateForward}`}>
                            <div className={styles.trackList}>
                                {row1Recruiters.map((item, idx) => (
                                    <div key={item.id} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                priority={idx < 4}
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.trackList} aria-hidden="true">
                                {row1Recruiters.map((item) => (
                                    <div key={`dup-${item.id}`} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Reverse Direction (Right to Left) */}
                    <div className={styles.marqueeRow}>
                        <div className={`${styles.trackGroup} ${styles.animateReverse}`}>
                            <div className={styles.trackList}>
                                {row2Recruiters.map((item, idx) => (
                                    <div key={item.id} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                priority={idx < 4}
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.trackList} aria-hidden="true">
                                {row2Recruiters.map((item) => (
                                    <div key={`dup-${item.id}`} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Forward Direction (Left to Right) */}
                    <div className={styles.marqueeRow}>
                        <div className={`${styles.trackGroup} ${styles.animateForward}`}>
                            <div className={styles.trackList}>
                                {row3Recruiters.map((item, idx) => (
                                    <div key={item.id} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                priority={idx < 4}
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.trackList} aria-hidden="true">
                                {row3Recruiters.map((item) => (
                                    <div key={`dup-${item.id}`} className={styles.companyCard}>
                                        <div className={styles.cardImageInner}>
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                loading="eager"
                                                sizes="(max-width: 768px) 180px, 240px"
                                                className={styles.logoImg}
                                            />
                                            <div className={styles.cardGlassOverlay} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Side Vignettes */}
                    <div className={styles.vignetteLeft} />
                    <div className={styles.vignetteRight} />
                </motion.div>

                {/* Corporate Trust Strip */}
                <div className={styles.trustBanner}>
                    <div className={styles.trustMetric}>
                        <span className={styles.metricVal}>65+</span>
                        <span className={styles.metricLbl}>Active Recruiters</span>
                    </div>
                    <div className={styles.trustDivider} />
                    <div className={styles.trustMetric}>
                        <span className={styles.metricVal}>100%</span>
                        <span className={styles.metricLbl}>Compliant On-Campus Drives</span>
                    </div>
                    <div className={styles.trustDivider} />
                    <div className={styles.trustMetric}>
                        <span className={styles.metricVal}>14+ Yrs</span>
                        <span className={styles.metricLbl}>Corporate Network Trust</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}