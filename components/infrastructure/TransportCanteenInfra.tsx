'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Bus, CheckCircle2 } from 'lucide-react';
import styles from './TransportCanteenInfra.module.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
        alt: 'Institutional Bus Fleet in Nellore',
    },
    {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Hygienic Campus Dining Cafeteria',
    },
    {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
        alt: 'Clean Student Food Court and RO Water Facility',
    },
];

const points = [
    'Dedicated fleet of college buses operating from all major residential corridors in Nellore',
    'GPS satellite vehicle tracking and verified drivers ensuring safe, punctual commutes',
    'Clean campus dining hall serving wholesome, freshly prepared vegetarian meals',
    'Reverse-Osmosis (RO) purified drinking water stations complying with FSSAI hygiene standards',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

export default function TransportCanteenInfra() {
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
        <section ref={containerRef} className={styles.sectionWrap} id="transport-canteen" aria-label="Transport & Canteen">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Images on Left (Reversed) */}
                    <motion.div
                        className={styles.imgSide}
                        style={{ y: shouldReduceMotion ? 0 : parallaxShift }}
                    >
                        <div className={styles.imgFrame} style={{ position: 'relative', height: '380px', width: '100%' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    className={styles.slideMotion}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                                >
                                    <Image
                                        src={images[currentSlide].url}
                                        alt={images[currentSlide].alt}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 540px"
                                        className={styles.slideImg}
                                        priority={currentSlide === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className={styles.overlayPill}>
                                <Bus size={15} />
                                <span>Transit Fleet &bull; Dining Food Court</span>
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
                        <span className={styles.eyebrow}>CAMPUS AMENITIES</span>
                        <h2 className={styles.title}>Transport Fleet &amp; Student Canteen</h2>
                        <p className={styles.lead}>
                            College buses from Nellore and a campus canteen ensuring secure daily transit, punctual campus arrivals, and clean, nutritious food for students and staff.
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