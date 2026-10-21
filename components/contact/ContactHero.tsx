'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import styles from './ContactHero.module.css';

export default function ContactHero() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <section ref={containerRef} className={styles.heroSection} aria-label="Contact & Location Hero">
            <motion.div
                className={styles.bgWrapper}
                style={{ y: shouldReduceMotion ? 0 : bgY }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
                    alt="JIPS Campus Entrance"
                    fill
                    unoptimized
                    priority
                    sizes="100vw"
                    className={styles.bgImg}
                />
                <div className={styles.heroOverlay} />
            </motion.div>

            <div className={styles.contentWrap}>
                <motion.div
                    className={styles.heroContent}
                    style={{
                        y: shouldReduceMotion ? 0 : textY,
                        opacity: shouldReduceMotion ? 1 : opacity,
                    }}
                >
                    <div className={styles.kickerBadge}>
                        <Building2 size={14} />
                        <span>JAGAN&apos;S INSTITUTE OF PHARMACEUTICAL SCIENCES &bull; NELLORE</span>
                    </div>

                    <h1 className={styles.headline}>
                        Connect With Our <br />
                        <span className={styles.goldText}>Campus &amp; Admissions Desk</span>
                    </h1>

                    <p className={styles.lead}>
                        Reach out for admissions counseling, EAPCET/PGECET code inquiries (<code>&apos;JAGP&apos;</code>), fee structures, or statutory administrative support.
                    </p>

                    <div className={styles.quickContactsGrid}>
                        <div className={styles.qCard}>
                            <MapPin size={18} className={styles.qIcon} />
                            <div>
                                <span className={styles.qLabel}>Campus Location</span>
                                <strong className={styles.qVal}>Jangalakandriga, Muthukur, Nellore, AP</strong>
                            </div>
                        </div>
                        <div className={styles.qCard}>
                            <Phone size={18} className={styles.qIcon} />
                            <div>
                                <span className={styles.qLabel}>Admissions Helpline</span>
                                <strong className={styles.qVal}>+91 98480 12345 / 0861-238100</strong>
                            </div>
                        </div>
                        <div className={styles.qCard}>
                            <Mail size={18} className={styles.qIcon} />
                            <div>
                                <span className={styles.qLabel}>Official Email</span>
                                <strong className={styles.qVal}>principal@jips.edu.in</strong>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}