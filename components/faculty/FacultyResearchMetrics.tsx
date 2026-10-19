'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Binary, Award, BookMarked, Users, Sparkles, FileText } from 'lucide-react';
import styles from './FacultyResearchMetrics.module.css';

const researchLedger = [
    {
        icon: BookMarked,
        metric: '150+',
        label: 'Published Peer-Reviewed Papers',
        desc: 'High-impact Scopus, Web of Science, and UGC-CARE indexed research papers in pharmaceutics, analysis, and pharmacology.',
    },
    {
        icon: Binary,
        metric: '15+',
        label: 'Filed & Published Patents',
        desc: 'Commercial formulations, gastroretentive matrices, and novel drug delivery device patents registered by our faculty.',
    },
    {
        icon: Award,
        metric: '25+ Lakhs',
        label: 'Funded Research Grants',
        desc: 'Government and institutional grant assistance driving continuous experimentation and modernized lab instrumentation.',
    },
    {
        icon: Users,
        metric: '350+',
        label: 'Postgraduate Theses Mentored',
        desc: 'Hands-on supervision for M.Pharm dissertation cohorts and Pharm.D hospital clinical audit projects.',
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

export default function FacultyResearchMetrics() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.metricsSection} aria-label="Research Impact Ledger">
            <div className={styles.container}>
                <motion.div
                    className={styles.ledgerCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.headerBlock}>
                        <span className={styles.ledgerTag}>SCHOLARLY OUTPUT</span>
                        <h2 className={styles.heading}>Faculty Research Impact &amp; Patent Ledger</h2>
                        <p className={styles.subtext}>
                            Continuous scholarly publications, national research endowments, and commercial patents driving translational healthcare solutions.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {researchLedger.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className={styles.cell}>
                                    <div className={styles.iconCircle}>
                                        <Icon size={24} />
                                    </div>
                                    <strong className={styles.metricNumber}>{item.metric}</strong>
                                    <h3 className={styles.metricTitle}>{item.label}</h3>
                                    <p className={styles.metricDesc}>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}