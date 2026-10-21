'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { MapPin, Stethoscope } from 'lucide-react';
import styles from './CommunityOutreachPage.module.css';

const villageAdoptions = [
    {
        name: 'Jangalakandriga Village',
        mandal: 'Muthukur Mandal',
        distance: 'Host Community',
        residents: '1,800+ Residents',
        focus: 'Primary healthcare screenings, clean drinking water sanitation audits, and continuous child nutrition monitoring.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Brahmadevam Panchayat',
        mandal: 'Muthukur Mandal',
        distance: '4.5 km from Campus',
        residents: '2,400+ Residents',
        focus: 'Geriatric medicine delivery, diabetes & hypertension detection camps, and home medication compliance reviews.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Muthukur Coastal Hamlet',
        mandal: 'Muthukur Mandal',
        distance: '7.2 km from Campus',
        residents: '3,100+ Residents',
        focus: 'Seasonal infectious disease prevention, skin hygiene awareness, and distribution of subsidized first-aid kits.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    },
];

const clinicalInitiatives = [
    {
        title: 'Free Essential Medication Dispensing',
        desc: 'Under the guidance of registered faculty pharmacists, free antibiotics, NSAIDs, multivitamins, and antacids are provided to needy families.',
    },
    {
        title: 'Geriatric & Elderly Care Outreach',
        desc: 'Pharm.D and M.Pharm students conduct door-to-door home visits to counsel elderly patients on polypharmacy and insulin administration.',
    },
    {
        title: 'Women & Child Maternal Health Sessions',
        desc: 'Workshops for rural mothers focusing on iron deficiency anemia, prenatal nutritional supplements, and infant vaccination schedules.',
    },
    {
        title: 'Safe Medication Disposal Awareness',
        desc: 'Educating farmers and rural households against discarding expired antibiotics and chemical pesticides into local groundwater streams.',
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

export default function CommunityOutreachPage() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLElement>(null);

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <span className={styles.menuPath}>Menu path: NSS &amp; Extension &rsaquo; Community Outreach</span>
                    <h1 className={styles.pageTitle}>Community Healthcare Outreach</h1>
                    <p className={styles.pageLead}>
                        Extending university pharmaceutical expertise directly into the rural hearts of SPSR Nellore District through village adoption, free medical camps, and patient counseling.
                    </p>
                </div>
            </section>

            {/* 2. Village Adoption Showcase */}
            <section ref={containerRef} className={styles.villagesSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RURAL ADOPTION PROGRAM</span>
                        <h2 className={styles.sectionHeading}>Adopted Villages in Muthukur Mandal</h2>
                        <p className={styles.sectionSubtext}>
                            JIPS volunteers maintain permanent community adoption partnerships with rural panchayats for continuous healthcare monitoring.
                        </p>
                    </motion.div>

                    <div className={styles.villagesGrid}>
                        {villageAdoptions.map((village, idx) => (
                            <motion.div
                                key={village.name}
                                className={styles.villageCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.villageImgPane}>
                                    <Image
                                        src={village.image}
                                        alt={village.name}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 380px"
                                        className={styles.villagePhoto}
                                    />
                                    <span className={styles.villageBadge}>
                                        <MapPin size={12} /> {village.mandal}
                                    </span>
                                </div>

                                <div className={styles.villageBody}>
                                    <div className={styles.metaRow}>
                                        <span className={styles.distanceText}>{village.distance}</span>
                                        <span className={styles.residentPill}>{village.residents}</span>
                                    </div>

                                    <h3 className={styles.villageName}>{village.name}</h3>
                                    <p className={styles.villageFocus}>{village.focus}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Clinical Outreach Initiatives */}
            <section className={styles.initiativesSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>EXTENSION SERVICES</span>
                        <h2 className={styles.sectionHeading}>Public Health Welfare Initiatives</h2>
                        <p className={styles.sectionSubtext}>
                            Bridging clinical hospital bedside practice with grassroots community welfare.
                        </p>
                    </motion.div>

                    <div className={styles.initiativesGrid}>
                        {clinicalInitiatives.map((init, idx) => (
                            <motion.div
                                key={init.title}
                                className={styles.initCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.initIconBox}>
                                    <Stethoscope size={22} />
                                </div>
                                <h3 className={styles.initTitle}>{init.title}</h3>
                                <p className={styles.initDesc}>{init.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}