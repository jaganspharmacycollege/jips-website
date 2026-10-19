'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
    ShieldCheck,
    Building2,
    GraduationCap,
    Award,
    CheckCircle2,
    FileBadge,
    Sparkles,
} from 'lucide-react';
import styles from './ApprovalsAffiliations.module.css';

interface Certification {
    authority: string;
    location: string;
    act: string;
    scope: string;
    status: string;
    code: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    image: string;
}

const certifications: Certification[] = [
    {
        authority: 'Pharmacy Council of India (PCI)',
        location: 'New Delhi',
        act: 'Section 12, Pharmacy Act 1948',
        scope: 'Statutory Course Approval & Standard Intake for B. Pharm & M. Pharm Programs',
        status: 'Active & Verified',
        code: 'PCI-INST-1430',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    },
    {
        authority: 'Government of Andhra Pradesh',
        location: 'Amaravati',
        act: 'Department of Higher Education & APSCHE',
        scope: 'Permanent Institutional Recognition, Statutory Gazette & University Quota Allocation',
        status: 'Permanent Order',
        code: 'G.O. MS No. 74',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    },
    {
        authority: 'Jawaharlal Nehru Technological University',
        location: 'Ananthapuramu',
        act: 'Affiliated Academic Institution',
        scope: 'Curricular Syllabus, Centralized Examination Evaluation, External Lab Audits & Degree Conferral',
        status: 'Affiliated Authority',
        code: 'College Code: JAGP',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    },
];

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function ApprovalsAffiliations() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.sectionWrapper}>
            {/* Header Banner */}
            <motion.div
                className={styles.headerBlock}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.eyebrowBadge}>
                    <Sparkles size={13} />
                    <span>STATUTORY RIGOR &amp; CREDENTIALS</span>
                </div>
                <h2 className={styles.mainTitle}>
                    Approvals &amp; <span className={styles.goldText}>Affiliations</span>
                </h2>
                <p className={styles.mainSubtitle}>
                    Recognized by statutory regulatory councils and top technological universities, assuring benchmarked quality across curricula, laboratories, and credentials.
                </p>
            </motion.div>

            {/* Compliance Matrix Grid */}
            <div className={styles.matrixContainer}>
                {certifications.map((item, idx) => {
                    const Icon = item.icon;
                    const isFirstCard = idx === 0;

                    return (
                        <motion.article
                            key={item.authority}
                            className={styles.complianceCard}
                            custom={idx}
                            variants={shouldReduceMotion ? undefined : cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {/* Photo Thumbnail */}
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.authority}
                                    fill
                                    priority={isFirstCard}
                                    loading={isFirstCard ? 'eager' : 'lazy'}
                                    sizes="(max-width: 768px) 100vw, 240px"
                                    className={styles.cardImage}
                                />
                                <div className={styles.imageOverlay} />
                                <span className={styles.imageCodeBadge}>
                                    <FileBadge size={13} /> {item.code}
                                </span>
                            </div>

                            {/* Authority & Location Block */}
                            <div className={styles.authorityBlock}>
                                <div className={styles.iconCircle}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h3 className={styles.authorityName}>{item.authority}</h3>
                                    <span className={styles.authorityLocation}>{item.location}</span>
                                </div>
                            </div>

                            {/* Mandate & Act Details */}
                            <div className={styles.mandateBlock}>
                                <span className={styles.mandateAct}>{item.act}</span>
                                <p className={styles.mandateScope}>{item.scope}</p>
                            </div>

                            {/* Status Verification Badge */}
                            <div className={styles.statusBlock}>
                                <div className={styles.statusPill}>
                                    <CheckCircle2 size={15} />
                                    <span>{item.status}</span>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

            {/* Institutional Compliance Seal */}
            <motion.div
                className={styles.sealFooter}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.sealLeft}>
                    <div className={styles.sealBadgeIcon}>
                        <Award size={22} />
                    </div>
                    <div>
                        <h4 className={styles.sealHeading}>Official Transparency Guarantee</h4>
                        <p className={styles.sealSubtext}>
                            All inspection compliance letters, affiliation orders, and mandatory regulatory disclosures are kept updated and verifiable by prospective students and parents.
                        </p>
                    </div>
                </div>
                <div className={styles.codeTag}>ISO 9001:2015 CERTIFIED INSTITUTION</div>
            </motion.div>
        </div>
    );
}