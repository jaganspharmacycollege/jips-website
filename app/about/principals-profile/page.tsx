'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    ShieldCheck,
    Mail,
    CheckCircle2,
    Sparkles,
    Microscope,
    FlaskConical,
    Stethoscope,
    Building,
    GraduationCap,
} from 'lucide-react';
import styles from './PrincipalsProfile.module.css';

const profileStats = [
    { value: '22+', label: 'Years Experience', sub: 'Academia & R&D' },
    { value: '45+', label: 'Research Papers', sub: 'Scopus & Web of Science' },
    { value: '03', label: 'Patents Granted', sub: 'Drug Delivery Systems' },
    { value: '14+', label: 'Ph.D Scholars Guided', sub: 'Doctoral Mentorship' },
];

const researchAreas = [
    {
        icon: Microscope,
        title: 'Nanoparticulate Drug Delivery',
        desc: 'Liposomal carriers and biodegradable polymeric nanoparticles for targeted neoplastic drug release.',
    },
    {
        icon: FlaskConical,
        title: 'Gastro-Retentive Systems',
        desc: 'Hydrodynamically balanced floating microspheres and bioadhesive drug dosage formulation design.',
    },
    {
        icon: Stethoscope,
        title: 'Bioavailability & Pharmacokinetics',
        desc: 'In-vivo absorption modeling, solubility enhancement protocols, and bio-equivalence analytical testing.',
    },
];

const governanceAppointments = [
    {
        title: 'PCI Institutional Head & Regulatory Inspector',
        organization: 'Pharmacy Council of India (PCI)',
        desc: 'Certified Institutional Head with continuous appointments as external examiner for undergraduate and postgraduate statutory boards.',
    },
    {
        title: 'Registered Ph.D Research Supervisor',
        organization: 'Jawaharlal Nehru Technological University (JNTUA)',
        desc: 'Empaneled doctoral guide supervising advanced investigations in pharmaceutical formulation sciences.',
    },
    {
        title: 'Senior Life Member & Regional Executive',
        organization: 'Association of Pharmacy Teachers of India (APTI)',
        desc: 'Active contributor to curricular policy reforms, outcome-based education workshops, and accreditation criteria.',
    },
    {
        title: 'Editorial Board & Peer Reviewer',
        organization: 'International Journal of Pharmaceutics & Drug Delivery',
        desc: 'Regularly reviews submissions in novel excipients, modified dissolution profiles, and patent literature.',
    },
];

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function PrincipalsProfile() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.profileContainer}>
            {/* 1. Executive Dossier Hero */}
            <motion.div
                className={styles.heroDossierCard}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.portraitPane}>
                    <div className={styles.portraitImageWrap}>
                        <Image
                            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
                            alt="Principal Dr. S. K. Sundaram"
                            fill
                            priority
                            loading="eager"
                            sizes="(max-width: 900px) 100vw, 360px"
                            className={styles.portraitImg}
                        />
                        <div className={styles.portraitOverlay} />
                        <div className={styles.portraitStatusBadge}>
                            <Sparkles size={13} />
                            <span>Institutional Leader</span>
                        </div>
                    </div>
                </div>

                <div className={styles.detailsPane}>
                    <div className={styles.eyebrowRow}>
                        <span className={styles.eyebrowText}>EXECUTIVE ACADEMIC LEADERSHIP</span>
                    </div>
                    <h1 className={styles.scholarName}>Dr. S. K. Sundaram</h1>
                    <div className={styles.qualificationBadge}>
                        M.Pharm (Pharmaceutics), Ph.D., F.I.C.P.
                    </div>
                    <p className={styles.leadBio}>
                        A passionate academician and senior pharmaceutical technologist with over two decades of experience,
                        Dr. Sundaram specializes in modern dosage form design, nanoparticulate drug delivery, gastro-retentive formulation
                        systems, and bio-equivalence protocols.
                    </p>
                    <p className={styles.subBio}>
                        Under his dynamic administrative guidance, JIPS has consistently expanded its institutional research
                        footprint, earning top accreditations, national statutory approvals, and industry-sponsored laboratory tie-ups that bridge
                        academic inquiry with hospital patient care.
                    </p>
                    <div className={styles.actionRow}>
                        <a href="mailto:principal@jips.ac.in" className={styles.primaryContactBtn}>
                            <Mail size={16} />
                            <span>Contact Principal&apos;s Office</span>
                        </a>
                        <div className={styles.verificationPill}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>PCI &amp; JNTUA Registered Principal</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Key Metrics Bar */}
            <motion.div
                className={styles.statsStrip}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                {profileStats.map((stat, idx) => (
                    <div key={idx} className={styles.statBox}>
                        <span className={styles.statNumber}>{stat.value}</span>
                        <span className={styles.statTitle}>{stat.label}</span>
                        <span className={styles.statSubText}>{stat.sub}</span>
                    </div>
                ))}
            </motion.div>

            {/* 3. Research Specialization Areas */}
            <div className={styles.sectionBlock}>
                <div className={styles.sectionHeadingWrapper}>
                    <span className={styles.sectionEyebrow}>SCHOLARLY FOCUS</span>
                    <h2 className={styles.sectionTitle}>Key Research Specializations</h2>
                    <p className={styles.sectionSubtitle}>
                        Pioneering formulation methodologies focused on bioavailability optimization and targeted cellular delivery.
                    </p>
                </div>
                <div className={styles.researchGrid}>
                    {researchAreas.map((area, idx) => {
                        const Icon = area.icon;
                        return (
                            <motion.div
                                key={area.title}
                                className={styles.researchCard}
                                custom={idx}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.researchIconWrap}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.researchTitle}>{area.title}</h3>
                                <p className={styles.researchDesc}>{area.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 4. Statutory & Governance Appointments */}
            <div className={styles.sectionBlock}>
                <div className={styles.sectionHeadingWrapper}>
                    <span className={styles.sectionEyebrow}>GOVERNANCE &amp; ACCREDITATIONS</span>
                    <h2 className={styles.sectionTitle}>Key Administrative Appointments</h2>
                </div>
                <div className={styles.appointmentsGrid}>
                    {governanceAppointments.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className={styles.appointmentCard}
                            custom={idx}
                            variants={shouldReduceMotion ? undefined : fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            <div className={styles.appointmentHeader}>
                                <div className={styles.badgeShield}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h3 className={styles.appointmentTitle}>{item.title}</h3>
                                    <span className={styles.appointmentOrg}>{item.organization}</span>
                                </div>
                            </div>
                            <p className={styles.appointmentDesc}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 5. Institutional Endorsement Banner */}
            <motion.div
                className={styles.endorsementBanner}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.endorsementLeft}>
                    <div className={styles.endorsementIconWrap}>
                        <Building size={22} />
                    </div>
                    <div>
                        <h4 className={styles.endorsementTitle}>Office of the Principal &amp; Academic Secretariat</h4>
                        <p className={styles.endorsementSubtitle}>
                            Directing curricular policy, institutional compliance, and university board examinations under JNTUA &amp; PCI frameworks.
                        </p>
                    </div>
                </div>
                <div className={styles.endorsementPill}>
                    <GraduationCap size={16} />
                    <span>ESTD. 2005 NELLORE CAMPUS</span>
                </div>
            </motion.div>
        </div>
    );
}