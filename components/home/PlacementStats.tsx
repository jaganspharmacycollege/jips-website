'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import styles from './PlacementStats.module.css';

interface BatchData {
    year: string;
    highest: number;
    average: number;
    median: number;
}

// Realistic Pharmacy / Healthcare CTC Packages (0 to 7 LPA)
const placementBatches: BatchData[] = [
    { year: '2021', highest: 4.5, average: 2.8, median: 2.4 },
    { year: '2022', highest: 5.0, average: 3.2, median: 2.8 },
    { year: '2023', highest: 5.8, average: 3.5, median: 3.0 },
    { year: '2024', highest: 6.2, average: 3.8, median: 3.2 },
    { year: '2025', highest: 6.5, average: 4.2, median: 3.6 },
    { year: '2026', highest: 7.0, average: 4.5, median: 3.9 },
];

const MAX_LPA = 7.0;

// Major and minor ticks for Y-axis scale
const Y_AXIS_TICKS = [
    { val: 7.0, isMajor: true },
    { val: 6.5, isMajor: false },
    { val: 6.0, isMajor: true },
    { val: 5.5, isMajor: false },
    { val: 5.0, isMajor: true },
    { val: 4.5, isMajor: false },
    { val: 4.0, isMajor: true },
    { val: 3.5, isMajor: false },
    { val: 3.0, isMajor: true },
    { val: 2.5, isMajor: false },
    { val: 2.0, isMajor: true },
    { val: 1.5, isMajor: false },
    { val: 1.0, isMajor: true },
    { val: 0.5, isMajor: false },
    { val: 0.0, isMajor: true },
];

// Decimal counter component synchronized with pillar rise
function AnimatedDecimalCounter({ target, animate }: { target: number; animate: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animate) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        const duration = 4000; // 4s steady climb

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * target).toFixed(1)));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        const frameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameId);
    }, [animate, target]);

    return <span>{count.toFixed(1)}</span>;
}

// 3D Isometric Pillar component with Front, Side, and Top Faces
function IsometricPillar({
    heightPercent,
    value,
    variant,
    isInView,
    delay,
    shouldReduceMotion,
}: {
    heightPercent: number;
    value: number;
    variant: 'highest' | 'average' | 'median';
    isInView: boolean;
    delay: number;
    shouldReduceMotion: boolean | null;
}) {
    return (
        <div className={styles.pillar3DWrapper}>
            <div
                className={`${styles.pillar3DBody} ${styles[`pillar_${variant}`]}`}
                style={{
                    height: isInView ? `${heightPercent}%` : '0%',
                    transitionDelay: `${delay}s`,
                }}
            >
                {/* Top 3D Rhombus Cap */}
                <div className={styles.pillarTopCap} />

                {/* Right 3D Side Shadow Face */}
                <div className={styles.pillarSideFace} />

                {/* Value Label */}
                <div className={styles.pillarValBadge}>
                    <AnimatedDecimalCounter target={value} animate={isInView && !shouldReduceMotion} />
                </div>
            </div>
        </div>
    );
}

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
        },
    },
};

export default function PlacementStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const shouldReduceMotion = useReducedMotion();

    return (
        <section ref={sectionRef} className={styles.placementSection}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Top Header Block */}
                <div className={styles.topHeadingBlock}>
                    <span className={styles.eyebrow}>Career Outcomes</span>
                    <h2 className={styles.mainTitle}>Placement Statistics 2021-26</h2>
                    <p className={styles.subtitle}>
                        Annual packages secured by graduating pharmaceutical candidates across hospital networks, analytical QC labs, and formulation units.
                    </p>
                </div>

                {/* Legend Row */}
                <div className={styles.legendContainer}>
                    <div className={styles.legendRow}>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.dotHighest}`} />
                            <span className={styles.legendText}>Highest CTC</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.dotAverage}`} />
                            <span className={styles.legendText}>Average CTC</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.dotMedian}`} />
                            <span className={styles.legendText}>Median CTC</span>
                        </div>
                    </div>
                </div>

                {/* 3D Isometric Chart Stage Card */}
                <div className={styles.chartCard}>
                    <div className={styles.chartLayout}>

                        {/* Left Column: Dedicated Y-Axis Gutter */}
                        <div className={styles.yAxisGutter}>
                            <div className={styles.yAxisUnitBadge}>LPA</div>
                            <div className={styles.ticksList}>
                                {Y_AXIS_TICKS.map((tick) => (
                                    <div
                                        key={tick.val}
                                        className={`${styles.tickItem} ${!tick.isMajor ? styles.minorTick : ''}`}
                                    >
                                        <span>{tick.val.toFixed(1)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: 3D Isometric Chart Canvas */}
                        <div className={styles.chartMainStage}>
                            {/* Background Reference Lines */}
                            <div className={styles.gridLinesBackdrop}>
                                {Y_AXIS_TICKS.map((tick) => (
                                    <div
                                        key={tick.val}
                                        className={`${styles.gridLine} ${!tick.isMajor ? styles.minorGridLine : ''
                                            } ${tick.val === 0 ? styles.baseGridLine : ''}`}
                                    />
                                ))}
                            </div>

                            {/* 3D Pillars Floor Track */}
                            <div className={styles.barsContainer}>
                                {placementBatches.map((batch, batchIdx) => (
                                    <div key={batch.year} className={styles.yearColumn}>
                                        <div className={styles.barsCluster}>
                                            {/* Highest Pillar */}
                                            <IsometricPillar
                                                variant="highest"
                                                heightPercent={(batch.highest / MAX_LPA) * 100}
                                                value={batch.highest}
                                                isInView={isInView}
                                                delay={batchIdx * 0.08}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />

                                            {/* Average Pillar */}
                                            <IsometricPillar
                                                variant="average"
                                                heightPercent={(batch.average / MAX_LPA) * 100}
                                                value={batch.average}
                                                isInView={isInView}
                                                delay={batchIdx * 0.08 + 0.05}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />

                                            {/* Median Pillar */}
                                            <IsometricPillar
                                                variant="median"
                                                heightPercent={(batch.median / MAX_LPA) * 100}
                                                value={batch.median}
                                                isInView={isInView}
                                                delay={batchIdx * 0.08 + 0.1}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />
                                        </div>

                                        {/* Batch Year Base Label */}
                                        <span className={styles.batchYearText}>{batch.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className={styles.xAxisTitle}>BATCH</div>
                </div>

                {/* Footer Summary Strip */}
                <div className={styles.summaryBar}>
                    <div className={styles.summaryCard}>
                        <span className={styles.sumVal}>₹7.0 LPA</span>
                        <span className={styles.sumLbl}>Peak Package Offered</span>
                    </div>
                    <div className={styles.summaryDivider} />
                    <div className={styles.summaryCard}>
                        <span className={styles.sumVal}>₹4.5 LPA</span>
                        <span className={styles.sumLbl}>2026 Batch Average</span>
                    </div>
                    <div className={styles.summaryDivider} />
                    <div className={styles.summaryCard}>
                        <span className={styles.sumVal}>88%+</span>
                        <span className={styles.sumLbl}>Placement Clearance Rate</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}