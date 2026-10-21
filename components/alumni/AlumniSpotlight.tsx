'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';
import styles from './AlumniSpotlight.module.css';

interface SpotlightProfile {
    name: string;
    degreeBatch: string;
    designation: string;
    organization: string;
    location: string;
    image: string;
    achievement: string;
    quote: string;
}

const alumniLeaders: SpotlightProfile[] = [
    {
        name: 'Dr. S. K. Sundar Raj',
        degreeBatch: 'B.Pharm &bull; Inaugural Batch 2005-09',
        designation: 'Principal Scientist (Formulation R&D)',
        organization: "Dr. Reddy's Laboratories",
        location: 'Cambridge, United Kingdom',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        achievement: 'Lead inventor on 6 European patents for targeted cancer drug delivery.',
        quote: 'The rigorous compounding and analytical laboratory culture at JIPS provided the core scientific curiosity that continues to guide my research career in Europe.',
    },
    {
        name: 'Dr. M. Divya Bharathi',
        degreeBatch: 'Pharm.D &bull; Batch of 2017-23',
        designation: 'Clinical Specialist & Pharmacotherapy Lead',
        organization: 'Apollo Hospitals Enterprise',
        location: 'Chennai, India',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        achievement: 'Directing antibiotic stewardship and clinical ICU rounding teams.',
        quote: 'Bedside patient rounds and clinical pharmacokinetics under JIPS hospital rotations built the diagnostic confidence essential for acute care leadership.',
    },
    {
        name: 'P. Sai Teja',
        degreeBatch: 'M.Pharm (Pharmaceutics) &bull; Batch of 2021-23',
        designation: 'Director of Regulatory Submissions',
        organization: 'Aurobindo Pharma USA',
        location: 'New Jersey, United States',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        achievement: 'Successfully cleared 14 USFDA ANDA dossiers for oral solid dosage forms.',
        quote: 'Understanding cGMP regulations and dossier documentation during my M.Pharm dissertation positioned me directly for executive regulatory affairs roles.',
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

export default function AlumniSpotlight() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Alumni Spotlights">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>ALUMNI SPOTLIGHT</span>
                    <h2 className={styles.sectionTitle}>Pioneers Shaping Global Healthcare</h2>
                    <p className={styles.sectionSubtext}>
                        Meet a few of our distinguished alumni leading clinical care, corporate R&amp;D, and regulatory affairs worldwide.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {alumniLeaders.map((alumnus, idx) => (
                        <motion.article
                            key={alumnus.name}
                            className={styles.spotlightCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.cardTop}>
                                <div className={styles.avatarHolder}>
                                    <Image
                                        src={alumnus.image}
                                        alt={alumnus.name}
                                        fill
                                        unoptimized
                                        sizes="90px"
                                        className={styles.avatarPhoto}
                                    />
                                </div>

                                <div className={styles.metaTop}>
                                    <h3 className={styles.name}>{alumnus.name}</h3>
                                    <span
                                        className={styles.batch}
                                        dangerouslySetInnerHTML={{ __html: alumnus.degreeBatch }}
                                    />
                                    <div className={styles.locationPill}>
                                        <MapPin size={12} /> {alumnus.location}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.designationBox}>
                                <strong className={styles.roleTitle}>{alumnus.designation}</strong>
                                <span className={styles.orgTitle}>{alumnus.organization}</span>
                            </div>

                            <p className={styles.quoteText}>&ldquo;{alumnus.quote}&rdquo;</p>

                            <div className={styles.achievementBox}>
                                <Award size={16} className={styles.awardIcon} />
                                <span>{alumnus.achievement}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}