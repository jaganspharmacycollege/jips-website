'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Scale } from 'lucide-react';
import styles from './CellsHero.module.css';

export default function CellsHero() {
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
        <section ref={containerRef} className={styles.heroSection} aria-label="Statutory Cells Overview">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
                    alt="JIPS Statutory Governance & Administrative Councils"
                    fill
                    unoptimized
                    loading="eager"
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
                        <Scale size={14} className={styles.kickerIcon} />
                        <span>STATUTORY GOVERNANCE &bull; UGC &amp; PCI MANDATES</span>
                    </div>

                    <h1 className={styles.headline}>
                        Institutional Cells &amp; <br />
                        <span className={styles.goldText}>Statutory Committees</span>
                    </h1>

                    <p className={styles.lead}>
                        Upholding ethical transparency, student welfare, academic quality assurance, and zero-tolerance grievance redressal under the regulatory governance of PCI, AICTE, and JNTU Ananthapuramu.
                    </p>

                    <div className={styles.statsRibbon}>
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>05+</strong>
                            <span className={styles.statLabel}>Statutory Committees</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>100%</strong>
                            <span className={styles.statLabel}>UGC Compliance</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>Zero</strong>
                            <span className={styles.statLabel}>Tolerance for Ragging</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statCell}>
                            <strong className={styles.statDigit}>48 Hrs</strong>
                            <span className={styles.statLabel}>Grievance Turnaround</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}