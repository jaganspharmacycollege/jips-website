'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Target, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import styles from './RdCellPage.module.css';

const objectives = [
    'Encourage funded projects from state and national government funding agencies (SERB, DST, AICTE).',
    'Facilitate faculty and student publications in high-impact Scopus & Web of Science indexed journals.',
    'Promote intellectual property (IP) awareness and support commercial patent drafting and filings.',
    'Empower student research through hands-on guidance for B.Pharm, M.Pharm and Pharm.D projects.',
];

const activities = [
    {
        title: 'Research Methodology Workshops',
        desc: 'Conducting periodic hands-on training sessions in scientific literature searches, statistical biostatistics (SPSS, GraphPad), and protocol drafting.',
    },
    {
        title: 'Regular Journal Clubs',
        desc: 'Scholars and faculty present critical evaluations of contemporary breakthroughs in pharmaceutical formulation, clinical trials, and drug synthesis.',
    },
    {
        title: 'Guidance for Student Projects',
        desc: 'Individualized mentor mapping ensuring every undergraduate and postgraduate student executes outcome-oriented laboratory and clinical investigations.',
    },
    {
        title: 'Patent & IPR Colloquiums',
        desc: 'Liaising with patent attorneys and intellectual property bodies to guide scholars from experimental proof-of-concept to provisional filing.',
    },
];

const coordinators = [
    {
        name: 'Dr. J. Venkata Suresh',
        role: 'R&D Cell Director & Principal',
        qual: 'M.Pharm, Ph.D. (Pharmacology)',
        scope: 'Institutional research policy, ethics clearance, and university grants liaison.',
        email: 'principal@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Dr. K. Ramesh Babu',
        role: 'R&D Cell Convener',
        qual: 'M.Pharm, Ph.D. (Pharmaceutics)',
        scope: 'Overseeing funded project applications, patents, and laboratory equipment modernization.',
        email: 'ramesh.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
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

export default function RdCellPage() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <span className={styles.menuPath}>Menu path: Research &rsaquo; R&amp;D Cell</span>
                    <h1 className={styles.pageTitle}>Research &amp; Development (R&amp;D) Cell</h1>
                    <p className={styles.pageLead}>
                        The Research &amp; Development Cell promotes research among faculty and students, creating an institutional ecosystem of inquiry, patents, and scientific publication.
                    </p>
                </div>
            </section>

            {/* 2. Objectives & Mission Split Card */}
            <section ref={containerRef} className={styles.objectivesSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.objectivesCard}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.textSide}>
                            <span className={styles.eyebrow}>CORE MANDATE</span>
                            <h2 className={styles.sectionHeading}>Objectives of the R&amp;D Cell</h2>
                            <p className={styles.leadPara}>
                                Established to steer institutional policy toward translational discoveries, patent filings, and corporate collaborations.
                            </p>

                            <div className={styles.objectivesList}>
                                {objectives.map((obj, i) => (
                                    <div key={i} className={styles.objRow}>
                                        <CheckCircle2 size={18} className={styles.checkIcon} />
                                        <span>{obj}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            className={styles.imgSide}
                            style={{ y: shouldReduceMotion ? 0 : parallaxShift }}
                        >
                            <div className={styles.imgFrame}>
                                <Image
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                                    alt="R&D Cell Experimental Research"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 540px"
                                    className={styles.objectivesImg}
                                />
                                <div className={styles.frameBadge}>
                                    <Sparkles size={14} />
                                    <span>Funded Projects &bull; Patents &bull; Publications</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Key R&D Activities */}
            <section className={styles.activitiesSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>CONTINUOUS INITIATIVES</span>
                        <h2 className={styles.sectionHeading}>Key Activities of the Cell</h2>
                        <p className={styles.sectionSubtext}>
                            Continuous programs designed to enhance scholarly acumen and experimental competence.
                        </p>
                    </motion.div>

                    <div className={styles.activitiesGrid}>
                        {activities.map((act, idx) => (
                            <motion.div
                                key={act.title}
                                className={styles.activityCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.actIconCircle}>
                                    <Target size={22} />
                                </div>
                                <h3 className={styles.actTitle}>{act.title}</h3>
                                <p className={styles.actDesc}>{act.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. R&D Coordinators */}
            <section className={styles.coordinatorsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>LEADERSHIP &amp; MENTORSHIP</span>
                        <h2 className={styles.sectionHeading}>R&amp;D Cell Coordinators</h2>
                        <p className={styles.sectionSubtext}>
                            Guiding students and faculty through grant applications, project execution, and dissertation mentoring.
                        </p>
                    </motion.div>

                    <div className={styles.coordinatorsGrid}>
                        {coordinators.map((c, idx) => (
                            <motion.div
                                key={c.name}
                                className={styles.coordCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.coordImgHolder}>
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        unoptimized
                                        loading="eager"
                                        sizes="(max-width: 768px) 100vw, 240px"
                                        className={styles.coordImg}
                                    />
                                    <span className={styles.coordRoleBadge}>{c.role}</span>
                                </div>
                                <div className={styles.coordBody}>
                                    <h3 className={styles.coordName}>{c.name}</h3>
                                    <span className={styles.coordQual}>{c.qual}</span>
                                    <p className={styles.coordScope}>{c.scope}</p>
                                    <div className={styles.coordEmail}>
                                        <Mail size={14} className={styles.mailIcon} />
                                        <span>{c.email}</span>
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