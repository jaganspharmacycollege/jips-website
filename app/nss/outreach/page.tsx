'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import {
    HeartHandshake,
    MapPin,
    Stethoscope,
    Pill,
    Users2,
    CheckCircle2,
    Sparkles,
    PhoneCall,
    Home,
} from 'lucide-react';
import styles from './page.module.css';

interface VillageDossier {
    id: string;
    name: string;
    mandal: string;
    population: string;
    distance: string;
    phcCenter: string;
    image: string;
    summary: string;
    clinicalServices: string[];
    fieldHighlights: string[];
}

const adoptedVillagesList: VillageDossier[] = [
    {
        id: 'jangalakandriga',
        name: 'Jangalakandriga Village Panchayat',
        mandal: 'Muthukur Mandal, SPSR Nellore District',
        population: '1,850+ Residents',
        distance: 'Host Academic Zone',
        phcCenter: 'Muthukur Community Health Center',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
        summary:
            'The foundational host village for JIPS community outreach. Volunteers maintain biometric health profiling, weekly elderly blood glucose and hypertension monitoring, and clean drinking water source chlorination audits.',
        clinicalServices: [
            'Free bi-weekly clinical consultation by visiting physician & clinical preceptor',
            'Child immunization tracking and infant nutritional growth chart audits',
            'Hypertension & diabetes door-to-door medication replenishment boxes',
            'Groundwater nitrate & bacterial contamination laboratory testing',
        ],
        fieldHighlights: [
            '100% household coverage in rural hygiene and sanitary awareness',
            'Zero expired medication incidence via voluntary drop-box campaigns',
            'Specialized eye refraction and subsidized spectacle distribution',
        ],
    },
    {
        id: 'brahmadevam',
        name: 'Brahmadevam Panchayat Cluster',
        mandal: 'Muthukur Mandal, SPSR Nellore District',
        population: '2,600+ Residents',
        distance: '4.8 km from Campus',
        phcCenter: 'Brahmadevam Primary Health Sub-Center',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        summary:
            'An agricultural and handloom community adopted for geriatric healthcare monitoring. Final year Pharm.D scholars conduct bedside home visits for bedridden senior citizens suffering from stroke and diabetic neuropathy.',
        clinicalServices: [
            'Polypharmacy prescription reviews reducing adverse drug interactions',
            'Free distribution of calcium, iron, and multivitamin therapeutic supplements',
            'Bedridden patient wound management and diabetic foot ulcer dressing care',
            'Seasonal viral and vector-borne epidemic early warning screenings',
        ],
        fieldHighlights: [
            'Over 420 elderly patients registered under regular monthly follow-ups',
            'Distribution of bariatric mobility aids, walking sticks, and wheelchairs',
            'Specialized Telugu patient counseling charts for non-literate seniors',
        ],
    },
    {
        id: 'muthukur-coastal',
        name: 'Muthukur Coastal Hamlet & Port Settlement',
        mandal: 'Muthukur Mandal, SPSR Nellore District',
        population: '3,200+ Residents',
        distance: '7.5 km from Campus',
        phcCenter: 'Govt. Coastal Primary Hospital',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
        summary:
            'Serving coastal fishing families exposed to high salinity, occupational dermatitis, and seasonal monsoonal infections. Programs prioritize pediatric respiratory wellness, maternal prenatal nutrition, and clean water access.',
        clinicalServices: [
            'Dermatological screening and distribution of protective barrier ointments',
            'Prenatal hemoglobin monitoring for pregnant mothers combating iron-deficiency anemia',
            'Emergency first-aid training for coastal fishermen venturing into deep waters',
            'Water purification tablet distribution during monsoon flood contingencies',
        ],
        fieldHighlights: [
            'Over 600 emergency waterproof first-aid kits distributed to boats',
            'Comprehensive child deworming and Vitamin A supplementation drives',
            'Workshops on safe storage of occupational chemicals and diesel fuels',
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

export default function CommunityOutreachPage() {
    const shouldReduceMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.pageRoot}>
            {/* 1. HERO SECTION */}
            <section ref={heroRef} className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroTextContent}
                        style={{
                            y: shouldReduceMotion ? 0 : heroTextY,
                            opacity: shouldReduceMotion ? 1 : heroOpacity,
                        }}
                    >
                        <div className={styles.breadcrumbBadge}>
                            <span>Menu path: NSS &amp; Extension &rsaquo; Community Outreach</span>
                        </div>

                        <h1 className={styles.pageTitle}>
                            Community Healthcare Outreach <br />
                            <span className={styles.goldText}>&amp; Village Adoption</span>
                        </h1>

                        <p className={styles.pageLead}>
                            Bringing institutional hospital pharmacy practice directly to underserved rural communities across Muthukur mandal. Our faculty and student clinicians deliver free medical consultations, essential therapeutics, and patient-centric healthcare advocacy.
                        </p>

                        <div className={styles.heroStatsRow}>
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>03</strong>
                                <span className={styles.statCaption}>Adopted Panchayats</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>7,500+</strong>
                                <span className={styles.statCaption}>Rural Citizens Covered</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>100% Free</strong>
                                <span className={styles.statCaption}>Diagnostic Screening</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ADOPTED VILLAGE DOSSIERS */}
            <section className={styles.showcaseSection}>
                <div className={styles.contentContainer}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrowTag}>PERMANENT FIELD ADOPTIONS</span>
                        <h2 className={styles.sectionHeading}>Adopted Rural Communities</h2>
                        <p className={styles.sectionSubtext}>
                            Continuous primary care programs, door-to-door senior citizen visits, and child health tracking.
                        </p>
                    </motion.div>

                    <div className={styles.villagesStack}>
                        {adoptedVillagesList.map((village, idx) => (
                            <motion.article
                                key={village.id}
                                className={styles.prominentVillageCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                {/* 16:9 Full Width Image Showcase */}
                                <div className={styles.heroPhotoStage}>
                                    <Image
                                        src={village.image}
                                        alt={village.name}
                                        fill
                                        unoptimized
                                        priority={idx === 0}
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        className={styles.panoramicPhoto}
                                    />
                                    <div className={styles.photoOverlayGradient} />

                                    <div className={styles.photoOverlayTags}>
                                        <span className={styles.mandalBadge}>
                                            <MapPin size={14} /> {village.mandal}
                                        </span>
                                        <span className={styles.populationBadge}>
                                            <Users2 size={14} /> {village.population}
                                        </span>
                                    </div>
                                </div>

                                {/* Village Content & Clinical Services */}
                                <div className={styles.cardContentBody}>
                                    <div className={styles.metaToolbar}>
                                        <span className={styles.distanceMeta}>
                                            <Home size={15} /> {village.distance}
                                        </span>
                                        <span className={styles.phcBadge}>
                                            <Stethoscope size={15} /> {village.phcCenter}
                                        </span>
                                    </div>

                                    <h3 className={styles.villageCardTitle}>{village.name}</h3>
                                    <p className={styles.villageCardSummary}>{village.summary}</p>

                                    <div className={styles.dualServicesGrid}>
                                        <div className={styles.servicesBox}>
                                            <h4 className={styles.boxSubHead}>Clinical Pharmacy Services:</h4>
                                            <ul className={styles.checkBulletsList}>
                                                {village.clinicalServices.map((srv, sIdx) => (
                                                    <li key={sIdx}>
                                                        <CheckCircle2 size={16} className={styles.checkIconGreen} />
                                                        <span>{srv}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.impactBox}>
                                            <h4 className={styles.boxSubHead}>Field Impact &amp; Milestones:</h4>
                                            <ul className={styles.checkBulletsList}>
                                                {village.fieldHighlights.map((hl, hIdx) => (
                                                    <li key={hIdx}>
                                                        <CheckCircle2 size={16} className={styles.checkIconGold} />
                                                        <span>{hl}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}