'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Binary, FileText, CheckCircle2, Award, Sparkles } from 'lucide-react';
import styles from './ResearchPatentsShowcase.module.css';

const patentShowcase = [
    {
        appNo: 'IN 202341065892 A',
        title: 'Gastro-Retentive Floating Tablet Matrix with Sustained Effervescent Bio-Polymer Network',
        inventors: 'Dr. K. Ramesh Babu, Mrs. K. Sneha Latha, et al.',
        status: 'Published & Under Examination',
        domain: 'Novel Drug Delivery Systems (NDDS)',
    },
    {
        appNo: 'IN 202241019845 B',
        title: 'Optimized Nano-Emulsion Composition for Transdermal Delivery of Bioactive Herbal Flavonoids',
        inventors: 'Dr. P. Sudhakar Rao, Dr. J. Venkata Suresh, et al.',
        status: 'Patent Granted',
        domain: 'Natural Products & Nanotechnology',
    },
    {
        appNo: 'IN 202441002341 A',
        title: 'Hyphenated RP-HPLC Assay Method for Simultaneous Estimation of Fixed-Dose Anti-Diabetic Agents',
        inventors: 'Dr. M. Priya Dharshini, Dr. A. Madhava Krishna',
        status: 'Published',
        domain: 'Bio-Analytical Method Validation',
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

export default function ResearchPatentsShowcase() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Research Patents and Discovery">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>TRANSLATIONAL INTELLECTUAL PROPERTY</span>
                    <h2 className={styles.sectionTitle}>Patents &amp; Research Innovations</h2>
                    <p className={styles.sectionSubtext}>
                        Protecting commercial drug delivery formulations and novel bio-analytical methods created inside JIPS laboratories.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {patentShowcase.map((patent, idx) => (
                        <motion.div
                            key={patent.appNo}
                            className={styles.patentCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.domainTag}>{patent.domain}</span>
                                <span className={patent.status.includes('Granted') ? styles.statusGranted : styles.statusPublished}>
                                    {patent.status}
                                </span>
                            </div>

                            <span className={styles.appNumber}>{patent.appNo}</span>
                            <h3 className={styles.patentTitle}>{patent.title}</h3>

                            <div className={styles.inventorsBox}>
                                <span className={styles.invLabel}>LEAD INVENTORS:</span>
                                <strong className={styles.invNames}>{patent.inventors}</strong>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}