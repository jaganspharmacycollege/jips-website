'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from './page.module.css';

interface Recruiter {
    name: string;
    category: string;
    hqLocation: string;
    hiringDomains: string;
    packageTier: string;
    image: string;
}

const recruitersRegistry: Recruiter[] = [
    {
        name: "Dr. Reddy's Laboratories",
        category: 'Pharmaceutical Formulation & API',
        hqLocation: 'Hyderabad, India',
        hiringDomains: 'Formulation Scientist (F&D), Analytical Chemistry (ADL)',
        packageTier: '₹5.5 - ₹8.5 LPA',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Hetero Drugs Ltd.',
        category: 'Generic Manufacturing & R&D',
        hqLocation: 'Hyderabad, India',
        hiringDomains: 'Quality Assurance (QA), Quality Control (QC), Production',
        packageTier: '₹4.2 - ₹6.5 LPA',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Apollo Hospitals Enterprise',
        category: 'Super-Specialty Clinical Healthcare',
        hqLocation: 'Pan-India Hospital Network',
        hiringDomains: 'Inpatient Clinical Pharmacist, ICU Specialist, Ward Lead',
        packageTier: '₹4.8 - ₹7.8 LPA',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Aurobindo Pharma',
        category: 'Active Ingredients & Export Audits',
        hqLocation: 'Hyderabad, India',
        hiringDomains: 'HPLC Method Validation, Stability Testing, CTD Dossiers',
        packageTier: '₹4.5 - ₹6.8 LPA',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: "Divi's Laboratories",
        category: 'Custom Chemical Synthesis & Export',
        hqLocation: 'Hyderabad, India',
        hiringDomains: 'Bulk Drug Manufacturing, Process Chemistry, Regulatory',
        packageTier: '₹4.2 - ₹6.2 LPA',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Biocon Biologics',
        category: 'Biosimilars & Monoclonal Antibodies',
        hqLocation: 'Bengaluru, India',
        hiringDomains: 'Bioprocess Engineering, Bio-Analytical QC, Regulatory Affairs',
        packageTier: '₹5.0 - ₹7.5 LPA',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'IQVIA Clinical Trials',
        category: 'Contract Research Organization (CRO)',
        hqLocation: 'Global / Bengaluru',
        hiringDomains: 'Clinical Data Coordinator, Pharmacovigilance Safety Lead',
        packageTier: '₹4.5 - ₹7.2 LPA',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Sun Pharmaceutical Industries',
        category: 'Global Specialty & Generics',
        hqLocation: 'Mumbai, India',
        hiringDomains: 'Regulatory Affairs, Bio-Equivalence Studies, QA Testing',
        packageTier: '₹4.6 - ₹6.8 LPA',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80',
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

export default function RecruitersPage() {
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
                        <span className={styles.menuPath}>Menu path: Placements &rsaquo; Recruiting Partners</span>
                        <h1 className={styles.heroTitle}>Corporate Recruiting Partners</h1>
                        <p className={styles.heroLead}>
                            Every year, India&apos;s leading pharmaceutical giants, clinical hospital networks, and contract research organizations (CROs) visit JIPS to recruit our undergraduate, postgraduate, and clinical pharmacy graduates.
                        </p>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>45+</strong>
                                <span className={styles.statLbl}>Annual MNC Recruiters</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>₹8.5 LPA</strong>
                                <span className={styles.statLbl}>Highest Salary Package</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statCell}>
                                <strong className={styles.statNum}>350+</strong>
                                <span className={styles.statLbl}>Annual Job Offers</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. RECRUITERS DIRECTORY GRID */}
            <section className={styles.directorySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>CAMPUS PLACEMENT PARTNERS</span>
                        <h2 className={styles.sectionHeading}>Annual Corporate Employers</h2>
                        <p className={styles.sectionSubtext}>
                            Explore our recruitment partners, core hiring roles, and salary package tiers.
                        </p>
                    </motion.div>

                    <div className={styles.recruitersGrid}>
                        {recruitersRegistry.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                className={styles.recruiterCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.cardImgPane}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className={styles.cardPhoto}
                                    />
                                    <span className={styles.packageBadge}>{item.packageTier}</span>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.locationMeta}>
                                        <MapPin size={13} /> {item.hqLocation}
                                    </div>

                                    <h3 className={styles.companyName}>{item.name}</h3>
                                    <span className={styles.categoryText}>{item.category}</span>

                                    <div className={styles.rolesBox}>
                                        <span className={styles.rolesLabel}>CORE HIRING PROFILES:</span>
                                        <strong className={styles.rolesValue}>{item.hiringDomains}</strong>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}