'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';
import styles from './page.module.css';

interface SyllabusRow {
    id: string;
    name: string;
    scope: string;
    reg: string;
    fileSize: string;
    downloadUrl: string;
}

const syllabusList: SyllabusRow[] = [
    {
        id: 's1',
        name: 'B. Pharmacy (B.Pharm) — Full 8 Semesters',
        scope: 'All Semesters (Year 1 to 4)',
        reg: 'PCI Unified Regulations 2026',
        fileSize: '4.2 MB',
        downloadUrl: '/downloads/syllabus/bpharm-pci-syllabus.pdf',
    },
    {
        id: 's2',
        name: 'M.Pharm (Pharmaceutics) — 4 Semesters',
        scope: 'Novel Drug Delivery Systems & R&D Thesis',
        reg: 'PCI Postgraduate Regulations',
        fileSize: '2.8 MB',
        downloadUrl: '/downloads/syllabus/mpharm-ceutics-syllabus.pdf',
    },
    {
        id: 's3',
        name: 'M.Pharm (Pharmaceutical Analysis) — 4 Semesters',
        scope: 'Spectroscopy, Chromatography & Quality Assurance',
        reg: 'PCI Postgraduate Regulations',
        fileSize: '2.9 MB',
        downloadUrl: '/downloads/syllabus/mpharm-analysis-syllabus.pdf',
    },
    {
        id: 's4',
        name: 'Doctor of Pharmacy (Pharm.D) — Complete 6 Years',
        scope: '5 Years Study + 1 Year Hospital Residency',
        reg: 'PCI Clinical Regulations',
        fileSize: '5.6 MB',
        downloadUrl: '/downloads/syllabus/pharmd-syllabus.pdf',
    },
    {
        id: 's5',
        name: 'Pharm.D (Post Baccalaureate) — 3 Years',
        scope: 'Clinical Pharmacy Specialization',
        reg: 'JNTUA Affiliated Curriculum',
        fileSize: '2.1 MB',
        downloadUrl: '/downloads/syllabus/pharmd-pb-syllabus.pdf',
    },
];

export default function SyllabusPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageRoot}>
            {/* Header */}
            <section className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.breadcrumb}>Downloads &rsaquo; Syllabus Copy</span>
                    <h1 className={styles.title}>Syllabus Copy</h1>
                    <p className={styles.subtext}>
                        Download official PCI and JNTUA curriculum copies, credit distribution matrices, and examination schemes.
                    </p>
                </div>
            </section>

            {/* Syllabus Rows (Exact layout matching screenshot) */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.listContainer}>
                        {syllabusList.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className={styles.rowCard}
                                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                            >
                                <div className={styles.leftInfo}>
                                    <div className={styles.iconCircleGold}>
                                        <BookOpen size={18} />
                                    </div>
                                    <div>
                                        <h2 className={styles.itemName}>{item.name}</h2>
                                        <div className={styles.tagsRow}>
                                            <span className={styles.scopeTag}>{item.scope}</span>
                                            <span className={styles.regTag}>{item.reg}</span>
                                            <span className={styles.sizeTag}>{item.fileSize}</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={item.downloadUrl}
                                    download
                                    className={styles.downloadBtn}
                                    title={`Download ${item.name}`}
                                >
                                    <Download size={14} />
                                    <span>Download PDF</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}