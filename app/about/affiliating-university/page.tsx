'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
    GraduationCap,
    Award,
    BookOpen,
    Building,
    ShieldCheck,
    CheckCircle2,
    ExternalLink,
    Sparkles,
} from 'lucide-react';
import styles from './AffiliatingUniversity.module.css';

const policyCards = [
    {
        icon: BookOpen,
        head: 'Curricular Framework & CBCS Pedagogy',
        tag: 'PCI ALIGNED SYLLABUS',
        text: "JIPS operates strictly under JNTUA's updated Pharmacy Council of India unified syllabus, ensuring contemporary credit allocations, elective laboratory hours, and outcome-based research projects benchmarked with global academia.",
        points: [
            'Choice-Based Credit System (CBCS) structure',
            'Advanced pilot plant compounding electives',
            'Regular academic audit cycles and syllabus reviews',
        ],
    },
    {
        icon: Award,
        head: 'Evaluation Rigor & Degree Conferral',
        tag: 'CENTRALIZED EXAMINATION',
        text: 'Semester examinations, external laboratory audits, and centralized spot evaluations are supervised directly by JNTUA, guaranteeing merit-based grading, absolute evaluation integrity, and recognized degree conferral.',
        points: [
            'University-appointed external viva examiners',
            'Encrypted online paper delivery protocols',
            'Nationally accredited, internationally valid degrees',
        ],
    },
];

const universityStats = [
    { label: 'College Affiliation Code', val: 'JAGP' },
    { label: 'University Zone', val: 'Zone IV (Rayalaseema)' },
    { label: 'Statutory Body Status', val: 'State Technological University' },
    { label: 'Degrees Conferred', val: 'B.Pharm, M.Pharm, Pharm.D' },
];

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            delay: i * 0.14,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function AffiliatingUniversity() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.affiliateContainer}>
            {/* 1. University Showcase Banner with Background Image */}
            <motion.section
                className={styles.uniBanner}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.bannerImageWrap}>
                    <Image
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
                        alt="University Campus Architecture"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.bannerImg}
                    />
                    <div className={styles.bannerOverlay} />
                </div>

                <div className={styles.bannerContent}>
                    <div className={styles.crestContainer}>
                        <div className={styles.crestCircle}>JNTUA</div>
                        <span className={styles.statutoryTag}>
                            <Sparkles size={12} /> AFFILIATING UNIVERSITY
                        </span>
                    </div>

                    <h1 className={styles.uniFullName}>
                        Jawaharlal Nehru Technological University Anantapur
                    </h1>
                    <p className={styles.uniCity}>
                        Ananthapuramu – 515002, Andhra Pradesh, India
                    </p>

                    <div className={styles.quickCodePills}>
                        <div className={styles.pillItem}>
                            <span className={styles.pillKey}>Institutional Code:</span>
                            <span className={styles.pillVal}>JAGP</span>
                        </div>
                        <div className={styles.pillItem}>
                            <span className={styles.pillKey}>Accreditation:</span>
                            <span className={styles.pillVal}>UGC &amp; AICTE Recognized</span>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 2. Key Academic Stats Strip */}
            <motion.div
                className={styles.statsStrip}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {universityStats.map((item, idx) => (
                    <div key={idx} className={styles.statBlock}>
                        <span className={styles.statLabel}>{item.label}</span>
                        <span className={styles.statValue}>{item.val}</span>
                    </div>
                ))}
            </motion.div>

            {/* 3. Curricular Framework & Evaluation Rigor */}
            <div className={styles.policySection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionEyebrow}>ACADEMIC INTEGRATION</span>
                    <h2 className={styles.sectionTitle}>Curricular Governance &amp; Degree Protocols</h2>
                    <p className={styles.sectionSubtitle}>
                        How JIPS seamlessly interfaces with JNTUA to deliver rigorous pedagogical standards, external laboratory audits, and transparent degree progressions.
                    </p>
                </div>

                <div className={styles.policyRow}>
                    {policyCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.article
                                key={card.head}
                                className={styles.policyCard}
                                custom={idx}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.cardTopRow}>
                                    <div className={styles.cardIconWrap}>
                                        <Icon size={22} />
                                    </div>
                                    <span className={styles.cardTag}>{card.tag}</span>
                                </div>

                                <h3 className={styles.policyHead}>{card.head}</h3>
                                <p className={styles.policyText}>{card.text}</p>

                                <div className={styles.checkPointsList}>
                                    {card.points.map((pt, i) => (
                                        <div key={i} className={styles.checkPointItem}>
                                            <CheckCircle2 size={15} className={styles.checkIcon} />
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {/* 4. University Secretariat Seal Banner */}
            <motion.div
                className={styles.secretariatBanner}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.secretariatLeft}>
                    <div className={styles.secretariatIcon}>
                        <Building size={22} />
                    </div>
                    <div>
                        <h4 className={styles.secretariatTitle}>University Academic Audit Cell (AAC)</h4>
                        <p className={styles.secretariatDesc}>
                            Continuous adherence to semester calendars, statutory faculty-to-student ratios, and internal quality cell (IQAC) verifications under JNTUA directives.
                        </p>
                    </div>
                </div>
                <div className={styles.secretariatBadge}>ANNUAL AFFILIATION RENEWAL VERIFIED</div>
            </motion.div>
        </div>
    );
}