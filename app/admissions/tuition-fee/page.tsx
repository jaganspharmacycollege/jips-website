'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Info, Sparkles } from 'lucide-react';
import styles from './TuitionFee.module.css';

interface TuitionPlan {
    id: string;
    course: string;
    level: 'ug' | 'pg' | 'pharmd';
    category: string;
    feePerYear: string;
    duration: string;
    admissionMode: string;
    description: string;
    image: string;
    statutoryCode: string;
}

const TUITION_DATA: TuitionPlan[] = [
    {
        id: 'b-pharm-fee',
        course: 'B. Pharmacy (Undergraduate)',
        level: 'ug',
        category: 'Govt. Convener Quota',
        feePerYear: '₹45,000',
        duration: '4 Years',
        admissionMode: 'AP EAPCET Counselling',
        statutoryCode: 'APHERMC-UG-01',
        description:
            'Statutory government-notified fee schedule approved by the Andhra Pradesh Higher Education Regulatory and Monitoring Commission (APHERMC).',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm-pharm-ceutics-fee',
        course: 'M. Pharm (Pharmaceutics)',
        level: 'pg',
        category: 'GPAT / AP PGECET',
        feePerYear: '₹60,000',
        duration: '2 Years',
        admissionMode: 'State PGECET Convener',
        statutoryCode: 'APHERMC-PG-04',
        description:
            'Annual fee including formulation research facilities, digital library access, and pilot compounding equipment.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm-pharm-analysis-fee',
        course: 'M. Pharm (Pharma Analysis)',
        level: 'pg',
        category: 'GPAT / AP PGECET',
        feePerYear: '₹60,000',
        duration: '2 Years',
        admissionMode: 'State PGECET Convener',
        statutoryCode: 'APHERMC-PG-05',
        description:
            'Covers practical training on analytical HPLC, FTIR, and UV-Visible spectrophotometer instruments under certified research guides.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'm-pharm-cology-fee',
        course: 'M. Pharm (Pharmacology)',
        level: 'pg',
        category: 'GPAT / AP PGECET',
        feePerYear: '₹60,000',
        duration: '2 Years',
        admissionMode: 'State PGECET Convener',
        statutoryCode: 'APHERMC-PG-06',
        description:
            'Covers computational drug screening labs, experimental pharmacology tools, and standardized institutional animal house facilities.',
        image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'pharm-d-fee',
        course: 'Doctor of Pharmacy (Pharm. D)',
        level: 'pharmd',
        category: 'AP EAPCET / Bi.P.C',
        feePerYear: '₹68,000',
        duration: '6 Years',
        admissionMode: 'State Quota Web Options',
        statutoryCode: 'APHERMC-PD-01',
        description:
            'Encompasses clinical rotations, teaching hospital ward rounds, clinical toxicology training, and internship certifications.',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'pharm-d-pb-fee',
        course: 'Pharm. D (Post Baccalaureate)',
        level: 'pharmd',
        category: 'AP PGECET / Post-B.Pharm',
        feePerYear: '₹68,000',
        duration: '3 Years',
        admissionMode: 'Direct / PG Counselling',
        statutoryCode: 'APHERMC-PD-02',
        description:
            'Specialized bedside clinical pharmacy tuition, institutional review board access, and clinical residency assessment.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    },
];

const keyHighlights = [
    { val: 'APHERMC', lbl: 'Govt. Regulated', sub: 'Fixed Fee Orders' },
    { val: '100%', lbl: 'Reimbursement', sub: 'Jagananna Vidya Deevena' },
    { val: '₹0', lbl: 'Capitation Fees', sub: 'Direct Receipts' },
    { val: 'Zero EMI', lbl: 'Bank Loan Desk', sub: 'Prompt Bonafide Support' },
];

const rowVariant: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } },
};

