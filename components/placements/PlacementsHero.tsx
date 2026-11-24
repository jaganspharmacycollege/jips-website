'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PlacementsHero.module.css';

interface PlacedStudent {
    id: number;
    name: string;
    role: string;
    company: string;
    salary: string;
    program: string;
    image: string;
}

const placedStudents: PlacedStudent[] = [
    {
        id: 1,
        name: 'D. Kamya Mishra',
        role: 'Medical Representative',
        company: 'Sonic',
        salary: '₹8.40 LPA',
        program: 'B.Pharmacy (2024–2025)',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        name: 'Dr. S. Hemanth',
        role: 'Clinical Pharmacist',
        company: 'Veda Hospital, Nellore',
        salary: '₹6.00 LPA',
        program: 'Pharm.D (Doctor of Pharmacy)',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        name: 'Dr. Aravind Kumar',
        role: 'Clinical Pharmacist',
        company: 'Megha Hospital, Hyderabad',
        salary: '₹6.00 LPA',
        program: 'Pharm.D (Doctor of Pharmacy)',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        name: 'Sk. Sheema',
        role: 'Clinical Pharmacist',
        company: 'B-Live Hospital',
        salary: '₹4.50 LPA',
        program: 'Pharm.D (Doctor of Pharmacy)',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        name: 'B. Indra Kumar',
        role: 'Formulation Chemist',
        company: 'Cleveland Pharma',
        salary: '₹3.60 LPA',
        program: 'B.Pharmacy (2024–2025)',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        name: 'Reddy Sai Teja',
        role: 'Formulation Chemist',
        company: 'Cleveland Pharma',
        salary: '₹3.60 LPA',
        program: 'B.Pharmacy (2024–2025)',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 7,
        name: 'K. Hemanth',
        role: 'Clinical Pharmacist',
        company: 'Malla Reddy Hospital',
        salary: '₹3.50 LPA',
        program: 'Pharm.D (Doctor of Pharmacy)',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 8,
        name: 'Potla Srividya',
        role: 'Quality Assurance Executive',
        company: 'Hetero Drugs Ltd.',
        salary: '₹2.40 LPA',
        program: 'B.Pharmacy (2025–2026)',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
];

export default function PlacementsHero() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className={styles.heroSection} aria-label="Top Packages and Placements Showcase">
            <div className={styles.container}>
                {/* Top Heading */}
                <div className={styles.headingBlock}>


                    <h1 className={styles.mainTitle}>
                        Top Packages
                    </h1>

                </div>

                {/* Expanded 3D Spinning Cylinder Wheel Stage */}
                <div className={styles.cylinderStage}>
                    <div
                        className={`${styles.carouselRing} ${isPaused ? styles.paused : ''}`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {placedStudents.map((student, idx) => {
                            const rotationAngle = idx * (360 / placedStudents.length);

                            return (
                                <div
                                    key={student.id}
                                    className={styles.cardFrame}
                                    style={{
                                        transform: `rotateY(${rotationAngle}deg) translateZ(var(--cylinder-radius))`,
                                    }}
                                >
                                    <div className={styles.cardInner}>
                                        {/* Student Placed Photo */}
                                        <div className={styles.imageHolder}>
                                            <Image
                                                src={student.image}
                                                alt={student.name}
                                                fill
                                                unoptimized
                                                sizes="(max-width: 425px) 160px, (max-width: 768px) 240px, 320px"
                                                className={styles.studentImg}
                                            />
                                            <div className={styles.photoOverlay} />
                                            <span className={styles.packageBadge}>{student.salary}</span>
                                        </div>

                                        {/* Placed Candidate Details */}
                                        <div className={styles.cardInfo}>
                                            <h3 className={styles.studentName}>{student.name}</h3>
                                            <strong className={styles.companyName}>{student.company}</strong>
                                            <span className={styles.roleText}>{student.role}</span>
                                            <span className={styles.programText}>{student.program}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}