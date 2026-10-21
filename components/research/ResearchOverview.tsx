'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { FlaskConical, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import styles from './ResearchOverview.module.css';

interface ResearchDomain {
    title: string;
    desc: string;
    image: string;
    tag: string;
}

const researchDomains: ResearchDomain[] = [
    {
        title: 'Molecular Docking & ADMET',
        desc: 'In silico screening of phytoconstituents, high-affinity ligand docking, and pharmacophore modeling.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
        tag: 'Computational CADD',
    },
    {
        title: 'Anti-Tubercular Drug Discovery',
        desc: 'Targeted synthesis and biological evaluation of novel chemical scaffolds against Mycobacterium tuberculosis.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
        tag: 'Synthetic Chemistry',
    },
    {
        title: 'Endophytes & Natural Products',
        desc: 'Isolation, bioassay-guided fractionation, and structural characterization of microbial metabolites.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
        tag: 'Natural Products',
    },
    {
        title: 'Network Pharmacology',
        desc: 'Multi-target identification and systemic biological mapping of herbal plant flavonoids and active extracts.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
        tag: 'Systems Pharmacology',
    },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.12, ease: 'easeOut' },
    }),
};

/**
 * High-Performance 60FPS 3D DNA Double Helix Canvas
 * Uses pre-rendered offscreen sprite buffers and IntersectionObserver to prevent CPU/battery drain.
 */
function DnaHelixCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;

        // Viewport-based dimension and DPI budgeting
        const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
        let width = 0;
        let height = 0;

        // Pre-rendered offscreen node glow sprite (replaces expensive runtime shadowBlur)
        const glowSprite = document.createElement('canvas');
        const spriteSize = 64;
        glowSprite.width = spriteSize;
        glowSprite.height = spriteSize;
        const sCtx = glowSprite.getContext('2d');
        if (sCtx) {
            const gradient = sCtx.createRadialGradient(
                spriteSize / 2,
                spriteSize / 2,
                2,
                spriteSize / 2,
                spriteSize / 2,
                spriteSize / 2
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.25, 'rgba(186, 230, 253, 0.9)');
            gradient.addColorStop(0.55, 'rgba(56, 189, 248, 0.45)');
            gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');
            sCtx.fillStyle = gradient;
            sCtx.beginPath();
            sCtx.arc(spriteSize / 2, spriteSize / 2, spriteSize / 2, 0, Math.PI * 2);
            sCtx.fill();
        }

        const resize = () => {
            if (!canvas || !canvas.parentElement) return;
            const rect = canvas.parentElement.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener('resize', resize, { passive: true });

        // Auto-sleep canvas loop when scrolled offscreen
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );
        if (canvas.parentElement) observer.observe(canvas.parentElement);

        // Lightweight ambient bokeh background
        const isMobile = width < 768;
        const particleCount = isMobile ? 18 : 36;
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2.5 + 1.2,
            speedX: (Math.random() - 0.5) * 0.25,
            speedY: (Math.random() - 0.5) * 0.25,
            opacity: Math.random() * 0.4 + 0.15,
        }));

        let rotationTime = 0;
        const numPairs = isMobile ? 22 : 38;
        const helixRadius = isMobile ? 85 : 145;
        const diagonalTilt = -0.48;
        const cosT = Math.cos(diagonalTilt);
        const sinT = Math.sin(diagonalTilt);

        const strand1Points: { x: number; y: number; scale: number; alpha: number; size: number }[] = [];
        const strand2Points: { x: number; y: number; scale: number; alpha: number; size: number }[] = [];

        const render = () => {
            if (isVisible) {
                ctx.clearRect(0, 0, width, height);

                // 1. Ambient particles
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.x += p.speedX;
                    p.y += p.speedY;
                    if (p.x < 0) p.x = width;
                    if (p.x > width) p.x = 0;
                    if (p.y < 0) p.y = height;
                    if (p.y > height) p.y = 0;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity * 0.35})`;
                    ctx.fill();
                }

                const centerX = width * (isMobile ? 0.65 : 0.56);
                const centerY = height * 0.48;

                if (!shouldReduceMotion) {
                    rotationTime += 0.015;
                }

                strand1Points.length = 0;
                strand2Points.length = 0;

                for (let i = -numPairs / 2; i <= numPairs / 2; i++) {
                    const axisDist = i * 36;
                    const baseAngle = i * 0.24 + rotationTime;

                    const u = axisDist;
                    const v = Math.cos(baseAngle) * helixRadius;
                    const z = Math.sin(baseAngle) * helixRadius;

                    const x1 = centerX + u * cosT - v * sinT;
                    const y1 = centerY + u * sinT + v * cosT;

                    const x2 = centerX + u * cosT + v * sinT;
                    const y2 = centerY + u * sinT - v * cosT;

                    const depthScale1 = (z + helixRadius) / (2 * helixRadius);
                    const depthScale2 = (-z + helixRadius) / (2 * helixRadius);

                    strand1Points.push({
                        x: x1,
                        y: y1,
                        scale: depthScale1,
                        alpha: Math.max(0.18, depthScale1 * 0.95),
                        size: Math.max(4, depthScale1 * 11),
                    });

                    strand2Points.push({
                        x: x2,
                        y: y2,
                        scale: depthScale2,
                        alpha: Math.max(0.18, depthScale2 * 0.95),
                        size: Math.max(4, depthScale2 * 11),
                    });
                }

                // 2. Base-Pair Rungs
                for (let i = 0; i < strand1Points.length; i++) {
                    const p1 = strand1Points[i];
                    const p2 = strand2Points[i];
                    const avgScale = (p1.scale + p2.scale) * 0.5;
                    const avgAlpha = (p1.alpha + p2.alpha) * 0.45;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${avgAlpha})`;
                    ctx.lineWidth = Math.max(2.2, avgScale * 5.8);
                    ctx.lineCap = 'round';
                    ctx.stroke();
                }

                // 3. Continuous Backbone Tubes
                const drawBackbone = (points: typeof strand1Points, isStrand1: boolean) => {
                    for (let i = 0; i < points.length - 1; i++) {
                        const ptA = points[i];
                        const ptB = points[i + 1];
                        const avgScale = (ptA.scale + ptB.scale) * 0.5;
                        const avgAlpha = (ptA.alpha + ptB.alpha) * 0.5;

                        ctx.beginPath();
                        ctx.moveTo(ptA.x, ptA.y);
                        ctx.lineTo(ptB.x, ptB.y);
                        ctx.lineWidth = Math.max(3, avgScale * 7.5);
                        ctx.strokeStyle = isStrand1
                            ? `rgba(56, 189, 248, ${avgAlpha * 0.95})`
                            : `rgba(14, 165, 233, ${avgAlpha * 0.9})`;
                        ctx.lineCap = 'round';
                        ctx.stroke();
                    }
                };

                drawBackbone(strand1Points, true);
                drawBackbone(strand2Points, false);

                // 4. Draw Nodes with GPU-Accelerated Pre-rendered Sprite
                const drawNodes = (points: typeof strand1Points) => {
                    for (let i = 0; i < points.length; i++) {
                        const pt = points[i];
                        const renderDiameter = pt.size * 2.8;
                        ctx.globalAlpha = pt.alpha;
                        ctx.drawImage(
                            glowSprite,
                            pt.x - renderDiameter / 2,
                            pt.y - renderDiameter / 2,
                            renderDiameter,
                            renderDiameter
                        );
                    }
                    ctx.globalAlpha = 1.0;
                };

                drawNodes(strand1Points);
                drawNodes(strand2Points);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
            window.removeEventListener('resize', resize);
        };
    }, [shouldReduceMotion]);

    return <canvas ref={canvasRef} className={styles.dnaCanvas} aria-hidden="true" />;
}

