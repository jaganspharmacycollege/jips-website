'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Trophy, Award, Sparkles, Medal, ArrowDown } from 'lucide-react';
import styles from './AchievementsHero.module.css';

export default function AchievementsHero() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <section ref={containerRef} className={styles.heroSection} aria-label="Achievements Showcase">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
                    alt="JIPS Academic Laurels & Convocation"
                    fill
                    unoptimized
                    priority
                    sizes="100vw"
                    className={styles.bgImg}
                />
                <div className={styles.heroOverlay} />
            </motion.div>

            <div className={styles.contentWrap}>
                <motion.div
                    className={styles.heroContent}
                    style={{
                        y: shouldReduceMotion ? 0 : textY,
                        opacity: shouldReduceMotion ? 1 : opacity,
                    }}
                >
                    <div className={styles.kickerBadge}>
                        <Trophy size={14} className={styles.trophyIcon} />
                        <span>HALL OF FAME &bull; 20+ YEARS OF GLORY</span>
                    </div>

                    <h1 className={styles.headline}>
                        Celebrating Excellence in <br />
                        <span className={styles.goldText}>Academics, Research &amp; Sports</span>
                    </h1>

                    <p className={styles.lead}>
                        From GPAT All-India Ranks and JNTUA University Gold Medals to published commercial patents and state-level athletic championships—explore the benchmarks forged by our students, faculty, and institution.
                    </p>

                    <div className={styles.statsRibbon}>
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>25+</strong>
                            <span className={styles.statLabel}>University Gold Medals</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>AIR 14</strong>
                            <span className={styles.statLabel}>Highest GPAT National Rank</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>15+</strong>
                            <span className={styles.statLabel}>Published Patents</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>40+</strong>
                            <span className={styles.statLabel}>Sports &amp; Cultural Trophies</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}