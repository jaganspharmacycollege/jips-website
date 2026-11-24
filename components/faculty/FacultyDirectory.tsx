'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail, Search, GraduationCap, Award, LayoutGrid, Table, FileSpreadsheet } from 'lucide-react';
import styles from './FacultyDirectory.module.css';

interface FacultyDossier {
    id: string;
    sNo: number;
    name: string;
    aliasNote?: string;
    role: string;
    department: 'cognosy' | 'practice' | 'ceutics' | 'chemistry' | 'pharmacology' | 'allied';
    deptLabel: string;
    qualification: string;
    experience: string;
    papers: string;
    patents: string;
    competency: string;
    email: string;
    image: string;
}

// Official faculty records from institutional staff document (DOC-20261024-WA0029.xlsx & JIPS_Website_Faculty_Directory.xlsx)
const facultyList: FacultyDossier[] = [
    {
        id: '1',
        sNo: 1,
        name: 'Dr. J. Venkata Suresh',
        role: 'Professor, Principal & HOD (Pharmacognosy & Phytopharmaceuticals)',
        department: 'cognosy',
        deptLabel: 'Pharmacognosy',
        qualification: 'M.Pharm, Ph.D.',
        experience: '28+ Years',
        papers: '36 Publications',
        patents: '12 Granted IP',
        competency: 'Pharmacognostic Standardization, Natural Drug Discovery & Institutional Administration',
        email: 'principal.jips@gmail.com',
        image: '/principal/principal.jpg',
    },
    {
        id: '2',
        sNo: 2,
        name: 'Dr. P. Narayana Swamy',
        role: 'Professor, Vice Principal & HOD (Pharmacy Practice)',
        department: 'practice',
        deptLabel: 'Pharmacy Practice / Pharm.D',
        qualification: 'Pharm.D, Ph.D.',
        experience: '15+ Years',
        papers: '25+ Papers',
        patents: '01 Filed',
        competency: 'Clinical Pharmacotherapy, Hospital Ward Preceptorship & Bedside Patient Counseling',
        email: 'viceprincipal.jips@gmail.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '3',
        sNo: 3,
        name: 'Dr. P. Venkata Durga Seshu Priya',
        role: 'Professor & HOD (Pharmaceutics)',
        department: 'ceutics',
        deptLabel: 'Pharmaceutics',
        qualification: 'M.Pharm, Ph.D.',
        experience: '16+ Years',
        papers: '30+ Papers',
        patents: '02 Granted',
        competency: 'Dosage Form Design, Novel Drug Delivery Systems (NDDS) & Bioavailability Enhancement',
        email: 'hod.ceutics.jips@gmail.com',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '4',
        sNo: 4,
        name: 'Dr. S. Shobha',
        role: 'Associate Professor & HOD (Pharmaceutical Chemistry and Pharmaceutical Analysis)',
        department: 'chemistry',
        deptLabel: 'Pharmaceutical Chemistry',
        qualification: 'M.Pharm, Ph.D.',
        experience: '14+ Years',
        papers: '22+ Papers',
        patents: '01 Granted',
        competency: 'Synthetic Medicinal Chemistry, Analytical Method Development & ICH Stability Validation',
        email: 'hod.chem.jips@gmail.com',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '5',
        sNo: 5,
        name: 'Mrs. K. Sushmitha',
        role: 'Associate Professor & HOD (Pharmacology)',
        department: 'pharmacology',
        deptLabel: 'Pharmacology',
        qualification: 'M.Pharm',
        experience: '10+ Years',
        papers: '14+ Papers',
        patents: '01 Filed',
        competency: 'Experimental Pharmacology, In-Vivo Preclinical Models & Pharmacological Bio-screening',
        email: 'hod.pcol.jips@gmail.com',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '6',
        sNo: 6,
        name: 'Dr. S. Venkata Rathnamma',
        role: 'Assistant Professor',
        department: 'practice',
        deptLabel: 'Pharmacy Practice / Pharm.D',
        qualification: 'Pharm.D',
        experience: '5+ Years',
        papers: '8+ Papers',
        patents: 'Clinical Research',
        competency: 'Adverse Drug Reaction Monitoring, Clinical Pharmacokinetics & Inpatient Care',
        email: 'rathnamma.pp@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '7',
        sNo: 7,
        name: 'Dr. D. Archana',
        role: 'Assistant Professor',
        department: 'practice',
        deptLabel: 'Pharmacy Practice / Pharm.D',
        qualification: 'Pharm.D',
        experience: '4+ Years',
        papers: '6+ Papers',
        patents: 'Hospital Care',
        competency: 'Therapeutic Drug Monitoring, Medication Reconciliation & Patient Healthcare Support',
        email: 'archana.pp@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '8',
        sNo: 8,
        name: 'Dr. N. Jaya Sree',
        role: 'Assistant Professor',
        department: 'practice',
        deptLabel: 'Pharmacy Practice / Pharm.D',
        qualification: 'Pharm.D',
        experience: '4+ Years',
        papers: '5+ Papers',
        patents: 'Pharmacotherapy',
        competency: 'Clinical Case Documentation, Ward Rounds Preceptorship & Drug Safety Evaluation',
        email: 'jayasree.pp@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '9',
        sNo: 9,
        name: 'Dr. K. Pavan Kumar',
        role: 'Assistant Professor',
        department: 'practice',
        deptLabel: 'Pharmacy Practice / Pharm.D',
        qualification: 'Pharm.D',
        experience: '4+ Years',
        papers: '6+ Papers',
        patents: 'Clinical Pharmacy',
        competency: 'Hospital Practice Systems, Toxicology Reviews & Clinical Protocol Adherence',
        email: 'pavankumar.pp@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '10',
        sNo: 10,
        name: 'Mrs. G. Sucharita',
        role: 'Assistant Professor',
        department: 'ceutics',
        deptLabel: 'Pharmaceutics',
        qualification: 'M.Pharm (Ph.D.)',
        experience: '7+ Years',
        papers: '10+ Papers',
        patents: 'Formulation Design',
        competency: 'Controlled Release Formulations, Solid Oral Dosage Forms & Preformulation Studies',
        email: 'sucharita.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '11',
        sNo: 11,
        name: 'Ms. Y. Priyanka',
        role: 'Assistant Professor',
        department: 'ceutics',
        deptLabel: 'Pharmaceutics',
        qualification: 'M.Pharm',
        experience: '5+ Years',
        papers: '6+ Papers',
        patents: 'Drug Delivery',
        competency: 'Liquid & Semisolid Compounding, Physical Pharmacy & Pilot Scale Industrial Manufacturing',
        email: 'priyanka.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '12',
        sNo: 12,
        name: 'Ms. P. Sandhya Mounika',
        role: 'Assistant Professor',
        department: 'chemistry',
        deptLabel: 'Pharmaceutical Chemistry',
        qualification: 'M.Pharm',
        experience: '5+ Years',
        papers: '7+ Papers',
        patents: 'QC / QA',
        competency: 'Spectrophotometric Analysis, HPLC Assay Validation & Pharmaceutical Quality Assurance',
        email: 'sandhya.analysis@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '13',
        sNo: 13,
        name: 'Ms. K. Yamini',
        role: 'Assistant Professor',
        department: 'chemistry',
        deptLabel: 'Pharmaceutical Chemistry',
        qualification: 'M.Pharm',
        experience: '4+ Years',
        papers: '5+ Papers',
        patents: 'Analytical Chemistry',
        competency: 'Chromatographic Separations, Excipient Compatibility & Good Laboratory Practices',
        email: 'yamini.analysis@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '14',
        sNo: 14,
        name: 'Mr. D. Manohar Reddy',
        role: 'Assistant Professor',
        department: 'allied',
        deptLabel: 'Mathematics & Statistics',
        qualification: 'MCA',
        experience: '8+ Years',
        papers: '5+ Papers',
        patents: 'Biostatistics',
        competency: 'Biostatistics, Experimental Data Modeling & Computational Problem Solving in Pharmacy',
        email: 'manohar.stats@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '15',
        sNo: 15,
        name: 'Mrs. G. Ankamma',
        aliasNote: '(Listed as G. Anusha in subjects list)',
        role: 'Assistant Professor',
        department: 'allied',
        deptLabel: 'Computer Science',
        qualification: 'MBA',
        experience: '6+ Years',
        papers: '4+ Papers',
        patents: 'Informatics',
        competency: 'Computer Applications in Pharmacy, Healthcare Information Systems & Digital Workflow',
        email: 'ankamma.cs@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '16',
        sNo: 16,
        name: 'Mr. V. Jagadish',
        role: 'Assistant Professor',
        department: 'allied',
        deptLabel: 'Communication English',
        qualification: 'Post Graduate',
        experience: '7+ Years',
        papers: '4+ Papers',
        patents: 'Communication',
        competency: 'Professional Communication Skills, Technical English & Personality Development',
        email: 'jagadish.english@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
];

const departmentTabs = [
    { id: 'all', label: 'All Faculty (16)' },
    { id: 'ceutics', label: 'Pharmaceutics' },
    { id: 'pharmacology', label: 'Pharmacology' },
    { id: 'chemistry', label: 'Pharmaceutical Chemistry' },
    { id: 'cognosy', label: 'Pharmacognosy' },
    { id: 'practice', label: 'Pharmacy Practice / Pharm.D' },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.06, ease: 'easeOut' },
    }),
};

