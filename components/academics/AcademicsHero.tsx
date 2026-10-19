'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import styles from './AcademicsHero.module.css';

export default function AcademicsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

    return (
        <section ref={containerRef} className={styles.heroWrapper} aria-label="Academics Hero">
            <motion.div
                className={styles.parallaxBackground}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            />
            <div className={styles.overlay} />

            <motion.div
                className={styles.contentContainer}
                style={{ y: shouldReduceMotion ? 0 : contentY }}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.badgeLine}>
                    <span className={styles.badgeText}>WELCOME TO JIPS ACADEMICS</span>
                    <span className={styles.badgeRule} />
                </div>

                <h1 className={styles.heading}>
                    EDUCATION IS THE BEST <br />
                    <span className={styles.highlightText}>KEY SUCCESS IN LIFE</span>
                </h1>

                <p className={styles.description}>
                    Fostering visionary pharmaceutical leaders through outcome-based clinical education,
                    rigorous pharmaceutical formulation research, and hands-on laboratory mastery.
                </p>

                <div className={styles.ctaRow}>
                    <Link href="/courses/b-pharm" className={styles.primaryBtn}>
                        <span>Discover Programs</span>
                        <span className={styles.arrowIcon}>→</span>
                    </Link>
                    <Link href="/admissions" className={styles.secondaryBtn}>
                        <span>Admissions Portal</span>
                        <span className={styles.arrowIcon}>→</span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}