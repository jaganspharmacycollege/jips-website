'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Trophy, Award, Medal, CheckCircle2 } from 'lucide-react';
import styles from './StudentAcademicLaurels.module.css';

const studentHonors = [
    {
        name: 'K. Sneha Reddy',
        examHonor: 'GPAT All India Rank 14',
        program: 'B.Pharmacy &bull; Batch of 2024',
        score: 'Score: 99.94 Percentile',
        desc: 'Secured national stipend-backed postgraduate admission with an AICTE fellowship endowment.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'P. Sai Teja',
        examHonor: 'JNTUA University Gold Medalist',
        program: 'M.Pharm (Pharmaceutics) &bull; Batch of 2023',
        score: 'Aggregate: 9.42 CGPA',
        desc: 'Awarded University First Rank at the JNTU Ananthapuramu Annual Convocation.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'M. Divya Bharathi',
        examHonor: 'GPAT All India Rank 38',
        program: 'Pharm.D &bull; Batch of 2025',
        score: 'Score: 99.82 Percentile',
        desc: 'Excelled in national clinical pharmacy assessments; currently clinical specialist at Apollo Hospitals.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'B. Rajesh Varma',
        examHonor: 'NIPER JEE Rank 42',
        program: 'B.Pharmacy &bull; Batch of 2023',
        score: 'All-India Merit List',
        desc: 'Selected for National Institute of Pharmaceutical Education and Research master program.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function StudentAcademicLaurels() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Student Academic Laurels">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>STUDENT MERIT &bull; COMPETITIVE EXAMS</span>
                    <h2 className={styles.sectionTitle}>GPAT, NIPER &amp; University Rankers</h2>
                    <p className={styles.sectionSubtext}>
                        Our scholars consistently distinguish themselves in national competitive examinations and university rank lists.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {studentHonors.map((scholar, idx) => (
                        <motion.div
                            key={scholar.name}
                            className={styles.rankerCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.avatarHolder}>
                                <Image
                                    src={scholar.image}
                                    alt={scholar.name}
                                    fill
                                    unoptimized
                                    sizes="90px"
                                    className={styles.avatarPhoto}
                                />
                                <div className={styles.rankerMedal}>
                                    <Medal size={16} />
                                </div>
                            </div>

                            <div className={styles.cardInfo}>
                                <span className={styles.scorePill}>{scholar.score}</span>
                                <h3 className={styles.scholarName}>{scholar.name}</h3>
                                <strong className={styles.examBadge}>{scholar.examHonor}</strong>
                                <span
                                    className={styles.programText}
                                    dangerouslySetInnerHTML={{ __html: scholar.program }}
                                />
                                <p className={styles.descText}>{scholar.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}