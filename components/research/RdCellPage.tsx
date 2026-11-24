'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Target,
    Sparkles,
    Mail,
    BookOpen,
    FlaskConical,
    Microscope,
    ShieldCheck,
    ArrowRight,
    Atom,
    Building2,
    GraduationCap,
    Users,
} from 'lucide-react';
import styles from './RdCellPage.module.css';

// 9.5 Research Focus and Activities
const researchFocusAreas = [
    {
        title: 'Natural-Product Research & Phytochemistry',
        desc: 'Extraction, biological activity profiling, and pharmacognostical evaluation and standardization of medicinal plants.',
        icon: Microscope,
    },
    {
        title: 'Endophyte-Derived Bioactive Metabolites',
        desc: 'Isolation, spectroscopic characterization, and antimicrobial and pharmacological evaluation of fungal and bacterial endophytes.',
        icon: FlaskConical,
    },
    {
        title: 'Medicinal Chemistry & Molecular Docking',
        desc: 'Targeted synthesis, molecular docking, ADMET profiling, and novel anti-tubercular and anti-inflammatory drug-lead discovery.',
        icon: Atom,
    },
    {
        title: 'Herbal Nano-Formulations & Polyherbals',
        desc: 'Development of herbal and polyherbal dosage forms, nanoemulsions, polymeric nanocarriers, and green-synthesized nanoparticles.',
        icon: Sparkles,
    },
    {
        title: 'Analytical Method Development & HPTLC',
        desc: 'Pharmaceutical analytical method development, TLC/HPTLC densitometric fingerprinting, and UV/HPLC assay validation.',
        icon: Target,
    },
    {
        title: 'Student & Faculty Research Dissemination',
        desc: 'Mentoring scholars for national and international conferences, paper and poster presentations, workshops, and faculty development.',
        icon: GraduationCap,
    },
];

// 9.3 Patents and Intellectual Property Entries
const patentsAndDesigns = [
    {
        id: '1',
        title: 'Gas Chromatography Mass Spectrophotometer for Impurity Analysis of Chemical Compounds',
        regNo: 'Registered Design No. 407135-001',
        country: 'India',
        year: '2024',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'Registered Design',
    },
    {
        id: '2',
        title: 'X-Ray Diffraction Apparatus for Predicting Crystal Structure of Organic Compounds',
        regNo: 'Registered Design No. 407658-001',
        country: 'India',
        year: '2024',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'Registered Design',
    },
    {
        id: '3',
        title: 'Plant Extract Analysing Device',
        regNo: 'Registered Design No. 410708-001',
        country: 'India',
        year: '2024',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'Registered Design',
    },
    {
        id: '4',
        title: 'High-Performance Thin-Layer Chromatography Device for Qualitative Analysis of Chemical Compounds',
        regNo: 'Registered Design No. 6379847',
        country: 'United Kingdom',
        year: '2024',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'UK Registered Design',
    },
    {
        id: '5',
        title: 'AI Enabled Chromatography Apparatus for Instant Isolation of Phytoconstituents',
        regNo: 'Registered Design No. 6430652',
        country: 'United Kingdom',
        year: '2025',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'UK Registered Design',
    },
    {
        id: '6',
        title: 'Methotrexate-Loaded Biodegradable Nanoparticles for Controlled Drug Release in Rheumatoid Arthritis',
        regNo: 'Registration No. 20 2024 103 210',
        country: 'Germany',
        year: '2024',
        inventor: 'Dr. Jilakara Venkata Suresh',
        type: 'German Registration',
    },
    {
        id: '7',
        title: 'A Novel Polymeric Nano formulation Comprising Fenugreek Seed and Mulberry Leaf Extracts for Prevention and Management of Type 2 Diabetes by Improving Insulin Resistance',
        regNo: 'Patent App. No. 202641097527',
        country: 'India',
        year: '2026',
        inventor: 'Dr. Jilakara Venkata Suresh (Co-applicant)',
        type: 'Indian Patent Application',
        status: 'Awaiting Request for Examination',
    },
    {
        id: '8',
        title: 'Rotarod Apparatus for Monitoring Muscle Relaxant Activity in Mice',
        regNo: 'Registered Design No. 408583-001',
        country: 'India',
        year: '2024 / Cert. 2026',
        inventor: 'Dr. Jilakara Venkata Suresh (Co-applicant)',
        type: 'Registered Design Certificate',
    },
    {
        id: '9',
        title: 'A UV-Visible Spectrophotometric Method for Determination of Bifenthrin in Water Samples Using Chemical Derivatization',
        regNo: 'Patent App. No. 202641008174',
        country: 'India',
        year: '2026',
        inventor: 'Kolli Yamini',
        type: 'Indian Patent Application',
        status: 'Published (Pub No: 07/2026)',
    },
];

