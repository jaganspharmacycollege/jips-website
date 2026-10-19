'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import styles from './ClassroomsInfra.module.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop',
        alt: 'Smart Amphitheater Classrooms',
    },
    {
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop',
        alt: 'Interactive Lecture Hall with Projectors',
    },
    {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900&auto=format&fit=crop',
        alt: 'Step-Tiered Seminar Room',
    },
];

const points = [
    'Interactive digital projectors & high-definition display screens',
    'Ergonomically engineered stepped tiered seating with dedicated power sockets',
    'Acoustically calibrated public address systems with wireless microphones',
    'Natural ambient illumination, cross-ventilation, and climate-controlled fans',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

export default function ClassroomsInfra() {
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

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="classrooms" aria-label="Classrooms">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Text on Left[cite: 80] */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>PEDAGOGICAL SPACES</span>
                        <h2 className={styles.title}>Spacious Classrooms with Audio-Visual Teaching Aids</h2>
                        <p className={styles.lead}>
                            Airy, step-tiered amphitheatres and multi-media classrooms designed to maximize student engagement, case discussions, and didactic lecture delivery[cite: 80].
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

                    {/* Images on Right[cite: 80] */}
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
                                <BookOpen size={15} />
                                <span>Smart Amphitheater Classrooms</span>
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
                </motion.div>
            </div>
        </section>
    );
}