export default function ResearchOverview() {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

    return (
        <div className={styles.overviewRoot}>
            {/* 1. Hero Section with 3D DNA Helix Background */}
            <section ref={containerRef} className={styles.heroSection} aria-label="Research and Innovation Overview">
                <div className={styles.dnaCanvasWrapper}>
                    <DnaHelixCanvas />
                    <div className={styles.radialBackdropGlow} />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.contentWrap}>
                    <motion.div
                        className={styles.heroContent}
                        style={{
                            y: shouldReduceMotion ? 0 : textY,
                            opacity: shouldReduceMotion ? 1 : opacity,
                        }}
                    >
                        <div className={styles.kickerBadge}>
                            <Sparkles size={14} className={styles.sparkleIcon} />
                            <span>TRANSLATIONAL SCIENTIFIC DISCOVERY</span>
                        </div>

                        <h1 className={styles.heading}>
                            Research &amp; Innovation <br />
                            <span className={styles.goldText}>Ecosystem at JIPS</span>
                        </h1>

                        <p className={styles.lead}>
                            Pioneering multidisciplinary investigations spanning molecular docking, anti-tubercular drug
                            design, bioactive endophyte metabolites, network pharmacology, and standardized herbal product formulations[cite: 187].
                        </p>

                        <div className={styles.btnRow}>
                            <Link href="/research/publications" className={styles.primaryBtn}>
                                <BookOpen size={16} />
                                <span>Explore Publications</span>
                            </Link>
                            <Link href="/research/cell" className={styles.secondaryBtn}>
                                <FlaskConical size={16} />
                                <span>R&amp;D Cell &amp; Grants</span>
                            </Link>
                        </div>

                        <div className={styles.statsStrip}>
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>150+</strong>
                                <span className={styles.statLabel}>Indexed Publications</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>15+</strong>
                                <span className={styles.statLabel}>Patents Filed &amp; Granted</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statCell}>
                                <strong className={styles.statDigit}>₹25L+</strong>
                                <span className={styles.statLabel}>Funded Research Aid</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Key Dropdown Gateways */}
            <section className={styles.gatewaySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH DIRECTORY</span>
                        <h2 className={styles.sectionTitle}>Explore Our Research Divisions</h2>
                        <p className={styles.sectionSubtitle}>
                            Access peer-reviewed published discoveries and learn about our R&amp;D cell initiatives[cite: 188].
                        </p>
                    </motion.div>

                    <div className={styles.gatewayGrid}>
                        {/* Gateway 1: Publications */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.1}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder} style={{ position: 'relative' }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
                                    alt="Faculty and Student Publications"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Scopus &bull; Web of Science</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Scholarly Publications</h3>
                                <p className={styles.cardDesc}>
                                    Discover our year-wise directory of peer-reviewed research papers in molecular modeling,
                                    anti-TB drug development, natural product extraction, and network pharmacology[cite: 189].
                                </p>
                                <Link href="/research/publications" className={styles.cardLink}>
                                    <span>Browse Publications Directory</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Gateway 2: R&D Cell */}
                        <motion.div
                            className={styles.gatewayCard}
                            custom={0.25}
                            variants={riseVariants}
                            initial={shouldReduceMotion ? false : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className={styles.cardImageHolder} style={{ position: 'relative' }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                                    alt="Research and Development Cell"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    className={styles.cardImg}
                                />
                                <span className={styles.cardBadge}>Grants &bull; Patents &bull; Cell</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Research &amp; Development Cell</h3>
                                <p className={styles.cardDesc}>
                                    Promoting institutional inquiry, mentoring undergraduate and postgraduate thesis
                                    dissertations, hosting methodology workshops, and securing governmental research funding[cite: 190].
                                </p>
                                <Link href="/research/cell" className={styles.cardLink}>
                                    <span>Meet R&amp;D Coordinators &amp; Objectives</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Research Thrust Areas */}
            <section className={styles.thrustSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <span className={styles.eyebrow}>RESEARCH THRUSTS</span>
                        <h2 className={styles.sectionTitle}>Core Research Verticals</h2>
                        <p className={styles.sectionSubtitle}>
                            Pioneering interdisciplinary pharmaceutical sciences to address antimicrobial resistance and natural drug discovery[cite: 190].
                        </p>
                    </motion.div>

                    <div className={styles.thrustGrid}>
                        {researchDomains.map((domain, idx) => (
                            <motion.div
                                key={domain.title}
                                className={styles.thrustCard}
                                custom={idx * 0.12}
                                variants={riseVariants}
                                initial={shouldReduceMotion ? false : 'hidden'}
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.thrustImgHolder} style={{ position: 'relative' }}>
                                    <Image
                                        src={domain.image}
                                        alt={domain.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 320px"
                                        className={styles.thrustImg}
                                    />
                                    <span className={styles.thrustTag}>{domain.tag}</span>
                                </div>
                                <div className={styles.thrustBody}>
                                    <h3 className={styles.thrustTitle}>{domain.title}</h3>
                                    <p className={styles.thrustDesc}>{domain.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}