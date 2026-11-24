'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ExternalLink, Search, Sparkles, User, Calendar, FileText } from 'lucide-react';
import styles from './PublicationsPage.module.css';

// 9.5 Core Research Verticals aligned with Section 9.5
const researchAreas = [
    {
        title: 'Natural Products & Phytochemistry',
        desc: 'Extraction, biological activity profiling, and pharmacognostical evaluation of medicinal plants.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        tag: 'Phytochemistry',
    },
    {
        title: 'Endophyte-Derived Metabolites',
        desc: 'Isolation, bioassay-guided fractionation, and secondary metabolite profiling of endophytes.',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
        tag: 'Microbial Metabolites',
    },
    {
        title: 'Medicinal Chemistry & Molecular Docking',
        desc: 'CADD molecular docking, ADMET prediction, and anti-tubercular drug-lead synthesis.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        tag: 'Computational CADD',
    },
    {
        title: 'Polyherbal Formulations & Nanoemulsions',
        desc: 'Novel dosage forms, polymeric nanocarriers, and green-synthesized silver/selenium nanoparticles.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
        tag: 'Nano-Formulations',
    },
    {
        title: 'Pharmaceutical Analysis & HPTLC',
        desc: 'Analytical method development, HPTLC botanical fingerprinting, and pesticide residue assays.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        tag: 'Analytical Assay',
    },
    {
        title: 'Clinical Practice & Systemic Reviews',
        desc: 'Bedside clinical pharmacotherapy, respiratory infection reviews, and women’s cardiometabolic health.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        tag: 'Clinical Research',
    },
];

export interface PublicationItem {
    id: string;
    facultyId: 'suresh' | 'swamy' | 'priya' | 'shobha' | 'jayasree' | 'yamini';
    facultyName: string;
    facultyRole: string;
    year: string;
    title: string;
    authors: string;
    journal: string;
    volumeInfo?: string;
    doi?: string;
    area: string;
    indexing?: string;
    affiliationNote?: string;
}

