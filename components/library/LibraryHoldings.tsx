'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { Library, CheckCircle2 } from 'lucide-react';
import styles from './LibraryHoldings.module.css';

const holdingsSliderImages = [
    {
        url: '/library/library-stack-1.jpg',
        alt: 'JIPS Central Library Main Stacks and Textbook Racks',
    },
    {
        url: '/library/library-stack-2.jpg',
        alt: 'JIPS Pharmaceutical Reference Collection and Reading Stacks',
    },
    {
        url: '/library/library-stack-3.jpg',
        alt: 'JIPS Circulation Stacks, Reference Shelves and Reading Hall',
    },
];

const holdingsPoints = [
    'Exact total book volumes: 5,279 curriculum-aligned print textbooks and pharmacopeial treatises',
    'Exact total book titles: 879 distinct academic and reference titles across all subjects',
    '10 national and international peer-reviewed print journals subscribed annually via Pharma Intelligence',
    'NDigital Online Library with 5,000+ e-journals, e-books, NPTEL courseware, and 200+ database access',
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

export default function LibraryHoldings() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % holdingsSliderImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

    return (
        <section ref={containerRef} className={styles.sectionWrap} id="holdings" aria-label="Library Holdings">
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Narrative Side */}
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>PHYSICAL ASSETS &amp; ARCHIVES</span>
                        <h2 className={styles.title}>Extensive Print Holdings &amp; Reference Stacks</h2>
                        <p className={styles.lead}>
                            A comprehensive institutional repository providing immediate access to foundational textbooks, standard pharmaceutical monographs, and peer-reviewed journals.
                        </p>

                        <div className={styles.pointsStack}>
                            {holdingsPoints.map((pt, idx) => (
                                <div key={idx} className={styles.pointRow}>
                                    <CheckCircle2 size={18} className={styles.checkIcon} />
                                    <span>{pt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3D Visual Slider Side */}
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
                                        src={holdingsSliderImages[currentSlide].url}
                                        alt={holdingsSliderImages[currentSlide].alt}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 540px"
                                        className={styles.slideImg}
                                        priority={currentSlide === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className={styles.overlayPill}>
                                <Library size={15} />
                                <span>5,279 Print Volumes &bull; 879 Titles &bull; 10 Print Journals</span>
                            </div>

                            <div className={styles.sliderDots}>
                                {holdingsSliderImages.map((_, i) => (
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