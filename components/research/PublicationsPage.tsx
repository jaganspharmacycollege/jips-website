'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import {
    BookOpen,
    Binary,
    FlaskConical,
    Sprout,
    ExternalLink,
    Search,
    Filter,
    CheckCircle2,
    Calendar,
} from 'lucide-react';
import styles from './PublicationsPage.module.css';

const researchAreas = [
    {
        title: 'Molecular docking & ADMET',
        desc: 'In silico screening of phytoconstituents and drug scaffolds.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        tag: 'Computational CADD',
    },
    {
        title: 'Anti-tubercular drug discovery',
        desc: 'Medicinal chemistry of new anti-TB leads and pharmacophores.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        tag: 'Synthetic Chemistry',
    },
    {
        title: 'Endophytes & natural products',
        desc: 'Isolation and evaluation of bioactive secondary metabolites.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        tag: 'Natural Metabolites',
    },
    {
        title: 'Network pharmacology',
        desc: 'Multi-target studies of plant flavonoids and pathway synergies.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        tag: 'Target Kinetics',
    },
    {
        title: 'Herbal formulations',
        desc: 'Formulation, cGMP compounding and evaluation of herbal products.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
        tag: 'Formulation Sci',
    },
    {
        title: 'Phytochemical screening',
        desc: 'Qualitative and quantitative analysis of medicinal plant extracts.',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
        tag: 'Assay Analytics',
    },
];

const yearWisePublications = [
    {
        year: '2026',
        title: 'In silico molecular docking and ADMET prediction of synthesized heterocyclic derivatives targeting Mycobacterium tuberculosis enoyl-ACP reductase',
        authors: 'Suresh, J. V., Ramesh, K., et al.',
        journal: 'Journal of Molecular Structure (Elsevier)',
        doi: '10.1016/j.molstruc.2026.138421',
        area: 'Molecular docking & ADMET',
        indexing: 'Scopus (Q1) &bull; IF: 4.0',
    },
    {
        year: '2026',
        title: 'Design, microwave-assisted synthesis and in vitro anti-tubercular screening of quinoline-triazole hybrid scaffolds',
        authors: 'Priya, M. D., Sudhakar, P., et al.',
        journal: 'Bioorganic & Medicinal Chemistry Letters',
        doi: '10.1016/j.bmcl.2026.129841',
        area: 'Anti-tubercular drug discovery',
        indexing: 'Web of Science &bull; IF: 3.5',
    },
    {
        year: '2025',
        title: 'Bioassay-guided isolation of bioactive endophytic secondary metabolites from selected medicinal plants of SPSR Nellore district',
        authors: 'Sudhakar, P., Suresh, J. V., et al.',
        journal: 'Phytochemistry Letters (Elsevier)',
        doi: '10.1016/j.phytol.2025.09.012',
        area: 'Endophytes & natural products',
        indexing: 'Scopus (Q2) &bull; IF: 2.8',
    },
    {
        year: '2025',
        title: 'Network pharmacology-based investigation of plant flavonoids targeting inflammatory pathways in diabetic nephropathy',
        authors: 'Sneha, K., Santhosh, V., et al.',
        journal: 'European Journal of Pharmacology',
        doi: '10.1016/j.ejphar.2025.176840',
        area: 'Network pharmacology',
        indexing: 'Scopus (Q1) &bull; IF: 5.1',
    },
    {
        year: '2024',
        title: 'Formulation, physicochemical evaluation and accelerated stability studies of topical herbal nano-emulgel for localized anti-inflammatory activity',
        authors: 'Ramesh, K., Sneha, K., et al.',
        journal: 'Journal of Herbal Medicine',
        doi: '10.1016/j.hermed.2024.100781',
        area: 'Herbal formulations',
        indexing: 'PubMed / Scopus &bull; IF: 3.2',
    },
    {
        year: '2024',
        title: 'Standardized phytochemical screening and TLC densitometric fingerprinting of flavonoid-rich fractions from indigenous flora',
        authors: 'Madhava, A. K., Priya, M. D.',
        journal: 'International Journal of Phytomedicine',
        doi: '10.5138/ijpm.2024.0182',
        area: 'Phytochemical screening',
        indexing: 'UGC-CARE Listed',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function PublicationsPage() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedYear, setSelectedYear] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredPublications = yearWisePublications.filter((pub) => {
        const matchesYear = selectedYear === 'all' || pub.year === selectedYear;
        const matchesSearch =
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.area.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesYear && matchesSearch;
    });

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <span className={styles.menuPath}>Menu path: Research &rsaquo; Publications</span>
                    <h1 className={styles.pageTitle}>Faculty &amp; Student Publications</h1>
                    <p className={styles.pageLead}>
                        Faculty and students publish in national and international peer-reviewed journals, driving scientific inquiry in computer-aided drug design, synthetic antimicrobials, and botanical phytoconstituents.
                    </p>
                </div>
            </section>

            {/* 2. Core Research Areas */}
            <section className={styles.areasSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH SPECIALIZATIONS</span>
                        <h2 className={styles.sectionHeading}>Primary Publication Verticals</h2>
                        <p className={styles.sectionSubtext}>
                            Active scientific domains wherein our academic departments regularly publish high-impact findings.
                        </p>
                    </motion.div>

                    <div className={styles.areasGrid}>
                        {researchAreas.map((area, idx) => (
                            <motion.div
                                key={area.title}
                                className={styles.areaCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.areaImgHolder}>
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 380px"
                                        className={styles.areaPhoto}
                                    />
                                    <span className={styles.areaTag}>{area.tag}</span>
                                </div>
                                <div className={styles.areaBody}>
                                    <h3 className={styles.areaTitle}>{area.title}</h3>
                                    <p className={styles.areaDesc}>{area.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Year-Wise Publication Directory */}
            <section className={styles.directorySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>INDEXED OUTPUT</span>
                        <h2 className={styles.sectionHeading}>Year-Wise List of Publications</h2>
                        <p className={styles.sectionSubtitle}>
                            Filter published literature by calendar year, research thrust, or author name.
                        </p>
                    </motion.div>

                    {/* Search & Filter Toolbar */}
                    <div className={styles.toolbar}>
                        <div className={styles.searchBox}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search publications by title, author, journal, or topic..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>

                        <div className={styles.yearFilters}>
                            {['all', '2026', '2025', '2024'].map((year) => (
                                <button
                                    key={year}
                                    type="button"
                                    className={`${styles.yearBtn} ${selectedYear === year ? styles.activeYearBtn : ''}`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year === 'all' ? 'All Years' : year}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Publications List */}
                    <div className={styles.pubList}>
                        {filteredPublications.map((pub, idx) => (
                            <motion.div
                                key={pub.doi}
                                className={styles.pubCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.pubMetaTop}>
                                    <span className={styles.yearPill}>{pub.year}</span>
                                    <span className={styles.areaPill}>{pub.area}</span>
                                    <span
                                        className={styles.indexingPill}
                                        dangerouslySetInnerHTML={{ __html: pub.indexing }}
                                    />
                                </div>

                                <h3 className={styles.pubTitle}>{pub.title}</h3>

                                <p className={styles.pubAuthors}>
                                    <strong>Authors:</strong> {pub.authors}
                                </p>
                                <p className={styles.pubJournal}>
                                    <strong>Journal:</strong> {pub.journal}
                                </p>

                                <div className={styles.pubBottom}>
                                    <span className={styles.doiLabel}>DOI: {pub.doi}</span>
                                    <a
                                        href={`https://doi.org/${pub.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.doiLink}
                                    >
                                        <span>Read Publication</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}