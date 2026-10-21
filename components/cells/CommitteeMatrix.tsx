'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import styles from './CommitteeMatrix.module.css';

interface CommitteeMember {
    name: string;
    role: string;
    designation: string;
    department: string;
    email: string;
    phone: string;
    image: string;
}

interface CellData {
    id: string;
    title: string;
    shortLabel: string;
    chairperson: string;
    statutoryBasis: string;
    objectives: string;
    members: CommitteeMember[];
}

const cellsData: CellData[] = [
    {
        id: 'iqac',
        title: 'Internal Quality Assurance Cell (IQAC)',
        shortLabel: 'IQAC Cell',
        chairperson: 'Dr. J. Venkata Suresh (Principal & Professor)',
        statutoryBasis: 'NAAC & UGC Quality Mandate',
        objectives:
            'Continuous development of academic standards, pedagogy reviews, accreditation compliance, faculty development programs, and feedback appraisal mechanisms.',
        members: [
            {
                name: 'Dr. J. Venkata Suresh',
                role: 'Chairperson',
                designation: 'Principal & Professor of Pharmacology',
                department: 'Institutional Head',
                email: 'principal@jips.edu.in',
                phone: '+91 98480 12345',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Dr. K. Ramesh Babu',
                role: 'IQAC Director & Coordinator',
                designation: 'Professor & Vice Principal',
                department: 'Department of Pharmaceutics',
                email: 'ramesh.ceutics@jips.edu.in',
                phone: '+91 98480 23456',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Dr. M. Priya Dharshini',
                role: 'Member Secretary',
                designation: 'Professor & HOD',
                department: 'Pharmaceutical Analysis',
                email: 'priya.analysis@jips.edu.in',
                phone: '+91 98480 34567',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Mrs. K. Sneha Latha',
                role: 'Faculty Member',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutics',
                email: 'sneha.ceutics@jips.edu.in',
                phone: '+91 98480 45678',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
            },
        ],
    },
    {
        id: 'icc',
        title: 'Internal Complaints Committee (ICC) & Women Empowerment Cell',
        shortLabel: 'ICC & Women Cell',
        chairperson: 'Dr. M. Priya Dharshini (Professor & HOD)',
        statutoryBasis: 'POSH Act 2013 & UGC Regulations',
        objectives:
            'Providing an equitable, safe, and confidential environment for female students and staff, investigating gender complaints, and organizing legal awareness programs.',
        members: [
            {
                name: 'Dr. M. Priya Dharshini',
                role: 'Presiding Officer',
                designation: 'Professor & HOD',
                department: 'Pharmaceutical Analysis',
                email: 'icc@jips.edu.in',
                phone: '+91 98480 34567',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Mrs. K. Sneha Latha',
                role: 'Faculty Convener',
                designation: 'Associate Professor',
                department: 'Department of Pharmaceutics',
                email: 'sneha.ceutics@jips.edu.in',
                phone: '+91 98480 45678',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Dr. S. K. Lakshmi',
                role: 'NGO Representative',
                designation: 'Advocate & Social Activist',
                department: 'Nellore Legal Services Authority',
                email: 'legal.icc@jips.edu.in',
                phone: '+91 98480 56789',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
            },
        ],
    },
    {
        id: 'antiragging',
        title: 'Anti-Ragging Committee & Squad',
        shortLabel: 'Anti-Ragging Squad',
        chairperson: 'Dr. J. Venkata Suresh (Principal & Head)',
        statutoryBasis: 'Supreme Court Directives & PCI Regulations',
        objectives:
            'Zero-tolerance disciplinary surveillance across campus, hostel premises, and transit fleets, preventing physical harassment or verbal ragging.',
        members: [
            {
                name: 'Dr. J. Venkata Suresh',
                role: 'Chairman & Proctor',
                designation: 'Principal & Professor',
                department: 'Administration',
                email: 'antiragging@jips.edu.in',
                phone: '+91 98480 12345',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Dr. V. Santhosh Kumar',
                role: 'Hostel Ward Convener',
                designation: 'Associate Professor & Preceptor',
                department: 'Pharmacology',
                email: 'santhosh.pharmd@jips.edu.in',
                phone: '+91 98480 67890',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Station House Officer (SHO)',
                role: 'Police Department Member',
                designation: 'Circle Inspector of Police',
                department: 'Muthukur Police Station',
                email: 'sho.muthukur@appolice.gov.in',
                phone: '100 / 0861-238100',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            },
        ],
    },
    {
        id: 'sc-st',
        title: 'SC/ST & Minority Welfare Cell',
        shortLabel: 'SC/ST Cell',
        chairperson: 'Dr. P. Sudhakar Rao (Associate Professor)',
        statutoryBasis: 'Government of India & UGC Guidelines',
        objectives:
            'Safeguarding inclusive welfare, overseeing government scholarship allotments (JVD scheme), and providing remedial academic tutorials.',
        members: [
            {
                name: 'Dr. P. Sudhakar Rao',
                role: 'Convener & Liaison Officer',
                designation: 'Associate Professor',
                department: 'Department of Pharmacognosy',
                email: 'scstcell@jips.edu.in',
                phone: '+91 98480 78901',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Mr. B. Rajesh Varma',
                role: 'Academic Counselor',
                designation: 'Assistant Professor',
                department: 'Pharmaceutics',
                email: 'rajesh.acad@jips.edu.in',
                phone: '+91 98480 89012',
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
            },
        ],
    },
    {
        id: 'grievance',
        title: 'Student & Faculty Grievance Redressal Cell (SGRC)',
        shortLabel: 'Grievance Cell',
        chairperson: 'Dr. K. Ramesh Babu (Vice Principal)',
        statutoryBasis: 'AICTE & JNTUA Grievance Guidelines',
        objectives:
            'Addressing student academic grievances, examination recounting representations, library disputes, and hostel infrastructure requests in a time-bound manner.',
        members: [
            {
                name: 'Dr. K. Ramesh Babu',
                role: 'Ombudsperson & Convener',
                designation: 'Vice Principal & Professor',
                department: 'Administration',
                email: 'grievance@jips.edu.in',
                phone: '+91 98480 23456',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Dr. J. Venkata Suresh',
                role: 'Appellate Authority',
                designation: 'Principal',
                department: 'Institutional Head',
                email: 'principal@jips.edu.in',
                phone: '+91 98480 12345',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
            },
        ],
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

export default function CommitteeMatrix() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCellId, setActiveCellId] = useState('iqac');

    const activeCell = cellsData.find((c) => c.id === activeCellId) ?? cellsData[0];

    return (
        <section className={styles.sectionWrap} id="committees-directory" aria-label="Committees Directory">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>STATUTORY DIRECTORY</span>
                    <h2 className={styles.sectionTitle}>Committees &amp; Dedicated Officers</h2>
                    <p className={styles.sectionSubtext}>
                        Select a specialized cell below to inspect its administrative mandate, regulatory compliance basis, and constituted faculty roster.
                    </p>
                </motion.div>

                {/* Committee Navigation Pills */}
                <div className={styles.pillsRow}>
                    {cellsData.map((cell) => (
                        <button
                            key={cell.id}
                            type="button"
                            className={`${styles.pillBtn} ${activeCellId === cell.id ? styles.activePillBtn : ''}`}
                            onClick={() => setActiveCellId(cell.id)}
                        >
                            <span>{cell.shortLabel}</span>
                        </button>
                    ))}
                </div>

                {/* Selected Committee Dossier */}
                <motion.div
                    key={activeCell.id}
                    className={styles.cellConsoleCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {/* Header Strip */}
                    <div className={styles.consoleHeader}>
                        <div>
                            <span className={styles.statutoryPill}>{activeCell.statutoryBasis}</span>
                            <h3 className={styles.consoleTitle}>{activeCell.title}</h3>
                        </div>
                        <div className={styles.chairpersonBox}>
                            <span className={styles.chairLabel}>CONVENER / CHAIRPERSON:</span>
                            <strong className={styles.chairVal}>{activeCell.chairperson}</strong>
                        </div>
                    </div>

                    <p className={styles.objectivesLead}>{activeCell.objectives}</p>

                    {/* Constituted Members Grid */}
                    <h4 className={styles.membersSubhead}>Constituted Committee Members:</h4>
                    <div className={styles.membersGrid}>
                        {activeCell.members.map((member) => (
                            <div key={member.name} className={styles.memberCard}>
                                <div className={styles.memberImgPane}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        unoptimized
                                        loading="eager"
                                        sizes="(max-width: 768px) 100vw, 180px"
                                        className={styles.memberPhoto}
                                    />
                                    <span className={styles.roleTag}>{member.role}</span>
                                </div>

                                <div className={styles.memberInfo}>
                                    <h5 className={styles.memberName}>{member.name}</h5>
                                    <span className={styles.memberDesig}>{member.designation}</span>
                                    <span className={styles.memberDept}>{member.department}</span>

                                    <div className={styles.contactDetails}>
                                        <span className={styles.emailText}>
                                            <Mail size={13} /> {member.email}
                                        </span>
                                        <span className={styles.phoneText}>
                                            <Phone size={13} /> {member.phone}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}