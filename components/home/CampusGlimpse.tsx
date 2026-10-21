/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './CampusGlimpse.module.css';

interface GlimpseCard {
    id: string;
    title: string;
    image: string;
    highlighted?: boolean;
}

const glimpseItems: GlimpseCard[] = [
    {
        id: 'labs',
        title: 'Modern Labs',
        image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'library',
        title: 'Rich Library',
        image:
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'classrooms',
        title: 'Smart Classrooms',
        image:
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
        highlighted: true, // Matching the golden-yellow title in your reference
    },
    {
        id: 'events',
        title: 'Events & Fests',
        image:
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'hostel',
        title: 'Hostel Life',
        image:
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'sports',
        title: 'Sports & Arena',
        image:
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    },
];

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function CampusGlimpse() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrapper} aria-label="Campus Glimpse">
            <div className={styles.container}>
                {/* Header Bar */}
                <motion.div
                    className={styles.headerBar}
                    variants={shouldReduceMotion ? undefined : headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className={styles.titleGroup}>
                        <span className={styles.subTag}>LIFE AT JAGAN&apos;S</span>
                        <h2 className={styles.mainTitle}>A Glimpse of Our Campus</h2>
                    </div>

                    <Link href="/gallery" className={styles.viewGalleryBtn}>
                        <span>View Full Gallery</span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

                {/* 6 Cards Gallery Track */}
                <div className={styles.galleryTrack}>
                    {glimpseItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.cardItem}
                            custom={index * 0.1}
                            variants={shouldReduceMotion ? undefined : cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.imageBox}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.cardImage}
                                    loading="lazy"
                                />
                                <div className={styles.cardOverlay} />
                                <div className={styles.labelContainer}>
                                    <span
                                        className={`${styles.cardTitle} ${item.highlighted ? styles.highlightedTitle : ''
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}