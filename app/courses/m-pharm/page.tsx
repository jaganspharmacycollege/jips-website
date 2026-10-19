'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Cpu,
    FlaskConical,
    Microscope,
    CheckCircle2,
    ChevronRight,
    FileText,
    Activity,
    Layers,
    Sparkles,
    ArrowRight,
    Database,
    Search,
} from 'lucide-react';
import styles from './page.module.css';

const thesisStages = [
    {
        phase: 'Phase 01',
        duration: 'Month 1 - 3',
        title: 'Protocol & Literature Defense',
        desc: 'Systematic literature review via Scopus/PubMed, formulation hypothesis establishment, and ethical clearance through the Institutional Animal Ethics Committee (IAEC) or review board.',
        tag: 'Initiation',
    },
    {
        phase: 'Phase 02',
        duration: 'Month 4 - 6',
        title: 'Bench Compounding & Synthesis',
        desc: 'Active pharmaceutical ingredient (API) pre-formulation, excipient compatibility testing, novel drug carrier preparation (liposomes/polymeric nanoparticles), and synthesis trials.',
        tag: 'Execution',
    },
    {
        phase: 'Phase 03',
        duration: 'Month 7 - 9',
        title: 'Instrumental Validation & Trials',
        desc: 'Assay validation conforming to ICH Q2(R1), stability chamber incubation under accelerated climatic zones, and bio-analytical HPLC chromatographic validation.',
        tag: 'Analytical',
    },
    {
        phase: 'Phase 04',
        duration: 'Month 10 - 12',
        title: 'Dissertation Defense & Patent Filing',
        desc: 'Manuscript submission to high-impact peer-reviewed pharmaceutical journals, institutional patent application drafting, and final viva-voce defense before JNTUA external examiners.',
        tag: 'Conferral',
    },
];

const instrumentSpecs = [
    {
        name: 'Quaternary HPLC Suite',
        model: 'Waters / Shimadzu Prominence',
        metrics: '0.001 - 10.0 mL/min | PDA Detector',
        desc: 'Automated high-throughput autosampler for bio-analytical assay validation, impurity profiling, and degradation kinetics.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'Automated USP Dissolution Station',
        model: 'Electrolab 8-Vessel System',
        metrics: 'USP Type I & II | 25 - 250 RPM',
        desc: 'Computer-monitored in-vitro drug release testing with real-time temperature telemetry for novel sustained-release dosages.',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'High-Intensity Ultrasonic Processor',
        model: 'Probe Sonicator 750W',
        metrics: '20 kHz Frequency | Titanium Tip',
        desc: 'Cavitation-driven sub-micron particle size reduction for nano-emulsions, liposomes, and polymeric nano-carriers.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
    },
];

const fromLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.4, ease: 'easeOut' },
    },
};

const fromRight: Variants = {
    hidden: { opacity: 0, x: 75 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.45, delay: 0.15, ease: 'easeOut' },
    },
};

const riseUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, delay: customDelay, ease: 'easeOut' },
    }),
};

