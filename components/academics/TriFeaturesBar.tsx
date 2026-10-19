'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Globe, Award } from 'lucide-react';
import styles from './TriFeaturesBar.module.css';

const blocks = [
    {
        icon: BookOpen,
        title: 'Education Services',
        desc: 'Structured curricula aligned with PCI, modern compounding modules, and clinical drug training protocols.',
        href: '/courses/b-pharm',
        theme: styles.darkBlock,
    },
    {
        icon: Globe,
        title: 'Research & Industry Hub',
        desc: 'Cutting-edge instrumentation laboratories, international seminars, and sponsored hospital rotations.',
        href: '/research',
        theme: styles.orangeBlock,
    },
    {
        icon: Award,
        title: "Bachelor's and Master's",
        desc: 'Conferring accredited degrees in B.Pharm, M.Pharm (Pharmaceutics/Analysis), and Pharm.D under JNTUA.',
        href: '/admissions/courses-offered',
        theme: styles.blueBlock,
    },
];

export default function TriFeaturesBar() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.barSection} aria-label="Key Academic Pillars">
            <div className={styles.triGrid}>
                {blocks.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                        <motion.div
                            key={b.title}
                            className={`${styles.blockCard} ${b.theme}`}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconCircle}>
                                    <Icon size={22} />
                                </div>
                                <h3 className={styles.cardTitle}>{b.title}</h3>
                            </div>
                            <p className={styles.cardDesc}>{b.desc}</p>
                            <Link href={b.href} className={styles.readMoreLink}>
                                <span>Read More</span>
                                <span className={styles.linkArrow}>→</span>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}