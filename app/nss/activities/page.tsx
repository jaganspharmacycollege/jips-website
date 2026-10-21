'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Calendar, CheckCircle2, Droplet, Users } from 'lucide-react';
import styles from './page.module.css';

interface ActivityItem {
    id: string;
    title: string;
    category: string;
    dateSchedule: string;
    venue: string;
    beneficiaries: string;
    unitsCollected?: string;
    leadPartner: string;
    image: string;
    overview: string;
    highlights: string[];
    protocolSteps: string[];
}

const detailedActivities: ActivityItem[] = [
    {
        id: 'blood-camp',
        title: 'Mega Voluntary Blood Donation & Hemoglobin Screening Camp',
        category: 'Life-Saving Healthcare',
        dateSchedule: 'Semi-Annual Drive (September & National Youth Day)',
        venue: 'JIPS Central Auditorium & District Blood Bank Mobile Unit',
        beneficiaries: '350+ Patients Supported',
        unitsCollected: '240 Units Donated',
        leadPartner: 'Indian Red Cross Society & SPSR Nellore Govt. General Hospital',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
        overview:
            'A vital campus-wide voluntary blood donation drive organized by the JIPS NSS Unit. Student volunteers, research faculty, and non-teaching staff participate to support emergency trauma wards, pediatric thalassemia cases, and oncology surgeries across government hospitals.',
        highlights: [
            'Comprehensive pre-donation vitals check: blood pressure, pulse, weight, and copper sulphate copper-specific gravity screening',
            'Certified donor identity cards and formal commendation certificates issued by District Medical Authorities',
            'Nutritional post-donation replenishment corner with emergency clinical physician oversight',
            'Cold-chain transport of donor bags via temperature-monitored refrigerated mobile vans',
        ],
        protocolSteps: [
            'Donor Registration & Medical History Questionnaire',
            'Hemoglobin Rapid Strip & Blood Group Spot Testing',
            'Aseptic Phlebotomy Extraction (350 mL / 450 mL Units)',
            'Post-Donation Rest Observation & Refreshment Protocol',
        ],
    },
    {
        id: 'swachh-bharat',
        title: 'Swachh Bharat Cleanliness & Village Disinfection Campaign',
        category: 'Civic Hygiene & Sanitation',
        dateSchedule: 'Monthly Community Action (First Saturday)',
        venue: 'Jangalakandriga Panchayat Streets & Local PHC Corridors',
        beneficiaries: '1,800+ Village Inhabitants',
        leadPartner: 'Muthukur Mandal Panchayat & JIPS Eco Club',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
        overview:
            'A systematic civic sanitation campaign targeting stagnant drains, public school yards, and primary healthcare centers. Volunteers eradicate single-use plastics, apply non-hazardous bleaching disinfectants, and install color-coded waste segregation receptacles.',
        highlights: [
            'Door-to-door distribution of biodegradable wet and dry waste household disposal bins',
            'Anti-larval spray distribution and biological mosquito breeding source elimination along coastal roads',
            'Public awareness street-plays (Nukkad Natak) explaining dengue, malaria, and typhoid transmission',
            'Cleaning and bleaching disinfection of public bus shelters and rural Anganwadi preschool centers',
        ],
        protocolSteps: [
            'Zonal Area Mapping & Protective PPE Gear Allocation',
            'Roadside Debris Clearing & Plastic Segregation',
            'Drainage Clearing & Hydrated Lime (Bleaching) Disinfection',
            'Handover of Recyclable Solid Waste to Municipal Collectors',
        ],
    },
    {
        id: 'green-plantation',
        title: 'Haritha Vanam Eco-Afforestation & Medicinal Sapling Drive',
        category: 'Environmental Conservation',
        dateSchedule: 'Monsoon Green Drive (July - August)',
        venue: 'Campus Green Belts, School Yards & Muthukur Canal Roads',
        beneficiaries: 'Regional Eco-System & Groundwater Table',
        leadPartner: 'AP State Forest Department & Botanical Society',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
        overview:
            'Combating coastal wind soil erosion and climate warming through the systematic plantation of indigenous botanical varieties. Each student NSS cohort adopts and irrigates a dedicated green belt comprising neem, amla, tulsi, and coastal shade-bearing trees.',
        highlights: [
            'Over 1,200 saplings planted across rural roadside corridors and primary education premises',
            'Organic drip-root irrigation techniques instructed to local farmers and panchayat workers',
            'Geo-tagging and student cohort adoption cards ensuring plant survival rates exceed 90%',
            'Herbal species enrichment enhancing natural biodiversity adjacent to college campus grounds',
        ],
        protocolSteps: [
            'Soil pH & Moisture Suitability Assessment',
            'Excavation of Pits & Vermicompost Nutrient Enriched Fill',
            'Sapling Transplantation & Tree-Guard Installation',
            'Cohort Log Assignment for Weekly Watering & Organic Weeding',
        ],
    },
    {
        id: 'health-rallies',
        title: 'National Public Health Observance & Drug Safety Rallies',
        category: 'Public Health Literacy',
        dateSchedule: 'Annual Observance (World Health Day, AIDS Day, Pharmacy Week)',
        venue: 'Muthukur Mandal Center & Regional Arterial Junctions',
        beneficiaries: '5,000+ Rural Citizens & Commuters',
        leadPartner: 'AP State AIDS Control Society & Indian Pharmaceutical Association',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
        overview:
            'High-impact community rallies featuring placards, megaphone announcements, and bilingual educational pamphlets. Focused on combating irrational antibiotic self-medication, emphasizing vaccine uptake, and guiding safe disposal of expired medicines.',
        highlights: [
            'Bilingual Telugu/English educational literature distributed directly to auto-rickshaw drivers and daily commuters',
            'Public health interactive sessions addressing diabetes, chronic hypertension, and maternal iron-deficiency anemia',
            'Student skits highlighting the grave hazards of consuming counterfeit medicines from unlicensed quacks',
            'Counseling counters established outside primary health sub-centers for one-on-one patient inquiries',
        ],
        protocolSteps: [
            'Pamphlet Translation & Visual Placard Assembly',
            'Procession March with Traffic Police Escorts & Route Approval',
            'Interactive Corner Speeches at Bustling Village Junctions',
            'Distribution of First-Aid Guides & Emergency Helpline Directories',
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
                            <span>Menu path: NSS &amp; Extension &rsaquo; NSS Activities</span>
                        </div>

                        <h1 className={styles.pageTitle}>
                            NSS Social &amp; Healthcare <br />
                            <span className={styles.goldText}>Campus Activities</span>
                        </h1>

                        <p className={styles.pageLead}>
                            Rooted in the foundational motto &quot;Not Me But You&quot;, our student volunteer brigade conducts extensive blood donation drives, eco-afforestation campaigns, sanitation drives, and public drug safety literacy programs across SPSR Nellore District.
                        </p>

                        <div className={styles.heroStatsRow}>
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>500+</strong>
                                <span className={styles.statCaption}>Registered Volunteers</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>1,000+</strong>
                                <span className={styles.statCaption}>Blood Units Collected</span>
                            </div>
                            <div className={styles.statSep} />
                            <div className={styles.statBox}>
                                <strong className={styles.statNumber}>10+ Years</strong>
                                <span className={styles.statCaption}>NSS Unit Legacy</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. PROMINENT FULL-WIDTH ACTIVITY DOSSIERS */}
            <section className={styles.showcaseSection}>
                <div className={styles.contentContainer}>
                    <motion.div
                        className={styles.sectionHeaderCenter}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrowTag}>ANNUAL INITIATIVES FEED</span>
                        <h2 className={styles.sectionHeading}>Official NSS Extension Records</h2>
                        <p className={styles.sectionSubtext}>
                            Detailed visual reports and operational metrics documenting our regular humanitarian community service.
                        </p>
                    </motion.div>

                    <div className={styles.activitiesStack}>
                        {detailedActivities.map((act, idx) => (
                            <motion.article
                                key={act.id}
                                className={styles.prominentCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                {/* 16:9 Full Width Image Showcase */}
                                <div className={styles.heroPhotoStage}>
                                    <Image
                                        src={act.image}
                                        alt={act.title}
                                        fill
                                        unoptimized
                                        priority={idx === 0}
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        className={styles.panoramicPhoto}
                                    />
                                    <div className={styles.photoOverlayGradient} />

                                    <div className={styles.photoOverlayTags}>
                                        <span className={styles.categoryPill}>{act.category}</span>
                                        {act.unitsCollected && (
                                            <span className={styles.unitsPill}>
                                                <Droplet size={14} /> {act.unitsCollected}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Narrative & Operational Body */}
                                <div className={styles.cardContentBody}>
                                    <div className={styles.metaToolbar}>
                                        <span className={styles.dateMeta}>
                                            <Calendar size={15} /> {act.dateSchedule}
                                        </span>
                                        <span className={styles.beneficiariesBadge}>
                                            <Users size={15} /> {act.beneficiaries}
                                        </span>
                                    </div>

                                    <h3 className={styles.cardActivityTitle}>{act.title}</h3>
                                    <p className={styles.cardActivityOverview}>{act.overview}</p>

                                    <div className={styles.logisticsBar}>
                                        <div>
                                            <span className={styles.logisticsLabel}>VENUE &amp; REACH:</span>
                                            <strong className={styles.logisticsVal}>{act.venue}</strong>
                                        </div>
                                        <div>
                                            <span className={styles.logisticsLabel}>COLLABORATING PARTNER:</span>
                                            <strong className={styles.logisticsVal}>{act.leadPartner}</strong>
                                        </div>
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className={styles.dualDetailsGrid}>
                                        <div className={styles.detailsBox}>
                                            <h4 className={styles.boxSubHead}>Key Activities &amp; Outcomes:</h4>
                                            <ul className={styles.checkBulletsList}>
                                                {act.highlights.map((item, hIdx) => (
                                                    <li key={hIdx}>
                                                        <CheckCircle2 size={16} className={styles.checkIconGreen} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.protocolBox}>
                                            <h4 className={styles.boxSubHead}>Operating Procedure:</h4>
                                            <ol className={styles.numberedProtocolList}>
                                                {act.protocolSteps.map((step, sIdx) => (
                                                    <li key={sIdx}>
                                                        <span className={styles.stepNum}>0{sIdx + 1}</span>
                                                        <span className={styles.stepText}>{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
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