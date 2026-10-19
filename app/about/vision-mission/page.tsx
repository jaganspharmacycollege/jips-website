'use client';

import React, { useRef } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
    Variants,
} from 'framer-motion';
import styles from './VisionMissionAbout.module.css';

interface PosterCard {
    id: string;
    title: string;
    footerLabel: string;
    description: string;
    icon: React.ReactNode;
    tiltFactor: number;
}

const posters: PosterCard[] = [
    {
        id: 'vision',
        title: 'VISION',
        footerLabel: 'EXCELLENCE',
        tiltFactor: -1.2,
        description:
            'To emerge as an internationally accredited center of pharmaceutical distinction, fostering next-generation healthcare scientists who blend rigorous clinical knowledge, patient empathy, and technological innovation to transform global health outcomes.',
        icon: (
            <svg viewBox="0 0 100 100" className={styles.crestSvg}>
                <circle cx="50" cy="50" r="32" fill="none" stroke="#2563eb" strokeWidth="6" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <rect
                        key={angle}
                        x="46"
                        y="10"
                        width="8"
                        height="12"
                        rx="2"
                        fill="#2563eb"
                        transform={`rotate(${angle} 50 50)`}
                    />
                ))}
                <circle cx="50" cy="50" r="26" fill="#1d4ed8" />
                <polyline
                    points="41 51 47 57 60 43"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: 'mission',
        title: 'MISSION',
        footerLabel: 'PURPOSE',
        tiltFactor: 0.2,
        description:
            'To impart benchmarked outcome-based pharmaceutical education with active bedside clinical hospital clerkships, cultivate high-impact drug discovery research, and embed strict cGMP statutory compliance in every graduate.',
        icon: (
            <svg viewBox="0 0 100 100" className={styles.crestSvg}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                    <circle
                        key={angle}
                        cx="50"
                        cy="24"
                        r="8"
                        fill="#2563eb"
                        transform={`rotate(${angle} 50 44)`}
                    />
                ))}
                <circle cx="50" cy="44" r="22" fill="#1d4ed8" />
                <circle cx="50" cy="44" r="16" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                <polyline
                    points="43 45 48 50 58 39"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <polygon points="40,62 30,90 44,82 50,90 47,64" fill="#1e3a8a" />
                <polygon points="60,62 70,90 56,82 50,90 53,64" fill="#2563eb" />
            </svg>
        ),
    },
    {
        id: 'values',
        title: 'CORE VALUES',
        footerLabel: 'INTEGRITY',
        tiltFactor: 1.2,
        description:
            'Rooted in patient safety, moral stewardship, empirical laboratory accuracy, and relentless empathy, our academic foundation ensures ethical accountability across corporate pharmaceutical and clinical care careers.',
        icon: (
            <svg viewBox="0 0 100 100" className={styles.crestSvg}>
                <circle
                    cx="50"
                    cy="50"
                    r="32"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeDasharray="38 12"
                />
                <circle cx="50" cy="50" r="26" fill="#1d4ed8" />
                <polyline
                    points="41 51 47 57 60 43"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

// Interactive 3D Tilt Card Component
function SpatialCard({
    poster,
    index,
}: {
    poster: PosterCard;
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (shouldReduceMotion || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={styles.cardPerspectiveContainer}
            initial={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 60, scale: 0.9, rotateZ: poster.tiltFactor * 2 }
            }
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateZ: 0,
                transition: {
                    duration: 0.8,
                    delay: index * 0.16,
                    ease: [0.16, 1, 0.3, 1],
                },
            }}
            viewport={{ once: false, amount: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1200,
            }}
        >
            <motion.article
                className={styles.blackFrame}
                style={{
                    rotateX: shouldReduceMotion ? 0 : rotateX,
                    rotateY: shouldReduceMotion ? 0 : rotateY,
                    transformStyle: 'preserve-3d',
                }}
                whileHover={{
                    scale: 1.03,
                    z: 30,
                    transition: { duration: 0.25 },
                }}
            >
                <div className={styles.posterCanvas}>
                    {/* Top Wave Graphic Header */}
                    <div className={styles.waveHeader}>
                        <svg viewBox="0 0 400 120" preserveAspectRatio="none" className={styles.waveSvg}>
                            <path
                                d="M0,30 C60,60 120,10 180,45 C240,80 300,20 360,55 C390,70 410,40 430,60 L400,0 L0,0 Z"
                                fill="#e0f2fe"
                                opacity="0.85"
                            />
                            <path
                                d="M0,50 C70,20 130,70 200,35 C270,0 330,60 400,25 L400,0 L0,0 Z"
                                fill="#bae6fd"
                                opacity="0.5"
                            />
                            <path
                                d="M0,75 C90,40 150,85 240,55 C310,25 360,70 400,50 L400,0 L0,0 Z"
                                fill="#f0f9ff"
                                opacity="0.7"
                            />
                        </svg>
                    </div>

                    {/* Elevated 3D Crest Badge */}
                    <div className={styles.crestWrapper3D}>
                        {poster.icon}
                    </div>

                    {/* Heading */}
                    <h2 className={styles.posterTitle}>{poster.title}</h2>

                    {/* Thin Red Rule */}
                    <div className={styles.redRule} />

                    {/* Description */}
                    <p className={styles.posterDescription}>{poster.description}</p>

                    {/* Red Stripe */}
                    <div className={styles.angledRedStripe} />

                    {/* Elevated 3D Bottom Banner */}
                    <div className={styles.bottomBanner3D}>
                        <span className={styles.bannerText}>{poster.footerLabel}</span>
                    </div>
                </div>
            </motion.article>
        </motion.div>
    );
}

export default function VisionMissionAbout() {
    return (
        <section className={styles.spatialScene} aria-label="Vision, Mission & Core Values">
            {/* Background ambient lighting sphere similar to 3D reference */}
            <div className={styles.ambientGlow} />

            <div className={styles.triptychGrid}>
                {posters.map((poster, index) => (
                    <SpatialCard key={poster.id} poster={poster} index={index} />
                ))}
            </div>
        </section>
    );
}