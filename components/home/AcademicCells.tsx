'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './AcademicCells.module.css';

interface CellItem {
    id: string;
    name: string;
    code: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

const cellsData: CellItem[] = [
    {
        id: 'iqac',
        name: 'Internal Quality Assurance Cell',
        code: 'IQAC',
        description:
            'Governs continuous quality enhancement in pharmacy curriculum delivery, pedagogical innovation, and institutional accreditation compliance.',
        href: '/cells#committees-directory',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'arc',
        name: 'Anti-Ragging Committee & Squad',
        code: 'ARC',
        description:
            'Enforces an uncompromising zero-tolerance policy with 24/7 campus surveillance and prompt statutory compliance per Supreme Court directives.',
        href: '/cells#committees-directory',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
        ),
    },
    {
        id: 'wpc',
        name: 'Women Protection Cell',
        code: 'WPC',
        description:
            'Ensures girl students and female staff feel safe and at home, resolving welfare grievances and preventing harassment with 50%+ women representation.',
        href: '/cells#committees-directory',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.3 3.01 7.9 7 8.79V21" />
                <path d="m9 10 2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'icc',
        name: 'Internal Complaints Committee (ICC & POSH)',
        code: 'ICC',
        description:
            'Constituted under POSH Act 2013 for time-bound resolution of sexual harassment complaints, legal awareness, and self-defense training.',
        href: '/cells#committees-directory',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'scst',
        name: 'SC / ST Welfare Cell',
        code: 'SC/ST',
        description:
            'Empowers, counsels, and facilitates financial support from government scholarships (JVD scheme) and UGC career growth programs.',
        href: '/cells#committees-directory',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        id: 'tpc',
        name: 'Training & Placement Cell',
        code: 'TPC',
        description:
            'Dedicated to career grooming, soft-skills training, pharma mock interviews, and campus recruitment placement drives.',
        href: '/placements',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
];

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const footerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function AcademicCells() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrapper} aria-label="Academic Governance Cells">
            <div className={styles.container}>
                {/* Header Block */}
                <motion.div
                    className={styles.headerBlock}
                    variants={shouldReduceMotion ? undefined : headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <span className={styles.badge}>STATUTORY &amp; ACADEMIC GOVERNANCE</span>
                    <h2 className={styles.title}>
                        Institutional <span className={styles.titleHighlight}>Academic Cells</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Specialized governing bodies promoting research rigor, pedagogical excellence, and student safety.
                    </p>
                </motion.div>

                {/* 6-Card Grid */}
                <div className={styles.cellsGrid}>
                    {cellsData.map((cell, index) => (
                        <motion.div
                            key={cell.id}
                            className={styles.cellCard}
                            custom={index * 0.08}
                            variants={shouldReduceMotion ? undefined : cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>{cell.icon}</div>
                                <span className={styles.cellCodeBadge}>{cell.code}</span>
                            </div>

                            <h3 className={styles.cellName}>{cell.name}</h3>
                            <p className={styles.cellDesc}>{cell.description}</p>

                            <Link href={cell.href} className={styles.cardLink}>
                                <span>View Cell Details</span>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <motion.div
                    className={styles.ctaFooter}
                    variants={shouldReduceMotion ? undefined : footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <Link href="/cells" className={styles.viewAllBtn}>
                        <span>View All Cells &amp; Committees</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}