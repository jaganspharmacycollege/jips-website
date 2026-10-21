'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';
import styles from './AlumniEventsReunion.module.css';

const reunionInitiatives = [
    {
        title: 'Annual Alumni Homecoming & Meetup',
        schedule: 'Every December (Campus Grounds)',
        desc: 'Bringing multiple graduating cohorts together at the Jangalakandriga campus to reconnect with professors and explore updated laboratory suites.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        tag: 'Homecoming',
    },
    {
        title: 'Alumni-to-Student Mentorship Webinars',
        schedule: 'Monthly Virtual Sessions',
        desc: 'Interactive lectures where overseas alumni share real-world guidance on GPAT/NIPER preparation, foreign MS/Ph.D. admissions, and corporate R&D careers.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        tag: 'Career Mentorship',
    },
    {
        title: 'Distinguished Alumni Recognition Awards',
        schedule: 'Annual Graduation Convocation',
        desc: 'Conferring honorary titles and medals upon alumni who have made significant clinical breakthroughs, filed patents, or established pharmaceutical enterprises.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
        tag: 'Honorary Laurels',
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

export default function AlumniEventsReunion() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} aria-label="Alumni Events & Reunions">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>COMMUNITY ENGAGEMENT</span>
                    <h2 className={styles.sectionTitle}>Reunions, Events &amp; Mentorship</h2>
                    <p className={styles.sectionSubtext}>
                        Bridging graduating cohorts with current scholars through interactive masterclasses, reunions, and scholarship endowments.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {reunionInitiatives.map((ev, idx) => (
                        <motion.div
                            key={ev.title}
                            className={styles.card}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.imgPane}>
                                <Image
                                    src={ev.image}
                                    alt={ev.title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className={styles.photo}
                                />
                                <span className={styles.tagBadge}>{ev.tag}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <div className={styles.schedRow}>
                                    <Calendar size={13} /> {ev.schedule}
                                </div>
                                <h3 className={styles.cardTitle}>{ev.title}</h3>
                                <p className={styles.cardDesc}>{ev.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}