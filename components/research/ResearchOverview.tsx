'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import {
    FlaskConical,
    BookOpen,
    Binary,
    Award,
    Sparkles,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    FileText,
} from 'lucide-react';
import styles from './ResearchOverview.module.css';

const researchDomains = [
    {
        title: 'Molecular Docking & ADMET',
        desc: 'In silico screening of phytoconstituents, high-affinity ligand docking, and pharmacophore modeling.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
        tag: 'Computational CADD',
    },
    {
        title: 'Anti-Tubercular Drug Discovery',
        desc: 'Targeted synthesis and biological evaluation of novel chemical scaffolds against Mycobacterium tuberculosis.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
        tag: 'Synthetic Chemistry',
    },
    {
        title: 'Endophytes & Natural Products',
        desc: 'Isolation, bioassay-guided fractionation, and structural characterization of microbial metabolites.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
        tag: 'Natural Products',
    },
    {
        title: 'Network Pharmacology',
        desc: 'Multi-target identification and systemic biological mapping of herbal plant flavonoids and active extracts.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
        tag: 'Systems Pharmacology',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function ResearchOverview() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.overviewRoot}>
            {/* 1. Hero Section */}
            <section ref={containerRef} className={styles.heroSection}>
                <motion.div
                    className={styles.bgWrapper}
                    style={{ y: shouldReduceMotion ? 0 : bgY }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1920&q=80"
                        alt="Pharmaceutical Research and Discovery"
                        fill
                        unoptimized
                        priority
                        sizes="100vw"
                        className={styles.bgImage}
                    />
                    <div className={styles.heroOverlay} />
                </motion.div>

                <div className={styles.contentWrap}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : textY,
                            opacity: shouldReduceMotion ? 1 : opacity,
                        }}
                    >
                        <div className={styles.kickerBadge}>
                            <Sparkles size={14} className={styles.sparkleIcon} />
                            <span>TRANSLATIONAL SCIENTIFIC DISCOVERY</span>
                        </div>

                        <h1 className={styles.heading}>
                            Research &amp; Innovation <br />
                            <span className={styles.goldText}>Ecosystem at JIPS</span>
                        </h1>

                        <p className={styles.lead}>
                            Pioneering multidisciplinary investigations spanning molecular docking, anti-tubercular drug design, bioactive endophyte metabolites, network pharmacology, and standardized herbal product formulations.
                        </p>

                        <div className={styles.btnRow}>
                            <Link href="/research/publications" className={styles.primaryBtn}>
                                <BookOpen size={16} />
                                <span>Explore Publications</span>
                            </Link>
                            <Link href="/research/cell" className={styles.secondaryBtn}>
                                <FlaskConical size={16} />
                                <span>R&amp;D Cell &amp; Grants</span>
                            </Link>
                        </div>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>150+</strong>
                                <span className={styles.statLabel}>Indexed Publications</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>15+</strong>
                                <span className={styles.statLabel}>Patents Filed &amp; Granted</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>₹25L+</strong>
                                <span className={styles.statLabel}>Funded Research Aid</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Key Dropdown Gateways */}
            <section className={styles.gatewaySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH DIRECTORY</span>
                        <h2 className={styles.sectionTitle}>Explore Our Research Divisions</h2>
                        <p className={styles.sectionSubtitle}>
                            Access peer-reviewed published discoveries and learn about our R&amp;D cell initiatives.
                        </p>
                    </motion.div>

                    <div className={styles.gatewayGrid}>
                        {/* Gateway 1: Publications */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.1}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder}>
                                <Image
                                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
                                    alt="Faculty and Student Publications"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Scopus &bull; Web of Science</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Scholarly Publications</h3>
                                <p className={styles.cardDesc}>
                                    Discover our year-wise directory of peer-reviewed research papers in molecular modeling, anti-TB drug development, natural product extraction, and network pharmacology.
                                </p>
                                <Link href="/research/publications" className={styles.cardLink}>
                                    <span>Browse Publications Directory</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Gateway 2: R&D Cell */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.25}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder}>
                                <Image
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                                    alt="Research and Development Cell"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Grants &bull; Patents &bull; Cell</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Research &amp; Development Cell</h3>
                                <p className={styles.cardDesc}>
                                    Promoting institutional inquiry, mentoring undergraduate and postgraduate thesis dissertations, hosting methodology workshops, and securing governmental research funding.
                                </p>
                                <Link href="/research/cell" className={styles.cardLink}>
                                    <span>Meet R&amp;D Coordinators &amp; Objectives</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Research Thrust Areas */}
            <section className={styles.thrustSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH THRUSTS</span>
                        <h2 className={styles.sectionTitle}>Core Research Verticals</h2>
                        <p className={styles.sectionSubtitle}>
                            Pioneering interdisciplinary pharmaceutical sciences to address antimicrobial resistance and natural drug discovery.
                        </p>
                    </motion.div>

                    <div className={styles.thrustGrid}>
                        {researchDomains.map((domain, idx) => (
                            <motion.div
                                key={domain.title}
                                className={styles.thrustCard}
                                custom={idx * 0.12}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.thrustImgHolder}>
                                    <Image
                                        src={domain.image}
                                        alt={domain.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 320px"
                                        className={styles.thrustImg}
                                    />
                                    <span className={styles.thrustTag}>{domain.tag}</span>
                                </div>
                                <div className={styles.thrustBody}>
                                    <h3 className={styles.thrustTitle}>{domain.title}</h3>
                                    <p className={styles.thrustDesc}>{domain.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}