'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Microscope, CheckCircle2 } from 'lucide-react';
import styles from './InstrumentationInfra.module.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
        alt: 'High Performance Liquid Chromatography Instrument',
    },
    {
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Double Beam UV-Visible Spectrophotometer Center',
    },
    {
        url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
        alt: 'FTIR Spectrophotometer Sampling Station',
    },
];

const points = [
    'Quaternary HPLC Chromatography Systems with Photo-Diode Array (PDA) detectors',
    'Double-Beam UV-Visible Spectrophotometers covering 190 to 1100 nm spectral ranges',
    'FTIR Spectrophotometer with Attenuated Total Reflectance (ATR) for drug characterization',
    'Micro-analytical balances with sensitivity down to 0.01 mg and stability chambers',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

export default function InstrumentationInfra() {
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
        <section ref={containerRef} className={styles.sectionWrap} id="instrumentation" aria-label="Instrumentation">
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
                                <Microscope size={15} />
                                <span>UV &bull; IR &bull; HPLC Analytics</span>
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

                    {/* Text on Right */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>HIGH-END ANALYTICS</span>
                        <h2 className={styles.title}>Analytical Instrumentation Suite</h2>
                        <p className={styles.lead}>
                            Analytical instruments for UV, IR and chromatographic analysis supporting undergraduate testing, postgraduate research dissertations, and faculty patent filings.
                        </p>

                        <div className={styles.pointsStack}>
                            {points.map((pt, idx) => (
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