// 9.2 Complete Faculty-wise Research Publications (2022–2026)
const officialPublications: PublicationItem[] = [
    // A. Dr. Jilakara Venkata Suresh (7 publications)
    {
        id: 'suresh-1',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2025',
        title: 'Design and development of a polyherbal formulation containing Gymnema sylvestre, Momordica charantia and Trigonella foenum-graecum for the treatment of diabetes mellitus',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'Cuestiones de Fisioterapia',
        volumeInfo: '2025; 54(3): 3269–3283',
        area: 'Herbal & Polyherbal Formulations',
        indexing: 'Scopus Indexed',
    },
    {
        id: 'suresh-2',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2025',
        title: 'Antioxidant and anti-inflammatory properties of phyto-based silver nanoparticles in chronic inflammatory diseases',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'Cuestiones de Fisioterapia',
        volumeInfo: '2025; 54(2): 2943–2954',
        area: 'Green Nanotechnology & Nanoparticles',
        indexing: 'Scopus Indexed',
    },
    {
        id: 'suresh-3',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2025',
        title: 'Design and development of a polyherbal nanoemulsion for the treatment of diabetes mellitus',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'South Eastern European Journal of Public Health',
        volumeInfo: '2025; XXVI(S1): 5183–5195',
        area: 'Polyherbal Nanoemulsions',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'suresh-4',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2025',
        title: 'Phytochemical authentication of Ginkgo biloba and Valeriana officinalis: morpho-anatomical, physicochemical and HPTLC correlation with psychotropic effects in actophotometer-based motor activity assays',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'Biochemical and Cellular Archives',
        volumeInfo: '2025; 25(1)',
        area: 'Phytochemical & HPTLC Analysis',
        indexing: 'Scopus / UGC-CARE Indexed',
    },
    {
        id: 'suresh-5',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2024',
        title: 'Preparation and antioxidant activity of selenium nanoparticles by using herbal extract',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'African Journal of Biological Sciences',
        volumeInfo: '2024; 6(Si3): 482–490',
        area: 'Green-Synthesized Nanoparticles',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'suresh-6',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2024',
        title: 'In-vitro evaluation for anticancer activity of extract of Asparagus racemosus',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'International Journal of Pharmaceutical Quality Assurance',
        volumeInfo: '2024; 15(2): 739–742',
        area: 'Natural Products & Anticancer',
        indexing: 'Scopus Indexed',
    },
    {
        id: 'suresh-7',
        facultyId: 'suresh',
        facultyName: 'Dr. Jilakara Venkata Suresh',
        facultyRole: 'Professor & Principal',
        year: '2024',
        title: 'In depth survey on Ayurvedic remedies by illiterate tribals in Yadadri Bhuvanagiri Dist. (Review)',
        authors: 'Dr. Jilakara Venkata Suresh, et al.',
        journal: 'World Journal of Pharmaceutical Research',
        volumeInfo: '2024; 13(9): 382–403',
        area: 'Traditional Systems & Pharmacognosy',
        indexing: 'Peer-Reviewed Journal',
    },

    // B. Dr. P. Narayana Swamy (4 publications)
    {
        id: 'swamy-1',
        facultyId: 'swamy',
        facultyName: 'Dr. P. Narayana Swamy',
        facultyRole: 'Professor & HOD (Pharmacy Practice)',
        year: '2025',
        title: 'Review Article on Clinical Significance and Management of Hyponatremia in Liver Cirrhosis',
        authors: 'Dr. P. Narayana Swamy, et al.',
        journal: 'Asian Journal of Hospital Pharmacy',
        volumeInfo: '2025; 5(1): 12–16',
        doi: '10.38022/ajhp.v5i1.96',
        area: 'Pharmacy Practice & Clinical Care',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'swamy-2',
        facultyId: 'swamy',
        facultyName: 'Dr. P. Narayana Swamy',
        facultyRole: 'Professor & HOD (Pharmacy Practice)',
        year: '2024',
        title: 'A Systematic Review on Acute Respiratory Tract Infection',
        authors: 'Dr. P. Narayana Swamy, et al.',
        journal: 'Journal of Case Studies and Case Reports',
        volumeInfo: '2024; 3(3): 10–14',
        doi: '10.37022/jcscr.v3i3.638',
        area: 'Clinical Systematic Reviews',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'swamy-3',
        facultyId: 'swamy',
        facultyName: 'Dr. P. Narayana Swamy',
        facultyRole: 'Professor & HOD (Pharmacy Practice)',
        year: '2024',
        title: 'A Review on Upper Respiratory Tract Infection',
        authors: 'Dr. P. Narayana Swamy, et al.',
        journal: 'Asian Journal of Hospital Pharmacy',
        volumeInfo: '2024; 4(3): 8–12',
        doi: '10.38022/ajhp.v4i3.93',
        area: 'Hospital Pharmacy & Infection',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'swamy-4',
        facultyId: 'swamy',
        facultyName: 'Dr. P. Narayana Swamy',
        facultyRole: 'Professor & HOD (Pharmacy Practice)',
        year: '2024',
        title: 'A Systematic Review on Chronic Respiratory Infection in Patients with Chronic Obstructive Pulmonary Disease',
        authors: 'Dr. P. Narayana Swamy, et al.',
        journal: 'International Journal of Healthcare and Biological Sciences',
        volumeInfo: '2024; 5(4): 6–15',
        doi: '10.46795/ijhcbs.v5i4.639',
        area: 'Clinical Pharmacotherapy & COPD',
        indexing: 'Peer-Reviewed Journal',
    },

    // C. Venkata Durga Seshu Priya P (2 publications)
    {
        id: 'priya-1',
        facultyId: 'priya',
        facultyName: 'Venkata Durga Seshu Priya P',
        facultyRole: 'Professor & HOD (Pharmaceutics)',
        year: '2024',
        title: 'Design, Optimization and Performance Assessment of Memantine Buccal Films for Targeted Drug Delivery',
        authors: 'Priya VDSP, Ruby S, Kumar M.',
        journal: 'International Journal of Drug Delivery Technology',
        volumeInfo: '2024; 14(3): 1635–1640',
        doi: '10.25258/ijddt.14.3.54',
        area: 'Buccal Delivery & Pharmaceutics',
        indexing: 'Scopus Indexed',
    },
    {
        id: 'priya-2',
        facultyId: 'priya',
        facultyName: 'Venkata Durga Seshu Priya P',
        facultyRole: 'Professor & HOD (Pharmaceutics)',
        year: '2025',
        title: 'Development and Evaluation of Chitosan Nanoparticle-Loaded Films for Enhanced Bioavailability',
        authors: 'Venkata Durga Seshu Priya P, Ruby S, Kumar M.',
        journal: 'International Journal of Drug Delivery Technology',
        volumeInfo: '2025; 15(3): 1318–1325',
        doi: '10.25258/ijddt.15.3.53',
        area: 'Nanoparticle Formulation Films',
        indexing: 'Scopus Indexed',
    },

    // D. Dr. Singarapalle Shobha (8 publications)
    {
        id: 'shobha-1',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2026',
        title: 'Post-adaptive survival mechanisms in Mycobacterium tuberculosis: A comprehensive review',
        authors: 'Tulasi P, Singarapalle S, Hamem MNK, Muthyala MKK.',
        journal: 'Asian Journal of Pharmaceutical and Clinical Research',
        volumeInfo: '2026; 19(4): 1–14',
        doi: '10.22159/ajpcr.2026v19i4.57867',
        area: 'Anti-Tubercular Drug Discovery',
        indexing: 'Scopus / Embase Indexed',
    },
    {
        id: 'shobha-2',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2026',
        title: 'Polymorphic transformations and in vitro bioequivalence assessment of saxagliptin hydrochloride solid forms',
        authors: 'Poornima B, Divya K, Swetha A, Chandrasekaran VS, Singarapalle S.',
        journal: 'Journal of Chemical Health Risks',
        volumeInfo: '2026; 16(2): 1860–1870',
        area: 'Pharmaceutical Chemistry & Polymorphism',
        indexing: 'Scopus Indexed',
    },
    {
        id: 'shobha-3',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2026',
        title: 'Endophyte-derived natural products using in silico and in vitro methods for drug lead discovery: A review',
        authors: 'Jugguru S, Chatakondu R, Singarapalle S, Thirunalveli P.',
        journal: 'Pharmacognosy Reviews',
        volumeInfo: '2026; 20(39): 34–40',
        doi: '10.5530/phrev.20260023',
        area: 'Endophytes & In Silico CADD',
        indexing: 'Web of Science / Scopus Indexed',
    },
    {
        id: 'shobha-4',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2025',
        title: 'Molecular docking and ADMET profiling of Vitex negundo phytoconstituents targeting inflammatory proteins in rheumatoid arthritis',
        authors: 'Singarapalle S, Ganesh YB, Jugguru S.',
        journal: 'Journal of Pharma Insights and Research',
        volumeInfo: '2025; 3(5): 8–14',
        doi: '10.69613/rp9j6p72',
        area: 'Molecular Docking & ADMET Profiling',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'shobha-5',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2025',
        title: 'Bioactive compound from Micrococcus luteus associated with Datura stramonium L. seeds',
        authors: 'Singarapalle S, Tulasi P, Ishwarya VVS, Nagendla SL, Devasani JR, Guntuku GS, Muthyala MKK.',
        journal: 'Indian Journal of Chemistry',
        volumeInfo: '2025; 64(6): 634–639',
        doi: '10.56042/ijc.v64i6.16839',
        area: 'Microbial Metabolites & Natural Products',
        indexing: 'SCIE / Scopus (NIScPR-CSIR)',
    },
    {
        id: 'shobha-6',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2025',
        title: 'Bioactive secondary metabolites derived from endophytes: A review',
        authors: 'Singarapalle S, Harh MA, Phanindra CG, Reddy DJ, Kimariyo PF, Muthyala MKK.',
        journal: 'Asian Journal of Pharmaceutical and Clinical Research',
        volumeInfo: '2025; 18(5): 37–53',
        doi: '10.22159/ajpcr.2025v18i5.53898',
        area: 'Endophytes & Bioactive Metabolites',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'shobha-7',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2024',
        title: 'Design, synthesis, and anti-mycobacterial evaluation of 1,8-naphthyridine-3-carbonitrile analogues',
        authors: 'Khetmalis YM, Shobha S, Nandikolla A, Chandu A, Murugesan S, Kumar MMK, Sekhar KVGC.',
        journal: 'RSC Advances (Royal Society of Chemistry)',
        volumeInfo: '2024; 14(31): 22676–22689',
        doi: '10.1039/d4ra04262j',
        area: 'Synthetic Chemistry & Anti-TB Leads',
        indexing: 'SCI / Scopus (Q1) • Royal Society of Chemistry',
    },
    {
        id: 'shobha-8',
        facultyId: 'shobha',
        facultyName: 'Dr. Singarapalle Shobha',
        facultyRole: 'R&D Coordinator & Assoc. Professor',
        year: '2024',
        title: 'A molecular hybridization approach to design and study the in vitro and in silico properties of N-phenyl-4-oxo-butanamide derivatives',
        authors: 'Bothsa SS, Veeravarapu H, Guruvelli S, Singarapalle S, Prasanthi T, Muthyala MKK.',
        journal: 'Indian Journal of Chemistry',
        volumeInfo: '2024; 63(9): 847–854',
        doi: '10.56042/ijc.v63i9.8369',
        area: 'Molecular Hybridization & CADD',
        indexing: 'SCIE / Scopus (NIScPR-CSIR)',
    },

    // E. N. Jayasree (4 publications)
    {
        id: 'jayasree-1',
        facultyId: 'jayasree',
        facultyName: 'N. Jayasree',
        facultyRole: 'Assistant Professor',
        year: '2025',
        title: 'Investigating the role of gut microbiota in the metabolism of atorvastatin for hyperlipidemia management',
        authors: 'Komal Kriti, Mitul Bhoi, Mohammad Muztaba, Yogesh P. Kulkarni, Shyaleen Rose Sebastian, Nilesh Kumar, N. Jayasree and V. Geetha.',
        journal: 'Biochemical and Cellular Archives',
        volumeInfo: '2025; 25(1): 853–860',
        doi: '10.51470/bca.2025.25.1.853',
        area: 'Microbiota & Hyperlipidemia',
        indexing: 'Scopus / UGC-CARE Indexed',
    },
    {
        id: 'jayasree-2',
        facultyId: 'jayasree',
        facultyName: 'N. Jayasree',
        facultyRole: 'Assistant Professor',
        year: '2025',
        title: 'Hysterectomy and Cardiometabolic Risk: A Comprehensive Review',
        authors: 'N. Jayasree, K. Ruchitha, Vijayalakshmi Cholavaram, O. Susmitha and Sk. Davood.',
        journal: 'International Journal of Research in Pharmacy and Allied Science',
        volumeInfo: '2025; 4(10): 85–95',
        doi: '10.71431/IJRPAS.2025.41006',
        area: 'Cardiometabolic Risk & Women’s Health',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'jayasree-3',
        facultyId: 'jayasree',
        facultyName: 'N. Jayasree',
        facultyRole: 'Assistant Professor',
        year: '2025',
        title: 'Folic Acid: Small Pill, Big Protection for Your Baby',
        authors: 'N. Jayasree, Vijayalakshmi Cholavaram, O. Susmitha, Sk. Davood and K. Ruchitha.',
        journal: 'International Journal of Research in Pharmacy and Allied Science',
        volumeInfo: '2025; 4(9): 8–20',
        doi: '10.71431/IJRPAS.2025.4902',
        area: 'Maternal Nutrition & Preventive Health',
        indexing: 'Peer-Reviewed Journal',
    },
    {
        id: 'jayasree-4',
        facultyId: 'jayasree',
        facultyName: 'N. Jayasree',
        facultyRole: 'Assistant Professor',
        year: '2025',
        title: 'Development and Characterization of Diclofenac Sodium Transdermal Patches Using Chitosan Natural Polymer Matrix',
        authors: 'Dr. Srividya Lonkala, Syida Aameera Yakuth, Thirunahari Prasada Swamy, Rayees Afzal Mir, Anshu Tiwari, Nitin Motiram Gawai, Prashik B. Dudhe and N. Jayasree.',
        journal: 'International Journal of Environmental Sciences',
        volumeInfo: '2025; 11(23s): 3460–3469',
        area: 'Transdermal Delivery & Natural Polymers',
        indexing: 'Peer-Reviewed Journal',
    },

    // F. Kolli Yamini (2 publications)
    {
        id: 'yamini-1',
        facultyId: 'yamini',
        facultyName: 'Kolli Yamini',
        facultyRole: 'Assistant Professor',
        year: '2026',
        title: 'Analytical Approaches for Pesticide Residue Analysis in Tomatoes – A Comprehensive Review',
        authors: 'K. Swathi, Kolli Yamini.',
        journal: 'Global Advances in Multidisciplinary Applications in Next-Gen and Modern Technologies (GAMANAM)',
        volumeInfo: '2026; 2(4): 180–187. ISSN: 3107-653X (Published: 1 Oct 2026)',
        area: 'Analytical Residue Chemistry',
        indexing: 'International Peer-Reviewed',
        affiliationNote: 'Author institutional affiliation: Institute of Pharmaceutical Technology, Sri Padmavati Mahila Visvavidyalayam, Tirupati, A.P.',
    },
    {
        id: 'yamini-2',
        facultyId: 'yamini',
        facultyName: 'Kolli Yamini',
        facultyRole: 'Assistant Professor',
        year: '2026',
        title: 'An Enhanced IoT-Based Embedded Water Quality Monitoring System for Unmanned Surface Vehicles',
        authors: 'K. Swathi, Kolli Yamini.',
        journal: 'Global Advances in Multidisciplinary Applications in Next-Gen and Modern Technologies (GAMANAM)',
        volumeInfo: '2026; 2(4): 188–191. ISSN: 3107-653X (Published: 1 Oct 2026)',
        area: 'IoT Embedded Environmental Analytics',
        indexing: 'International Peer-Reviewed',
        affiliationNote: 'Author institutional affiliation: Institute of Pharmaceutical Technology, Sri Padmavati Mahila Visvavidyalayam, Tirupati, A.P.',
    },
];

