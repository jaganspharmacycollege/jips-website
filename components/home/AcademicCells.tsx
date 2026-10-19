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
        href: '/academics/iqac',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'rdc',
        name: 'Research & Development Cell',
        code: 'RDC',
        description:
            'Facilitates funded drug discovery research, patent filings, faculty publication grants, and collaborative clinical trials.',
        href: '/research/rdc',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18h12" />
                <path d="M10 2v4" />
                <path d="M14 2v4" />
                <path d="M10 6h4" />
                <path d="m6 6 6 12 6-12" />
            </svg>
        ),
    },
    {
        id: 'iiic',
        name: 'Industry-Institute Interaction Cell',
        code: 'IIIC',
        description:
            'Bridges academia with pharmaceutical enterprises for industrial internships, live plant exposure, and technical training.',
        href: '/academics/iiic',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="16" x="4" y="4" rx="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 9h2" />
                <path d="M14 9h2" />
                <path d="M8 13h2" />
                <path d="M14 13h2" />
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
    {
        id: 'arc',
        name: 'Anti-Ragging & Grievance Cell',
        code: 'ARGC',
        description:
            'Ensures a secure, ragging-free campus ecosystem adhering strictly to PCI, UGC, and State Regulatory compliance mandates.',
        href: '/statutory/anti-ragging',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
        ),
    },
    {
        id: 'wpc',
        name: 'Women Protection & Empowerment Cell',
        code: 'WPEC',
        description:
            'Conducts gender equity programs, mental wellness workshops, and maintains a safe, inclusive academic environment for all female scholars.',
        href: '/statutory/women-empowerment',
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.3 3.01 7.9 7 8.79V21" />
                <path d="m9 10 2 2 4-4" />
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