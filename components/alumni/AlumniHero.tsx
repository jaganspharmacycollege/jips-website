'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './AlumniHero.module.css';

interface AlumniProfile {
    id: string;
    name: string;
    role: string;
    company: string;
    batch: string;
    image: string;
}

const alumniList: AlumniProfile[] = [
    {
        id: 'a1',
        name: 'Dr. Priya S. Sharma',
        role: 'Principal Formulation Scientist',
        company: 'Novartis Global R&D, Basel',
        batch: 'Class of 2012',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'a2',
        name: 'Rajesh K. Varma',
        role: 'Associate VP & Tech Lead',
        company: "Dr. Reddy's Laboratories",
        batch: 'Class of 2010',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'a3',
        name: 'Dr. Ananya Mukherjee',
        role: 'Senior Clinical Pharmacotherapist',
        company: 'Apollo Hospitals Clinical Network',
        batch: 'Class of 2016',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'a4',
        name: 'Vikram Aditya',
        role: 'Co-Founder & CEO',
        company: 'BioPharm Therapeutics Inc.',
        batch: 'Class of 2014',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'a5',
        name: 'Dr. Sneha Reddy',
        role: 'Regulatory Affairs Manager',
        company: 'Sun Pharma International',
        batch: 'Class of 2017',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80',
    },
];

// Tripled roster for seamless continuous infinite horizontal flow
const loopAlumni = [...alumniList, ...alumniList, ...alumniList];

export default function AlumniHero() {
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const scrollPosRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    // Dynamic 3D curve orientation based on card position relative to viewport center
    const updateCardTransforms = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const cards = track.getElementsByClassName(styles.slideCard);
        const trackRect = track.getBoundingClientRect();
        const centerX = trackRect.left + trackRect.width / 2;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distFromCenter = cardCenter - centerX;
            const normalizedDist = Math.max(-1.5, Math.min(1.5, distFromCenter / (trackRect.width / 2)));

            // Curvature mathematics: Rotate Y opposite to position, translate Z backwards into screen
            const rotateY = normalizedDist * -30;
            const translateZ = -Math.abs(normalizedDist) * 120;
            const scale = 1 - Math.abs(normalizedDist) * 0.12;
            const brightness = 1 - Math.abs(normalizedDist) * 0.25;

            card.style.transform = `perspective(1200px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            card.style.filter = `brightness(${Math.max(0.7, brightness)})`;
            card.style.zIndex = `${Math.round(20 - Math.abs(normalizedDist) * 10)}`;
        }
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const speed = 0.8; // Smooth ambient glide speed
        const loopDistance = track.scrollWidth / 3;

        const animate = () => {
            if (!isPaused) {
                scrollPosRef.current += speed;
                if (scrollPosRef.current >= loopDistance) {
                    scrollPosRef.current -= loopDistance;
                }
                track.scrollLeft = scrollPosRef.current;
            }
            updateCardTransforms();
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPaused, updateCardTransforms]);

    return (
        <section className={styles.sectionWrap} aria-label="Alumni Global Network">
            {/* 1. Single-Line Top Header & Attractive Alumni Note */}
            <div className={styles.headerBlock}>
                <div className={styles.kickerBadge}>
                    <span>OUR GLOBAL AMBASSADORS</span>
                </div>
                <h1 className={styles.mainTitle}>
                    Celebrating Our Alumni Shaping Global Healthcare
                </h1>
            </div>

            {/* 2. 3D Curve Flow Carousel Stage */}
            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Curvature Cutouts for top, bottom, and edge depth flare */}
                <div className={styles.curveMaskTop} />
                <div className={styles.curveMaskBottom} />
                <div className={`${styles.edgeVignette} ${styles.edgeLeft}`} />
                <div className={`${styles.edgeVignette} ${styles.edgeRight}`} />

                {/* 3D Track */}
                <div ref={trackRef} className={styles.scrollTrack}>
                    <div className={styles.trackInner}>
                        {loopAlumni.map((alum, idx) => (
                            <div key={`${alum.id}-${idx}`} className={styles.slideCard}>
                                <div className={styles.imageWrapper} style={{ position: 'relative' }}>
                                    <Image
                                        src={alum.image}
                                        alt={alum.name}
                                        fill
                                        unoptimized
                                        priority={idx < 3}
                                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 420px"
                                        className={styles.imageItem}
                                    />

                                    {/* Gradient Scrim */}
                                    <div className={styles.cardScrim} />

                                    {/* Metadata Overlay: Name, Role & Company */}
                                    <div className={styles.cardInfoPane}>
                                        <span className={styles.alumniBatch}>{alum.batch}</span>
                                        <h2 className={styles.alumniName}>{alum.name}</h2>
                                        <strong className={styles.alumniRole}>{alum.role}</strong>
                                        <span className={styles.alumniCompany}>{alum.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}