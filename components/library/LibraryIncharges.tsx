'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './LibraryIncharges.module.css';

interface InchargeProfile {
    name: string;
    role: string;
    scope: string;
    qualification: string;
    email: string;
    image: string;
}

const leadershipIncharges: InchargeProfile[] = [
    {
        name: 'Mr. P. JayaPrakash Reddy',
        role: 'Library In-Charge',
        scope: 'Central Library Administration, Circulation & Periodicals',
        qualification: 'Library Management & Information Services',
        email: 'library@jips.edu.in',
        image: '/library/p-jayaprakash-reddy.jpg',
    },
    {
        name: 'Dr. J. Venkata Suresh',
        role: 'Chairman, Library Committee',
        scope: 'Professor & Principal, Institutional Governance',
        qualification: 'M.Pharm, Ph.D. (Pharmacognosy)',
        email: 'principal.jips@gmail.com',
        image: '/principal/principal.jpg',
    },
];

const deptIncharges: InchargeProfile[] = [
    {
        name: 'Dr. Seelam Sharath Chandra',
        role: 'Dept. Library Coordinator',
        scope: 'Pharmaceutics & Formulation Sciences',
        qualification: 'M.Pharm, Ph.D. • Professor',
        email: 'sharath.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Dr. B. Srujan Reddy',
        role: 'Dept. Library Coordinator',
        scope: 'Pharmacology & Clinical Pharmacy',
        qualification: 'M.Pharm, Ph.D. • Professor',
        email: 'srujan.cology@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Mr. D. Naveen Kumar',
        role: 'Dept. Library Coordinator',
        scope: 'Pharmaceutical Analysis & Quality Assurance',
        qualification: 'M.Pharm • Assistant Professor',
        email: 'naveen.analysis@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Mrs. Ashwini Masapeta',
        role: 'Dept. Library Coordinator',
        scope: 'Pharmacognosy & Phytopharmaceuticals',
        qualification: 'M.Pharm • Assistant Professor',
        email: 'ashwini.cognosy@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
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

export default function LibraryIncharges() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.inchargesSection} aria-label="Library Incharges & Committee">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>GOVERNANCE &amp; CONSULTATION</span>
                    <h2 className={styles.sectionTitle}>Library Administration &amp; Department In-Charges</h2>
                    <p className={styles.sectionSubtext}>
                        Our experienced library committee and departmental faculty coordinators ensure contemporary textbook acquisitions, periodical allocations, and seamless student assistance.
                    </p>
                </div>

                {/* 1. Executive Leadership Row */}
                <div className={styles.execGrid}>
                    {leadershipIncharges.map((exec, idx) => (
                        <motion.div
                            key={exec.name}
                            className={styles.execCard}
                            custom={idx}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.execImgPane}>
                                <Image
                                    src={exec.image}
                                    alt={exec.name}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    className={styles.execPhoto}
                                />
                                <span className={styles.execRoleBadge}>{exec.role}</span>
                            </div>

                            <div className={styles.execBody}>
                                <h3 className={styles.execName}>{exec.name}</h3>
                                <span className={styles.execQual}>{exec.qualification}</span>
                                <p className={styles.execScope}>{exec.scope}</p>

                                <div className={styles.emailPill}>
                                    <Mail size={14} className={styles.mailIcon} />
                                    <span>{exec.email}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Department In-Charges Grid */}
                <div className={styles.subHeadingWrap}>
                    <h3 className={styles.subHeadingTitle}>Departmental Library In-Charges</h3>
                    <span className={styles.subHeadingBadge}>Core Subject Liaisons</span>
                </div>

                <div className={styles.deptGrid}>
                    {deptIncharges.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            className={styles.deptCard}
                            custom={idx * 0.12}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.deptImgWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    unoptimized
                                    loading="eager"
                                    sizes="(max-width: 768px) 100vw, 280px"
                                    className={styles.deptPhoto}
                                />
                            </div>

                            <div className={styles.deptBody}>
                                <h4 className={styles.deptName}>{member.name}</h4>
                                <span className={styles.deptScope}>{member.scope}</span>
                                <span className={styles.deptQual}>{member.qualification}</span>

                                <div className={styles.deptEmail}>
                                    <Mail size={13} className={styles.mailIcon} />
                                    <span>{member.email}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}