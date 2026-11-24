'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    type Variants,
} from 'framer-motion';
import {
    GraduationCap,
    Award,
    FileText,
    CheckCircle2,
    Sparkles,
    Mail,
    ExternalLink,
    ShieldCheck,
    Microscope,
    FlaskConical,
    Building,
    MessageSquare,
    Library,
    BadgeCheck,
    Layers,
    Quote,
} from 'lucide-react';
import styles from './PrincipalsProfile.module.css';

interface StatItem {
    value: string;
    label: string;
    sub: string;
}

const keyStats: StatItem[] = [
    { value: '28 Yrs 8 Mos', label: 'Teaching Experience', sub: 'As of 31 October 2026' },
    { value: '8 Yrs 2 Mos', label: 'Service as Principal', sub: 'Executive Leadership' },
    { value: '36', label: 'Research Publications', sub: 'APTI Reported & Review' },
    { value: '12', label: 'Granted IP Entries', sub: 'National & International' },
    { value: '117', label: 'Projects Mentored', sub: '63 M.Pharm + 54 B.Pharm' },
    { value: '02', label: 'Ph.D. Co-Supervised', sub: 'Both Doctorates Awarded' },
    { value: '08', label: 'Textbooks Authored', sub: 'Pharmaceutical Sciences' },
    { value: '02', label: 'Elsevier Chapters', sub: 'International Publications' },
];

const qualifications = [
    {
        degree: 'B.Pharm',
        institution: 'Luqman College of Pharmacy / Gulbarga University',
        year: '1995',
        type: 'Undergraduate Degree',
    },
    {
        degree: 'M.Pharm',
        institution: 'V.L. College of Pharmacy, Raichur',
        specialization: 'Pharmacognosy & Phytopharmaceuticals',
        year: '1997',
        type: 'Postgraduate Degree',
    },
    {
        degree: 'Ph.D.',
        institution: 'Andhra University, Visakhapatnam',
        specialization: 'Pharmaceutical Sciences (Pharmacognosy)',
        year: '2012',
        type: 'Doctoral Degree',
    },
];

const specializations = [
    {
        title: 'Pharmacognosy and Phytochemistry',
        desc: 'Extraction, biological activity profiling, and secondary metabolite identification from medicinal plants.',
    },
    {
        title: 'Medicinal Plant Evaluation & Standardization',
        desc: 'Pharmacognostical evaluation, botanical authentication, and standardization protocols.',
    },
    {
        title: 'Herbal Drug Technology',
        desc: 'Formulation, quality assessment, and industrial scaling of plant-based therapeutic agents.',
    },
    {
        title: 'Phytopharmaceuticals & Natural Products',
        desc: 'Isolation and mechanistic investigation of active bioactive herbal fractions.',
    },
    {
        title: 'Herbal & Polyherbal Formulation',
        desc: 'Synergistic multi-herb formulation development for metabolic and chronic disorders.',
    },
    {
        title: 'Pharmaceutical Analysis & Techniques',
        desc: 'Spectroscopic characterization, analytical assay development, and chromatographic validations.',
    },
    {
        title: 'Green-Synthesized Nanoparticles',
        desc: 'Green-synthesized nanoparticles and herbal nanotechnology for targeted therapeutic delivery.',
    },
    {
        title: 'Phytochemical & HPTLC Analysis',
        desc: 'Phytochemical authentication and high-performance thin-layer chromatography fingerprinting.',
    },
];

const memberships = [
    {
        title: 'Association of Pharmaceutical Teachers of India (APTI)',
        role: 'Life Member & Executive Council Member, APTI Andhra Pradesh State Branch (2022–2027)',
        regNo: 'AP/LM-174',
        type: 'National Council Leadership',
    },
    {
        title: 'Indian Pharmaceutical Association (IPA)',
        role: 'Life Member; Previously served as Treasurer (2014–2016) & Secretary (2016–2018), IPA Khammam Local Branch',
        regNo: 'AP/KHAM/LM/0046',
        type: 'Professional Association',
    },
    {
        title: 'Indian Association of Colleges of Pharmacy (IACP)',
        role: 'Life Member',
        regNo: 'IACP/LM/0045',
        type: 'Institutional Leadership',
    },
    {
        title: 'A.P. State Pharmacy Council',
        role: 'Registered Pharmacist',
        regNo: '028263/A1',
        type: 'Statutory Professional Licensure',
    },
];

