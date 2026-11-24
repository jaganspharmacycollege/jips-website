'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import styles from './VisionMission.module.css';

interface Pillar {
    id: string;
    tag: string;
    title: string;
    desc: string;
    metric: string;
}

const strategicPillars: Pillar[] = [
    {
        id: 'p1',
        tag: 'Pillar 01',
        title: 'Research & Development Excellence',
        desc: 'Promoting innovative research in pharmaceutical sciences, publications, patents, interdisciplinary collaborations, and advanced laboratory training.',
        metric: 'Patents & R&D',
    },
    {
        id: 'p2',
        tag: 'Pillar 02',
        title: 'Clinical & Hospital-Based Learning',
        desc: 'Practical exposure to hospital and clinical pharmacy services, patient counselling, medication safety, rational drug use, and pharmacovigilance.',
        metric: '750+ Beds',
    },
    {
        id: 'p3',
        tag: 'Pillar 03',
        title: 'Industry Integration & cGMP Compliance',
        desc: 'Developing industry-ready pharmacy professionals with exposure to pharmaceutical manufacturing, quality control, cGMP, and industrial internships.',
        metric: 'cGMP Ready',
    },
    {
        id: 'p4',
        tag: 'Pillar 04',
        title: 'Community Healthcare & Social Responsibility',
        desc: 'Organising community health awareness programmes, medical camps, blood donation drives, antimicrobial resistance awareness, and NSS social service.',
        metric: 'Health Camps',
    },
];

const visionText =
    'To be a centre of excellence in pharmaceutical education, research and innovation, producing competent, compassionate and ethical pharmacy professionals who contribute to the advancement of healthcare and improve the quality of life of society.';

const missionText =
    'To impart quality pharmaceutical education through innovative teaching methodologies, experiential learning and industry-oriented training, promoting research, scientific innovation, industry integration and clinical pharmacy excellence.';

// Controlled Character-by-Character Typewriter Hook
function useSlowTypewriter(
    text: string,
    trigger: boolean,
    charSpeed: number = 32,
    startDelay: number = 400
) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (!trigger) {
            return;
        }

        let currentIndex = 0;
        let timerId: NodeJS.Timeout;

        const startTimeout = setTimeout(() => {
            const typeNextChar = () => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;

                    const prevChar = text[currentIndex - 2];
                    const dynamicDelay =
                        prevChar === '.'
                            ? charSpeed * 4
                            : prevChar === ','
                                ? charSpeed * 2.5
                                : charSpeed;

                    if (currentIndex <= text.length) {
                        timerId = setTimeout(typeNextChar, dynamicDelay);
                    } else {
                        setIsTypingComplete(true);
                    }
                }
            };

            typeNextChar();
        }, startDelay);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(timerId);
        };
    }, [text, trigger, charSpeed, startDelay]);

    return { displayedText: trigger ? displayedText : '', isTypingComplete: trigger ? isTypingComplete : false };
}

function SmoothTypewriter({
    text,
    animate,
    cursorTheme,
    delay = 350,
}: {
    text: string;
    animate: boolean;
    cursorTheme: 'coral' | 'blue';
    delay?: number;
}) {
    const { displayedText, isTypingComplete } = useSlowTypewriter(text, animate, 30, delay);

    return (
        <p className={styles.statementText}>
            <span>{displayedText}</span>
            <span
                className={`${styles.blinkingCursor} ${cursorTheme === 'coral' ? styles.cursorCoral : styles.cursorBlue
                    } ${isTypingComplete ? styles.cursorIdle : ''}`}
            />
        </p>
    );
}

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

