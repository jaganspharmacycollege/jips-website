'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Binary, CheckCircle2 } from 'lucide-react';
import styles from './ComputerLabInfra.module.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop',
        alt: 'High Performance Computing and CADD Lab',
    },
    {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
        alt: 'Computational Molecular Docking Simulations',
    },
    {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop',
        alt: 'PCI Python Programming Classroom',
    },
];

const points = [
    {
        title: 'CADD Molecular Docking',
        desc: 'Ligand-receptor modeling, QSAR regressions, and ADMET pharmacokinetics simulators[cite: 81].',
    },
    {
        title: 'PCI Python Programming',
        desc: 'Dedicated development environments for Python computational drug screening and statistical biostatistics[cite: 81].',
    },
    {
        title: 'High-Speed Gigabit LAN',
        desc: 'Fiber-optic internet backbone providing seamless access to digital libraries and research portals[cite: 81].',
    },
    {
        title: 'Centralized Power Backup',
        desc: 'Industrial online UPS safeguards uninterrupted computational runs and dataset processing[cite: 81].',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, ease: 'easeOut' },
    },
};

export default function ComputerLabInfra() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="computer-lab" aria-label="Computer Lab">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Images on Left (Reversed)[cite: 81] */}
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
                                        src={images[currentSlide].url}
                                        alt={images[currentSlide].alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 540px"
                                        className={styles.slideImg}
                                        priority={currentSlide === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className={styles.overlayPill}>
                                <Binary size={15} />
                                <span>CADD &bull; Bio-Informatics &bull; Python[cite: 81]</span>
                            </div>

                            <div className={styles.sliderDots}>
                                {images.map((_, i) => (
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

                    {/* Text on Right[cite: 81] */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>COMPUTATIONAL SUITE[cite: 81]</span>
                        <h2 className={styles.title}>High-Performance Computing &amp; CADD Laboratory[cite: 81]</h2>
                        <p className={styles.lead}>
                            Supports Computer-Aided Drug Design (CADD) molecular docking simulations and the standardized PCI Python computational curriculum[cite: 81].
                        </p>

                        <div className={styles.pointsGrid}>
                            {points.map((pt, idx) => (
                                <div key={idx} className={styles.pointTile}>
                                    <CheckCircle2 size={16} className={styles.checkIcon} />
                                    <div>
                                        <strong className={styles.pointTitle}>{pt.title}</strong>
                                        <p className={styles.pointDesc}>{pt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}