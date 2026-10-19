'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from 'framer-motion';
import styles from './ResearchInnovation.module.css';

interface Pillar {
    id: string;
    tag: string;
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
    image: string;
}

const researchPillars: Pillar[] = [
    {
        id: 'formulation',
        tag: 'Nano Delivery Systems',
        title: 'Targeted Formulation & Liposomal Kinetics',
        description:
            'Engineered sustained-release particulate matrices and transdermal permeation arrays designed to stabilize bioactive chemical entities.',
        metric: '18+',
        metricLabel: 'Patents & Designs Filed',
        image:
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'analytics',
        tag: 'Spectroscopy & QC',
        title: 'High-Throughput Chromatographic Validation',
        description:
            'Continuous analytical method validation via reverse-phase HPLC and precision UV-Vis spectrophotometry adhering to ICH Q2(R1) standards.',
        metric: '120+',
        metricLabel: 'Peer-Reviewed Research Papers',
        image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'clinical',
        tag: 'Translational Science',
        title: 'Therapeutic Drug Monitoring & In-Silico Docking',
        description:
            'In-hospital patient pharmacotherapy surveillance tied directly to computational macromolecular receptor-binding simulations.',
        metric: '₹45L+',
        metricLabel: 'Extramural Research Grants',
        image:
            'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    },
];

export default function ResearchInnovation() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Mouse tilt tracking (Desktop only, passive)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (isTouchDevice || shouldReduceMotion) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePos({
            x: (clientX / innerWidth - 0.5) * 20,
            y: (clientY / innerHeight - 0.5) * 20,
        });
    };

    // 1. Scroll bindings linked directly to the section container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 24,
        restDelta: 0.001,
    });

    // Layer 1: Background slow translateY (0.2x–0.3x) + scale zoom-out
    const bgTranslateY = useTransform(smoothProgress, [0, 1], ['-10%', '15%']);
    const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.12, 1.04, 0.98]);

    // Layer 2: Midground orbs & decorative vectors moving at intermediate speed (~0.5x)
    const orb1Y = useTransform(smoothProgress, [0, 1], [-100, 120]);
    const orb2Y = useTransform(smoothProgress, [0, 1], [80, -110]);
    const gridY = useTransform(smoothProgress, [0, 1], [-40, 60]);

    // Spring smoothed mouse tracking
    const springMouseX = useSpring(mousePos.x, { stiffness: 120, damping: 20 });
    const springMouseY = useSpring(mousePos.y, { stiffness: 120, damping: 20 });

    return (
        <section
            ref={containerRef}
            className={styles.section}
            onMouseMove={handleMouseMove}
        >
            {/* ===================================================================
          LAYER 1: Background Architecture (Slow Translation + Scale Out)
          =================================================================== */}
            <motion.div
                className={styles.backgroundLayer}
                style={{
                    y: shouldReduceMotion ? 0 : bgTranslateY,
                    scale: shouldReduceMotion ? 1 : bgScale,
                }}
            >
                <div className={styles.ambientBaseGradient} />
            </motion.div>

            {/* ===================================================================
          LAYER 2: Midground (Floating Glowing Orbs & Tech Grid Patterns)
          =================================================================== */}
            <div className={styles.midgroundLayer}>
                {/* Deep Amber Radial Orb */}
                <motion.div
                    className={styles.glowingOrbAmber}
                    style={{
                        y: shouldReduceMotion ? 0 : orb1Y,
                        x: shouldReduceMotion ? 0 : springMouseX,
                    }}
                />

                {/* Emerald Radial Accent Orb */}
                <motion.div
                    className={styles.glowingOrbEmerald}
                    style={{
                        y: shouldReduceMotion ? 0 : orb2Y,
                        x: shouldReduceMotion ? 0 : useTransform(springMouseX, (v) => -v),
                    }}
                />

                {/* Perspective Blueprint Dot-Grid */}
                <motion.div
                    className={styles.gridOverlay}
                    style={{
                        y: shouldReduceMotion ? 0 : gridY,
                    }}
                />
            </div>

            {/* ===================================================================
          LAYER 3: Foreground Content (Cards, Headings, Form Elements)
          =================================================================== */}
            <div className={styles.container}>

                {/* Header Block with Staggered Fade Up */}
                <motion.div
                    className={styles.headerBlock}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.badgePill}>
                        <span className={styles.badgeDot} />
                        <span className={styles.badgeText}>Research &amp; Translation</span>
                    </div>

                    <h2 className={styles.heading}>
                        Advancing Therapeutics Through High-Precision Science
                    </h2>
                    <p className={styles.subheading}>
                        Connecting fundamental molecular discovery, controlled pharmaceutical formulation, and direct bedside clinical analytics.
                    </p>
                </motion.div>

                {/* 3-Column Glassmorphic Card Deck */}
                <div className={styles.cardsGrid}>
                    {researchPillars.map((pillar, idx) => (
                        <motion.article
                            key={pillar.id}
                            className={styles.glassCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : { y: -6, transition: { duration: 0.25, ease: 'easeOut' } }
                            }
                        >
                            {/* Dynamic Gradient Border Layer */}
                            <div className={styles.cardBorderGlow} />

                            {/* Photo Canvas */}
                            <div className={styles.cardMedia}>
                                <Image
                                    src={pillar.image}
                                    alt={pillar.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                    className={styles.cardImage}
                                />
                                <div className={styles.mediaScrim} />
                                <span className={styles.pillarTag}>{pillar.tag}</span>
                            </div>

                            {/* Card Meta & Typography */}
                            <div className={styles.cardContent}>
                                <div className={styles.metricRow}>
                                    <span className={styles.metricVal}>{pillar.metric}</span>
                                    <span className={styles.metricLbl}>{pillar.metricLabel}</span>
                                </div>

                                <h3 className={styles.pillarHeading}>{pillar.title}</h3>
                                <p className={styles.pillarText}>{pillar.description}</p>

                                <Link href={`/research#${pillar.id}`} className={styles.cardLink}>
                                    <span>Explore Protocol</span>
                                    <svg
                                        className={styles.linkChevron}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Central Terminal Bar */}
                <motion.div
                    className={styles.terminalStrip}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                >
                    <div className={styles.terminalItem}>
                        <span className={styles.terminalTitle}>Statutory Approvals</span>
                        <span className={styles.terminalValue}>PCI, JNTUA, &amp; NAAC Institutional R&amp;D</span>
                    </div>

                    <div className={styles.terminalDivider} />

                    <div className={styles.terminalItem}>
                        <span className={styles.terminalTitle}>Core Analytical Core</span>
                        <span className={styles.terminalValue}>HPLC, UV-Vis, &amp; Automated Dissolution</span>
                    </div>

                    <div className={styles.terminalDivider} />

                    <div className={styles.terminalActionCol}>
                        <Link href="/research" className={styles.terminalButton}>
                            Central Research Facility &rarr;
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}