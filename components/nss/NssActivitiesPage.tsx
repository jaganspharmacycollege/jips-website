'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    Activity,
    Heart,
    Droplet,
    Trees,
    Sparkles,
    Calendar,
    CheckCircle2,
    Users,
    ShieldCheck,
} from 'lucide-react';
import styles from './NssActivitiesPage.module.css';

const nssActivitiesList = [
    {
        title: 'Mega Voluntary Blood Donation Camp',
        date: 'Annual Event (September & March)',
        badge: 'Blood Donation',
        desc: 'Jointly conducted with the Indian Red Cross Society and SPSR Nellore District Government General Hospital. More than 200 student volunteers and faculty members donate life-saving units.',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80',
        stats: '250+ Units Collected',
        deliverables: [
            'Comprehensive donor health screening and hemoglobin testing',
            'Donor donor-card certification and recognition',
            'Immediate emergency blood allocation for thalassemia and trauma patients',
        ],
    },
    {
        title: 'Swachh Bharat Cleanliness & Sanitation Drive',
        date: 'Bi-Monthly Cleanliness Drive',
        badge: 'Civic Hygiene',
        desc: 'Intensive sanitation campaigns across the Jangalakandriga campus, local public health centers (PHC), and community streets in Muthukur mandal with waste segregation education.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
        stats: '5+ Public Zones Cleaned',
        deliverables: [
            'Single-use plastic eradication campaign in village markets',
            'Distribution of dry and wet waste garbage bins',
            'Drainage disinfection and anti-larval spray distribution',
        ],
    },
    {
        title: 'Haritha Vanam Eco-Plantation Campaign',
        date: 'Monsoon Green Drive',
        badge: 'Environmental Care',
        desc: 'Planting over 1,000 indigenous fruit-bearing and shade saplings across campus grounds, school premises, and panchayat roads to combat coastal deforestation and global warming.',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
        stats: '1,000+ Saplings Planted',
        deliverables: [
            'Tree adoption program by student NSS cohorts',
            'Organic compost fertilizing using herbal garden waste',
            'Awareness rallies on conserving coastal biodiversity',
        ],
    },
    {
        title: 'National Health Observance Awareness Rallies',
        date: 'Throughout the Academic Year',
        badge: 'Public Awareness',
        desc: 'Student rallies with placards and informational leaflets on World Health Day, World AIDS Day, National Pharmacist Day, and Anti-Tobacco Day educating rural youth.',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80',
        stats: '10,000+ Citizens Reached',
        deliverables: [
            'Street plays (Nukkad Natak) on alcohol and substance de-addiction',
            'Bilingual Telugu/English informational leaflet distribution',
            'School health and adolescent nutrition counseling workshops',
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

export default function NssActivitiesPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.pageRoot}>
            {/* 1. Header Banner */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <span className={styles.menuPath}>Menu path: NSS &amp; Extension &rsaquo; NSS Activities</span>
                    <h1 className={styles.pageTitle}>NSS Campus &amp; Regional Activities</h1>
                    <p className={styles.pageLead}>
                        Under the National Service Scheme (NSS Unit: JIPS), our volunteers embody the motto &quot;Not Me But You&quot; through regular blood donation drives, eco-plantation, and public health campaigns.
                    </p>
                </div>
            </section>

            {/* 2. Activities Detailed Feed */}
            <section className={styles.feedSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>CALENDAR OF ACTIVITIES</span>
                        <h2 className={styles.sectionHeading}>Annual Community Initiatives</h2>
                        <p className={styles.sectionSubtext}>
                            A comprehensive chronicle of scheduled NSS social drives conducted across SPSR Nellore District.
                        </p>
                    </motion.div>

                    <div className={styles.activitiesStack}>
                        {nssActivitiesList.map((item, idx) => (
                            <motion.article
                                key={item.title}
                                className={styles.activityCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.cardImgPane}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className={styles.cardPhoto}
                                    />
                                    <span className={styles.cardBadge}>{item.badge}</span>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.cardTopMeta}>
                                        <span className={styles.dateLabel}>
                                            <Calendar size={14} /> {item.date}
                                        </span>
                                        <span className={styles.statPill}>{item.stats}</span>
                                    </div>

                                    <h3 className={styles.activityTitle}>{item.title}</h3>
                                    <p className={styles.activityDesc}>{item.desc}</p>

                                    <div className={styles.deliverablesBox}>
                                        <h4 className={styles.deliverableHeading}>Key Outcomes &amp; Impact:</h4>
                                        <ul className={styles.deliverableList}>
                                            {item.deliverables.map((del, dIdx) => (
                                                <li key={dIdx}>
                                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
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