export default function MPharmPage() {
    const shouldReduceMotion = useReducedMotion();
    const [activeDeck, setActiveDeck] = useState<'ceutics' | 'analysis'>('ceutics');

    return (
        <div className={styles.terminalPageWrapper}>
            {/* 1. RESEARCH INSTRUMENTATION TERMINAL HERO */}
            <section className={styles.terminalHero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroMetaSide}
                        variants={fromLeft}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.statusChipGroup}>
                            <span className={styles.terminalCode}>AP PGECET / GPAT : JAGP</span>
                            <span className={styles.livePulseTag}>
                                <span className={styles.greenPulse} />
                                PCI R&amp;D Recognized
                            </span>
                        </div>

                        <h1 className={styles.terminalHeading}>
                            Postgraduate R&amp;D <br />
                            <span className={styles.goldText}>Master of Pharmacy</span>
                        </h1>

                        <p className={styles.terminalSubtext}>
                            Two years of immersive, dissertation-centric pharmaceutical research. Conduct faculty-guided investigations in targeted novel drug delivery systems or validated chromatographic analysis inside cGMP-aligned research suites.
                        </p>

                        <div className={styles.heroActions}>
                            <Link href="/admissions/admission-process" className={styles.applyBtn}>
                                <span>Apply for 2026 Batch</span>
                                <ChevronRight size={16} />
                            </Link>
                            <a href="#specializations" className={styles.inspectBtn}>
                                <span>Explore Specializations</span>
                            </a>
                        </div>

                        <div className={styles.telemetryBar}>
                            <div className={styles.telemetryItem}>
                                <span className={styles.telemetryVal}>30</span>
                                <span className={styles.telemetryLbl}>Sanctioned Intake</span>
                            </div>
                            <div className={styles.telemetryDivider} />
                            <div className={styles.telemetryItem}>
                                <span className={styles.telemetryVal}>1 Year</span>
                                <span className={styles.telemetryLbl}>Full Thesis Research</span>
                            </div>
                            <div className={styles.telemetryDivider} />
                            <div className={styles.telemetryItem}>
                                <span className={styles.telemetryVal}>100%</span>
                                <span className={styles.telemetryLbl}>MNC R&amp;D Placement</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Glassmorphic Lab Instrument Monitor Frame */}
                    <motion.div
                        className={styles.heroTelemetryConsole}
                        variants={fromRight}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.telemetryWindow}>
                            {/* Top Bar simulating research console */}
                            <div className={styles.consoleTopBar}>
                                <div className={styles.windowControls}>
                                    <span className={styles.dotRed} />
                                    <span className={styles.dotYellow} />
                                    <span className={styles.dotGreen} />
                                </div>
                                <div className={styles.consoleTitle}>
                                    <Cpu size={14} className={styles.consoleIcon} />
                                    <span>JIPS CENTRAL ANALYTICAL TELEMETRY</span>
                                </div>
                                <div className={styles.feedStatus}>ONLINE</div>
                            </div>

                            {/* Console Center Image */}
                            <div className={styles.consoleImageWrapper}>
                                <Image
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop"
                                    alt="HPLC Pharmaceutical Research"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.consoleImg}
                                />
                                <div className={styles.screenOverlay} />

                                {/* Floating Telemetry Data Cards */}
                                <div className={styles.telemetryOverlayData}>
                                    <div className={styles.dataTag}>
                                        <Activity size={14} className={styles.tagIcon} />
                                        <span>HPLC Assay Validation : Pass (RSD &lt; 1.0%)</span>
                                    </div>
                                    <div className={styles.dataTag}>
                                        <Sparkles size={14} className={styles.tagIconGold} />
                                        <span>Polymeric Nano-Carrier Size : 142.6 nm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Console Bottom Bar */}
                            <div className={styles.consoleFooter}>
                                <div>
                                    <span className={styles.footerLabel}>PRIMARY AFFILIATION</span>
                                    <span className={styles.footerVal}>JNTU Ananthapuramu</span>
                                </div>
                                <div>
                                    <span className={styles.footerLabel}>GOVERNMENT REIMBURSEMENT</span>
                                    <span className={styles.footerVal}>JVD Eligible Scheme</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. DUAL-SPECIALIZATION LAB CONSOLES (SIDE-BY-SIDE DESIGN) */}
            <section className={styles.specializationSection} id="specializations">
                <div className={styles.sectionInner}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>ADVANCED DISCIPLINES</span>
                        <h2 className={styles.sectionTitle}>Two Specialized Postgraduate Pathways</h2>
                        <p className={styles.sectionSubtitle}>
                            Tailored research tracks aligned with modern industrial drug development and analytical validation.
                        </p>
                    </motion.div>

                    <div className={styles.deckSelectorRow}>
                        <button
                            type="button"
                            className={`${styles.deckTab} ${activeDeck === 'ceutics' ? styles.activeDeckTab : ''}`}
                            onClick={() => setActiveDeck('ceutics')}
                        >
                            <FlaskConical size={18} />
                            <span>1. Pharmaceutics (NDDS)</span>
                        </button>
                        <button
                            type="button"
                            className={`${styles.deckTab} ${activeDeck === 'analysis' ? styles.activeDeckTab : ''}`}
                            onClick={() => setActiveDeck('analysis')}
                        >
                            <Layers size={18} />
                            <span>2. Pharmaceutical Analysis</span>
                        </button>
                    </div>

                    {/* Active Specialization Deck Display */}
                    <div className={styles.activeDeckDisplay}>
                        {activeDeck === 'ceutics' ? (
                            <motion.div
                                key="ceutics"
                                className={styles.deckContainer}
                                variants={riseUp}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.deckLeftColumn}>
                                    <div className={styles.deckBadgeWrap}>
                                        <span className={styles.goldPill}>15 SEATS</span>
                                        <span className={styles.bluePill}>FORMULATION SCIENCES</span>
                                    </div>
                                    <h3 className={styles.deckName}>Pharmaceutics</h3>
                                    <p className={styles.deckDescription}>
                                        Centered around nanoscale drug delivery, bioavailability enhancement, lipid-based nano-carriers, and computer-aided drug delivery modeling (CADDS). Scholars engage in industrial scale-up methodologies replicating cGMP compounding.
                                    </p>

                                    <div className={styles.deckSpecsGrid}>
                                        <div className={styles.deckSpecBox}>
                                            <span className={styles.specLabel}>RESEARCH THRUST</span>
                                            <strong className={styles.specVal}>Gastroretentive &amp; Transdermal NDDS</strong>
                                        </div>
                                        <div className={styles.deckSpecBox}>
                                            <span className={styles.specLabel}>LAB CAPACITY</span>
                                            <strong className={styles.specVal}>Probe Sonicator &amp; Fluid Bed Coater</strong>
                                        </div>
                                    </div>

                                    <div className={styles.courseChecklist}>
                                        <h4 className={styles.checklistHead}>Key Curricular Modules:</h4>
                                        <div className={styles.checkGrid}>
                                            <span><CheckCircle2 size={16} /> Molecular Pharmaceutics</span>
                                            <span><CheckCircle2 size={16} /> Computer-Aided Formulation Design</span>
                                            <span><CheckCircle2 size={16} /> Advanced Biopharmaceutics</span>
                                            <span><CheckCircle2 size={16} /> Regulatory Affairs (IND / NDA / ANDA)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.deckRightColumn}>
                                    <div className={styles.deckVisualFrame}>
                                        <Image
                                            src="https://images.unsplash.com/photo-1579165466791-788226ab77b6?q=80&w=800&auto=format&fit=crop"
                                            alt="Pharmaceutics Research Compounding"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 480px"
                                            className={styles.deckImg}
                                        />
                                        <div className={styles.deckTagRibbon}>Pilot Scale Compounding</div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="analysis"
                                className={styles.deckContainer}
                                variants={riseUp}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.deckLeftColumn}>
                                    <div className={styles.deckBadgeWrap}>
                                        <span className={styles.goldPill}>15 SEATS</span>
                                        <span className={styles.bluePill}>CHROMATOGRAPHY &amp; QC</span>
                                    </div>
                                    <h3 className={styles.deckName}>Pharmaceutical Analysis</h3>
                                    <p className={styles.deckDescription}>
                                        Focuses on instrumental method development, chromatographic assay validation, stability studies complying with ICH guidelines, bio-analytical pharmacokinetics, and regulatory impurity profiling.
                                    </p>

                                    <div className={styles.deckSpecsGrid}>
                                        <div className={styles.deckSpecBox}>
                                            <span className={styles.specLabel}>RESEARCH THRUST</span>
                                            <strong className={styles.specVal}>Hyphenated Chromatography (HPLC/GC)</strong>
                                        </div>
                                        <div className={styles.deckSpecBox}>
                                            <span className={styles.specLabel}>LAB CAPACITY</span>
                                            <strong className={styles.specVal}>Quaternary Gradient Waters HPLC</strong>
                                        </div>
                                    </div>

                                    <div className={styles.courseChecklist}>
                                        <h4 className={styles.checklistHead}>Key Curricular Modules:</h4>
                                        <div className={styles.checkGrid}>
                                            <span><CheckCircle2 size={16} /> Advanced Instrumental Analysis</span>
                                            <span><CheckCircle2 size={16} /> Method Validation as per ICH Q2</span>
                                            <span><CheckCircle2 size={16} /> Quality Assurance &amp; cGMP Audits</span>
                                            <span><CheckCircle2 size={16} /> Bio-Analytical Kinetics Testing</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.deckRightColumn}>
                                    <div className={styles.deckVisualFrame}>
                                        <Image
                                            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                                            alt="Pharmaceutical Analysis Instrumentation"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 480px"
                                            className={styles.deckImg}
                                        />
                                        <div className={styles.deckTagRibbon}>Hyphenated Chromatography</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* 3. FOUR-PHASE MASTER DISSERTATION PATHWAY */}
            <section className={styles.thesisSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>RESEARCH ROADMAP</span>
                        <h2 className={styles.sectionTitle}>The 1-Year Master Thesis Journey</h2>
                        <p className={styles.sectionSubtitle}>
                            Every M.Pharm candidate spends their entire second year embedded in dedicated bench research and dissertation defense.
                        </p>
                    </motion.div>

                    <div className={styles.thesisGrid}>
                        {thesisStages.map((stage, idx) => (
                            <motion.div
                                key={stage.phase}
                                className={styles.stageCard}
                                custom={idx * 0.15}
                                variants={riseUp}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.stageTop}>
                                    <span className={styles.phaseNumber}>{stage.phase}</span>
                                    <span className={styles.phaseTag}>{stage.tag}</span>
                                </div>
                                <h3 className={styles.stageTitle}>{stage.title}</h3>
                                <span className={styles.stageDuration}>{stage.duration}</span>
                                <p className={styles.stageDesc}>{stage.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INSTRUMENTATION HARDWARE SPECIFICATIONS */}
            <section className={styles.hardwareSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.kickerTag}>EQUIPMENT SPECIFICATIONS</span>
                        <h2 className={styles.sectionTitle}>Bench-Level Instrumentation Suites</h2>
                        <p className={styles.sectionSubtitle}>
                            Direct hands-on training on analytical equipment utilized across global pharmaceutical QC/QA centers.
                        </p>
                    </motion.div>

                    <div className={styles.hardwareGrid}>
                        {instrumentSpecs.map((inst, index) => (
                            <motion.div
                                key={inst.name}
                                className={styles.hardwareCard}
                                custom={index * 0.18}
                                variants={riseUp}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className={styles.hardwareImageWrap}>
                                    <Image
                                        src={inst.image}
                                        alt={inst.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className={styles.instImg}
                                    />
                                    <div className={styles.hardwareModelBadge}>{inst.model}</div>
                                </div>
                                <div className={styles.hardwareInfo}>
                                    <h3 className={styles.instName}>{inst.name}</h3>
                                    <span className={styles.instMetric}>{inst.metrics}</span>
                                    <p className={styles.instDesc}>{inst.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. POSTGRADUATE CAREER & RECRUITMENT DECK */}
            <section className={styles.careerSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.careerConsole}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.careerLeft}>
                            <span className={styles.careerBadge}>INDUSTRY DESTINATIONS</span>
                            <h2 className={styles.careerHeading}>Where M.Pharm Leads</h2>
                            <p className={styles.careerText}>
                                Our postgraduates transition directly into corporate formulation research, bio-analytical method development, and regulatory affairs management across leading national pharmaceutical conglomerates.
                            </p>

                            <div className={styles.careerBadgesList}>
                                <span>Formulation Scientist</span>
                                <span>Analytical Development Lead (ADL)</span>
                                <span>Regulatory Affairs Officer</span>
                                <span>Quality Assurance Auditor</span>
                                <span>Clinical Pharmacovigilance</span>
                                <span>Academic &amp; Ph.D. Fellow</span>
                            </div>
                        </div>

                        <div className={styles.careerRight}>
                            <h4 className={styles.recruiterHeader}>Recruitment Partners</h4>
                            <p className={styles.recruiterSubtitle}>Annual campus selection drives for M.Pharm candidates:</p>

                            <div className={styles.recruiterBoxes}>
                                <div className={styles.recruiterItem}>Dr. Reddy&apos;s Labs</div>
                                <div className={styles.recruiterItem}>Hetero Drugs</div>
                                <div className={styles.recruiterItem}>Aurobindo Pharma</div>
                                <div className={styles.recruiterItem}>Divi&apos;s Laboratories</div>
                                <div className={styles.recruiterItem}>Sun Pharma</div>
                                <div className={styles.recruiterItem}>Biocon Biologics</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. CALL TO ACTION FOOTER */}
            <section className={styles.ctaSection}>
                <div className={styles.innerContainer}>
                    <motion.div
                        className={styles.ctaCard}
                        variants={riseUp}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div>
                            <h3 className={styles.ctaTitle}>Admissions Open for M.Pharm 2026</h3>
                            <p className={styles.ctaSub}>
                                Inquire regarding AP PGECET counseling codes (JAGP), GPAT stipend assistance, and management quota seats.
                            </p>
                        </div>

                        <div className={styles.ctaButtons}>
                            <Link href="/admissions/tuition-fee" className={styles.ctaFeeBtn}>
                                <FileText size={16} />
                                <span>View Tuition Fees</span>
                            </Link>
                            <Link href="/admissions/admission-process" className={styles.ctaApplyBtn}>
                                <span>Admission Process</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}