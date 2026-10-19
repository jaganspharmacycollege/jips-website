'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import styles from './InfraHero.module.css';

export default function InfraHero() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

    return (
        <section ref={containerRef} className={styles.heroSection} aria-label="Campus Infrastructure Overview">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop"
                    alt="JIPS Modern Institutional Infrastructure"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.bgImage}
                />
                <div className={styles.heroOverlay} />
            </motion.div>

            <div className={styles.contentWrap}>
                <motion.div
                    className={styles.textContainer}
                    style={{
                        y: shouldReduceMotion ? 0 : textY,
                        opacity: shouldReduceMotion ? 1 : opacity,
                    }}
                >
                    <div className={styles.kickerBadge}>
                        <Sparkles size={14} className={styles.sparkleIcon} />
                        <span>WORLD-CLASS PHARMACEUTICAL CAMPUS</span>
                    </div>

                    <h1 className={styles.heading}>
                        Advanced Infrastructure &amp; <br />
                        <span className={styles.goldText}>Research Facilities</span>
                    </h1>

                    <p className={styles.lead}>
                        A purpose-built academic environment integrating precision analytical instrumentation, cGMP-aligned formulation pilot suites, smart digital amphitheaters, high-performance CADD computational hubs, botanical medicinal sanctuaries, and seamless transit networks across Nellore.
                    </p>

                    <div className={styles.metaRibbon}>
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>14+</strong>
                            <span className={styles.metaLabel}>Specialized Laboratories</span>
                        </div>
                        <div className={styles.metaDivider} />
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>UV &bull; IR &bull; HPLC</strong>
                            <span className={styles.metaLabel}>Analytical Testing Suites</span>
                        </div>
                        <div className={styles.metaDivider} />
                        <div className={styles.metaCell}>
                            <strong className={styles.metaDigit}>PCI &bull; AICTE</strong>
                            <span className={styles.metaLabel}>Statutory Approvals</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}