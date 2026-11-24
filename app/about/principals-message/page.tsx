'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
    GraduationCap,
    Award,
    Mail,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    BookOpen,
    Building2,
    Users,
} from 'lucide-react';
import styles from './PrincipalsMessage.module.css';

export default function PrincipalsMessage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageWrapper}>
            {/* Top Breadcrumb & Header Bar */}
            <div className={styles.headerBlock}>
                <div className={styles.breadcrumb}>
                    <Link href="/" className={styles.crumbLink}>Home</Link>
                    <span className={styles.crumbSep}>/</span>
                    <Link href="/about" className={styles.crumbLink}>About Us</Link>
                    <span className={styles.crumbSep}>/</span>
                    <span className={styles.crumbActive}>Principal&apos;s Message</span>
                </div>
                <div className={styles.badgeRow}>
                    <span className={styles.executiveBadge}>
                        <Sparkles size={14} />
                        EXECUTIVE LEADERSHIP DESK
                    </span>
                    <span className={styles.approvalBadge}>
                        <ShieldCheck size={14} />
                        PCI Approved Principal
                    </span>
                </div>
                <h1 className={styles.pageTitle}>Principal&apos;s Welcome Message</h1>
                <p className={styles.pageSubtitle}>
                    A guiding vision of scientific rigor, ethical care, and compassionate pharmaceutical leadership from the desk of Dr. J. Venkata Suresh.
                </p>
            </div>

            {/* Main Message Section */}
            <div className={styles.sectionWrapper}>
                <motion.div
                    className={styles.speechCard}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Top Floating Quote Mark */}
                    <div className={styles.quoteBadge} aria-hidden="true">
                        <svg viewBox="0 0 100 100" className={styles.quoteSvg} fill="currentColor">
                            <path d="M18 42 C18 25, 30 14, 46 12 L48 24 C38 25, 32 30, 31 38 C34 38, 38 39, 41 42 C45 46, 47 51, 47 57 C47 64, 44 70, 39 74 C34 78, 28 80, 21 80 C15 80, 10 77, 6 72 C2 67, 0 60, 0 51 C0 42, 6 25, 18 12 L28 18 C20 28, 18 36, 18 42 Z" />
                            <path d="M68 42 C68 25, 80 14, 96 12 L98 24 C88 25, 82 30, 81 38 C84 38, 88 39, 91 42 C95 46, 97 51, 97 57 C97 64, 94 70, 89 74 C84 78, 78 80, 71 80 C65 80, 60 77, 56 72 C52 67, 50 60, 50 51 C50 42, 56 25, 68 12 L78 18 C70 28, 68 36, 68 42 Z" />
                        </svg>
                    </div>

                    {/* Salutation */}
                    <div className={styles.salutationRow}>
                        <h2 className={styles.salutation}>Dear Students and Parents,</h2>
                    </div>

                    {/* Official Letter Body */}
                    <div className={styles.messageContent}>
                        <p>
                            It gives me great pleasure to welcome you to <strong>Jagan&apos;s Institute of Pharmaceutical Sciences, Nellore</strong>. Pharmacy is a profession that touches every life, from the medicines we take to the care we receive. At JIPS, we prepare our students to take up this responsibility with knowledge, skill and integrity.
                        </p>

                        <p>
                            Our programmes combine strong classroom teaching with hands-on laboratory training, hospital-based learning and exposure to the pharmaceutical industry. We encourage our students to think critically, take part in research, and keep learning throughout their careers.
                        </p>

                        <p>
                            Our faculty members guide every student with dedication, and the college provides a supportive environment in which students can grow academically and as responsible citizens. We also encourage participation in community health and social service activities, because a pharmacist serves society as much as a profession.
                        </p>

                        <p>
                            To the parents who place their trust in us, I assure you that we will do our best to help your children become competent, ethical and confident pharmacy professionals. To our students, I wish you a rewarding journey at JIPS, and I invite you to make the most of the opportunities here.
                        </p>
                    </div>

                    {/* Official Sign-off & Principal Dossier Profile */}
                    <div className={styles.principalProfileRow}>
                        <div className={styles.avatarFrame}>
                            <Image
                                src="/principal/principal.jpg"
                                alt="Dr. J. Venkata Suresh - Professor & Principal, JIPS"
                                fill
                                sizes="(max-width: 425px) 70px, 92px"
                                className={styles.avatarImg}
                                priority
                            />
                        </div>

                        <div className={styles.signInfo}>
                            <div className={styles.signGreeting}>With best wishes,</div>
                            <div className={styles.signatureRow}>
                                <span className={styles.dash}>—</span>
                                <span className={styles.author}>Dr. J. Venkata Suresh</span>
                            </div>
                            <div className={styles.qualification}>
                                M.Pharm, Ph.D. • 28+ Years Academic &amp; Research Experience
                            </div>
                            <div className={styles.designation}>
                                Professor &amp; Principal • Head, Dept. of Pharmacognosy &amp; Phytopharmaceuticals
                            </div>
                            <div className={styles.institution}>
                                Jagan&apos;s Institute of Pharmaceutical Sciences, Nellore, Andhra Pradesh
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Quick Strategic Highlights Strip */}
            <div className={styles.highlightsStrip}>
                <div className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>
                        <GraduationCap size={22} />
                    </div>
                    <div>
                        <div className={styles.highlightNum}>28+ Years</div>
                        <div className={styles.highlightLabel}>Teaching &amp; Academic Pedagogy</div>
                    </div>
                </div>

                <div className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>
                        <Building2 size={22} />
                    </div>
                    <div>
                        <div className={styles.highlightNum}>8+ Years</div>
                        <div className={styles.highlightLabel}>Executive Service as Principal</div>
                    </div>
                </div>

                <div className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>
                        <BookOpen size={22} />
                    </div>
                    <div>
                        <div className={styles.highlightNum}>36 Pubs &amp; 12 IP</div>
                        <div className={styles.highlightLabel}>Patents, Designs &amp; Publications</div>
                    </div>
                </div>

                <div className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>
                        <Award size={22} />
                    </div>
                    <div>
                        <div className={styles.highlightNum}>APTI AP EC</div>
                        <div className={styles.highlightLabel}>Executive Council Member 2022–27</div>
                    </div>
                </div>
            </div>

            {/* Navigation & Action Bar */}
            <div className={styles.actionBar}>
                <div className={styles.actionLeft}>
                    <span className={styles.actionPrompt}>Interested in learning more about our leadership?</span>
                </div>
                <div className={styles.actionBtns}>
                    <Link href="/about/principals-profile" className={styles.primaryBtn}>
                        <span>Explore Principal&apos;s Academic Profile</span>
                        <ArrowRight size={16} />
                    </Link>
                    <a href="mailto:principal.jips@gmail.com" className={styles.secondaryBtn}>
                        <Mail size={16} />
                        <span>Email Principal&apos;s Office</span>
                    </a>
                    <Link href="/faculty" className={styles.outlineBtn}>
                        <Users size={16} />
                        <span>Faculty Directory</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
