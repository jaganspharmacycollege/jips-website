'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { FlaskConical, Binary, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';
import styles from './FacultyResearchDetails.module.css';

interface ResearchProject {
    id: string;
    title: string;
    category: 'formulation' | 'pharmacology' | 'analysis' | 'natural-products';
    leadInvestigator: string;
    department: string;
    fundingBody: string;
    grantAmount: string;
    image: string;
    summary: string;
    deliverables: string[];
}

interface PatentEntry {
    applicationNo: string;
    title: string;
    inventors: string;
    status: 'Published' | 'Granted';
    filingDate: string;
    domain: string;
}

interface PublicationEntry {
    title: string;
    authors: string;
    journal: string;
    indexing: string;
    year: string;
    doi: string;
    impactFactor: string;
}

const researchProjects: ResearchProject[] = [
    {
        id: 'res-1',
        title: 'Nanostructured Lipid Carriers (NLCs) for Enhanced Bioavailability of BCS Class II Therapeutics',
        category: 'formulation',
        leadInvestigator: 'Dr. K. Ramesh Babu & Research Team',
        department: 'Department of Pharmaceutics',
        fundingBody: 'Institutional R&D Grant & Pharma Collaboration',
        grantAmount: '₹ 8.5 Lakhs',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop',
        summary:
            'Engineered solid-lipid and liquid-lipid matrices utilizing high-pressure probe homogenization to dramatically elevate gastrointestinal absorption and bypass hepatic first-pass metabolism for lipophilic anti-inflammatory molecules.',
        deliverables: [
            'In-vitro dissolution elevation exceeding 320% relative to pure drug',
            'Accelerated stability validation at 40°C / 75% RH conforming to ICH Q1A',
            'One commercial patent application filed with the Indian Patent Office',
        ],
    },
    {
        id: 'res-2',
        title: 'Pre-Clinical Evaluation of Novel Synthetic Benzimidazole Derivatives in Neuropathic Pain Models',
        category: 'pharmacology',
        leadInvestigator: 'Dr. J. Venkata Suresh & Clinical Co-Investigators',
        department: 'Department of Pharmacology',
        fundingBody: 'University Sponsored Research Assistance',
        grantAmount: '₹ 6.2 Lakhs',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop',
        summary:
            'Investigation into peripheral nerve anti-hyperalgesic activity via sciatic nerve chronic constriction models. Evaluating selective COX-2 inhibition with minimal gastrointestinal and renal adverse profiles.',
        deliverables: [
            'Statistically significant attenuation of mechanical and thermal allodynia',
            'Ex-vivo organ-bath pharmacodynamic confirmation of smooth muscle safety',
            'Two research papers published in Scopus Indexed Pharmacology journals',
        ],
    },
    {
        id: 'res-3',
        title: 'Stability-Indicating RP-HPLC & LC-MS Impurity Profiling for Fixed-Dose Combination Antiretrovirals',
        category: 'analysis',
        leadInvestigator: 'Dr. M. Priya Dharshini & Postgrad Scholars',
        department: 'Department of Pharmaceutical Analysis',
        fundingBody: 'Corporate Industry Research Partnership',
        grantAmount: '₹ 7.0 Lakhs',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?q=80&w=900&auto=format&fit=crop',
        summary:
            'Development of validated reverse-phase chromatographic methods for resolving forced-degradation hydrolytic, oxidative, and photolytic impurities as per ICH Q2(R1) regulatory guidelines.',
        deliverables: [
            'Chromatographic resolution factor > 2.0 across all critical degradants',
            'Linear range validated with correlation coefficients (R² > 0.9995)',
            'Method transfer dossier accepted for routine quality control auditing',
        ],
    },
];

const publishedPatents: PatentEntry[] = [
    {
        applicationNo: 'IN 202341065892 A',
        title: 'A Gastro-Retentive Floating Tablet Formulation Comprising Effervescent Bio-Polymeric Matrix for Sustained Gastric Residence',
        inventors: 'Dr. K. Ramesh Babu, Mrs. K. Sneha Latha, et al.',
        status: 'Published',
        filingDate: 'October 2023',
        domain: 'Novel Drug Delivery Systems',
    },
    {
        applicationNo: 'IN 202241019845 B',
        title: 'An Optimized Nano-Emulsion Formulation for Targeted Transdermal Administration of Phytochemical Bio-Flavonoids',
        inventors: 'Dr. P. Sudhakar Rao, Dr. J. Venkata Suresh, et al.',
        status: 'Granted',
        filingDate: 'March 2022',
        domain: 'Pharmacognosy & Nanomedicine',
    },
    {
        applicationNo: 'IN 202441002341 A',
        title: 'A Hyphenated Chromatographic Assay Protocol for Rapid Simultaneous Separation of Fixed-Dose Anti-Diabetic Agents',
        inventors: 'Dr. M. Priya Dharshini, Dr. A. Madhava Krishna',
        status: 'Published',
        filingDate: 'January 2024',
        domain: 'Analytical Method Validation',
    },
];

