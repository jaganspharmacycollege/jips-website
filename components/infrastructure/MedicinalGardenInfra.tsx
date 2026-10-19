'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Sprout, CheckCircle2 } from 'lucide-react';
import styles from './MedicinalGardenInfra.module.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=900&auto=format&fit=crop',
        alt: 'Living Botanical Medicinal Plant Garden',
    },
    {
        url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=900&auto=format&fit=crop',
        alt: 'Medicinal Herbs and Taxonomy Beds',
    },
    {
        url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=900&auto=format&fit=crop',
        alt: 'Botanical Herbarium and Drip Irrigation Network',
    },
];

const points = [
    'Over 100+ authenticated medicinal species labeled with botanical family and uses',
    'Specialized nursery beds for indigenous Ayurvedic and herbal medicinal plants',
    'Fresh botanical raw materials for student Soxhlet extraction and crude drug testing',
    'Automated organic drip-irrigation system maintaining year-round greenery',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

export default function MedicinalGardenInfra() {
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
        <section ref={containerRef} className={styles.sectionWrap} id="medicinal-garden" aria-label="Medicinal Plant Garden">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Text on Left */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>BOTANICAL HERBARIUM</span>
                        <h2 className={styles.title}>Living Medicinal Plant Garden</h2>
                        <p className={styles.lead}>
                            A living collection used in pharmacognosy teaching, providing authentic specimens for botanical identification, taxonomy, and phytochemical extraction.
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

                    {/* Images on Right */}
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
                                <Sprout size={15} />
                                <span>100+ Living Medicinal Species</span>
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