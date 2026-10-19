'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail, Search, BookOpen, FlaskConical, Award } from 'lucide-react';
import styles from './FacultyDirectory.module.css';

interface FacultyDossier {
    id: string;
    name: string;
    role: string;
    department: 'ceutics' | 'pharmacology' | 'analysis' | 'cognosy';
    deptLabel: string;
    qualification: string;
    experience: string;
    papers: string;
    patents: string;
    competency: string;
    email: string;
    image: string;
}

const facultyList: FacultyDossier[] = [
    {
        id: '1',
        name: 'Dr. K. Ramesh Babu',
        role: 'Professor & Vice Principal',
        department: 'ceutics',
        deptLabel: 'Pharmaceutics & NDDS',
        qualification: 'M.Pharm (Pharmaceutics), Ph.D.',
        experience: '18+ Years',
        papers: '36+ Papers',
        patents: '02 Granted',
        competency: 'Novel Drug Delivery Systems (NDDS), Polymeric Nanoparticles & Gastro-retentive Dosage Forms',
        email: 'ramesh.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '2',
        name: 'Dr. M. Priya Dharshini',
        role: 'Professor & HOD',
        department: 'analysis',
        deptLabel: 'Pharmaceutical Analysis & Quality Assurance',
        qualification: 'M.Pharm (Analysis), Ph.D., FIC',
        experience: '16+ Years',
        papers: '32+ Papers',
        patents: '01 Granted',
        competency: 'Hyphenated LC-MS/HPLC Method Development, Impurity Profiling & ICH Q1A Stability Protocols',
        email: 'priya.analysis@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'Dr. P. Sudhakar Rao',
        role: 'Associate Professor',
        department: 'cognosy',
        deptLabel: 'Pharmacognosy & Natural Products',
        qualification: 'M.Pharm (Pharmacognosy), Ph.D.',
        experience: '14+ Years',
        papers: '24+ Papers',
        patents: '02 Filed',
        competency: 'Bioactive Flavonoid Isolation, Standardized Herbal Formulations & Natural Antioxidant Screening',
        email: 'sudhakar.cognosy@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Mrs. K. Sneha Latha',
        role: 'Associate Professor',
        department: 'ceutics',
        deptLabel: 'Pharmaceutics & NDDS',
        qualification: 'M.Pharm (Pharmaceutics), (Ph.D.)',
        experience: '11+ Years',
        papers: '18+ Papers',
        patents: '01 Filed',
        competency: 'Self-Emulsifying Nano-Formulations (SNEDDS), Transdermal Patches & cGMP Pilot Scale Operations',
        email: 'sneha.ceutics@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Dr. V. Santhosh Kumar',
        role: 'Associate Professor & Preceptor',
        department: 'pharmacology',
        deptLabel: 'Pharmacology & Clinical Pharmacy',
        qualification: 'Pharm.D, Ph.D., Clinical Specialist',
        experience: '10+ Years',
        papers: '21+ Papers',
        patents: '01 Filed',
        competency: 'Bedside Pharmacotherapy, Antimicrobial Stewardship, Inpatient Ward Clerkship & TDM Protocols',
        email: 'santhosh.pharmd@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Dr. A. Madhava Krishna',
        role: 'Assistant Professor',
        department: 'analysis',
        deptLabel: 'Pharmaceutical Analysis & Quality Assurance',
        qualification: 'M.Pharm, Ph.D.',
        experience: '8+ Years',
        papers: '14+ Papers',
        patents: '01 Filed',
        competency: 'Spectrophotometric Assay Validation, Dissolution Profile Comparisons & Bio-equivalence Auditing',
        email: 'madhava.analysis@jips.edu.in',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function FacultyDirectory() {
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredFaculty = facultyList.filter((f) => {
        const matchesDept = activeTab === 'all' || f.department === activeTab;
        const matchesSearch =
            f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.deptLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.competency.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDept && matchesSearch;
    });

    return (
        <section className={styles.directorySection} aria-label="Faculty Directory">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>ACADEMIC DEPARTMENTS</span>
                    <h2 className={styles.sectionHeading}>Faculty Mentors &amp; Researchers</h2>
                    <p className={styles.sectionSubtext}>
                        Filter our scholars across core pharmaceutical departments to explore qualifications, laboratory expertise, and research domains.
                    </p>
                </div>

                {/* Search & Filter Tabs */}
                <div className={styles.toolbar}>


                    <div className={styles.filterPillsRow}>
                        {[
                            { id: 'all', label: 'All Departments' },
                            { id: 'ceutics', label: 'Pharmaceutics & NDDS' },
                            { id: 'pharmacology', label: 'Pharmacology & Clinical' },
                            { id: 'analysis', label: 'Pharmaceutical Analysis' },
                            { id: 'cognosy', label: 'Pharmacognosy & Natural' },
                        ].map((tab) => (
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
                </div>

                {/* Dossiers Grid */}
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
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <span className={styles.memberRole}>{member.role}</span>
                                <span className={styles.memberQual}>{member.qualification}</span>

                                <div className={styles.competencyBox}>
                                    <strong className={styles.competencyLabel}>Laboratory Competency:</strong>
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
                                        <span className={styles.statLbl}>Patents</span>
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
            </div>
        </section>
    );
}