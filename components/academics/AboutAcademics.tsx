/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './AboutAcademics.module.css';

export default function AboutAcademics() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionRoot} aria-label="About the Academics">
            <div className={styles.container}>
                {/* Left Column: Dual Photographic Frames */}
                <div className={styles.imageCol}>
                    <motion.div
                        className={styles.archFrameLeft}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
                            alt="Campus Academic Architecture"
                            className={styles.archImg}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.archFrameRight}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                            alt="Pharmacy Scholar at JIPS"
                            className={styles.portraitImg}
                        />
                    </motion.div>
                </div>

                {/* Right Column: Narrative Content */}
                <motion.div
                    className={styles.textCol}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.subTagLine}>
                        <span className={styles.tagIcon}>🏛️</span>
                        <span className={styles.tagLabel}>ABOUT OUR ACADEMIC EXCELLENCE</span>
                    </div>

                    <h2 className={styles.mainTitle}>
                        A Few Words About Our Educational Philosophy
                    </h2>

                    <p className={styles.leadPara}>
                        Our academic ecosystem is built to bridge classical pharmaceutical sciences
                        with modern clinical patient care. Under JNTUA affiliation and PCI accreditation,
                        we prepare students to excel in drug development, clinical pharmacology, and global research.
                    </p>

                    <p className={styles.bodyPara}>
                        State-of-the-art instrument centers, advanced HPLC laboratories, and faculty-mentored
                        dissertations provide each scholar with direct exposure to hospital clinical rotations
                        and cGMP manufacturing methodologies.
                    </p>

                    {/* Numbered Achievement Badges */}
                    <div className={styles.counterRow}>
                        <div className={styles.counterItem}>
                            <div className={styles.counterBadge}>01</div>
                            <div>
                                <h4 className={styles.counterTitle}>Doctoral &amp; PG Faculty</h4>
                                <p className={styles.counterDesc}>Over 70% of senior mentors hold doctorate credentials.</p>
                            </div>
                        </div>

                        <div className={styles.counterItem}>
                            <div className={styles.counterBadge}>02</div>
                            <div>
                                <h4 className={styles.counterTitle}>Clinical Hospital Postings</h4>
                                <p className={styles.counterDesc}>Direct bedside patient rounds at multi-specialty partner hospitals.</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className={styles.readMoreBtn}>
                        <span>Read More</span>
                        <span className={styles.btnArrow}>→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}