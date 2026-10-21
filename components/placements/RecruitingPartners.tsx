'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import styles from './RecruitingPartners.module.css';

const corporateRecruiters = [
    {
        name: "Dr. Reddy's Laboratories",
        sector: 'Formulation & API Discovery',
        hq: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Hetero Drugs Ltd.',
        sector: 'Generic Manufacturing & R&D',
        hq: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Aurobindo Pharma',
        sector: 'Active Ingredients & Export QC',
        hq: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: "Divi's Laboratories",
        sector: 'Custom Chemical Synthesis',
        hq: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Apollo Hospitals Group',
        sector: 'Tertiary Clinical Healthcare',
        hq: 'Pan-India',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Biocon Biologics',
        sector: 'Biosimilars & Monoclonal Antibodies',
        hq: 'Bengaluru, India',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
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

export default function RecruitingPartners() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="recruiters" aria-label="Recruiting Partners">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CORPORATE CAMPUS TIES</span>
                    <h2 className={styles.sectionTitle}>Premier Recruiting Partners</h2>
                    <p className={styles.sectionSubtext}>
                        Leading multinational pharmaceutical corporations and hospital consortia visiting JIPS annually for on-campus talent recruitment.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                >
                    {corporateRecruiters.map((corp, idx) => (
                        <motion.div
                            key={corp.name}
                            className={styles.recruiterCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.imgPane}>
                                <Image
                                    src={corp.image}
                                    alt={corp.name}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className={styles.corpPhoto}
                                />
                                <span className={styles.hqTag}>{corp.hq}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <span className={styles.sectorBadge}>{corp.sector}</span>
                                <h3 className={styles.corpName}>{corp.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}