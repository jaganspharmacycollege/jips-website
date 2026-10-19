'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { UserCheck, Calendar, MapPin, Building2, FlaskConical, Award, Sparkles } from 'lucide-react';
import styles from './History.module.css';

const milestones = [
    {
        year: '2005',
        tag: 'Foundation & First Batch',
        title: 'Inaugural B.Pharm Cohort',
        body: "Established at Jangalakandriga, Muthukur Mandal, under Jagan's Educational Society with PCI approval and JNTUA affiliation, admitting its inaugural cohort of B.Pharmacy scholars.",
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'JIPS Foundation Campus Architecture in 2005',
    },
    {
        year: '2011',
        tag: 'Postgraduate Wing',
        title: 'Commencement of M.Pharm Programs',
        body: 'Expansion into postgraduate research with the introduction of M.Pharm specializations in Pharmaceutics and Pharmaceutical Analysis, backed by advanced instrumentation suites.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'M.Pharm Research and Spectroscopy Laboratory',
    },
    {
        year: '2016',
        tag: 'Clinical Healthcare',
        title: 'Inauguration of Pharm.D Degree',
        body: 'Launch of the 6-year Doctor of Pharmacy (Pharm.D) clinical program, integrating hospital bedside clerkships, therapeutic drug monitoring, and patient care rotations.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Doctor of Pharmacy Clinical Hospital Postings',
    },
    {
        year: '2023',
        tag: 'Academic Distinction',
        title: 'Conferral of Autonomous Status',
        body: 'Conferred with Autonomous status by regulatory authorities, driving independent outcome-based curriculum delivery and active ongoing research in drug discovery and natural products.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Autonomous Institution and Natural Products R&D Center',
    },
];

export default function History() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Gentle Parallax depth effect on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <div ref={containerRef} className={styles.historyWrapper}>
            {/* 1. Header & Lead Narrative Section with Campus Visual */}
            <div className={styles.headerBlock}>
                <span className={styles.menuPath}>Menu path: About &rsaquo; History &amp; Inception</span>
                <h2 className={styles.historyTitle}>History &amp; Inception</h2>

                <div className={styles.leadNarrativeCard}>
                    <div className={styles.narrativeTextSide}>
                        <p className={styles.leadText}>
                            <strong>Jagan&apos;s Institute of Pharmaceutical Sciences (JIPS)</strong> was established in <strong>2005</strong> under the visionary stewardship of Founder Chairman <strong>Sri J. Jagannatha Rao</strong> at <strong>Jangalakandriga, Muthukur Mandal, SPSR Nellore District</strong>, to bring professional pharmacy education to the Nellore region.
                        </p>
                        <p className={styles.leadText}>
                            The institute shares its campus and management with its sister institution, <strong>Jagan&apos;s College of Pharmacy</strong>. Over two decades it has grown from an undergraduate pharmacy college into an institution offering <strong>B.Pharm, M.Pharm and Pharm D programmes</strong>, with autonomous status and active research in drug discovery and natural products.
                        </p>
                    </div>

                    <div className={styles.narrativeImageSide}>
                        <Image
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                            alt="JIPS Campus & Academic Community"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 360px"
                            className={styles.narrativePhoto}
                        />
                        <div className={styles.narrativeOverlayTag}>
                            <Sparkles size={14} className={styles.sparkleIcon} />
                            <span>ESTD 2005 &bull; SPSR Nellore</span>
                        </div>
                    </div>
                </div>

                {/* Founder & Milestone Identity Bar */}
                <div className={styles.identityBar}>
                    <div className={styles.identityItem}>
                        <Calendar size={18} className={styles.identityIcon} />
                        <div>
                            <span className={styles.identityLabel}>FOUNDING YEAR</span>
                            <strong className={styles.identityValue}>Established in 2005</strong>
                        </div>
                    </div>

                    <div className={styles.identityDivider} />

                    <div className={styles.identityItem}>
                        <UserCheck size={18} className={styles.identityIcon} />
                        <div>
                            <span className={styles.identityLabel}>FOUNDER &amp; MANAGING TRUSTEE</span>
                            <strong className={styles.identityValue}>Sri J. Jagannatha Rao</strong>
                        </div>
                    </div>

                    <div className={styles.identityDivider} />

                    <div className={styles.identityItem}>
                        <Award size={18} className={styles.identityIcon} />
                        <div>
                            <span className={styles.identityLabel}>AUTONOMY CONFERRAL</span>
                            <strong className={styles.identityValue}>Autonomous Status (2023)</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Attributes Strip with Parallax Float */}
            <motion.div
                className={styles.attributesStrip}
                style={{ y: shouldReduceMotion ? 0 : parallaxShift }}
            >
                <div className={styles.attributeCard}>
                    <div className={styles.attrIconBox}>
                        <MapPin size={20} />
                    </div>
                    <div>
                        <span className={styles.attrLabel}>CAMPUS LOCATION</span>
                        <strong className={styles.attrValue}>Jangalakandriga, Muthukur</strong>
                    </div>
                </div>

                <div className={styles.attributeCard}>
                    <div className={styles.attrIconBox}>
                        <Building2 size={20} />
                    </div>
                    <div>
                        <span className={styles.attrLabel}>SHARED INFRASTRUCTURE</span>
                        <strong className={styles.attrValue}>Jagan&apos;s College of Pharmacy</strong>
                    </div>
                </div>

                <div className={styles.attributeCard}>
                    <div className={styles.attrIconBox}>
                        <FlaskConical size={20} />
                    </div>
                    <div>
                        <span className={styles.attrLabel}>RESEARCH THRUST</span>
                        <strong className={styles.attrValue}>Drug Discovery &amp; Natural Products</strong>
                    </div>
                </div>
            </motion.div>

            {/* 3. Alternating Milestones Timeline with Engaging Images */}
            <div className={styles.timelineTrack}>
                <div className={styles.centerLine} />

                {milestones.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <motion.div
                            key={item.year}
                            className={`${styles.chronoItem} ${isEven ? styles.leftItem : styles.rightItem}`}
                            initial={
                                shouldReduceMotion
                                    ? { opacity: 1 }
                                    : { opacity: 0, x: isEven ? -40 : 40 }
                            }
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className={styles.markerCircle}>
                                <span>{item.year}</span>
                            </div>

                            <div className={styles.milestoneCard}>
                                {/* Photo Header */}
                                <div className={styles.cardImageContainer}>
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className={styles.cardPhoto}
                                    />
                                    <span className={styles.imageOverlayTag}>{item.tag}</span>
                                </div>

                                {/* Content Body */}
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardHeading}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.body}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}