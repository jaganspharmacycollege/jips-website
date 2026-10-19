'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { FlaskConical, Microscope, CheckCircle2, Stethoscope, Sprout, Sparkles } from 'lucide-react';
import styles from './LaboratoriesInfra.module.css';

interface LabSectionData {
    id: string;
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    badgeLabel: string;
    badgeIcon: React.ElementType;
    accentColor: string;
    reverse: boolean; // Alternates image left/right
    images: { url: string; alt: string }[];
}
const individualLabs: LabSectionData[] = [
    {
        id: 'pharmaceutics-lab',
        eyebrow: 'EXPERIMENTAL INFRASTRUCTURE',
        title: 'Pharmaceutics Pilot Compounding Lab',
        lead: 'Engineered with industrial pilot-scale machinery to simulate modern cGMP formulation manufacturing, liquid orals, ointments, and solid unit dosages.',
        points: [
            'Rotary 16-station tablet compression machine with interchangeable tooling dies',
            'Automated 8-basket USP dissolution test apparatus with digital temperature telemetry',
            'Electronic tablet friability, hardness, and disintegration test stations',
            'High-shear granulators, planetary mixers, and fluid-bed drying units',
        ],
        badgeLabel: 'Pharmaceutics Pilot Compounding Lab',
        badgeIcon: FlaskConical,
        accentColor: '#ca8a04',
        reverse: false,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
                alt: 'Pharmaceutics Pilot Compounding Lab Equipment',
            },
            {
                url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
                alt: 'Tablet Compression & Dissolution Testing Station',
            },
            {
                url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
                alt: 'Sterile Compounding & Formulation Suite',
            },
        ],
    },
    {
        id: 'medicinal-chemistry-lab',
        eyebrow: 'SYNTHETIC PHARMACEUTICAL SCIENCES',
        title: 'Medicinal Chemistry & Synthesis Lab',
        lead: 'Dedicated to novel chemical synthesis, lead optimization, organic reaction mechanisms, and high-efficiency purification of bioactive pharmacophores.',
        points: [
            'High-efficiency laminar airflow fume exhaust hoods for volatile organic synthesis',
            'Rotary vacuum flash evaporators with chilled recirculating water baths',
            'Digital melting point apparatus and reaction heating mantles',
            'Comprehensive safety showers, eyewash stations, and fire-suppression shields',
        ],
        badgeLabel: 'Medicinal Chemistry Synthesis Suite',
        badgeIcon: Microscope,
        accentColor: '#0284c7',
        reverse: true,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
                alt: 'Medicinal Chemistry Synthesis and Fume Hoods',
            },
            {
                url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
                alt: 'Organic Chemical Synthesis and Distillation Units',
            },
            {
                url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
                alt: 'Reflux Condensers and Synthetic Chemical Reactors',
            },
        ],
    },
    {
        id: 'pharmacology-lab',
        eyebrow: 'PRE-CLINICAL & BIOMEDICAL SUITE',
        title: 'Pharmacology & Pre-Clinical Testing Lab',
        lead: 'Features animal housing and computer-aided simulation suites to evaluate pharmacodynamics, systemic toxicology, and neurobehavioral responses.',
        points: [
            'Digital student organ baths with aerated tissue perfusion chambers',
            'Computerized simulation software (Ex-Pharm) eliminating animal sacrifice for routine training',
            'Digital plethysmometers, analgesiometers, and rotarod apparatus',
            'Pharmacovigilance database terminals and clinical dose-response calculators',
        ],
        badgeLabel: 'Pharmacology & Pre-Clinical Testing Suite',
        badgeIcon: Stethoscope,
        accentColor: '#ca8a04',
        reverse: false,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
                alt: 'Pharmacology Lab Organ Bath and Testing Equipment',
            },
            {
                url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
                alt: 'Pre-Clinical Pharmacology Evaluation Setup',
            },
            {
                url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
                alt: 'Computerized Tissue Simulation and Data Systems',
            },
        ],
    },
    {
        id: 'pharmacognosy-lab',
        eyebrow: 'NATURAL PRODUCTS & BOTANICAL SCIENCE',
        title: 'Pharmacognosy & Natural Products Lab',
        lead: 'Equipped for crude botanical evaluation, volatile oil distillation, phytochemical isolation, and standardization of herbal drugs.',
        points: [
            'Soxhlet extraction batteries for exhaustive bioactive solvent partitioning',
            'Clevenger apparatus for essential and volatile oil distillation',
            'High-resolution binocular compound microscopes for transverse section microtomy',
            'Muffle furnaces for ash-value analysis and moisture balances for extract standardization',
        ],
        badgeLabel: 'Pharmacognosy & Phytopharmaceutical Lab',
        badgeIcon: Sprout,
        accentColor: '#16a34a',
        reverse: true,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
                alt: 'Pharmacognosy Extraction and Botanical Lab',
            },
            {
                url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80',
                alt: 'Soxhlet Extraction Batteries and Microtome Sectioning',
            },
            {
                url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
                alt: 'Phytochemical Screening and Natural Product Analysis',
            },
        ],
    },
];
const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
};

// Reusable individual laboratory split-card
function SingleLabCard({ lab }: { lab: LabSectionData }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-cycle images every 3.5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % lab.images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [lab.images.length]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const parallaxShift = useTransform(
        scrollYProgress,
        [0, 1],
        lab.reverse ? ['18px', '-18px'] : ['-18px', '18px']
    );

    const BadgeIcon = lab.badgeIcon;

    return (
        <div ref={containerRef} className={styles.cardWrapper} id={lab.id}>
            <motion.div
                className={`${styles.card} ${lab.reverse ? styles.cardReversed : ''}`}
                style={{ borderLeftColor: lab.accentColor }}
                variants={riseVariants}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Narrative Side */}
                <div className={styles.textSide}>
                    <span className={styles.eyebrow} style={{ color: lab.accentColor }}>
                        {lab.eyebrow}
                    </span>
                    <h2 className={styles.title}>{lab.title}</h2>
                    <p className={styles.lead}>{lab.lead}</p>

                    <div className={styles.pointsStack}>
                        {lab.points.map((pt, idx) => (
                            <div key={idx} className={styles.pointRow}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <span>{pt}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Slider Side */}
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
                                    src={lab.images[currentSlide].url}
                                    alt={lab.images[currentSlide].alt}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 540px"
                                    className={styles.slideImg}
                                    priority={currentSlide === 0}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom-Left Gold Badge */}
                        <div className={styles.overlayPill}>
                            <BadgeIcon size={15} />
                            <span>{lab.badgeLabel}</span>
                        </div>

                        {/* Bottom-Right Slider Navigation Dots */}
                        <div className={styles.sliderDots}>
                            {lab.images.map((_, i) => (
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
    );
}

export default function LaboratoriesInfra() {
    return (
        <section className={styles.sectionRoot} aria-label="Departmental Laboratories">
            <div className={styles.mainContainer}>
                {individualLabs.map((lab) => (
                    <SingleLabCard key={lab.id} lab={lab} />
                ))}
            </div>
        </section>
    );
}