const blockVariant: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function VisionMission() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

    return (
        <section ref={sectionRef} className={styles.sectionWrapper}>
            <div className={styles.ambientGlow} />

            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Editorial Section Header */}
                <motion.div className={styles.headerBlock} variants={blockVariant}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        <span className={styles.eyebrowText}>Our Vision &amp; Mission</span>
                    </div>
                    <h2 className={styles.mainTitle}>
                        Our Vision, Mission &amp; Strategic Foundation
                    </h2>
                    <p className={styles.subtitle}>
                        Excellence in Pharmaceutical Education &nbsp;|&nbsp; Innovation in Research &nbsp;|&nbsp; Commitment to Healthcare
                    </p>
                </motion.div>

                {/* Dual Monolith Showcase */}
                <div className={styles.monolithGrid}>
                    {/* Vision Monolith */}
                    <motion.div
                        className={`${styles.monolithCard} ${styles.cardVision} ${activeTab === 'vision' ? styles.activeCard : ''
                            }`}
                        variants={blockVariant}
                        onClick={() => setActiveTab('vision')}
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                    >
                        <div className={styles.cardTopStrip}>
                            <span className={styles.cardIndex}>01</span>
                            <div className={styles.badgePill}>
                                <span className={styles.dotVision} />
                                <span>The Horizon</span>
                            </div>
                        </div>

                        <div className={styles.cardIconBox}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="12" y1="2" x2="12" y2="4" />
                                <line x1="17.5" y1="3.5" x2="16" y2="5" />
                                <line x1="6.5" y1="3.5" x2="8" y2="5" />
                            </svg>
                        </div>

                        <h3 className={styles.cardHeading}>Our Vision</h3>

                        {shouldReduceMotion ? (
                            <p className={styles.statementText}>{visionText}</p>
                        ) : (
                            <SmoothTypewriter
                                text={visionText}
                                animate={isInView}
                                cursorTheme="coral"
                                delay={300}
                            />
                        )}

                        <div className={styles.cardFooterHighlights}>
                            <div className={styles.highlightPill}>Excellence in Pharmaceutical Education</div>
                            <div className={styles.highlightPill}>Research &amp; Healthcare Innovation</div>
                        </div>
                        <div className={styles.watermarkGlyph}>VISION</div>
                    </motion.div>

                    {/* Mission Monolith */}
                    <motion.div
                        className={`${styles.monolithCard} ${styles.cardMission} ${activeTab === 'mission' ? styles.activeCard : ''
                            }`}
                        variants={blockVariant}
                        onClick={() => setActiveTab('mission')}
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                    >
                        <div className={styles.cardTopStrip}>
                            <span className={styles.cardIndex}>02</span>
                            <div className={styles.badgePill}>
                                <span className={styles.dotMission} />
                                <span>The Pathway</span>
                            </div>
                        </div>

                        <div className={styles.cardIconBox}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="6" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="m19 5-4.5 4.5" />
                                <path d="M19 5h-4" />
                                <path d="M19 5v4" />
                            </svg>
                        </div>

                        <h3 className={styles.cardHeading}>Our Mission</h3>

                        {shouldReduceMotion ? (
                            <p className={styles.statementText}>{missionText}</p>
                        ) : (
                            <SmoothTypewriter
                                text={missionText}
                                animate={isInView}
                                cursorTheme="blue"
                                delay={600}
                            />
                        )}

                        <div className={styles.cardFooterHighlights}>
                            <div className={styles.highlightPill}>Quality Education &amp; Development</div>
                            <div className={styles.highlightPill}>Industry Integration &amp; cGMP</div>
                        </div>
                        <div className={styles.watermarkGlyph}>MISSION</div>
                    </motion.div>
                </div>

                {/* 4 Strategic Execution Pillars */}
                <motion.div className={styles.pillarsSection} variants={blockVariant}>
                    <div className={styles.pillarsHeader}>
                        <span className={styles.pillarsEyebrow}>Core Institutional Objectives</span>
                        <h4 className={styles.pillarsTitle}>Four Strategic Pillars</h4>
                    </div>
                    <div className={styles.pillarsGrid}>
                        {strategicPillars.map((p) => (
                            <div key={p.id} className={styles.pillarCard}>
                                <div className={styles.pillarTop}>
                                    <span className={styles.pillarTag}>{p.tag}</span>
                                    <span className={styles.pillarMetric}>{p.metric}</span>
                                </div>
                                <h5 className={styles.pillarName}>{p.title}</h5>
                                <p className={styles.pillarDesc}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}