const facultyList = [
    { id: 'all', name: 'All Authors' },
    { id: 'suresh', name: 'Dr. J. Venkata Suresh' },
    { id: 'shobha', name: 'Dr. Singarapalle Shobha' },
    { id: 'swamy', name: 'Dr. P. Narayana Swamy' },
    { id: 'priya', name: 'Venkata Durga Seshu Priya P' },
    { id: 'jayasree', name: 'N. Jayasree' },
    { id: 'yamini', name: 'Kolli Yamini' },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function PublicationsPage() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedYear, setSelectedYear] = useState<string>('all');
    const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredPublications = officialPublications.filter((pub) => {
        const matchesYear = selectedYear === 'all' || pub.year === selectedYear;
        const matchesFaculty = selectedFaculty === 'all' || pub.facultyId === selectedFaculty;
        const matchesSearch =
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.facultyName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesYear && matchesFaculty && matchesSearch;
    });

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
                        <span className={styles.crumbActive}>Faculty Publications</span>
                    </div>

                    <div className={styles.badgeRow}>
                        <span className={styles.headerBadge}>
                            <Sparkles size={14} />
                            SECTION 9.2: RESEARCH REPOSITORY
                        </span>
                        <span className={styles.headerPill}>
                            27 Peer-Reviewed Publications (2022–2026)
                        </span>
                    </div>

                    <h1 className={styles.pageTitle}>Faculty Research Publications</h1>
                    <p className={styles.pageLead}>
                        A comprehensive directory of peer-reviewed scientific contributions published by JIPS faculty across high-impact international and national journals in computer-aided drug design, natural products, nano-formulations, and clinical sciences.
                    </p>
                </div>
            </section>

            {/* 2. Core Research Verticals */}
            <section className={styles.areasSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH SPECIALIZATIONS</span>
                        <h2 className={styles.sectionHeading}>Primary Research Verticals</h2>
                        <p className={styles.sectionSubtext}>
                            Interdisciplinary domains wherein our academic departments regularly investigate and publish scientific findings.
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
                                viewport={{ once: false, amount: 0.1 }}
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

            {/* 3. Year-Wise & Faculty-Wise Publication Directory */}
            <section className={styles.directorySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <span className={styles.eyebrow}>INDEXED SCIENTIFIC OUTPUT</span>
                        <h2 className={styles.sectionHeading}>Faculty-Wise Research Directory</h2>
                        <p className={styles.sectionSubtext}>
                            Browse and filter publications by author, publication year, or research domain.
                        </p>
                    </motion.div>

                    {/* Filter and Search Controls */}
                    <div className={styles.controlsCard}>
                        {/* Search Input */}
                        <div className={styles.searchBox}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search by paper title, author, journal, topic, or DOI..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={styles.clearSearchBtn}
                                    aria-label="Clear search"
                                >
                                    &times;
                                </button>
                            )}
                        </div>

                        {/* Author Filter Pills */}
                        <div className={styles.filterSection}>
                            <span className={styles.filterLabel}>
                                <User size={14} /> Filter by Author:
                            </span>
                            <div className={styles.pillList}>
                                {facultyList.map((fac) => (
                                    <button
                                        key={fac.id}
                                        type="button"
                                        className={`${styles.filterPill} ${selectedFaculty === fac.id ? styles.activeFilterPill : ''}`}
                                        onClick={() => setSelectedFaculty(fac.id)}
                                    >
                                        {fac.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Year Filter Pills */}
                        <div className={styles.filterSection}>
                            <span className={styles.filterLabel}>
                                <Calendar size={14} /> Publication Year:
                            </span>
                            <div className={styles.pillList}>
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

                        {/* Active Count Bar */}
                        <div className={styles.resultCountBar}>
                            <span>
                                Showing <strong>{filteredPublications.length}</strong> of {officialPublications.length} peer-reviewed publications
                            </span>
                            {(selectedYear !== 'all' || selectedFaculty !== 'all' || searchQuery) && (
                                <button
                                    onClick={() => {
                                        setSelectedYear('all');
                                        setSelectedFaculty('all');
                                        setSearchQuery('');
                                    }}
                                    className={styles.resetFiltersBtn}
                                >
                                    Reset all filters
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Publications Grid List */}
                    {filteredPublications.length > 0 ? (
                        <div className={styles.pubGrid}>
                            {filteredPublications.map((pub, idx) => (
                                <motion.div
                                    key={pub.id}
                                    className={styles.pubCard}
                                    custom={idx}
                                    variants={riseVariants}
                                    initial={shouldReduceMotion ? false : 'hidden'}
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    <div className={styles.pubMetaTop}>
                                        <div className={styles.pubMetaLeft}>
                                            <span className={styles.facultyBadge}>{pub.facultyName}</span>
                                            <span className={styles.yearPill}>{pub.year}</span>
                                        </div>
                                        <span className={styles.areaPill}>{pub.area}</span>
                                    </div>

                                    <h3 className={styles.pubTitle}>{pub.title}</h3>

                                    <div className={styles.pubAuthorsRow}>
                                        <strong className={styles.authorsLabel}>Authors:</strong>
                                        <span className={styles.authorsText}>{pub.authors}</span>
                                    </div>

                                    <div className={styles.pubJournalRow}>
                                        <strong className={styles.journalLabel}>Journal:</strong>
                                        <span className={styles.journalText}>
                                            <em>{pub.journal}</em>
                                            {pub.volumeInfo && <> &bull; {pub.volumeInfo}</>}
                                        </span>
                                    </div>

                                    {pub.indexing && (
                                        <div className={styles.indexingRow}>
                                            <span className={styles.indexingTag}>{pub.indexing}</span>
                                        </div>
                                    )}

                                    {pub.affiliationNote && (
                                        <div className={styles.affiliationNote}>
                                            <span className={styles.noteLabel}>Note:</span> {pub.affiliationNote}
                                        </div>
                                    )}

                                    <div className={styles.pubBottom}>
                                        {pub.doi ? (
                                            <a
                                                href={`https://doi.org/${pub.doi}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.doiLink}
                                            >
                                                <span>DOI: {pub.doi}</span>
                                                <ExternalLink size={13} />
                                            </a>
                                        ) : (
                                            <span className={styles.peerReviewedPill}>Peer-Reviewed Publication</span>
                                        )}
                                        <span className={styles.facultyRoleTag}>{pub.facultyRole}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResultsBox}>
                            <FileText size={40} className={styles.noResultsIcon} />
                            <h3>No matching publications found</h3>
                            <p>Try clearing your search query or selecting a different author or year filter.</p>
                            <button
                                onClick={() => {
                                    setSelectedYear('all');
                                    setSelectedFaculty('all');
                                    setSearchQuery('');
                                }}
                                className={styles.clearBtn}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