const peerReviewedPublications: PublicationEntry[] = [
    {
        title: 'Formulation, optimization and in-vivo evaluation of surface-modified polymeric nanoparticles for targeted therapeutic delivery',
        authors: 'Babu, K. R., Sneha, K., et al.',
        journal: 'International Journal of Pharmaceutics (Elsevier)',
        indexing: 'Scopus / Web of Science (Q1)',
        year: '2026',
        doi: '10.1016/j.ijpharm.2026.123984',
        impactFactor: 'IF: 5.8',
    },
    {
        title: 'Neuroprotective potential of synthesized heterocyclic scaffolds against chronic constriction injury-induced neuropathic pain',
        authors: 'Suresh, J. V., Santhosh, V., et al.',
        journal: 'European Journal of Pharmacology',
        indexing: 'Scopus Indexed (Q1)',
        year: '2025',
        doi: '10.1016/j.ejphar.2025.176421',
        impactFactor: 'IF: 5.1',
    },
    {
        title: 'Validated stability-indicating RP-HPLC method for estimation of related substances in combined dosage pharmaceutical forms',
        authors: 'Dharshini, M. P., Krishna, A. M.',
        journal: 'Journal of Chromatographic Science (Oxford Academic)',
        indexing: 'Web of Science / PubMed',
        year: '2025',
        doi: '10.1093/chromsci/bmad088',
        impactFactor: 'IF: 3.2',
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

export default function FacultyResearchDetails() {
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState<'projects' | 'patents' | 'publications'>('projects');

    return (
        <section className={styles.researchSection} aria-label="Faculty Research Portfolio">
            <div className={styles.container}>
                {/* Section Heading */}
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.kickerTag}>SCHOLARLY DISCOVERY</span>
                    <h2 className={styles.sectionHeading}>Faculty Research, Patents &amp; Publications</h2>
                    <p className={styles.sectionSubtext}>
                        Explore peer-reviewed scientific breakthroughs, intellectual property patents, and translational funded research led by our faculty mentors.
                    </p>
                </motion.div>

                {/* Tab Selector */}
                <div className={styles.tabBar}>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === 'projects' ? styles.activeTabBtn : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        <FlaskConical size={17} />
                        <span>Funded Research Investigations</span>
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === 'patents' ? styles.activeTabBtn : ''}`}
                        onClick={() => setActiveTab('patents')}
                    >
                        <Binary size={17} />
                        <span>Patents &amp; Intellectual Property</span>
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === 'publications' ? styles.activeTabBtn : ''}`}
                        onClick={() => setActiveTab('publications')}
                    >
                        <BookOpen size={17} />
                        <span>Peer-Reviewed Publications</span>
                    </button>
                </div>

                {/* TAB 1: FUNDED RESEARCH PROJECTS */}
                {activeTab === 'projects' && (
                    <div className={styles.projectsStack}>
                        {researchProjects.map((project, idx) => (
                            <motion.article
                                key={project.id}
                                className={styles.projectCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.projectImgPane}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className={styles.projectImg}
                                    />
                                    <span className={styles.grantBadge}>{project.grantAmount} Grant</span>
                                </div>

                                <div className={styles.projectBody}>
                                    <div className={styles.cardHeaderMeta}>
                                        <span className={styles.deptKicker}>{project.department}</span>
                                        <span className={styles.leadScientist}>{project.leadInvestigator}</span>
                                    </div>

                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectSummary}>{project.summary}</p>

                                    <div className={styles.deliverablesBox}>
                                        <h4 className={styles.deliverableHead}>Scientific Deliverables &amp; Outcomes:</h4>
                                        <ul className={styles.deliverablesList}>
                                            {project.deliverables.map((item, i) => (
                                                <li key={i}>
                                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.fundingFooter}>
                                        <span className={styles.fundingLabel}>SPONSORING BODY:</span>
                                        <strong className={styles.fundingVal}>{project.fundingBody}</strong>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* TAB 2: PATENTS & INTELLECTUAL PROPERTY */}
                {activeTab === 'patents' && (
                    <div className={styles.patentsGrid}>
                        {publishedPatents.map((patent, idx) => (
                            <motion.div
                                key={patent.applicationNo}
                                className={styles.patentCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.patentTop}>
                                    <span className={styles.patentDomainBadge}>{patent.domain}</span>
                                    <span
                                        className={`${styles.statusPill} ${patent.status === 'Granted' ? styles.statusGranted : styles.statusPublished
                                            }`}
                                    >
                                        {patent.status}
                                    </span>
                                </div>

                                <span className={styles.appNo}>{patent.applicationNo}</span>
                                <h3 className={styles.patentTitle}>{patent.title}</h3>

                                <div className={styles.patentMetaBlock}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.metaLabel}>INVENTORS:</span>
                                        <strong className={styles.metaVal}>{patent.inventors}</strong>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <span className={styles.metaLabel}>DATE OF FILING / GRANT:</span>
                                        <strong className={styles.metaVal}>{patent.filingDate}</strong>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* TAB 3: PEER-REVIEWED PUBLICATIONS */}
                {activeTab === 'publications' && (
                    <div className={styles.publicationsStack}>
                        {peerReviewedPublications.map((pub, idx) => (
                            <motion.div
                                key={pub.doi}
                                className={styles.publicationCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.pubTopMeta}>
                                    <span className={styles.indexingBadge}>{pub.indexing}</span>
                                    <span className={styles.ifBadge}>{pub.impactFactor}</span>
                                    <span className={styles.yearBadge}>{pub.year}</span>
                                </div>

                                <h3 className={styles.pubTitle}>{pub.title}</h3>
                                <p className={styles.pubAuthors}>
                                    <strong>Authors:</strong> {pub.authors}
                                </p>
                                <p className={styles.pubJournal}>
                                    <strong>Journal:</strong> {pub.journal}
                                </p>

                                <div className={styles.pubFooter}>
                                    <span className={styles.doiText}>DOI: {pub.doi}</span>
                                    <a
                                        href={`https://doi.org/${pub.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.doiLink}
                                    >
                                        <span>View Article</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}