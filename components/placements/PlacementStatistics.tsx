'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import styles from './PlacementStatistics.module.css';

const placementDomains = [
    {
        domain: 'Formulation & Analytical R&D',
        share: '35%',
        hiringRoles: 'Formulation Scientist, ADL Chemist, HPLC Specialist',
        description: 'Direct entry into active formulation laboratories, novel delivery systems, and method validation divisions.',
    },
    {
        domain: 'Clinical Research & Pharmacovigilance',
        share: '28%',
        hiringRoles: 'Clinical Data Coordinator, Safety Associate, Medical Writer',
        description: 'Postings in global contract research organizations (CROs) managing global phase-III drug safety trials.',
    },
    {
        domain: 'Quality Assurance & Regulatory Audits',
        share: '22%',
        hiringRoles: 'QA Compliance Officer, QC Inspector, Regulatory Affairs',
        description: 'Ensuring cGMP compliance, USFDA/EU-GMP dossier filings, and batch manufacturing record (BMR) audits.',
    },
    {
        domain: 'Hospital & Clinical Pharmacotherapy',
        share: '15%',
        hiringRoles: 'Inpatient Pharmacist, ICU Specialist, Clinical Preceptor',
        description: 'Bedside patient rounds, therapeutic drug monitoring (TDM), and ICU physician-collaborative prescribing.',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function PlacementStatistics() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} aria-label="Placement Analytics">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CAREER HORIZONS</span>
                    <h2 className={styles.sectionTitle}>Sector-Wise Placement Distribution</h2>
                    <p className={styles.sectionSubtext}>
                        Comprehensive career paths pursued by JIPS graduates across corporate formulation, clinical research, and hospital networks.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.domainsGrid}
                    style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                >
                    {placementDomains.map((item, idx) => (
                        <motion.div
                            key={item.domain}
                            className={styles.domainCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.percentagePill}>{item.share}</span>
                                <span className={styles.domainBadge}>Core Sector</span>
                            </div>

                            <h3 className={styles.domainTitle}>{item.domain}</h3>
                            <p className={styles.domainDesc}>{item.description}</p>

                            <div className={styles.rolesBox}>
                                <span className={styles.rolesLabel}>PRIMARY DESIGNATIONS:</span>
                                <strong className={styles.rolesText}>{item.hiringRoles}</strong>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}