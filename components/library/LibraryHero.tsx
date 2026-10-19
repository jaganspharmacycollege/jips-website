'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { BookOpen, Sparkles, Database, Laptop, Clock, ShieldCheck } from 'lucide-react';
import styles from './LibraryHero.module.css';

export default function LibraryHero() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
    const rotate3D = useTransform(scrollYProgress, [0, 1], [0, 4]);

    return (
        <section ref={containerRef} className={styles.heroSection} aria-label="Library Overview">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80"
                    alt="JIPS Knowledge Resource Center & Central Library"
                    fill
                    unoptimized
                    priority
                    sizes="100vw"
                    className={styles.bgImage}
                />
                <div className={styles.heroOverlay} />
            </motion.div>

            <div className={styles.contentWrap}>
                <motion.div
                    className={styles.perspectiveStage}
                    style={{
                        y: shouldReduceMotion ? 0 : textY,
                        opacity: shouldReduceMotion ? 1 : opacity,
                        rotateX: shouldReduceMotion ? 0 : rotate3D,
                    }}
                >
                    <div className={styles.kickerBadge}>
                        <Sparkles size={14} className={styles.sparkleIcon} />
                        <span>CENTRAL KNOWLEDGE &amp; DIGITAL RESOURCE CENTER</span>
                    </div>

                    <h1 className={styles.heading}>
                        Comprehensive Pharmaceutical <br />
                        <span className={styles.goldText}>Library &amp; E-Repository</span>
                    </h1>

                    <p className={styles.lead}>
                        A state-of-the-art scholarly nexus holding over 15,000 physical volumes, rare pharmacopoeias, international research journals, automated barcode cataloging, and 24/7 digital access to global e-databases for students and researchers.
                    </p>

                    <div className={styles.metaRibbon}>
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>15,000+</strong>
                            <span className={styles.metaLabel}>Text &amp; Reference Volumes</span>
                        </div>
                        <div className={styles.metaDivider} />
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>150+</strong>
                            <span className={styles.metaLabel}>Print &amp; National Journals</span>
                        </div>
                        <div className={styles.metaDivider} />
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>DELNET &bull; NDLI</strong>
                            <span className={styles.metaLabel}>E-Journal Consortia</span>
                        </div>
                        <div className={styles.metaDivider} />
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>8:00 AM - 6:00 PM</strong>
                            <span className={styles.metaLabel}>Operating Timings</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}