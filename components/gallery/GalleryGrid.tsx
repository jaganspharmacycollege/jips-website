'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import styles from './GalleryGrid.module.css';

interface GalleryItem {
    id: string;
    title: string;
    category: 'campus' | 'labs' | 'events' | 'sports' | 'nss';
    categoryLabel: string;
    image: string;
    caption: string;
}

const galleryData: GalleryItem[] = [
    {
        id: 'g-1',
        title: 'Central Administrative & Academic Complex',
        category: 'campus',
        categoryLabel: 'Campus & Infrastructure',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Main administrative block and amphitheater classrooms at the Jangalakandriga campus.',
    },
    {
        id: 'g-2',
        title: 'Quaternary HPLC Chromatography Suite',
        category: 'labs',
        categoryLabel: 'Laboratories & Research',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Postgraduate scholars conducting assay validation on high-performance liquid chromatography equipment.',
    },
    {
        id: 'g-3',
        title: 'National Pharmacy Week Cultural Fest',
        category: 'events',
        categoryLabel: 'Events & Fests',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        caption: 'Students performing awareness skits and traditional dances during annual college celebrations.',
    },
    {
        id: 'g-4',
        title: 'JNTUA Inter-Collegiate Cricket Champions',
        category: 'sports',
        categoryLabel: 'Sports & Cultural',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
        caption: 'JIPS cricket team hoisting the zonal inter-collegiate tournament trophy.',
    },
    {
        id: 'g-5',
        title: 'Voluntary Blood Donation Camp',
        category: 'nss',
        categoryLabel: 'NSS & Community Outreach',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
        caption: 'NSS volunteers organizing a mega blood donation drive in partnership with the Indian Red Cross Society.',
    },
    {
        id: 'g-6',
        title: 'Pharmaceutics Pilot Compounding Lab',
        category: 'labs',
        categoryLabel: 'Laboratories & Research',
        image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Undergraduate students operating rotary tablet compression machinery during practical sessions.',
    },
    {
        id: 'g-7',
        title: 'Living Botanical Medicinal Plant Garden',
        category: 'campus',
        categoryLabel: 'Campus & Infrastructure',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
        caption: 'Botanical herbarium maintaining over 100 authenticated medicinal plant species.',
    },
    {
        id: 'g-8',
        title: 'Annual Convocation & Graduation Ceremony',
        category: 'events',
        categoryLabel: 'Events & Fests',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Graduating B.Pharm, M.Pharm, and Pharm.D cohorts receiving degrees at the annual convocation.',
    },
    {
        id: 'g-9',
        title: 'Rural Health & Free Medicine Camp',
        category: 'nss',
        categoryLabel: 'NSS & Community Outreach',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clinical faculty and Pharm.D interns distributing medicines in adopted Muthukur mandal villages.',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function GalleryGrid() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

    const filteredItems = galleryData.filter(
        (item) => activeCategory === 'all' || item.category === activeCategory
    );

    return (
        <div className={styles.galleryRoot}>
            {/* 1. Header Hero Banner */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>VISUAL ARCHIVE</span>
                    <h1 className={styles.heroTitle}>Campus Gallery &amp; Events</h1>
                    <p className={styles.heroLead}>
                        Explore moments of academic discovery, laboratory research, cultural fests, sports championships, and community outreach captured across our JIPS campus.
                    </p>
                </div>
            </section>

            {/* 2. Filter Tabs & Gallery Grid */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.filterTabsRow}>
                        {[
                            { id: 'all', label: 'All Gallery' },
                            { id: 'campus', label: 'Campus & Infrastructure' },
                            { id: 'labs', label: 'Laboratories & Research' },
                            { id: 'events', label: 'Events & Fests' },
                            { id: 'sports', label: 'Sports & Cultural' },
                            { id: 'nss', label: 'NSS & Outreach' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                className={`${styles.filterBtn} ${activeCategory === tab.id ? styles.activeFilterBtn : ''}`}
                                onClick={() => setActiveCategory(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.photoGrid}>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className={styles.photoCard}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                                onClick={() => setLightboxImage(item)}
                            >
                                <div className={styles.imgWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        unoptimized
                                        loading="eager"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.photoImg}
                                    />
                                    <div className={styles.photoOverlay}>
                                        <div className={styles.overlayContent}>
                                            <span className={styles.overlayCat}>{item.categoryLabel}</span>
                                            <h3 className={styles.overlayTitle}>{item.title}</h3>
                                            <span className={styles.zoomPrompt}>
                                                <Maximize2 size={14} /> Click to expand
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Lightbox Modal Preview */}
            <AnimatePresence>
                {lightboxImage && (
                    <div className={styles.lightboxBackdrop} onClick={() => setLightboxImage(null)}>
                        <motion.div
                            className={styles.lightboxModal}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <button
                                type="button"
                                className={styles.closeModalBtn}
                                onClick={() => setLightboxImage(null)}
                                aria-label="Close preview"
                            >
                                <X size={20} />
                            </button>

                            <div className={styles.modalImgPane}>
                                <Image
                                    src={lightboxImage.image}
                                    alt={lightboxImage.title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 900px"
                                    className={styles.modalPhoto}
                                />
                            </div>

                            <div className={styles.modalInfoPane}>
                                <span className={styles.modalCategory}>{lightboxImage.categoryLabel}</span>
                                <h3 className={styles.modalTitle}>{lightboxImage.title}</h3>
                                <p className={styles.modalCaption}>{lightboxImage.caption}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}