const awards = [
    {
        title: 'Best Principal Award',
        org: 'Guru Pratibha Puraskar',
        year: '2026',
        desc: 'Conferred for distinguished institutional governance, academic mentorship, and campus leadership.',
    },
    {
        title: 'Shiksha Ratna Award',
        org: 'National Educational Honour',
        year: '2026',
        desc: 'Recognized for exemplary contribution to pharmaceutical higher education and student empowerment.',
    },
    {
        title: 'SPSR Global Pharmacist Excellence Award',
        org: 'Society of Pharmaceutical Sciences & Research (SPSR)',
        year: '2025',
        desc: 'International recognition for enduring contributions to pharmaceutical sciences and research.',
    },
    {
        title: 'Best Organizing National Coordinator',
        org: 'National Elocution Competition (IPA)',
        year: '2023',
        desc: 'Coordinating nationwide student pharmaceutical elocution competitions and academic debates.',
    },
    {
        title: 'Best Teacher Award',
        org: 'K.L.R. Pharmacy College',
        year: '2015',
        desc: 'Awarded for classroom excellence, innovative pedagogical methods, and student research mentorship.',
    },
    {
        title: 'Best Co-Convener',
        org: 'National Elocution Competition, Indian Pharmaceutical Association',
        year: 'National Level',
        desc: 'Commended for outstanding national organizing leadership in pharmaceutical education forums.',
    },
];

const contributions = [
    'Authored eight textbooks related to pharmaceutical sciences and pharmacy education.',
    'Published two book chapters with Elsevier.',
    'Participated in national and international conferences, seminars and workshops.',
    'Served as chairperson, resource person and organizing committee member at academic and professional events.',
    'Guided undergraduate (54 B.Pharm) and postgraduate (63 M.Pharm) research projects.',
    'Encouraged student participation in research presentations and national conferences.',
    'Organized community health activities, blood donation programmes, health awareness initiatives, pharmacovigilance activities and antimicrobial resistance awareness programmes.',
    'Contributed to pharmacy education through academic administration, faculty development and professional association activities.',
];

const sectionRevealVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardStaggerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: i * 0.07,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

function ParallaxSection({
    children,
    offset = 24,
    className = '',
    id,
}: {
    children: React.ReactNode;
    offset?: number;
    className?: string;
    id?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 26,
        restDelta: 0.001,
    });

    const y = useTransform(smoothProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div
            ref={ref}
            id={id}
            className={className}
            style={{ y: shouldReduceMotion ? 0 : y }}
            variants={sectionRevealVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
        >
            {children}
        </motion.div>
    );
}