// Continuous Activities of the Cell
const cellActivities = [
    {
        title: 'Research Methodology Workshops',
        desc: 'Conducting periodic hands-on training sessions in scientific literature searches, statistical biostatistics (SPSS, GraphPad), and protocol drafting.',
    },
    {
        title: 'Regular Journal Clubs',
        desc: 'Scholars and faculty present critical evaluations of contemporary breakthroughs in pharmaceutical formulation, clinical trials, and drug synthesis.',
    },
    {
        title: 'Undergraduate & Postgraduate Project Guidance',
        desc: 'Individualized mentor mapping ensuring every B.Pharm, M.Pharm and Pharm.D scholar executes outcome-oriented laboratory and clinical investigations.',
    },
    {
        title: 'Patent & IPR Colloquiums',
        desc: 'Liaising with patent attorneys and intellectual property bodies to guide researchers from experimental proof-of-concept to formal filing.',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function RdCellPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <div className={styles.breadcrumb}>
                        <Link href="/" className={styles.crumbLink}>Home</Link>
                        <span className={styles.crumbSep}>/</span>
                        <Link href="/research" className={styles.crumbLink}>Research</Link>
                        <span className={styles.crumbSep}>/</span>
                        <span className={styles.crumbActive}>R&amp;D Cell</span>
                    </div>

                    <div className={styles.badgeRow}>
                        <span className={styles.headerBadge}>
                            <Sparkles size={14} />
                            PART 9: INSTITUTIONAL RESEARCH
                        </span>
                        <span className={styles.headerPill}>
                            <ShieldCheck size={14} />
                            9 Patents &amp; Registered Designs
                        </span>
                    </div>

                    <h1 className={styles.pageTitle}>Research &amp; Development (R&amp;D) Cell</h1>
                    <p className={styles.pageLead}>
                        The Research and Development Cell of Jagan&apos;s Institute of Pharmaceutical Sciences fosters a vibrant culture of scientific curiosity, interdisciplinary collaboration, high-impact publications, and intellectual property creation.
                    </p>
                </div>
            </section>

            {/* 2. Section 9.1: Coordinator & Coordinator's Message */}
            <section className={styles.coordinatorSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.coordinatorCard}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        {/* Left: Coordinator Portrait & Credentials */}
                        <div className={styles.coordProfilePane}>
                            <div className={styles.coordAvatarWrap}>
                                <Image
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                                    alt="Dr. Singarapalle Shobha - Research Coordinator, R&D Cell"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className={styles.coordAvatarImg}
                                />
                                <div className={styles.coordStatusBadge}>
                                    <Sparkles size={13} />
                                    <span>R&amp;D Cell Coordinator</span>
                                </div>
                            </div>

                            <div className={styles.coordMeta}>
                                <h3 className={styles.coordName}>Dr. Singarapalle Shobha</h3>
                                <span className={styles.coordQual}>M.Pharm, Ph.D.</span>
                                <div className={styles.coordRoles}>
                                    <div className={styles.roleLine}>
                                        <strong>Research Coordinator</strong>, Research &amp; Development Cell
                                    </div>
                                    <div className={styles.deptLine}>
                                        Associate Professor, Dept. of Pharmaceutical Chemistry
                                    </div>
                                </div>
                                <div className={styles.institutionLine}>
                                    <Building2 size={15} className={styles.instIcon} />
                                    <span>Jagan&apos;s Institute of Pharmaceutical Sciences, Nellore</span>
                                </div>
                                <a href="mailto:hod.chem.jips@gmail.com" className={styles.coordEmailBtn}>
                                    <Mail size={15} />
                                    <span>Contact Coordinator</span>
                                </a>
                            </div>
                        </div>

                        {/* Right: Official Coordinator's Message */}
                        <div className={styles.coordMessagePane}>
                            <span className={styles.eyebrow}>SECTION 9.1</span>
                            <h2 className={styles.messageHeading}>Coordinator&apos;s Message</h2>

                            <blockquote className={styles.messageQuote}>
                                &ldquo;Research and innovation are essential pillars of quality pharmaceutical education. The Research and Development Cell of Jagan&apos;s Institute of Pharmaceutical Sciences is committed to fostering a strong research culture among faculty members and students.
                                <br /><br />
                                Our objective is to encourage innovative research, interdisciplinary collaboration, scientific publications, intellectual property development, and participation in funded research projects. We aim to provide an environment that promotes scientific curiosity, critical thinking, ethical research practices, and the application of knowledge to address emerging challenges in pharmaceutical and healthcare sciences.
                                <br /><br />
                                Through continuous academic engagement, research guidance, conferences, workshops, and collaborative initiatives, the R&amp;D Cell strives to strengthen the institution&apos;s research activities and contribute to scientific advancement.&rdquo;
                            </blockquote>

                            <div className={styles.signOff}>
                                <span className={styles.signName}>Dr. Singarapalle Shobha, M.Pharm, Ph.D.</span>
                                <span className={styles.signRole}>Research Coordinator, Research &amp; Development Cell</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Section 9.5: Research Focus & Thrust Areas */}
            <section className={styles.focusSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.eyebrow}>SECTION 9.5</span>
                        <h2 className={styles.sectionHeading}>Research Focus &amp; Core Thrusts</h2>
                        <p className={styles.sectionSubtext}>
                            Prioritizing high-impact scientific verticals from botanical drug standardization to CADD molecular modeling and herbal nanotechnology.
                        </p>
                    </motion.div>

                    <div className={styles.focusGrid}>
                        {researchFocusAreas.map((area, idx) => {
                            const IconComponent = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    className={styles.focusCard}
                                    custom={idx}
                                    variants={riseVariants}
                                    initial={shouldReduceMotion ? false : 'hidden'}
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    <div className={styles.focusIconWrap}>
                                        <IconComponent size={22} />
                                    </div>
                                    <h3 className={styles.focusTitle}>{area.title}</h3>
                                    <p className={styles.focusDesc}>{area.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Section 9.3: Patents and Intellectual Property */}
            <section className={styles.patentsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.eyebrow}>SECTION 9.3</span>
                        <h2 className={styles.sectionHeading}>Patents &amp; Intellectual Property</h2>
                        <p className={styles.sectionSubtext}>
                            A robust portfolio of national and international registered designs and patent filings demonstrating institutional commitment to technological translation.
                        </p>
                    </motion.div>

                    <div className={styles.patentsGrid}>
                        {patentsAndDesigns.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className={styles.patentCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <div className={styles.patentTopRow}>
                                    <span className={styles.patentTypeBadge}>{item.type}</span>
                                    <span className={styles.patentCountryPill}>{item.country} • {item.year}</span>
                                </div>

                                <h3 className={styles.patentTitle}>{item.title}</h3>

                                <div className={styles.patentRegRow}>
                                    <span className={styles.regLabel}>Registration / App No:</span>
                                    <strong className={styles.regValue}>{item.regNo}</strong>
                                </div>

                                <div className={styles.patentBottomRow}>
                                    <div className={styles.inventorInfo}>
                                        <span className={styles.inventorLabel}>Inventor / Applicant:</span>
                                        <span className={styles.inventorName}>{item.inventor}</span>
                                    </div>
                                    {item.status && (
                                        <span className={styles.patentStatusPill}>{item.status}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Key Activities of the R&D Cell */}
            <section className={styles.activitiesSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH ENGAGEMENT</span>
                        <h2 className={styles.sectionHeading}>Cell Activities &amp; Capacity Building</h2>
                        <p className={styles.sectionSubtext}>
                            Ongoing programs designed to nurture scientific rigor, grant formulation, and experimental acumen.
                        </p>
                    </motion.div>

                    <div className={styles.activitiesGrid}>
                        {cellActivities.map((act, idx) => (
                            <motion.div
                                key={act.title}
                                className={styles.activityCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
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

            {/* 6. Section 9.4: Funded Research Projects & Institutional Mentorship Banner */}
            <section className={styles.fundedBannerSection}>
                <div className={styles.container}>
                    <div className={styles.fundedBanner}>
                        <div className={styles.fundedLeft}>
                            <span className={styles.fundedEyebrow}>SECTION 9.4</span>
                            <h3 className={styles.fundedTitle}>Funded Research Projects &amp; Institutional Guidance</h3>
                            <p className={styles.fundedDesc}>
                                Under the mentorship of Principal Dr. Jilakara Venkata Suresh and R&amp;D Coordinator Dr. Singarapalle Shobha, faculty and postgraduate scholars actively participate in state and national funding schemes, industrial collaborative testing, and clinical drug monitoring.
                            </p>
                        </div>
                        <div className={styles.fundedBtns}>
                            <Link href="/research/publications" className={styles.primaryBannerBtn}>
                                <BookOpen size={16} />
                                <span>View Faculty Publications</span>
                                <ArrowRight size={16} />
                            </Link>
                            <Link href="/faculty" className={styles.secondaryBannerBtn}>
                                <Users size={16} />
                                <span>Meet Faculty Researchers</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
