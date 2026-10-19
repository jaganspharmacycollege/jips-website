'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion, type Variants } from 'framer-motion';
import { BookOpen, Database, Sparkles, Layers } from 'lucide-react';
import styles from './LibraryResourceTable.module.css';

interface StatRow {
    resource: string;
    count: number;
    suffix?: string;
    description: string;
}

const resourcesList: StatRow[] = [
    {
        resource: 'Volumes',
        count: 15420,
        suffix: '+',
        description: 'Curriculum textbooks, monographs and pharmacopeial treatises',
    },
    {
        resource: 'Titles',
        count: 2850,
        suffix: '+',
        description: 'Distinct academic and reference subjects cataloged in OPAC',
    },
    {
        resource: 'National journals',
        count: 110,
        suffix: '+',
        description: 'Print subscriptions of premier Indian pharmaceutical journals',
    },
    {
        resource: 'International journals',
        count: 45,
        suffix: '+',
        description: 'Peer-reviewed global periodicals and foreign publications',
    },
    {
        resource: 'E-resources (e.g. DELNET, J-Gate)',
        count: 3500,
        suffix: '+',
        description: 'Online journals, dissertation databases, e-books & DELNET consortia',
    },
];

// Animated Number Component that counts from 0 up to target
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: false, amount: 0.3 });
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (latest) => Math.floor(latest).toLocaleString());
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (isInView && !shouldReduceMotion) {
            motionVal.set(0);
            const controls = animate(motionVal, value, {
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
            });
            return controls.stop;
        } else {
            motionVal.set(value);
        }
    }, [isInView, value, motionVal, shouldReduceMotion]);

    return (
        <span ref={countRef} className={styles.counterText}>
            {shouldReduceMotion ? value.toLocaleString() : <motion.span>{rounded}</motion.span>}
            {suffix}
        </span>
    );
}

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function LibraryResourceTable() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className={styles.tableSection} aria-label="Library Resource Inventory">
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <span className={styles.eyebrow}>INVENTORY &amp; ASSETS</span>
                    <h2 className={styles.sectionTitle}>Library Holdings &amp; Resources Count</h2>
                    <p className={styles.sectionSubtitle}>
                        A comprehensive quantitative record of our print holdings, physical journals, and subscribed online databases.
                    </p>
                </motion.div>

                {/* Structured Institutional Ledger Table */}
                <motion.div
                    className={styles.tableWrapperCard}
                    variants={riseVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className={styles.ledgerHeaderRow}>
                        <div className={styles.colResourceHead}>Resource</div>
                        <div className={styles.colCountHead}>Count</div>
                    </div>

                    <div className={styles.ledgerBody}>
                        {resourcesList.map((item, idx) => (
                            <motion.div
                                key={item.resource}
                                className={styles.ledgerRow}
                                custom={idx}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.colResource}>
                                    <div className={styles.resourceName}>{item.resource}</div>
                                    <div className={styles.resourceDesc}>{item.description}</div>
                                </div>

                                <div className={styles.colCount}>
                                    <AnimatedCounter value={item.count} suffix={item.suffix} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Table Bottom Verification Ribbon */}
                    <div className={styles.tableFooterRibbon}>
                        <span className={styles.footerNote}>
                            * Official data updated in accordance with PCI, AICTE, and JNTUA annual compliance records.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}