'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './FacultyHonors.module.css';

const facultyHonors = [
    {
        name: 'Dr. J. Venkata Suresh',
        role: 'Principal & Professor of Pharmacology',
        honor: 'Best Teacher & Researcher Award &bull; JNTUA',
        desc: 'Honored for 22+ years of exemplary academic administration, clinical rotation guidance, and publishing 48+ peer-reviewed papers.',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. K. Ramesh Babu',
        role: 'Vice Principal & Professor of Pharmaceutics',
        honor: 'Excellence in Formulation Patents &bull; IPA',
        desc: 'Awarded for filing and granting commercial patents in gastroretentive and transdermal novel drug delivery formulations.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. M. Priya Dharshini',
        role: 'Professor & HOD of Analysis',
        honor: 'Fellow of the Indian Chemical Council (FICC)',
        desc: 'Elected fellow in recognition of pioneering stability-indicating HPLC chromatographic assay validations.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
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

export default function FacultyHonors() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Faculty Honors">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>SCHOLARLY DISTINCTION</span>
                    <h2 className={styles.sectionTitle}>Faculty Honors &amp; Fellowships</h2>
                    <p className={styles.sectionSubtext}>
                        Our faculty mentors receive state and national recognitions for research innovation, teaching excellence, and scientific society fellowships.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {facultyHonors.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            className={styles.card}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.avatarWrap}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    unoptimized
                                    sizes="80px"
                                    className={styles.avatarImg}
                                />
                            </div>

                            <div className={styles.body}>
                                <span
                                    className={styles.honorBadge}
                                    dangerouslySetInnerHTML={{ __html: item.honor }}
                                />
                                <h3 className={styles.name}>{item.name}</h3>
                                <span className={styles.role}>{item.role}</span>
                                <p className={styles.desc}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}