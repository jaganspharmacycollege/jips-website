'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Compass, MapPin, Eye } from 'lucide-react';
import styles from './VirtualTourHero.module.css';

export default function VirtualTourHero() {
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
        <section ref={containerRef} className={styles.heroSection} aria-label="Virtual Tour Overview">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
                    alt="JIPS Campus Aerial Panorama"
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
                        <Compass size={14} className={styles.compassIcon} />
                        <span>IMMERSIVE DIGITAL CAMPUS EXPERIENCE</span>
                    </div>

                    <h1 className={styles.headline}>
                        Explore JIPS Through Our <br />
                        <span className={styles.goldText}>360&deg; Virtual Campus Tour</span>
                    </h1>

                    <p className={styles.lead}>
                        Step inside our 20-acre pharmaceutical research campus from anywhere in the world. Experience high-definition walkthroughs of our central HPLC instrumentation labs, cGMP pilot compounding facilities, smart digital amphitheaters, and botanical medicinal gardens.
                    </p>

                    <div className={styles.heroBtnRow}>
                        <a href="#panoramic-viewer" className={styles.primaryBtn}>
                            <Eye size={16} />
                            <span>Launch 360&deg; Viewport</span>
                        </a>
                        <a href="#schedule-visit" className={styles.secondaryBtn}>
                            <MapPin size={16} />
                            <span>Schedule In-Person Visit</span>
                        </a>
                    </div>

                    <div className={styles.statsRibbon}>
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>20+ Acres</strong>
                            <span className={styles.statLabel}>Integrated Campus</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>14+ Labs</strong>
                            <span className={styles.statLabel}>High-Resolution Stops</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>360&deg; HD</strong>
                            <span className={styles.statLabel}>Interactive Hotspots</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}