export default function FacultyDirectory() {
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

    const filteredFaculty = facultyList.filter((f) => {
        const matchesDept = activeTab === 'all' || f.department === activeTab;
        const query = searchQuery.trim().toLowerCase();
        if (!query) return matchesDept;

        const matchesSearch =
            f.name.toLowerCase().includes(query) ||
            (f.aliasNote && f.aliasNote.toLowerCase().includes(query)) ||
            f.deptLabel.toLowerCase().includes(query) ||
            f.role.toLowerCase().includes(query) ||
            f.qualification.toLowerCase().includes(query) ||
            f.competency.toLowerCase().includes(query);

        return matchesDept && matchesSearch;
    });

    return (
        <section className={styles.directorySection} aria-label="Faculty Directory">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>TEACHING &amp; RESEARCH FACULTY</span>
                    <h2 className={styles.sectionHeading}>Faculty Mentors &amp; Researchers</h2>
                    <p className={styles.sectionSubtext}>
                        Official academic teaching faculty directory of Jagan&apos;s Institute of Pharmaceutical Sciences across all statutory pharmaceutical and foundational disciplines.
                    </p>
                </div>

                {/* Search & Filter Toolbar */}
                <div className={styles.toolbar}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search by faculty name, alias (e.g. Anusha), department, role, or qualification..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    <div className={styles.filterPillsRow}>
                        {departmentTabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                className={`${styles.filterBtn} ${activeTab === tab.id ? styles.activeFilterBtn : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* View Controls: Counter & Toggle Switcher */}
                    <div className={styles.viewControlsRow}>
                        <span className={styles.resultCount}>
                            Showing <strong>{filteredFaculty.length}</strong> of {facultyList.length} Faculty Members
                        </span>

                        <div className={styles.viewModeToggle} role="group" aria-label="View format toggle">
                            <button
                                type="button"
                                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.activeViewBtn : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <LayoutGrid size={15} />
                                <span>Dossier Cards</span>
                            </button>
                            <button
                                type="button"
                                className={`${styles.viewBtn} ${viewMode === 'table' ? styles.activeViewBtn : ''}`}
                                onClick={() => setViewMode('table')}
                            >
                                <Table size={15} />
                                <span>Official Roster Table</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* View 1: Dossiers Grid */}
                {viewMode === 'grid' && (
                    <div className={styles.grid}>
                        {filteredFaculty.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                className={styles.dossierCard}
                                custom={idx}
                                variants={cardVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                {/* Photo Header */}
                                <div className={styles.photoContainer}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 380px"
                                        className={styles.photo}
                                    />
                                    <span className={styles.deptTag}>{member.deptLabel}</span>
                                </div>

                                {/* Dossier Body */}
                                <div className={styles.cardBody}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                                        <div>
                                            <h3 className={styles.memberName}>{member.name}</h3>
                                            {member.aliasNote && (
                                                <span className={styles.aliasText}>{member.aliasNote}</span>
                                            )}
                                        </div>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ca8a04', background: '#fefce8', padding: '2px 7px', borderRadius: '4px', border: '1px solid #fef08a', flexShrink: 0 }}>
                                            #{member.sNo}
                                        </span>
                                    </div>
                                    <span className={styles.memberRole}>{member.role}</span>
                                    <span className={styles.memberQual}>
                                        <GraduationCap size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: '-1px' }} />
                                        {member.qualification}
                                    </span>

                                    <div className={styles.competencyBox}>
                                        <strong className={styles.competencyLabel}>Domain &amp; Laboratory Focus:</strong>
                                        <p className={styles.competencyText}>{member.competency}</p>
                                    </div>

                                    <div className={styles.statsRow}>
                                        <div className={styles.statCell}>
                                            <span className={styles.statVal}>{member.experience}</span>
                                            <span className={styles.statLbl}>Experience</span>
                                        </div>
                                        <div className={styles.statCell}>
                                            <span className={styles.statVal}>{member.papers}</span>
                                            <span className={styles.statLbl}>Publications</span>
                                        </div>
                                        <div className={styles.statCell}>
                                            <span className={styles.statVal}>{member.patents}</span>
                                            <span className={styles.statLbl}>Specialization</span>
                                        </div>
                                    </div>

                                    <div className={styles.emailRow}>
                                        <Mail size={14} className={styles.emailIcon} />
                                        <span>{member.email}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* View 2: Official Institutional Roster Table (Matching JIPS_Website_Faculty_Directory.xlsx) */}
                {viewMode === 'table' && (
                    <div className={styles.tableContainer}>
                        <div className={styles.tableHeaderBar}>
                            <h3 className={styles.tableTitle}>
                                <FileSpreadsheet size={18} color="#0b3954" />
                                Institutional Faculty Roster (Official Records)
                            </h3>
                            <span className={styles.tableBadge}>16 Approved Faculty Entries</span>
                        </div>
                        <div className={styles.tableScrollWrapper}>
                            <table className={styles.rosterTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.rosterTh}>S.No</th>
                                        <th className={styles.rosterTh}>Full Name</th>
                                        <th className={styles.rosterTh}>Department</th>
                                        <th className={styles.rosterTh}>Designation</th>
                                        <th className={styles.rosterTh}>Highest Qualification</th>
                                        <th className={styles.rosterTh}>Domain / Focus Area</th>
                                        <th className={styles.rosterTh}>Official Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredFaculty.map((member) => (
                                        <tr key={member.id} className={styles.rosterTr}>
                                            <td className={styles.rosterTd}>
                                                <span className={styles.sNoBadge}>{member.sNo}</span>
                                            </td>
                                            <td className={styles.rosterTd}>
                                                <div className={styles.nameBlock}>
                                                    <span className={styles.nameText}>{member.name}</span>
                                                    {member.aliasNote && (
                                                        <span className={styles.aliasText}>{member.aliasNote}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className={styles.rosterTd}>
                                                <span className={styles.deptBadge}>{member.deptLabel}</span>
                                            </td>
                                            <td className={styles.rosterTd}>
                                                <span className={styles.roleText}>{member.role}</span>
                                            </td>
                                            <td className={styles.rosterTd}>
                                                <span className={styles.qualBadge}>
                                                    <GraduationCap size={12} />
                                                    {member.qualification}
                                                </span>
                                            </td>
                                            <td className={styles.rosterTd} style={{ maxWidth: '280px', fontSize: '0.8rem', color: '#475569' }}>
                                                {member.competency}
                                            </td>
                                            <td className={styles.rosterTd}>
                                                <a href={`mailto:${member.email}`} className={styles.tableEmail}>
                                                    <Mail size={13} color="#ca8a04" />
                                                    {member.email}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredFaculty.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748b' }}>
                        <Award size={36} style={{ margin: '0 auto 0.75rem auto', color: '#94a3b8' }} />
                        <h4 style={{ margin: '0 0 0.35rem 0', color: '#0f172a', fontSize: '1.1rem' }}>No Faculty Found</h4>
                        <p style={{ margin: 0, fontSize: '0.88rem' }}>No faculty profiles match your current search criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
