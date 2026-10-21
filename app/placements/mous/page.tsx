'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';
import styles from './page.module.css';

interface MoUItem {
    id: string;
    partnerName: string;
    category: 'pharma-industry' | 'clinical-hospital' | 'cro-research';
    categoryLabel: string;
    signDate: string;
    validity: string;
    scope: string;
    deliverables: string[];
    image: string;
}

const mouList: MoUItem[] = [
    {
        id: 'mou-1',
        partnerName: 'Hetero Drugs Ltd. & Labs',
        category: 'pharma-industry',
        categoryLabel: 'Pharmaceutical Industry',
        signDate: 'Signed: 2024',
        validity: 'Active (5 Years Renewal)',
        scope: 'Industrial Internship, Pilot Plant Training & Direct Campus Hiring',
        deliverables: [
            'Annual 60-day industrial formulation compounding internships for final year B.Pharm scholars',
            'Faculty development programs (FDP) on cGMP regulatory documentation and clean-room audits',
            'Priority on-campus written assessment and interview drives for QC/QA and production roles',
        ],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'mou-2',
        partnerName: 'Apollo Hospitals Group (Clinical Division)',
        category: 'clinical-hospital',
        categoryLabel: 'Hospital Clinical Residency',
        signDate: 'Signed: 2023',
        validity: 'Active (Permanent MoA)',
        scope: 'Pharm.D Bedside Ward Rotations, ICU Clerkship & Clinical Audit',
        deliverables: [
            '365-day full-time clinical clerkship and internship residency in tertiary hospital wards',
            'Daily attending rounds with chief medical consultants across cardiology, oncology, and ICU',
            'Therapeutic drug monitoring (TDM) and pharmacovigilance adverse event reporting access',
        ],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'mou-3',
        partnerName: 'Aurobindo Pharma Analytical Innovation Center',
        category: 'pharma-industry',
        categoryLabel: 'Analytical Method R&D',
        signDate: 'Signed: 2024',
        validity: 'Active (3 Years)',
        scope: 'Postgraduate M.Pharm Dissertation & Hyphenated HPLC Project Sponsorship',
        deliverables: [
            'Full-year industry-sponsored thesis research projects for M.Pharm analysis students',
            'Co-guiding of dissertation protocols with senior principal scientists from Aurobindo',
            'Access to advanced degradation kinetic datasets and specialized reference standards',
        ],
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'mou-4',
        partnerName: 'IQVIA Clinical Data & Trials Organization',
        category: 'cro-research',
        categoryLabel: 'Clinical Research (CRO)',
        signDate: 'Signed: 2025',
        validity: 'Active (3 Years)',
        scope: 'Clinical Data Management Training & Pharmacovigilance Onboarding',
        deliverables: [
            'Curriculum guest seminars on electronic trial master file (eTMF) and MedDRA coding',
            'Direct recruitment drives for Clinical Data Associate and Drug Safety positions',
            'Faculty research collaborative projects on pharmacoeconomic healthcare audits',
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
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

export default function MousPage() {
    const shouldReduceMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.pageRoot}>
            {/* 1. HERO BANNER */}
            <section ref={heroRef} className={styles.heroSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : heroY,
                            opacity: shouldReduceMotion ? 1 : heroOpacity,
                        }}
                    >
                        <span className={styles.menuPath}>Menu path: Placements &rsaquo; MoUs &amp; Collaborations</span>
                        <h1 className={styles.heroTitle}>MoUs &amp; Industrial Collaborations</h1>
                        <p className={styles.heroLead}>
                            Strategic Memorandums of Understanding (MoUs) partnering JIPS with top pharmaceutical manufacturing houses, tertiary clinical teaching hospitals, and clinical research organizations (CROs).
                        </p>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>12+ Active</strong>
                                <span className={styles.statLbl}>Corporate MoUs</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>100%</strong>
                                <span className={styles.statLbl}>Internship Placement</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>Tertiary Hospitals</strong>
                                <span className={styles.statLbl}>Clinical Residency Postings</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. MOUS DOSSIER GRID */}
            <section className={styles.mousSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>FORMAL PARTNERSHIPS</span>
                        <h2 className={styles.sectionHeading}>Institutional Agreements Register</h2>
                        <p className={styles.sectionSubtext}>
                            Formal collaborative agreements that empower student internships, faculty technology transfers, and on-campus recruitments.
                        </p>
                    </motion.div>

                    <div className={styles.mousStack}>
                        {mouList.map((mou, idx) => (
                            <motion.article
                                key={mou.id}
                                className={styles.mouCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.cardImgPane}>
                                    <Image
                                        src={mou.image}
                                        alt={mou.partnerName}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 380px"
                                        className={styles.cardPhoto}
                                    />
                                    <span className={styles.categoryPill}>{mou.categoryLabel}</span>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.cardTopMeta}>
                                        <span className={styles.dateMeta}>
                                            <Calendar size={14} /> {mou.signDate}
                                        </span>
                                        <span className={styles.validityPill}>{mou.validity}</span>
                                    </div>

                                    <h3 className={styles.partnerName}>{mou.partnerName}</h3>
                                    <span className={styles.scopeText}>
                                        <strong>Scope:</strong> {mou.scope}
                                    </span>

                                    <div className={styles.deliverablesBox}>
                                        <h4 className={styles.deliverableHeading}>Joint Deliverables &amp; Outcomes:</h4>
                                        <ul className={styles.deliverablesList}>
                                            {mou.deliverables.map((item, dIdx) => (
                                                <li key={dIdx}>
                                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}