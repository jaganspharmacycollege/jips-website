'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { ShieldCheck, Award, Building2, CheckCircle2, Star } from 'lucide-react';
import styles from './InstitutionalAccolades.module.css';

const institutionalBento = [
    {
        title: 'Autonomous Status Charter',
        year: 'Conferred in 2023',
        tag: 'Regulatory Autonomy',
        desc: 'Awarded autonomous governance by state authorities and JNTUA, empowering modern outcome-based pharmacy curricula and swift syllabus innovations.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80',
        highlight: 'Curricular Independence',
    },
    {
        title: 'PCI Section 12 Permanent Approval',
        year: 'Unbroken Since Inception',
        tag: 'Statutory Licensure',
        desc: 'Full regulatory certification from the Pharmacy Council of India, New Delhi, guaranteeing direct state pharmacy council registration for graduates.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
        highlight: 'Full Legal Practice Rights',
    },
    {
        title: 'ISO 9001:2015 Quality Certification',
        year: 'Quality Benchmark',
        tag: 'Systemic Rigor',
        desc: 'Recognized for standardized laboratory maintenance, cGMP compounding simulation suites, and student welfare governance.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
        highlight: 'Audited Standards',
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

export default function InstitutionalAccolades() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} aria-label="Institutional Accolades">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>INSTITUTIONAL HONORS</span>
                    <h2 className={styles.sectionTitle}>Accreditations &amp; Institutional Milestones</h2>
                    <p className={styles.sectionSubtext}>
                        Recognitions conferred by apex educational and statutory healthcare councils across two decades of academic stewardship.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.bentoGrid}
                    style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                >
                    {institutionalBento.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className={styles.bentoCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.imgPane}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 420px"
                                    className={styles.bentoImg}
                                />
                                <span className={styles.bentoTag}>{item.tag}</span>
                                <span className={styles.bentoYear}>{item.year}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.cardHeading}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                                <div className={styles.highlightPill}>
                                    <Star size={14} className={styles.starIcon} />
                                    <span>{item.highlight}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}