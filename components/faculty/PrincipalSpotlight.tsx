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
                            src="/principal/principal.jpg"
                            alt="Dr. J. Venkata Suresh - Professor, Principal & HOD (Pharmacognosy & Phytopharmaceuticals)"
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
                            Professor &amp; Principal; Head of Pharmacognosy &amp; Phytopharmaceuticals
                        </span>

                        <p className={styles.bio}>
                            Guiding academic administration, university board compliance, and natural product research at JIPS. With over 28 years of dedicated pedagogical leadership and 8+ years as Principal, Dr. Suresh leads research in Pharmacognosy, Herbal Drug Technology, green nanoparticles, and polyherbal formulation design.
                        </p>

                        {/* Credential Badges Grid */}
                        <div className={styles.badgesGrid}>
                            <div className={styles.badgeItem}>
                                <ShieldCheck size={18} className={styles.badgeIconGreen} />
                                <div>
                                    <span className={styles.badgeLabel}>APPOINTMENTS &amp; STATUTORY</span>
                                    <strong className={styles.badgeValue}>PCI Principal &amp; APTI AP EC Member</strong>
                                </div>
                            </div>

                            <div className={styles.badgeItem}>
                                <BookOpen size={18} className={styles.badgeIconGold} />
                                <div>
                                    <span className={styles.badgeLabel}>RESEARCH &amp; PATENTS</span>
                                    <strong className={styles.badgeValue}>36 Publications • 12 Granted IP Entries</strong>
                                </div>
                            </div>

                            <div className={styles.badgeItem}>
                                <Stethoscope size={18} className={styles.badgeIconBlue} />
                                <div>
                                    <span className={styles.badgeLabel}>RESEARCH SPECIALIZATION</span>
                                    <strong className={styles.badgeValue}>Pharmacognosy &amp; Herbal Nanotechnology</strong>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className={styles.bottomRow}>
                            <span className={styles.emailPill}>
                                <Mail size={15} /> principal.jips@gmail.com
                            </span>
                            <Link href="/about/principals-message" className={styles.messageLink}>
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