'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import styles from './AlumniNetworkMap.module.css';

const globalChapters = [
    {
        region: 'North America Chapter',
        hubCity: 'New Jersey & California, USA',
        memberCount: '350+ Alumni',
        primarySectors: 'USFDA Regulatory Submissions, CRO Clinical Data, Biotech Startups',
    },
    {
        region: 'United Kingdom & Europe',
        hubCity: 'London & Cambridge, UK',
        memberCount: '220+ Alumni',
        primarySectors: 'Targeted NDDS Formulation R&D, NHS Hospital Pharmacotherapy, Ph.D. Fellowships',
    },
    {
        region: 'Middle East Chapter',
        hubCity: 'Dubai & Abu Dhabi, UAE',
        memberCount: '480+ Alumni',
        primarySectors: 'Ministry of Health (MOH/DHA) Licensed Pharmacists, Retail Pharmacy Chains',
    },
    {
        region: 'Pan-India Headquarters',
        hubCity: 'Hyderabad, Bengaluru & Chennai',
        memberCount: '3,800+ Alumni',
        primarySectors: 'Formulation Manufacturing (Hetero, Dr. Reddy’s, Aurobindo), Apollo Hospitals',
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

export default function AlumniNetworkMap() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="alumni-network" aria-label="Global Alumni Chapters">
            <div className={styles.container}>
                <motion.div
                    className={styles.networkConsoleCard}
                    style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.headerBlock}>
                        <span className={styles.eyebrow}>GLOBAL CONNECT</span>
                        <h2 className={styles.heading}>International Chapters &amp; Presence</h2>
                        <p className={styles.lead}>
                            Wherever healthcare and clinical medicines are developed, JIPS alumni are actively shaping the future of global patient therapeutics.
                        </p>
                    </div>

                    <div className={styles.chaptersGrid}>
                        {globalChapters.map((ch) => (
                            <div key={ch.region} className={styles.chapterCard}>
                                <div className={styles.chapterHeader}>
                                    <Globe2 size={20} className={styles.chapterIcon} />
                                    <span className={styles.memberCountTag}>{ch.memberCount}</span>
                                </div>

                                <h3 className={styles.regionTitle}>{ch.region}</h3>
                                <strong className={styles.hubLocation}>{ch.hubCity}</strong>
                                <p className={styles.sectorsText}>{ch.primarySectors}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}