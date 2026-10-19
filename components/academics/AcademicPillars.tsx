'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './AcademicPillars.module.css';

const courses = [
    {
        name: 'B. Pharmacy',
        badge: 'Undergraduate',
        duration: '4 Years (8 Semesters)',
        intake: '100 Seats',
        desc: 'PCI and AICTE recognized fundamental curriculum preparing graduates for formulation, analytical testing, and hospital careers.',
        href: '/courses/b-pharm',
    },
    {
        name: 'M. Pharm (Pharmaceutics)',
        badge: 'Postgraduate',
        duration: '2 Years (4 Semesters)',
        intake: '15 Seats',
        desc: 'Specialized focus in Novel Drug Delivery Systems (NDDS), bioavailability studies, and industrial scale compounding.',
        href: '/courses/m-pharm',
    },
    {
        name: 'M. Pharm (Analysis)',
        badge: 'Postgraduate',
        duration: '2 Years (4 Semesters)',
        intake: '15 Seats',
        desc: 'High-Performance Liquid Chromatography (HPLC), method validation, QA/QC, and regulatory audits.',
        href: '/courses/m-pharm',
    },
    {
        name: 'Pharm. D',
        badge: 'Doctoral Track',
        duration: '6 Years Residency',
        intake: '30 Seats',
        desc: 'Intensive hospital ward clerkships, pharmacovigilance, bedside care, and therapeutic drug monitoring.',
        href: '/courses/pharm-d',
    },
];

export default function AcademicPillars() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Offered Academic Degrees">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.topBadge}>DEGREE PATHWAYS</span>
                    <h2 className={styles.heading}>Explore Formal Programs</h2>
                    <p className={styles.subheading}>
                        Comprehensive programs accredited by statutory councils and affiliated with JNTU Ananthapuramu.
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    {courses.map((c, idx) => (
                        <motion.div
                            key={c.name}
                            className={styles.courseCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.progBadge}>{c.badge}</span>
                                <span className={styles.intakeBadge}>{c.intake}</span>
                            </div>
                            <h3 className={styles.progName}>{c.name}</h3>
                            <span className={styles.progDuration}>⏱ {c.duration}</span>
                            <p className={styles.progDesc}>{c.desc}</p>
                            <Link href={c.href} className={styles.cardLink}>
                                <span>View Syllabus &amp; Details</span>
                                <span>→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}