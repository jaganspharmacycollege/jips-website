'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import {
    HeartHandshake,
    Users2,
    Sparkles,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Activity,
    Trees,
} from 'lucide-react';
import styles from './NssOverview.module.css';

const extensionHighlights = [
    {
        title: 'Voluntary Blood Donation Drives',
        desc: 'Annual blood donation camps organized in partnership with the Red Cross and government hospitals, collecting 250+ units each year.',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80',
        tag: 'Life Saving',
    },
    {
        title: 'Free Rural Health & Medicine Camps',
        desc: 'Comprehensive diagnostic screenings, blood pressure checks, and free essential medicine distribution in adopted Nellore villages.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
        tag: 'Clinical Outreach',
    },
    {
        title: 'Swachh Bharat & Green Haritha Drives',
        desc: 'Campus eco-drives, sapling plantations, waste segregation awareness, and plastic-free village campaigns across Muthukur mandal.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
        tag: 'Environment',
    },
    {
        title: 'Pharmacovigilance & Drug Literacy',
        desc: 'Empowering local communities with workshops on antibiotic resistance, safe medication storage, and recognizing counterfeit pharmaceuticals.',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
        tag: 'Public Education',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function NssOverview() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.overviewRoot}>
            {/* 1. Hero Section */}
            <section ref={containerRef} className={styles.heroSection}>
                <motion.div
                    className={styles.bgWrapper}
                    style={{ y: shouldReduceMotion ? 0 : bgY }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80"
                        alt="NSS Community Service and Outreach"
                        fill
                        unoptimized
                        priority
                        sizes="100vw"
                        className={styles.bgImage}
                    />
                    <div className={styles.heroOverlay} />
                </motion.div>

                <div className={styles.contentWrap}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : textY,
                            opacity: shouldReduceMotion ? 1 : opacity,
                        }}
                    >
                        <div className={styles.kickerBadge}>
                            <Sparkles size={14} className={styles.sparkleIcon} />
                            <span>COMMUNITY SERVICE &bull; NOT ME BUT YOU</span>
                        </div>

                        <h1 className={styles.heading}>
                            National Service Scheme <br />
                            <span className={styles.goldText}>&amp; Extension Activities</span>
                        </h1>

                        <p className={styles.lead}>
                            Instilling civic responsibility, compassionate patient empathy, and public healthcare literacy among pharmacy scholars. Serving the rural communities of SPSR Nellore District through health camps, blood donation drives, and village development programs.
                        </p>

                        <div className={styles.btnRow}>
                            <Link href="/nss/activities" className={styles.primaryBtn}>
                                <Activity size={16} />
                                <span>NSS Activities</span>
                            </Link>
                            <Link href="/nss/outreach" className={styles.secondaryBtn}>
                                <HeartHandshake size={16} />
                                <span>Community Outreach</span>
                            </Link>
                        </div>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>500+</strong>
                                <span className={styles.statLabel}>Active Student Volunteers</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>25+</strong>
                                <span className={styles.statLabel}>Annual Medical Camps</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>05</strong>
                                <span className={styles.statLabel}>Adopted Rural Villages</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Gateways Section */}
            <section className={styles.gatewaySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>EXTENSION WINGS</span>
                        <h2 className={styles.sectionTitle}>Two Pillars of Social Commitment</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore our structured institutional service units dedicated to public healthcare upliftment.
                        </p>
                    </motion.div>

                    <div className={styles.gatewayGrid}>
                        {/* Gateway 1: NSS Activities */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.1}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder}>
                                <Image
                                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80"
                                    alt="NSS Activities & Blood Camps"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Camps &bull; Drives &bull; Rallies</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>NSS Activities</h3>
                                <p className={styles.cardDesc}>
                                    Voluntary blood donation camps, environmental tree plantation, Swachh Bharat clean-up initiatives, and national health observance awareness rallies.
                                </p>
                                <Link href="/nss/activities" className={styles.cardLink}>
                                    <span>Explore NSS Activities</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Gateway 2: Community Outreach */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.25}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder}>
                                <Image
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                                    alt="Community Outreach and Village Adoption"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Adoption &bull; Clinical Aid</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Community Outreach</h3>
                                <p className={styles.cardDesc}>
                                    Rural village adoption in Muthukur mandal, free medical screening camps, safe medication counseling, and elderly healthcare support initiatives.
                                </p>
                                <Link href="/nss/outreach" className={styles.cardLink}>
                                    <span>Explore Community Outreach</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Extension Highlights */}
            <section className={styles.thrustSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>IMPACT DOMAINS</span>
                        <h2 className={styles.sectionTitle}>Key Social Outreach Initiatives</h2>
                        <p className={styles.sectionSubtitle}>
                            Transforming pharmaceutical learning into compassionate service for underserved populations.
                        </p>
                    </motion.div>

                    <div className={styles.thrustGrid}>
                        {extensionHighlights.map((domain, idx) => (
                            <motion.div
                                key={domain.title}
                                className={styles.thrustCard}
                                custom={idx * 0.12}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.thrustImgHolder}>
                                    <Image
                                        src={domain.image}
                                        alt={domain.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 320px"
                                        className={styles.thrustImg}
                                    />
                                    <span className={styles.thrustTag}>{domain.tag}</span>
                                </div>
                                <div className={styles.thrustBody}>
                                    <h3 className={styles.thrustTitle}>{domain.title}</h3>
                                    <p className={styles.thrustDesc}>{domain.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}