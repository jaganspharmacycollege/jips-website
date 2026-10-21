'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Building2, GraduationCap, Microscope, Briefcase, Settings, ShieldCheck } from 'lucide-react';
import styles from './OrganisationChart.module.css';

const branches = [
    {
        tag: 'ACADEMICS',
        head: 'IQAC & Academic Council',
        sub: 'Curriculum development, outcome-based education, and PCI/NAAC statutory audits.',
        icon: GraduationCap,
        accent: '#0284c7',
    },
    {
        tag: 'DISCOVERY',
        head: 'R&D & Ethics Committee',
        sub: 'Patents, scientific publications, doctoral guides, and external research grants.',
        icon: Microscope,
        accent: '#ca8a04',
    },
    {
        tag: 'CAREERS',
        head: 'Placement Cell & IIIC',
        sub: 'Hospital clerkship ties, corporate industrial training, and campus drives.',
        icon: Briefcase,
        accent: '#16a34a',
    },
    {
        tag: 'OPERATIONS',
        head: 'Administrative Secretariat',
        sub: 'Campus finance, digital labs, regulatory documentation, and student amenities.',
        icon: Settings,
        accent: '#e11d48',
    },
];

const popVariant: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 25 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function OrganisationChart() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.sectionWrapper}>
            {/* Header Intro */}
            <motion.div
                className={styles.chartHeader}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <span className={styles.headerEyebrow}>GOVERNANCE FRAMEWORK</span>
                <h2 className={styles.headerTitle}>Institutional Governance Structure</h2>
                <p className={styles.headerSubtitle}>
                    Hierarchical delegation of academic, statutory, operational, and research governance across the institution.
                </p>
            </motion.div>

            <div className={styles.treeContainer}>
                {/* Tier 1: Apex Governing Body */}
                <motion.div
                    className={styles.apexNode}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.nodeHeaderRow}>
                        <div className={styles.nodeIconCircle}>
                            <Building2 size={20} />
                        </div>
                        <span className={styles.tierBadgeApex}>TIER 01 • APEX GOVERNING BODY</span>
                    </div>

                    <div className={styles.apexContent}>
                        <div className={styles.avatarGroup}>
                            <div className={styles.miniAvatar}>
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                                    alt="Chairman"
                                    fill
                                    sizes="40px"
                                    className={styles.avatarImg}
                                />
                            </div>
                            <div className={styles.miniAvatar}>
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                                    alt="Secretary"
                                    fill
                                    sizes="40px"
                                    className={styles.avatarImg}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.apexTitle}>Board of Management / Educational Society</h3>
                            <p className={styles.apexSub}>Strategic Policy, Statutory Approvals &amp; Financial Stewardship</p>
                        </div>
                    </div>
                </motion.div>

                {/* Stem 1 */}
                <div className={styles.connectorStem}>
                    <div className={styles.pulseDot} />
                </div>

                {/* Tier 2: Executive Head */}
                <motion.div
                    className={styles.executiveNode}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.executiveBadgeWrap}>
                        <span className={styles.tierBadgeGold}>
                            <ShieldCheck size={13} /> TIER 02 • EXECUTIVE LEADERSHIP
                        </span>
                    </div>

                    <div className={styles.executiveCardBody}>
                        <div className={styles.executiveAvatar}>
                            <Image
                                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80"
                                alt="Principal"
                                fill
                                sizes="64px"
                                className={styles.avatarImg}
                            />
                        </div>

                        <div className={styles.executiveInfo}>
                            <h3 className={styles.executiveTitle}>Principal &amp; Institutional Head</h3>
                            <span className={styles.executiveMeta}>Dr. S. K. Sundaram • M.Pharm, Ph.D.</span>
                            <p className={styles.executiveSub}>
                                Day-to-day academic administration, faculty leadership, university board inspections &amp; PCI liaison.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stem 2 & Horizontal Crossbar */}
                <div className={styles.connectorStem}>
                    <div className={styles.pulseDot} />
                </div>

                <div className={styles.crossbarContainer}>
                    <div className={styles.horizontalBar} />
                </div>

                {/* Tier 3: Functional Pillars Grid */}
                <div className={styles.quadBranchGrid}>
                    {branches.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.head}
                                className={styles.branchBox}
                                custom={idx}
                                variants={shouldReduceMotion ? undefined : popVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div
                                    className={styles.branchIconWrap}
                                    style={{ color: item.accent, borderColor: `${item.accent}30`, backgroundColor: `${item.accent}10` }}
                                >
                                    <Icon size={20} />
                                </div>

                                <span className={styles.branchTag}>{item.tag}</span>
                                <h4 className={styles.branchHead}>{item.head}</h4>
                                <p className={styles.branchSub}>{item.sub}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}