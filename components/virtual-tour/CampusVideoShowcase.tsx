'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Play, Building2, FlaskConical, BookOpen, Sprout } from 'lucide-react';
import styles from './CampusVideoShowcase.module.css';

const campusFeatures = [
    {
        icon: FlaskConical,
        title: 'Research & Analytical Suites',
        count: '14+ Laboratories',
        desc: 'High-Performance Liquid Chromatography (HPLC), double-beam UV-Vis spectrophotometers, and pilot compounding equipment.',
    },
    {
        icon: Building2,
        title: 'Smart Audio-Visual Classrooms',
        count: 'Step-Tiered Seating',
        desc: 'Modern amphitheaters equipped with laser projection, acoustic calibration, and interactive digital displays.',
    },
    {
        icon: BookOpen,
        title: 'Central Knowledge Repository',
        count: '15,000+ Volumes',
        desc: 'Extensive physical stacks, official pharmacopoeias (IP/BP/USP), and DELNET/ScienceDirect e-consortia access.',
    },
    {
        icon: Sprout,
        title: 'Living Botanical Herbarium',
        count: '100+ Plant Species',
        desc: 'Thriving botanical garden supporting pharmacognosy extraction, crude drug testing, and natural product research.',
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

export default function CampusVideoShowcase() {
    const shouldReduceMotion = useReducedMotion();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className={styles.sectionRoot} aria-label="Campus Video Experience">
            <div className={styles.container}>
                {/* Section Heading */}
                <motion.div
                    className={styles.headerBlock}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CAMPUS MEDIA EXPERIENCE</span>
                    <h2 className={styles.mainTitle}>Experience JIPS in Motion</h2>
                    <p className={styles.subTitle}>
                        Take a cinematic walkthrough across our research corridors, pilot manufacturing suites, and student learning environments.
                    </p>
                </motion.div>

                {/* Video Player Card */}
                <motion.div
                    className={styles.playerCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.videoStage}>
                        {!isPlaying ? (
                            <div className={styles.posterContainer}>
                                <Image
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
                                    alt="JIPS Campus Virtual Experience"
                                    fill
                                    unoptimized
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 1200px"
                                    className={styles.posterImg}
                                />
                                <div className={styles.posterDarkOverlay} />

                                {/* High-Contrast Play Button Overlay */}
                                <div className={styles.playCenter}>
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(true)}
                                        className={styles.playBtn}
                                        aria-label="Play Campus Video"
                                    >
                                        <Play size={30} fill="#facc15" stroke="#facc15" className={styles.playIcon} />
                                        <span className={styles.playRipple} />
                                    </button>
                                    <h3 className={styles.playTitle}>Watch Campus Walkthrough</h3>
                                    <span className={styles.playDuration}>Full HD &bull; Research &amp; Academic Tour</span>
                                </div>
                            </div>
                        ) : (
                            <video
                                className={styles.activeVideo}
                                controls
                                autoPlay
                                playsInline
                                preload="auto"
                            >
                                <source src="/jips.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </motion.div>

                {/* 4 Feature Highlights Beneath Video */}
                <div className={styles.featuresGrid}>
                    {campusFeatures.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={feat.title}
                                className={styles.featCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.iconCircle}>
                                    <Icon size={22} />
                                </div>
                                <span className={styles.featCount}>{feat.count}</span>
                                <h3 className={styles.featTitle}>{feat.title}</h3>
                                <p className={styles.featDesc}>{feat.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}