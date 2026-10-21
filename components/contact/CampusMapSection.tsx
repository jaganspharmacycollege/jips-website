'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Navigation, Bus, Train, Plane } from 'lucide-react';
import styles from './CampusMapSection.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function CampusMapSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} id="campus-map" aria-label="Campus Location Map">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>CAMPUS DIRECTIONS</span>
                    <h2 className={styles.title}>Find Us in Jangalakandriga, Nellore</h2>
                    <p className={styles.subtext}>
                        Jagan&apos;s Institute of Pharmaceutical Sciences is located in Muthukur Mandal, easily accessible via Nellore city transit, NH-16, and regional railway connectivity.
                    </p>
                </motion.div>

                {/* Interactive Map Embed + Travel Guide */}
                <div className={styles.mapGrid}>
                    <motion.div
                        className={styles.mapContainer}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <iframe
                            title="Jagan's Institute of Pharmaceutical Sciences Campus Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5391747950116!2d80.05557837515897!3d14.35720288610082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf5d5e9abfb1f%3A0xfa2fe2be492fc92c!2sJagan's%20College%20of%20Pharmacy!5e1!3m2!1sen!2sin!4v1792408084882!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className={styles.iframeMap}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.directionsCard}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <h3 className={styles.dirTitle}>How to Reach JIPS</h3>

                        <div className={styles.dirItem}>
                            <Train size={18} className={styles.dirIcon} />
                            <div>
                                <strong>By Railway:</strong>
                                <span>Nellore Railway Station (NLR) is approx. 22 km away. Frequent APSRTC buses and autos are available toward Muthukur.</span>
                            </div>
                        </div>

                        <div className={styles.dirItem}>
                            <Bus size={18} className={styles.dirIcon} />
                            <div>
                                <strong>By Bus / Transit:</strong>
                                <span>Direct college bus fleets operate daily across Nellore city, Atmakur, and Kavali routes for students and staff.</span>
                            </div>
                        </div>

                        <div className={styles.dirItem}>
                            <Plane size={18} className={styles.dirIcon} />
                            <div>
                                <strong>Nearest Airports:</strong>
                                <span>Tirupati International Airport (TIR) ~ 130 km; Chennai International Airport (MAA) ~ 160 km.</span>
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com/?q=Jagan's+Institute+of+Pharmaceutical+Sciences+Nellore"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mapLinkBtn}
                        >
                            <Navigation size={16} />
                            <span>Open Directions in Google Maps</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}