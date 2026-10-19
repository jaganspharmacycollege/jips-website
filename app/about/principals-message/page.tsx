'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './PrincipalsMessage.module.css';

export default function PrincipalsMessage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={styles.sectionWrapper}>
            <motion.div
                className={styles.speechCard}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Floating Orange Quote Mark */}
                <div className={styles.quoteBadge}>
                    <svg
                        viewBox="0 0 100 100"
                        className={styles.quoteSvg}
                        fill="currentColor"
                    >
                        <path d="M18 42 C18 25, 30 14, 46 12 L48 24 C38 25, 32 30, 31 38 C34 38, 38 39, 41 42 C45 46, 47 51, 47 57 C47 64, 44 70, 39 74 C34 78, 28 80, 21 80 C15 80, 10 77, 6 72 C2 67, 0 60, 0 51 C0 42, 6 25, 18 12 L28 18 C20 28, 18 36, 18 42 Z" />
                        <path d="M68 42 C68 25, 80 14, 96 12 L98 24 C88 25, 82 30, 81 38 C84 38, 88 39, 91 42 C95 46, 97 51, 97 57 C97 64, 94 70, 89 74 C84 78, 78 80, 71 80 C65 80, 60 77, 56 72 C52 67, 50 60, 50 51 C50 42, 56 25, 68 12 L78 18 C70 28, 68 36, 68 42 Z" />
                    </svg>
                </div>

                {/* Message Content */}
                <div className={styles.messageContent}>
                    <p>
                        &ldquo;At Jagan&apos;s Institute of Pharmaceutical Sciences, our vision is to build an institution where learning flows beyond boundaries—an environment where excellence meets empathy. With world-class infrastructure, a value-driven culture, and internationally benchmarked curricula, we are committed to offering an educational experience that stands apart.
                    </p>

                    <p>
                        Our founding belief is simple: Every student deserves the best. Hence, we have invested in advanced facilities, globally aligned academic frameworks, skilled educators, and a holistic development model that empowers every learner.
                    </p>

                    <p>
                        JIPS is more than a dream—it is a commitment to shaping leaders, innovators, and responsible global citizens.&rdquo;
                    </p>
                </div>

                {/* Sign-off & Principal Dossier Profile */}
                <div className={styles.principalProfileRow}>
                    <div className={styles.avatarFrame}>
                        <Image
                            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
                            alt="Dr. S. K. Sundaram"
                            fill
                            sizes="84px"
                            className={styles.avatarImg}
                        />
                    </div>

                    <div className={styles.signInfo}>
                        <div className={styles.signatureRow}>
                            <span className={styles.dash}>—</span>
                            <span className={styles.author}>Dr. S. K. Sundaram</span>
                        </div>
                        <div className={styles.qualification}>
                            M.Pharm (Pharmaceutics), Ph.D., F.I.C.P.
                        </div>
                        <div className={styles.designation}>
                            Principal &amp; Research Director, JIPS
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}