'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Mail, ChevronRight, Stethoscope, BookOpen, ShieldCheck } from 'lucide-react';
import styles from './PrincipalSpotlight.module.css';

export default function PrincipalSpotlight() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.spotlightSection} aria-label="Executive Leadership">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.25, ease: 'easeOut' }}
                >
                    {/* Left Column: Portrait Container */}
                    <div className={styles.portraitPane}>
                        <Image
                            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
                            alt="Dr. J. Venkata Suresh - Principal and Head of Pharmacology"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 360px"
                            className={styles.portraitImg}
                        />
                        <div className={styles.portraitOverlayBadge}>
                            <Award size={16} className={styles.goldBadgeIcon} />
                            <span>Institutional Head</span>
                        </div>
                    </div>

                    {/* Right Column: Academic & Research Dossier */}
                    <div className={styles.detailsPane}>
                        <span className={styles.kickerBadge}>LEADERSHIP &amp; DEPARTMENT HEAD</span>
                        <h2 className={styles.name}>Dr. J. Venkata Suresh</h2>
                        <span className={styles.titleLine}>
                            Professor and Principal; Head of the Department of Pharmacology
                        </span>

                        <p className={styles.bio}>
                            Guiding academic administration, clinical curricula standards, and advanced pharmacological inquiry at JIPS. With over two decades of dedicated pedagogical and laboratory stewardship, Dr. Suresh coordinates clinical hospital bedside clerkships, therapeutic drug monitoring, and welfare policies.
                        </p>

                        {/* Credential Badges Grid */}
                        <div className={styles.badgesGrid}>
                            <div className={styles.badgeItem}>
                                <Stethoscope size={18} className={styles.badgeIconBlue} />
                                <div>
                                    <span className={styles.badgeLabel}>CLINICAL AFFILIATION</span>
                                    <strong className={styles.badgeValue}>Teaching Hospital Bedside Rounds</strong>
                                </div>
                            </div>

                            <div className={styles.badgeItem}>
                                <BookOpen size={18} className={styles.badgeIconGold} />
                                <div>
                                    <span className={styles.badgeLabel}>ACADEMIC APPOINTMENTS</span>
                                    <strong className={styles.badgeValue}>PCI Institutional Head &amp; JNTUA Examiner</strong>
                                </div>
                            </div>

                            <div className={styles.badgeItem}>
                                <ShieldCheck size={18} className={styles.badgeIconGreen} />
                                <div>
                                    <span className={styles.badgeLabel}>RESEARCH SPECIALIZATION</span>
                                    <strong className={styles.badgeValue}>Neuropharmacology &amp; Clinical TDM</strong>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className={styles.bottomRow}>
                            <span className={styles.emailPill}>
                                <Mail size={15} /> principal@jips.edu.in
                            </span>
                            <Link href="/about#principals-message" className={styles.messageLink}>
                                <span>Read Principal&apos;s Message</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}