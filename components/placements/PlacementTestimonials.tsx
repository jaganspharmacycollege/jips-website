'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './PlacementTestimonials.module.css';

const placedAlumni = [
    {
        name: 'Potla Srividya',
        company: 'Hetero Drugs Ltd.',
        role: 'Quality Assurance Executive',
        program: 'B.Pharmacy &bull; Batch of 2025–2026',
        quote: 'The instrumental laboratories and mock interview rounds at JIPS gave me the technical proficiency and confidence to clear Hetero Drugs recruitment directly from campus.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'B. Srivishnu',
        company: 'Apollo Pharmacy',
        role: 'Hospital & Retail Pharmacist',
        program: 'B.Pharmacy &bull; Batch of 2024–2025',
        quote: 'The clinical pharmacology training and drug interaction seminars at JIPS built the exact dispensing and patient counselling skills required for Apollo Pharmacy operations.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. S. Hemanth',
        company: 'Veda Hospital, Nellore',
        role: 'Clinical Pharmacist',
        program: 'Pharm.D &bull; Doctor of Pharmacy (₹6.0 LPA)',
        quote: 'Conducting hospital bedside clerkships and ICU rounds under faculty guidance prepared me for intensive inpatient pharmacotherapy decisions at Veda Hospital.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
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

export default function PlacementTestimonials() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Placement Testimonials">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>ALUMNI EXPERIENCES</span>
                    <h2 className={styles.sectionTitle}>Placed Graduates Share Their Journey</h2>
                    <p className={styles.sectionSubtext}>
                        Hear from our scholars thriving across pharmaceutical research and healthcare delivery.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {placedAlumni.map((alumnus, idx) => (
                        <motion.div
                            key={alumnus.name}
                            className={styles.card}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.avatarHolder}>
                                <Image
                                    src={alumnus.image}
                                    alt={alumnus.name}
                                    fill
                                    unoptimized
                                    sizes="80px"
                                    className={styles.avatarPhoto}
                                />
                            </div>

                            <div className={styles.cardInfo}>
                                <span className={styles.companyBadge}>{alumnus.company}</span>
                                <p className={styles.quoteText}>&ldquo;{alumnus.quote}&rdquo;</p>
                                <h3 className={styles.name}>{alumnus.name}</h3>
                                <span className={styles.role}>{alumnus.role}</span>
                                <span
                                    className={styles.program}
                                    dangerouslySetInnerHTML={{ __html: alumnus.program }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}