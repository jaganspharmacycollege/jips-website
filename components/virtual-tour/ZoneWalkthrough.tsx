'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Building2,
    FlaskConical,
    BookOpen,
    Sprout,
    Bus,
    CheckCircle2,
    ChevronRight,
} from 'lucide-react';
import styles from './ZoneWalkthrough.module.css';

const campusZones = [
    {
        id: 'block-academic',
        title: 'Academic Amphitheaters & Lecture Complex',
        category: 'Classroom Infrastructure',
        icon: Building2,
        lead: 'Spacious, acoustically calibrated amphitheaters and smart digital lecture halls equipped with audio-visual projection aids, stepped seating, and high-speed Wi-Fi.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
        features: [
            'Interactive smart touch displays for diagrammatic pharmaceutical mechanics',
            'Step-tiered seating accommodating up to 120 scholars per amphitheater',
            'Dedicated power sockets and climate-controlled ambient airflow',
        ],
    },
    {
        id: 'block-laboratories',
        title: 'Departmental Research & Pilot Compounding Suites',
        category: 'Laboratory Infrastructure',
        icon: FlaskConical,
        lead: '14 specialized laboratories for pharmaceutics, medicinal chemistry, pharmacology, and HPLC analysis adhering strictly to PCI, AICTE, and cGMP standards.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        features: [
            'Waters HPLC quaternary gradient chromatography workstation',
            'Pilot formulation plant with rotary 16-station tablet compression',
            'Laminar fume hoods, dissolution test stations, and FTIR sampling benches',
        ],
    },
    {
        id: 'block-library',
        title: 'Central Digital Library & E-Consortia Terminals',
        category: 'Knowledge Repository',
        icon: BookOpen,
        lead: 'Holding over 15,000 print volumes, rare pharmacopoeial sets (IP, BP, USP), international journals, DELNET e-consortia, and quiet study galleries.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
        features: [
            'Automated barcode catalog checkout and Web-OPAC inquiry kiosks',
            'Full-text access to ScienceDirect, Bentham Science, and NDLI portals',
            '100+ seating capacity reading hall open extended hours during exams',
        ],
    },
    {
        id: 'block-garden',
        title: 'Living Botanical Medicinal Plant Garden',
        category: 'Botanical Herbarium',
        icon: Sprout,
        lead: 'A thriving green sanctuary nurturing over 100 authenticated medicinal species utilized for botanical taxonomy and natural product extraction experiments.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
        features: [
            'Botanical labels indicating medicinal family, active components, and uses',
            'Dedicated nursery beds for endangered Ayurvedic and indigenous herbs',
            'Automated organic drip-irrigation network providing year-round vitality',
        ],
    },
    {
        id: 'block-amenities',
        title: 'Campus Transit Fleet & Nutritional Canteen',
        category: 'Student Amenities',
        icon: Bus,
        lead: 'Dedicated college buses operating across Nellore arterial corridors, paired with a hygienic food court serving freshly prepared vegetarian meals.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
        features: [
            'GPS-tracked buses covering city and rural mandal residential zones',
            'FSSAI-compliant dining court with purified RO drinking water stations',
            'Safe, punctual daily transit with speed governors and escort staff',
        ],
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function ZoneWalkthrough() {
    const shouldReduceMotion = useReducedMotion();
    const [activeZoneId, setActiveZoneId] = useState('block-academic');

    const activeZone = campusZones.find((z) => z.id === activeZoneId) ?? campusZones[0];

    return (
        <section className={styles.sectionWrap} id="walkthrough" aria-label="Zone-by-Zone Walkthrough">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CAMPUS DESTINATIONS</span>
                    <h2 className={styles.sectionTitle}>Guided Sector Walkthrough</h2>
                    <p className={styles.sectionSubtext}>
                        Select a specialized zone below to inspect its architecture, equipment suites, and learning amenities.
                    </p>
                </motion.div>

                {/* Zone Selector Tabs */}
                <div className={styles.tabsRow}>
                    {campusZones.map((zone) => {
                        const Icon = zone.icon;
                        const isActive = zone.id === activeZoneId;
                        return (
                            <button
                                key={zone.id}
                                type="button"
                                className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ''}`}
                                onClick={() => setActiveZoneId(zone.id)}
                            >
                                <Icon size={16} />
                                <span>{zone.category}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected Zone Showcase Card */}
                <motion.div
                    key={activeZone.id}
                    className={styles.showcaseCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.cardTextSide}>
                        <span className={styles.zoneCategory}>{activeZone.category}</span>
                        <h3 className={styles.zoneTitle}>{activeZone.title}</h3>
                        <p className={styles.zoneLead}>{activeZone.lead}</p>

                        <div className={styles.featuresList}>
                            <h4 className={styles.featuresHead}>Sector Specifications:</h4>
                            {activeZone.features.map((feat, i) => (
                                <div key={i} className={styles.featRow}>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.cardImgSide}>
                        <div className={styles.imgFrame}>
                            <Image
                                src={activeZone.image}
                                alt={activeZone.title}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, 560px"
                                className={styles.zonePhoto}
                            />
                            <span className={styles.zoneImgBadge}>{activeZone.title}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}