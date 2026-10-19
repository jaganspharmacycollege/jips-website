'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Bell, ChevronRight, GraduationCap } from 'lucide-react';
import styles from './HeroSlider.module.css';

const notifications = [
    {
        id: 1,
        text: 'Admissions Open for Academic Year 2026-27: B.Pharm, M.Pharm & Pharm.D programs.',
        href: '/notifications',
    },
    {
        id: 2,
        text: 'AP EAPCET & PGECET State Web Counseling Code: JAGP.',
        href: '/notifications',
    },
    {
        id: 3,
        text: 'JNTUA End Semester Practical Examinations scheduled from 16th November 2026.',
        href: '/notifications',
    },
    {
        id: 4,
        text: 'Full Government Tuition Fee Reimbursement eligible under AP State JVD Scheme.',
        href: '/notifications',
    },
    {
        id: 5,
        text: 'Campus recruitment drives by top pharmaceutical MNCs commencing this month.',
        href: '/notifications',
    },
];

// Slow, cinematic entrance from the left
const slideFromLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -85,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.45,
            ease: 'easeOut',
        },
    },
};

export default function HeroBanner() {
    const [hasError, setHasError] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Vertical Parallax scroll shifts
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const fadeOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
    const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    return (
        <section ref={heroRef} className={styles.heroWrapper} aria-label="Campus Hero Video">
            {/* 1. Scrolling Notification Ticker (Top of Video) */}
            <div className={styles.tickerOverlay} aria-label="Institutional Announcements">
                <Link href="/notifications" className={styles.tickerBadge} title="View all notifications">
                    <Bell size={13} className={styles.bellIcon} />
                    <span>NOTICES</span>
                </Link>

                <div className={styles.tickerTrackWrapper}>
                    <div className={styles.tickerTrack}>
                        {[...notifications, ...notifications].map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className={styles.tickerItem}
                                title="Click to view full notification details"
                            >
                                <span className={styles.bulletDot}>★</span>
                                <span className={styles.itemText}>{item.text}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Headline & Content Overlay with Slide from Left + Parallax Drift */}
            <div className={styles.contentOverlay}>
                <motion.div
                    className={styles.parallaxMover}
                    style={{
                        y: shouldReduceMotion ? 0 : parallaxY,
                        opacity: shouldReduceMotion ? 1 : fadeOpacity,
                    }}
                >
                    <motion.div
                        className={styles.textContainer}
                        variants={slideFromLeftVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.leadBadge}>
                            <GraduationCap size={15} className={styles.badgeIcon} />
                            <span>ESTD 2005 &bull; 20+ YEARS OF EXCELLENCE</span>
                        </div>

                        <h1 className={styles.mainHeading}>
                            Nurturing the next generation <br />
                            of <span className={styles.highlightGold}>pharmaceutical scientists</span>
                        </h1>

                        <p className={styles.introText}>
                            For two decades, Jagan&apos;s Institute of Pharmaceutical Sciences has trained pharmacists for hospitals, industry, research and community practice.
                        </p>

                        <div className={styles.heroBtnRow}>
                            <Link href="/admissions/admission-process" className={styles.primaryCta}>
                                <span>Admissions 2026</span>
                                <ChevronRight size={16} />
                            </Link>
                            <Link href="/courses/b-pharm" className={styles.secondaryCta}>
                                <span>Explore Programs</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. Hero Video Container */}
            <motion.div
                className={styles.videoContainer}
                style={{
                    y: shouldReduceMotion ? 0 : videoY,
                }}
            >
                {!hasError ? (
                    <video
                        className={styles.heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onError={() => setHasError(true)}
                    >
                        <source src="/jips.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                        alt="Jagan's Institute of Pharmaceutical Sciences Campus"
                        className={styles.heroFallbackImg}
                        loading="eager"
                    />
                )}
                <div className={styles.videoVignette} />
            </motion.div>
        </section>
    );
}