export default function TuitionFee() {
    const shouldReduceMotion = useReducedMotion();
    const [activeFilter, setActiveFilter] = useState<'all' | 'ug' | 'pg' | 'pharmd'>('all');

    const filteredData =
        activeFilter === 'all'
            ? TUITION_DATA
            : TUITION_DATA.filter((item) => item.level === activeFilter);

    return (
        <main className={styles.pageWrapper}>
            {/* 1. Hero Header */}
            <section className={styles.heroSection}>
                <div className={styles.heroImageWrap}>
                    <Image
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80"
                        alt="Tuition and Finance"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImg}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <motion.div
                    className={styles.heroContent}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.heroBadge}>
                        <Sparkles size={13} />
                        <span>ACADEMIC YEAR 2026 – 2027</span>
                    </div>
                    <h1 className={styles.heroTitle}>Tuition &amp; Fee Schedule</h1>
                    <p className={styles.heroSubtitle}>
                        Statutory government-notified fee structures approved by APHERMC and JNTUA with transparent payment schedules.
                    </p>
                </motion.div>
            </section>

            <div className={styles.container}>
                {/* 2. Key Highlights Strip */}
                <section className={styles.highlightsStrip}>
                    {keyHighlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.highlightCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className={styles.highlightVal}>{item.val}</span>
                            <span className={styles.highlightLbl}>{item.lbl}</span>
                            <span className={styles.highlightSub}>{item.sub}</span>
                        </motion.div>
                    ))}
                </section>

                {/* 3. Program Type Filter Tabs */}
                <div className={styles.ledgerControls}>
                    <div className={styles.filterTabs}>
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.activeFilterBtn : ''}`}
                        >
                            All Academic Programs ({TUITION_DATA.length})
                        </button>
                        <button
                            onClick={() => setActiveFilter('ug')}
                            className={`${styles.filterBtn} ${activeFilter === 'ug' ? styles.activeFilterBtn : ''}`}
                        >
                            Undergraduate (B.Pharm)
                        </button>
                        <button
                            onClick={() => setActiveFilter('pg')}
                            className={`${styles.filterBtn} ${activeFilter === 'pg' ? styles.activeFilterBtn : ''}`}
                        >
                            Postgraduate (M.Pharm)
                        </button>
                        <button
                            onClick={() => setActiveFilter('pharmd')}
                            className={`${styles.filterBtn} ${activeFilter === 'pharmd' ? styles.activeFilterBtn : ''}`}
                        >
                            Doctor of Pharmacy (Pharm.D)
                        </button>
                    </div>
                </div>

                {/* 4. Horizontal Master Fee Ledger (Replacing generic cards) */}
                <section className={styles.ledgerSection}>
                    <div className={styles.ledgerHeaderRow}>
                        <span>PROGRAM &amp; ACCREDITATION</span>
                        <span>INTAKE STREAM</span>
                        <span>DURATION</span>
                        <span>ANNUAL TUITION</span>
                        <span>SCHOLARSHIP DESK</span>
                    </div>

                    <div className={styles.ledgerList}>
                        <AnimatePresence mode="popLayout">
                            {filteredData.map((plan, idx) => (
                                <motion.div
                                    key={plan.id}
                                    className={styles.ledgerRow}
                                    custom={idx}
                                    variants={shouldReduceMotion ? undefined : rowVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    exit="exit"
                                    viewport={{ once: false, amount: 0.1 }}
                                    layout
                                >
                                    {/* Left Column: Image Thumbnail + Details */}
                                    <div className={styles.programCol}>
                                        <div className={styles.rowThumbnail}>
                                            <Image
                                                src={plan.image}
                                                alt={plan.course}
                                                fill
                                                sizes="(max-width: 768px) 80px, 100px"
                                                className={styles.thumbImg}
                                            />
                                        </div>
                                        <div className={styles.programDetails}>
                                            <div className={styles.badgeLine}>
                                                <span className={styles.categoryPill}>{plan.category}</span>
                                                <span className={styles.statutoryCode}>{plan.statutoryCode}</span>
                                            </div>
                                            <h3 className={styles.courseName}>{plan.course}</h3>
                                            <p className={styles.courseDesc}>{plan.description}</p>
                                        </div>
                                    </div>

                                    {/* Column 2: Admission Mode */}
                                    <div className={styles.modeCol}>
                                        <span className={styles.colLabel}>Admission Stream</span>
                                        <span className={styles.modeVal}>{plan.admissionMode}</span>
                                    </div>

                                    {/* Column 3: Duration */}
                                    <div className={styles.durationCol}>
                                        <span className={styles.colLabel}>Duration</span>
                                        <span className={styles.durationVal}>{plan.duration}</span>
                                    </div>

                                    {/* Column 4: Tuition Fee Display */}
                                    <div className={styles.feeCol}>
                                        <span className={styles.colLabel}>Statutory Fee</span>
                                        <div className={styles.priceRow}>
                                            <span className={styles.amountValue}>{plan.feePerYear}</span>
                                            <span className={styles.amountSub}>/ yr</span>
                                        </div>
                                    </div>

                                    {/* Column 5: Action Link */}
                                    <div className={styles.actionCol}>
                                        <Link
                                            href="/admissions/scholarship-portal"
                                            className={styles.ledgerActionBtn}
                                            aria-label={`Check Scholarship for ${plan.course}`}
                                        >
                                            <span>Check JVD</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                {/* 5. Policy & Payment Notice Box */}
                <motion.section
                    className={styles.noticeSection}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.noticeHeader}>
                        <div className={styles.noticeIconWrap}>
                            <Info size={22} />
                        </div>
                        <div>
                            <h3 className={styles.noticeTitle}>Statutory Guidelines &amp; Payment Verification</h3>
                            <p className={styles.noticeSubtitle}>
                                Prescribed fee structures are strictly regulated by the Government of Andhra Pradesh and JNTUA university rules.
                            </p>
                        </div>
                    </div>

                    <div className={styles.noticeList}>
                        <div className={styles.noticeItem}>
                            <CheckCircle2 size={18} className={styles.checkIcon} />
                            <div>
                                <strong>Jagananna Vidya Deevena (JVD):</strong>
                                <span> Eligible AP state candidates with a valid white ration card or income certificate receive full tuition reimbursement directly through DBT release schedules.</span>
                            </div>
                        </div>

                        <div className={styles.noticeItem}>
                            <CheckCircle2 size={18} className={styles.checkIcon} />
                            <div>
                                <strong>Official Payment Modes:</strong>
                                <span> Tuition fees can be remitted securely through net banking (RTGS / NEFT / IMPS) or via Demand Draft drawn in favor of &quot;Jagan&apos;s Institute of Pharmaceutical Sciences&quot; payable at Nellore.</span>
                            </div>
                        </div>

                        <div className={styles.noticeItem}>
                            <CheckCircle2 size={18} className={styles.checkIcon} />
                            <div>
                                <strong>Educational Bank Loan Facility:</strong>
                                <span> The administrative secretariat provides verified bonafide study certificates and standardized institutional cost estimates to expedite education loan sanctions with leading public and private banks.</span>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}