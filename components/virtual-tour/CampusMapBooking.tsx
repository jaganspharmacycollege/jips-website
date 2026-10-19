'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Sparkles } from 'lucide-react';
import styles from './CampusMapBooking.module.css';

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: 'easeOut' },
    },
};

export default function CampusMapBooking() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.sectionWrap} id="schedule-visit" aria-label="Campus Location & Visit Booking">
            <div className={styles.container}>
                <motion.div
                    className={styles.bookingCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Column: Campus Geography & Route Details */}
                    <div className={styles.geoColumn}>
                        <span className={styles.kickerBadge}>CAMPUS LOCATION &amp; ACCESS</span>
                        <h2 className={styles.geoHeading}>Visit Our Nellore Campus</h2>
                        <p className={styles.geoLead}>
                            Located in Muthukur Mandal along the transit corridor, just 14 km from Nellore City Railway Junction with dedicated institutional fleet bus connectivity.
                        </p>

                        <div className={styles.contactDetailsList}>
                            <div className={styles.contactItem}>
                                <MapPin size={20} className={styles.contactIcon} />
                                <div>
                                    <strong>Campus Address:</strong>
                                    <span>Jangalakandriga, Muthukur Road, Nellore, Andhra Pradesh &ndash; 524346</span>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <Clock size={20} className={styles.contactIcon} />
                                <div>
                                    <strong>Campus Visitation Hours:</strong>
                                    <span>Monday &ndash; Saturday: 9:00 AM &ndash; 4:30 PM</span>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <Phone size={20} className={styles.contactIcon} />
                                <div>
                                    <strong>Admissions &amp; Visit Helpdesk:</strong>
                                    <span>+91 98480 12345 / 0861-238456</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com/?q=Jagan's+Institute+of+Pharmaceutical+Sciences+Nellore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapBtn}
                        >
                            <Navigation size={16} />
                            <span>Open in Google Maps</span>
                        </a>
                    </div>

                    {/* Right Column: High-Resolution College Visual Showcase (Form Removed) */}
                    <div className={styles.visualColumn}>
                        <div className={styles.imageCardWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                                alt="Jagan's Institute of Pharmaceutical Sciences Campus"
                                fill
                                unoptimized
                                priority
                                sizes="(max-width: 768px) 100vw, 550px"
                                className={styles.campusPhoto}
                            />
                            <div className={styles.imageOverlayGradient} />

                            <div className={styles.imageBadge}>
                                <Sparkles size={15} className={styles.sparkleIcon} />
                                <span>Jangalakandriga Campus &bull; SPSR Nellore</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}