export default function PrincipalsProfile() {
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState<
        'all' | 'message' | 'experience' | 'research' | 'patents' | 'awards'
    >('all');

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const smoothHero = useSpring(heroScroll, { stiffness: 100, damping: 25 });
    const portraitParallaxY = useTransform(smoothHero, [0, 1], [0, 28]);
    const textParallaxY = useTransform(smoothHero, [0, 1], [0, -18]);

    return (
        <div className={styles.pageContainer}>
            {/* Top Breadcrumb & Metadata */}
            <motion.div
                className={styles.headerBlock}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.breadcrumb}>
                    <Link href="/" className={styles.crumbLink}>
                        Home
                    </Link>
                    <span className={styles.crumbSep}>/</span>
                    <Link href="/about" className={styles.crumbLink}>
                        About Us
                    </Link>
                    <span className={styles.crumbSep}>/</span>
                    <span className={styles.crumbActive}>Principal&apos;s Message &amp; Academic Profile</span>
                </div>

                <div className={styles.badgeRow}>
                    <span className={styles.sectionCodeBadge}>SECTIONS 3.3 &amp; 3.4</span>
                    <span className={styles.statusPill}>
                        <ShieldCheck size={14} />
                        <span>PCI Approved Professor &amp; Principal</span>
                    </span>
                    <span className={styles.aptiBadge}>
                        <Award size={14} />
                        <span>APTI AP Executive Council (2022–2027)</span>
                    </span>
                </div>

                <h1 className={styles.mainTitle}>Dr. Jilakara Venkata Suresh</h1>
                <p className={styles.mainSubtitle}>
                    Professor &amp; Principal, Jagan&apos;s Institute of Pharmaceutical Sciences (JIPS), Nellore, Andhra Pradesh.
                </p>
            </motion.div>

            {/* 1. Executive Dossier Hero Card with Parallax */}
            <div ref={heroRef} className={styles.heroDossierCard}>
                {/* Left: Official Portrait */}
                <motion.div
                    className={styles.portraitPane}
                    style={{ y: shouldReduceMotion ? 0 : portraitParallaxY }}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div
                        className={styles.portraitImageWrap}
                        style={{ position: 'relative', width: '100%' }}
                    >
                        <Image
                            src="/principal/principal.jpg"
                            alt="Dr. Jilakara Venkata Suresh - Professor & Principal, JIPS"
                            fill
                            priority
                            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 320px, 340px"
                            className={styles.portraitImg}
                        />
                        <div className={styles.portraitStatusBadge}>
                            <Sparkles size={13} />
                            <span>Professor &amp; Principal</span>
                        </div>
                    </div>
                    <div className={styles.portraitCaption}>
                        <strong>Dr. J. Venkata Suresh</strong>
                        <span>Ph.D., M.Pharm, B.Pharm</span>
                    </div>
                </motion.div>

                {/* Right: Dossier Summary */}
                <motion.div
                    className={styles.detailsPane}
                    style={{ y: shouldReduceMotion ? 0 : textParallaxY }}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.eyebrowRow}>
                        <span className={styles.eyebrowText}>OFFICIAL ACADEMIC DOSSIER</span>
                    </div>
                    <h2 className={styles.scholarName}>Dr. Jilakara Venkata Suresh</h2>
                    <div className={styles.designationPill}>
                        Professor &amp; Principal &bull; Dept. of Pharmaceutical Sciences (Pharmacognosy)
                    </div>

                    <div className={styles.institutionAffil}>
                        <Building size={16} className={styles.affilIcon} />
                        <span>Jagan&apos;s Institute of Pharmaceutical Sciences (JIPS), Nellore, Andhra Pradesh</span>
                    </div>

                    <p className={styles.leadBio}>
                        A distinguished educator, pharmaceutical researcher, and academic administrator with{' '}
                        <strong>28 years and 8 months</strong> of total teaching experience and{' '}
                        <strong>8 years and 2 months</strong> of executive service as Principal (as of 31 October 2026).
                    </p>

                    <p className={styles.subBio}>
                        Dr. Suresh specializes in Pharmacognosy and Phytochemistry, Herbal Drug Technology,
                        Phytopharmaceuticals, and Green-Synthesized Nanoparticles. He serves as an Executive Council
                        Member of the APTI Andhra Pradesh State Branch (2022–2027) and has guided 117 undergraduate and postgraduate research projects.
                    </p>

                    {/* Aligned Action Row */}
                    <div className={styles.actionRow}>
                        <a href="mailto:principal.jips@gmail.com" className={styles.primaryContactBtn}>
                            <Mail size={15} />
                            <span>Contact Principal&apos;s Office</span>
                        </a>

                        <Link href="/about/principals-message" className={styles.messageLinkBtn}>
                            <MessageSquare size={15} />
                            <span>Read Principal&apos;s Message</span>
                        </Link>

                        <div className={styles.regPill}>
                            <BadgeCheck size={15} className={styles.checkIcon} />
                            <span>AP Pharmacy Council Reg: 028263/A1</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 2. Key Metrics Bar (8 Statistics) */}
            <ParallaxSection offset={18} className={styles.statsStrip}>
                {keyStats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.statBox}
                        custom={idx}
                        variants={cardStaggerVariants}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.statNumber}>{stat.value}</span>
                        <span className={styles.statTitle}>{stat.label}</span>
                        <span className={styles.statSubText}>{stat.sub}</span>
                    </motion.div>
                ))}
            </ParallaxSection>

            {/* Quick Filter Navigation Tabs */}
            <div className={styles.tabBar} role="tablist" aria-label="Profile Sections">
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    <Layers size={15} />
                    <span>All Sections</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'message' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('message')}
                >
                    <MessageSquare size={15} />
                    <span>Principal&apos;s Message</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'experience' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    <GraduationCap size={15} />
                    <span>Qualifications &amp; Experience</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'research' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('research')}
                >
                    <Microscope size={15} />
                    <span>Research &amp; Publications</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'patents' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('patents')}
                >
                    <FlaskConical size={15} />
                    <span>Patents &amp; IP</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'awards' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('awards')}
                >
                    <Award size={15} />
                    <span>Awards &amp; Memberships</span>
                </button>
            </div>

            {/* SECTION 3.3: PRINCIPAL'S MESSAGE */}
            {(activeTab === 'all' || activeTab === 'message') && (
                <ParallaxSection offset={20} id="principals-message" className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.3</span>
                        <h2 className={styles.sectionTitle}>Principal&apos;s Message</h2>
                        <p className={styles.sectionSubtitle}>
                            A message of welcome and academic vision to students and parents from Dr. J. Venkata Suresh.
                        </p>
                    </div>

                    <div className={styles.messageCard}>
                        <div className={styles.messageQuoteBadge}>
                            <Quote size={16} />
                            <span>FROM THE DESK OF THE PRINCIPAL</span>
                        </div>

                        <p className={styles.messageSalutation}>Dear Students and Parents,</p>

                        <div className={styles.messageBody}>
                            <p>
                                It gives me great pleasure to welcome you to Jagan&apos;s Institute of Pharmaceutical Sciences,
                                Nellore. Pharmacy is a profession that touches every life, from the medicines we take to the
                                care we receive. At JIPS, we prepare our students to take up this responsibility with knowledge,
                                skill and integrity.
                            </p>
                            <p>
                                Our programmes combine strong classroom teaching with hands-on laboratory training,
                                hospital-based learning and exposure to the pharmaceutical industry. We encourage our
                                students to think critically, take part in research, and keep learning throughout their careers.
                            </p>
                            <p>
                                Our faculty members guide every student with dedication, and the college provides a
                                supportive environment in which students can grow academically and as responsible citizens.
                                We also encourage participation in community health and social service activities, because a
                                pharmacist serves society as much as a profession.
                            </p>
                            <p>
                                To the parents who place their trust in us, I assure you that we will do our best to help
                                your children become competent, ethical and confident pharmacy professionals. To our
                                students, I wish you a rewarding journey at JIPS, and I invite you to make the most of the
                                opportunities here.
                            </p>
                        </div>

                        <div className={styles.messageSignature}>
                            <span className={styles.wishesText}>With best wishes,</span>
                            <strong className={styles.signName}>Dr. J. Venkata Suresh</strong>
                            <span className={styles.signDesignation}>
                                Professor &amp; Principal, Jagan&apos;s Institute of Pharmaceutical Sciences, Nellore
                            </span>
                        </div>
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.A & 3.4.B: QUALIFICATIONS & PROFESSIONAL EXPERIENCE */}
            {(activeTab === 'all' || activeTab === 'experience') && (
                <ParallaxSection offset={22} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTIONS 3.4.A &amp; 3.4.B</span>
                        <h2 className={styles.sectionTitle}>Academic Qualifications &amp; Experience</h2>
                        <p className={styles.sectionSubtitle}>
                            Doctoral foundation in Pharmacognosy and nearly three decades of pedagogical leadership.
                        </p>
                    </div>

                    <div className={styles.twoColGrid}>
                        {/* A. Academic Qualifications */}
                        <div className={styles.cardContainer}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIconWrap}>
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h3 className={styles.cardHeading}>A. Academic Qualifications</h3>
                                    <span className={styles.cardSubheading}>Undergraduate, Postgraduate &amp; Doctoral</span>
                                </div>
                            </div>

                            <div className={styles.qualList}>
                                {qualifications.map((q, i) => (
                                    <div key={i} className={styles.qualItem}>
                                        <div className={styles.qualDegreeBadge}>{q.degree}</div>
                                        <div className={styles.qualInfo}>
                                            <div className={styles.qualTopRow}>
                                                <strong className={styles.qualDegree}>
                                                    {q.degree} &mdash; {q.type}
                                                </strong>
                                                <span className={styles.qualYear}>{q.year}</span>
                                            </div>
                                            <div className={styles.qualInst}>{q.institution}</div>
                                            {q.specialization && (
                                                <div className={styles.qualSpec}>Specialization: {q.specialization}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ph.D. Thesis Highlight */}
                            <div className={styles.thesisCallout}>
                                <div className={styles.thesisBadge}>Ph.D. THESIS (2012)</div>
                                <p className={styles.thesisTitle}>
                                    &ldquo;Pharmacognostical, Biological and Chemical Evaluation of Some Tuberous Herbs Used in
                                    Traditional Systems of Medicine.&rdquo;
                                </p>
                                <span className={styles.thesisDept}>
                                    Awarded by Andhra University, Visakhapatnam &bull; Pharmaceutical Sciences (Pharmacognosy)
                                </span>
                            </div>
                        </div>

                        {/* B. Professional Experience */}
                        <div className={styles.cardContainer}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIconWrap}>
                                    <Building size={20} />
                                </div>
                                <div>
                                    <h3 className={styles.cardHeading}>B. Professional Experience</h3>
                                    <span className={styles.cardSubheading}>Record as of 31 October 2026</span>
                                </div>
                            </div>

                            <div className={styles.expList}>
                                <div className={styles.expCard}>
                                    <div className={styles.expMetric}>28 Years 8 Months</div>
                                    <div className={styles.expTitle}>Total Teaching Experience</div>
                                    <p className={styles.expDesc}>
                                        Continuous teaching and academic mentorship across undergraduate (B.Pharm) and
                                        postgraduate (M.Pharm) programs in pharmaceutical sciences, herbal drug technology,
                                        and pharmacognosy (as of 31 October 2026).
                                    </p>
                                </div>

                                <div className={styles.expCard}>
                                    <div className={styles.expMetric}>8 Years 2 Months</div>
                                    <div className={styles.expTitle}>Service as Principal</div>
                                    <p className={styles.expDesc}>
                                        Executive stewardship as Institutional Head, overseeing statutory PCI compliance,
                                        university affiliation inspections, outcome-based curriculum delivery, research
                                        infrastructure, and campus governance (as of 31 October 2026).
                                    </p>
                                </div>
                            </div>

                            <div className={styles.expSummaryPill}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Verified via Official APTI Academic Applications &amp; Statutory Records</span>
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.C & 3.4.D: CONTRIBUTIONS & RESEARCH SPECIALIZATIONS */}
            {(activeTab === 'all' || activeTab === 'research') && (
                <ParallaxSection offset={24} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTIONS 3.4.C &amp; 3.4.D</span>
                        <h2 className={styles.sectionTitle}>Research Specializations &amp; Contributions</h2>
                        <p className={styles.sectionSubtitle}>
                            Specialized investigations in herbal drug standardization, natural remedies, and phytochemical analysis.
                        </p>
                    </div>

                    <div className={styles.specGrid}>
                        {specializations.map((spec, idx) => (
                            <motion.div
                                key={spec.title}
                                className={styles.specCard}
                                custom={idx}
                                variants={cardStaggerVariants}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <div className={styles.specIcon}>
                                    <Microscope size={20} />
                                </div>
                                <h4 className={styles.specTitle}>{spec.title}</h4>
                                <p className={styles.specDesc}>{spec.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.contributionsTableWrap}>
                        <h3 className={styles.tableHeading}>
                            <Library size={18} />
                            <span>C. Research and Academic Contributions Summary</span>
                        </h3>
                        <div className={styles.tableResponsive}>
                            <table className={styles.customTable}>
                                <thead>
                                    <tr>
                                        <th>Particulars</th>
                                        <th>Details</th>
                                        <th>Academic Significance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Research and review publications</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>36</span>
                                        </td>
                                        <td>As reported in the official APTI application</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Scopus author-profile documents</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>2</span>
                                        </td>
                                        <td>Indexed international scientific research</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Granted intellectual property entries</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>12</span>
                                        </td>
                                        <td>National &amp; international registrations listed in APTI application</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>M.Pharm projects guided</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>63</span>
                                        </td>
                                        <td>Postgraduate master&apos;s research theses supervised</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>B.Pharm projects guided</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>54</span>
                                        </td>
                                        <td>Undergraduate capstone projects mentored</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Ph.D. scholars co-supervised</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>2 (Both Awarded)</span>
                                        </td>
                                        <td>Doctoral dissertations successfully defended</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Textbooks published</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>8</span>
                                        </td>
                                        <td>Pharmaceutical sciences &amp; pharmacy education reference texts</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Book chapters published</strong>
                                        </td>
                                        <td>
                                            <span className={styles.tableHighlight}>2</span>
                                        </td>
                                        <td>Published internationally with Elsevier</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.E: SELECTED RESEARCH PUBLICATION */}
            {(activeTab === 'all' || activeTab === 'research') && (
                <ParallaxSection offset={20} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.4.E</span>
                        <h2 className={styles.sectionTitle}>Selected Research Publication</h2>
                        <p className={styles.sectionSubtitle}>
                            Recent peer-reviewed investigation leveraging network pharmacology and molecular docking.
                        </p>
                    </div>

                    <div className={styles.pubFeatureCard}>
                        <div className={styles.pubBadgeRow}>
                            <span className={styles.pubJournalPill}>Acta Innovations (2026)</span>
                            <span className={styles.pubVolPill}>Vol. 64(1s), pp. 1632–1646</span>
                            <span className={styles.pubAuthorRole}>Eighth Author</span>
                        </div>

                        <h3 className={styles.pubTitle}>
                            Network Pharmacology and Molecular Docking-Based Investigation of the Therapeutic Potential of{' '}
                            <em>Moringa oleifera</em> Against Type 2 Diabetes Mellitus
                        </h3>

                        <div className={styles.pubCitation}>
                            Thejomoorthy, K., Madagundi, S. D., Fatima, S. J., Reddy, N., Mannikatti, P. S., Shakya, M. K.,
                            Singh, H., <strong>Jilakara, V. S.</strong>, &amp; Sumitha, V. (2026).{' '}
                            <em>Acta Innovations</em>, 64(1s), 1632–1646.
                        </div>

                        <div className={styles.pubThemes}>
                            <span className={styles.themeTag}>Network Pharmacology</span>
                            <span className={styles.themeTag}>Molecular Docking</span>
                            <span className={styles.themeTag}>Protein&ndash;Protein Interaction Analysis</span>
                            <span className={styles.themeTag}>Pathway Enrichment</span>
                            <span className={styles.themeTag}>In-vitro Validation</span>
                            <span className={styles.themeTag}>Type 2 Diabetes Mellitus</span>
                        </div>

                        <div className={styles.pubFooter}>
                            <a
                                href="https://doi.org/10.62441/actainnovations.vi.2954"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.doiLink}
                            >
                                <ExternalLink size={15} />
                                <span>https://doi.org/10.62441/actainnovations.vi.2954</span>
                            </a>
                            <span className={styles.pubStatus}>Peer-Reviewed Open Access</span>
                        </div>
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.F: PATENTS & INTELLECTUAL PROPERTY */}
            {(activeTab === 'all' || activeTab === 'patents') && (
                <ParallaxSection offset={22} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.4.F</span>
                        <h2 className={styles.sectionTitle}>Patents &amp; Intellectual Property</h2>
                        <p className={styles.sectionSubtitle}>
                            Portfolio of 12 granted IP entries alongside national patent applications and registered designs.
                        </p>
                    </div>

                    <div className={styles.ipGrid}>
                        <div className={styles.ipCard}>
                            <div className={styles.ipBadgeRow}>
                                <span className={styles.ipTypePill}>Indian Patent Application</span>
                                <span className={styles.ipStatusPill}>Awaiting Request for Examination</span>
                            </div>

                            <h3 className={styles.ipTitle}>
                                A Novel Polymeric Nano formulation Comprising Fenugreek Seed and Mulberry Leaf Extracts for
                                Prevention and Management of Type 2 Diabetes by Improving Insulin Resistance
                            </h3>

                            <div className={styles.ipDetailsList}>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Application Number:</span>
                                    <span className={styles.ipVal}>202641097527</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Filing Date:</span>
                                    <span className={styles.ipVal}>12 August 2026</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Publication Date:</span>
                                    <span className={styles.ipVal}>21 August 2026</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Field of Invention:</span>
                                    <span className={styles.ipVal}>Biochemistry</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Applicant Position:</span>
                                    <span className={styles.ipVal}>Co-applicant</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ipCard}>
                            <div className={styles.ipBadgeRow}>
                                <span className={styles.ipTypePillGreen}>Registered Design Certificate</span>
                                <span className={styles.ipStatusPillGreen}>Certificate Issued</span>
                            </div>

                            <h3 className={styles.ipTitle}>
                                Rotarod Apparatus for Monitoring Muscle Relaxant Activity in Mice
                            </h3>

                            <div className={styles.ipDetailsList}>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Design Number:</span>
                                    <span className={styles.ipVal}>408583-001</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Registration Date:</span>
                                    <span className={styles.ipVal}>23 February 2024</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Certificate Issue Date:</span>
                                    <span className={styles.ipVal}>27 April 2026</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Applicant Position:</span>
                                    <span className={styles.ipVal}>Second among 10 co-applicants</span>
                                </div>
                                <div className={styles.ipDetailRow}>
                                    <span className={styles.ipKey}>Domain:</span>
                                    <span className={styles.ipVal}>Experimental Pharmacology Apparatus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ipNoteBox}>
                        <ShieldCheck size={20} className={styles.ipNoteIcon} />
                        <div>
                            <strong>Granted Intellectual Property:</strong> The APTI application lists 12 granted intellectual
                            property entries, comprising national and international registrations.
                        </div>
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.G: PROFESSIONAL MEMBERSHIPS */}
            {(activeTab === 'all' || activeTab === 'awards') && (
                <ParallaxSection offset={20} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.4.G</span>
                        <h2 className={styles.sectionTitle}>Professional Memberships</h2>
                        <p className={styles.sectionSubtitle}>
                            Statutory registrations and executive leadership roles across national pharmacy bodies.
                        </p>
                    </div>

                    <div className={styles.membershipGrid}>
                        {memberships.map((m, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.memberCard}
                                custom={idx}
                                variants={cardStaggerVariants}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.12 }}
                            >
                                <div className={styles.memberHeader}>
                                    <div className={styles.memberBadgeWrap}>
                                        <ShieldCheck size={18} />
                                    </div>
                                    <div>
                                        <h3 className={styles.memberTitle}>{m.title}</h3>
                                        <span className={styles.memberType}>{m.type}</span>
                                    </div>
                                </div>
                                <p className={styles.memberRole}>{m.role}</p>
                                <div className={styles.memberFooter}>
                                    <span className={styles.memberRegLabel}>Membership / Reg No:</span>
                                    <strong className={styles.memberRegVal}>{m.regNo}</strong>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.H: AWARDS & RECOGNITIONS */}
            {(activeTab === 'all' || activeTab === 'awards') && (
                <ParallaxSection offset={22} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.4.H</span>
                        <h2 className={styles.sectionTitle}>Awards and Recognitions</h2>
                        <p className={styles.sectionSubtitle}>
                            Honours acknowledging excellence in institutional governance, teaching, and national student elocution.
                        </p>
                    </div>

                    <div className={styles.awardsGrid}>
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.awardCard}
                                custom={idx}
                                variants={cardStaggerVariants}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <div className={styles.awardTop}>
                                    <div className={styles.awardIconWrap}>
                                        <Award size={20} />
                                    </div>
                                    <span className={styles.awardYear}>{award.year}</span>
                                </div>
                                <h3 className={styles.awardTitle}>{award.title}</h3>
                                <div className={styles.awardOrg}>{award.org}</div>
                                <p className={styles.awardDesc}>{award.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </ParallaxSection>
            )}

            {/* SECTION 3.4.I: ACADEMIC, PROFESSIONAL & COMMUNITY CONTRIBUTIONS */}
            {(activeTab === 'all' || activeTab === 'experience') && (
                <ParallaxSection offset={18} className={styles.sectionBlock}>
                    <div className={styles.sectionHeadingWrapper}>
                        <span className={styles.sectionEyebrow}>SECTION 3.4.I</span>
                        <h2 className={styles.sectionTitle}>Academic, Professional and Community Contributions</h2>
                        <p className={styles.sectionSubtitle}>
                            Textbook authorship, Elsevier chapters, pharmacovigilance, and antimicrobial resistance awareness initiatives.
                        </p>
                    </div>

                    <div className={styles.contributionsGrid}>
                        {contributions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.contribItem}
                                custom={idx}
                                variants={cardStaggerVariants}
                                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <div className={styles.contribIcon}>
                                    <CheckCircle2 size={16} />
                                </div>
                                <p className={styles.contribText}>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </ParallaxSection>
            )}

            {/* Bottom Executive Navigation Card */}
            <ParallaxSection offset={15} className={styles.bottomNavCard}>
                <div className={styles.bottomNavLeft}>
                    <h3 className={styles.bottomNavTitle}>Connect with the Principal&apos;s Office</h3>
                    <p className={styles.bottomNavSubtitle}>
                        Reach out for academic inquiries, institutional collaborations, research mentorship, or statutory documentation at JIPS, Nellore.
                    </p>
                </div>
                <div className={styles.bottomNavBtns}>
                    <Link href="/about/principals-message" className={styles.primaryNavBtn}>
                        <FileText size={16} />
                        <span>Full Message Page</span>
                    </Link>
                    <a href="mailto:principal.jips@gmail.com" className={styles.secondaryNavBtn}>
                        <Mail size={16} />
                        <span>Email Principal</span>
                    </a>
                </div>
            </ParallaxSection>
        </div>
    );
}