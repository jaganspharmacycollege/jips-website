'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Globe2, FileCheck2, CheckCircle2, Mail, Compass, GraduationCap, Building2, Plane } from 'lucide-react';
import styles from './NriPioStudents.module.css';

const internationalBenefits = [
    {
        icon: Compass,
        title: 'AIU Equivalence Facilitation',
        desc: 'End-to-end liaison with the Association of Indian Universities in New Delhi for foreign board evaluations.',
    },
    {
        icon: Building2,
        title: 'Dedicated Residential Wing',
        desc: 'Air-conditioned on-campus international scholar hostels with multi-cuisine dining and 24/7 security.',
    },
    {
        icon: GraduationCap,
        title: 'Clinical Mentorship',
        desc: 'One-on-one faculty advisors ensuring smooth academic and clinical rotation onboarding.',
    },
];

const requirementsList = [
    'Valid Passport and Visa copies of the candidate and sponsoring NRI parent or guardian.',
    'Sponsorship Affidavit / Letter from the parent/guardian accompanied by verifiable proof of NRI status.',
    'High School (10+2) Marks Transcript with Physics, Chemistry, and Mathematics/Biology.',
    'Equivalence Certificate issued by the Association of Indian Universities (AIU), New Delhi.',
    'Proof of active NRI Bank Account (NRE / NRO bank statement or overseas bank certification).',
    'Transfer Certificate, Conduct Certification, and recent passport-size color photographs.',
];

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function NriPioStudentsPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className={styles.pageWrapper}>
            {/* 1. Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroImageWrap}>
                    <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
                        alt="International Scholars Onboarding"
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
                        <Globe2 size={13} />
                        <span>GLOBAL SCHOLARS ADMISSION WING</span>
                    </div>
                    <h1 className={styles.heroTitle}>NRI, PIO &amp; OCI Admissions</h1>
                    <p className={styles.heroSubtitle}>
                        Dedicated admissions guidance, statutory regulatory compliance, and holistic onboarding assistance for Non-Resident Indian and overseas pharmacy candidates.
                    </p>
                </motion.div>
            </section>

            <div className={styles.container}>
                {/* 2. Key Statistical Horizon Strip */}
                <section className={styles.statsHorizon}>
                    {[
                        { val: 'Category-B', lbl: 'Statutory NRI Quota', sub: 'Approved by PCI & Govt. AP' },
                        { val: 'AIU Verified', lbl: 'Curriculum Equivalence', sub: 'Seamless Foreign Credit Transfer' },
                        { val: '100% Mentored', lbl: 'Hostel & Security', sub: 'Full Residential Assurance' },
                        { val: 'Single Window', lbl: 'Admissions Desk', sub: 'Zero Multi-Agency Hassle' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.statCard}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className={styles.statVal}>{item.val}</span>
                            <span className={styles.statLbl}>{item.lbl}</span>
                            <span className={styles.statSub}>{item.sub}</span>
                        </motion.div>
                    ))}
                </section>

                {/* 3. Main Overview Split Showcase */}
                <section className={styles.overviewGrid}>
                    <motion.article
                        className={styles.overviewMainCard}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className={styles.tagLine}>
                            <span className={styles.tagBadge}>INSTITUTIONAL QUOTA &amp; ELIGIBILITY</span>
                        </div>

                        <h2 className={styles.cardHeading}>Global Pathway into Pharmaceutical Distinction</h2>

                        <p className={styles.cardParagraph}>
                            A sanctioned proportion of Category-B seats is allocated for Non-Resident Indians (NRIs), Persons of Indian Origin (PIOs), and Overseas Citizens of India (OCIs) under statutory directives issued by the Pharmacy Council of India and the Government of Andhra Pradesh.
                        </p>

                        <p className={styles.cardParagraph}>
                            Overseas scholars benefit from an individualized academic transition curriculum, dedicated liaison assistance for Association of Indian Universities (AIU) equivalence verification, and on-campus international mentor support throughout the entirety of their degree program.
                        </p>

                        <div className={styles.perksRow}>
                            {internationalBenefits.map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <div key={i} className={styles.perkCol}>
                                        <div className={styles.perkIcon}>
                                            <Icon size={18} />
                                        </div>
                                        <div className={styles.perkText}>
                                            <h3 className={styles.perkTitle}>{b.title}</h3>
                                            <p className={styles.perkDesc}>{b.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.article>

                    {/* Right Side Visual Media Frame */}
                    <motion.div
                        className={styles.mediaFrame}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                            alt="International Student Collaboration"
                            fill
                            sizes="(max-width: 860px) 100vw, 420px"
                            className={styles.sideImg}
                        />
                        <div className={styles.mediaOverlay}>
                            <div className={styles.overlayPill}>
                                <Plane size={13} />
                                <span>GLOBAL ADMISSIONS ENVOY</span>
                            </div>
                            <p className={styles.mediaQuote}>
                                &ldquo;Safe, inclusive residential campus environment with dedicated international coordinator support and personalized administrative care.&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* 4. Document Verification Requirements Box */}
                <motion.section
                    className={styles.requirementsCard}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.reqHeader}>
                        <div className={styles.reqIconCircle}>
                            <FileCheck2 size={24} />
                        </div>
                        <div>
                            <h3 className={styles.reqTitle}>Documentation &amp; Statutory Compliance Protocol</h3>
                            <p className={styles.reqSubtitle}>
                                Ensure authentic notarized transcripts and statutory foreign clearances are prepared prior to submitting final Category-B enrollment forms.
                            </p>
                        </div>
                    </div>

                    <div className={styles.reqGrid}>
                        {requirementsList.map((req, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.reqItem}
                                custom={idx}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <CheckCircle2 size={17} className={styles.checkIcon} />
                                <span>{req}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.deskContactRow}>
                        <div className={styles.deskTextWrap}>
                            <h4 className={styles.deskTitle}>Have questions regarding AIU equivalency or foreign grade conversions?</h4>
                            <p className={styles.deskSub}>Our International Desk assists parents and overseas applicants with personalized admissions paperwork.</p>
                        </div>
                        <Link href="/contact" className={styles.contactBtn}>
                            <Mail size={15} />
                            <span>Contact International Desk</span>
                        </Link>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}