'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import styles from './SportsCulturalTriumphs.module.css';

const sportsAwards = [
    {
        title: 'JNTUA Inter-Collegiate Cricket Championship',
        achievement: 'Champions &bull; Gold Trophy',
        year: '2025-26',
        desc: 'The JIPS Men Cricket team clinched the inter-collegiate zonal championship competing against 18 regional engineering and pharmacy colleges.',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'State Pharmacy Youth Cultural Fest',
        achievement: 'Overall Championship Trophy',
        year: '2024-25',
        desc: 'First place honors in classical dance, drama, and health awareness street plays during the National Pharmacy Week statewide celebrations.',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Volleyball & Athletic Track Laurels',
        achievement: 'Runners-Up & 4 Individual Golds',
        year: '2025-26',
        desc: 'Individual gold medals in 100m sprint and shot put at the District Inter-University Athletic meet.',
        image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
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

export default function SportsCulturalTriumphs() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} aria-label="Sports & Cultural Triumphs">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>ATHLETICS &bull; CULTURAL BRILLIANCE</span>
                    <h2 className={styles.sectionTitle}>Sports &amp; Extracurricular Trophies</h2>
                    <p className={styles.sectionSubtext}>
                        Nurturing athletic resilience, teamwork, and cultural distinction alongside academic and clinical learning.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    style={{ y: shouldReduceMotion ? 0 : parallaxShift }}
                >
                    {sportsAwards.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className={styles.awardCard}
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
                                    className={styles.cardPhoto}
                                />
                                <span className={styles.yearTag}>{item.year}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <span
                                    className={styles.achievementBadge}
                                    dangerouslySetInnerHTML={{ __html: item.achievement }}
                                />
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}