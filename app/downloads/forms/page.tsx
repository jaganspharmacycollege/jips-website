'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import styles from './page.module.css';

interface FormRow {
    id: string;
    name: string;
    scope: string;
    code: string;
    fileSize: string;
    downloadUrl: string;
}

const formsList: FormRow[] = [
    {
        id: 'f1',
        name: 'College Admission & Enrollment Application Form (2026-27)',
        scope: 'B.Pharm, M.Pharm & Pharm.D Programs',
        code: 'JIPS/ADM/2026-01',
        fileSize: '1.2 MB',
        downloadUrl: '/downloads/forms/admission-application.pdf',
    },
    {
        id: 'f2',
        name: 'Application for Bonafide, Study & Conduct Certificate',
        scope: 'Academic Section & Student Verification',
        code: 'JIPS/ACAD/CERT-02',
        fileSize: '540 KB',
        downloadUrl: '/downloads/forms/bonafide-certificate.pdf',
    },
    {
        id: 'f3',
        name: 'Institutional Bus Pass Registration Application',
        scope: 'Transit Network Across Nellore',
        code: 'JIPS/TRAN/BP-03',
        fileSize: '680 KB',
        downloadUrl: '/downloads/forms/bus-pass-form.pdf',
    },
    {
        id: 'f4',
        name: 'Hostel Accommodation & Resident Undertaking Agreement',
        scope: 'Campus Residence & Dining Enrollment',
        code: 'JIPS/HOST/ACC-04',
        fileSize: '890 KB',
        downloadUrl: '/downloads/forms/hostel-undertaking.pdf',
    },
    {
        id: 'f5',
        name: 'JNTUA Semester Revaluation & Script Recounting Form',
        scope: 'Examination Grievance & Script Verification',
        code: 'JIPS/EXAM/REV-05',
        fileSize: '620 KB',
        downloadUrl: '/downloads/forms/revaluation-form.pdf',
    },
    {
        id: 'f6',
        name: 'Govt. Jagananna Vidya Deevena (JVD) Fee Waiver Declaration',
        scope: 'State Scholarship & Fee Reimbursement',
        code: 'JIPS/SCHOL/JVD-06',
        fileSize: '750 KB',
        downloadUrl: '/downloads/forms/jvd-scholarship-declaration.pdf',
    },
    {
        id: 'f7',
        name: 'No Objection Certificate (NOC) & Transfer Request Form',
        scope: 'Student Clearance & Verification',
        code: 'JIPS/ACAD/NOC-07',
        fileSize: '510 KB',
        downloadUrl: '/downloads/forms/noc-transfer-form.pdf',
    },
];

export default function FormsPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageRoot}>
            {/* Header */}
            <section className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.breadcrumb}>Downloads &rsaquo; Application Forms</span>
                    <h1 className={styles.title}>Application Forms</h1>
                    <p className={styles.subtext}>
                        Download printable application forms for enrollment, student certificates, bus passes, and hostel accommodation.
                    </p>
                </div>
            </section>

            {/* Forms List (Exact match to screenshot) */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.listContainer}>
                        {formsList.map((item, idx) => (
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
                                        <FileText size={18} />
                                    </div>
                                    <div>
                                        <h2 className={styles.itemName}>{item.name}</h2>
                                        <div className={styles.tagsRow}>
                                            <span className={styles.scopeTag}>{item.scope}</span>
                                            <span className={styles.codeTag}>{item.code}</span>
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