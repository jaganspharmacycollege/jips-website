'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Database, CheckCircle2 } from 'lucide-react';
import styles from './EResourcesConsole.module.css';

const eResourceImages = [
    {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Digital e-Library Terminals and Database Search',
    },
    {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
        alt: 'DELNET & ScienceDirect e-Journal Access Stations',
    },
    {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        alt: 'Scholars Accessing Online Drug Databases',
    },
];

const eResourcePoints = [
    'DELNET Institutional Membership providing access to 3 crore+ cataloged records and inter-library loan networks',
    'National Digital Library of India (NDLI) digital portal access with remote scholar login support',
    'Subscribed full-text pharmacy e-journals, ScienceDirect collections, and Bentham Science e-resources',
    'Digital language laboratory and multimedia listening stations for pharmaceutical communication courses',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, ease: 'easeOut' },
    },
};

export default function EResourcesConsole() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % eResourceImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="e-resources" aria-label="E-Resources">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Images on Left (Reversed Pattern) */}
                    <motion.div
                        className={styles.imgSide}
                        style={{ y: shouldReduceMotion ? 0 : parallaxShift }}
                    >
                        <div className={styles.imgFrame}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    className={styles.slideMotion}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                >
                                    <Image
                                        src={eResourceImages[currentSlide].url}
                                        alt={eResourceImages[currentSlide].alt}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 540px"
                                        className={styles.slideImg}
                                        priority={currentSlide === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className={styles.overlayPill}>
                                <Database size={15} />
                                <span>DELNET &bull; NDLI &bull; ScienceDirect &bull; E-Journals</span>
                            </div>

                            <div className={styles.sliderDots}>
                                {eResourceImages.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`${styles.dot} ${i === currentSlide ? styles.activeDot : ''}`}
                                        onClick={() => setCurrentSlide(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Text on Right */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>DIGITAL ACCESS &amp; TELEMETRY</span>
                        <h2 className={styles.title}>E-Journals &amp; Digital Knowledge Consortia</h2>
                        <p className={styles.lead}>
                            High-speed internet-connected terminals enabling researchers to query national libraries, download peer-reviewed clinical studies, and search indexed pharmacopeial databases.
                        </p>

                        <div className={styles.pointsStack}>
                            {eResourcePoints.map((pt, idx) => (
                                <div key={idx} className={styles.pointRow}>
                                    <CheckCircle2 size={18} className={styles.checkIcon} />
                                    <span>{pt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}