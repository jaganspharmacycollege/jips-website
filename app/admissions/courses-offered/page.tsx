'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Award, Users } from 'lucide-react';
import styles from './CoursesOffered.module.css';

interface Course {
    id: string;
    title: string;
    degree: string;
    duration: string;
    intake: string;
    eligibility: string;
    description: string;
    image: string;
}

const COURSES_DATA: Course[] = [
    {
        id: 'b-pharm',
        title: 'Bachelor of Pharmacy (B. Pharm)',
        degree: 'Undergraduate',
        duration: '4 Years',
        intake: '100 Seats',
        eligibility: '10+2 with Physics, Chemistry & Biology/Maths',
        description:
            'Comprehensive PCI-approved foundation covering pharmaceutical chemistry, pharmacology, pharmaceutics, and clinical formulation practice.',
        image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-pharm-ceutics',
        title: 'M. Pharm - Pharmaceutics',
        degree: 'Postgraduate',
        duration: '2 Years',
        intake: '15 Seats',
        eligibility: 'B. Pharmacy degree from PCI recognized institution',
        description:
            'Advanced specialization in targeted drug delivery systems, modern industrial formulation, nano-biotechnology, and novel carrier design.',
        image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-pharm-analysis',
        title: 'M. Pharm - Pharmaceutical Analysis',
        degree: 'Postgraduate',
        duration: '2 Years',
        intake: '15 Seats',
        eligibility: 'B. Pharmacy degree from PCI recognized institution',
        description:
            'Mastery in spectroscopy, HPLC chromatography, pharmaceutical validation, purity profiling, and global FDA quality compliance.',
        image:
            'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-pharm-cology',
        title: 'M. Pharm - Pharmacology',
        degree: 'Postgraduate',
        duration: '2 Years',
        intake: '15 Seats',
        eligibility: 'B. Pharmacy degree from PCI recognized institution',
        description:
            'In-depth study of molecular mechanisms of therapeutics, preclinical toxicology screening, bioassays, and clinical pharmacokinetics.',
        image:
            'https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'pharm-d',
        title: 'Doctor of Pharmacy (Pharm. D)',
        degree: 'Doctoral',
        duration: '6 Years (5 yrs + 1 yr Residency)',
        intake: '30 Seats',
        eligibility: '10+2 (Bi.P.C / M.P.C) or Diploma in Pharmacy',
        description:
            'Professional clinical training integrated directly with hospital ward rounds, prescription auditing, and bedside patient care.',
        image:
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'pharm-d-pb',
        title: 'Pharm. D (Post Baccalaureate)',
        degree: 'Doctoral Post-B.Pharm',
        duration: '3 Years (2 yrs + 1 yr Residency)',
        intake: '10 Seats',
        eligibility: 'B. Pharmacy degree from PCI recognized college',
        description:
            'Fast-track clinical residency tailored for B. Pharm graduates seeking careers in pharmacovigilance and healthcare clinical consultancy.',
        image:
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
    },
];

export default function CoursesOfferedPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.inView);
                    } else {
                        // Re-animates smoothly when user leaves and returns
                        entry.target.classList.remove(styles.inView);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        const animatedElements = containerRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
        animatedElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main ref={containerRef} className={styles.pageWrapper}>
            {/* 1. Animated Hero Header */}
            <section className={styles.hero}>
                <div className={`${styles.heroContent} ${styles.animateOnScroll}`}>
                    <span className={styles.heroTag}>Admissions 2026 - 2027</span>
                    <h1 className={styles.heroTitle}>Academic Programs & Courses</h1>
                    <p className={styles.heroSubtitle}>
                        PCI-approved and university-affiliated degrees crafted to prepare leaders in formulation, clinical pharmacy, and global research.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* 2. Key Highlights Strip (Each card animates with staggered delay) */}
                <section className={styles.statsRow}>
                    <div
                        className={`${styles.statCard} ${styles.animateOnScroll}`}
                        style={{ transitionDelay: '0.05s' }}
                    >
                        <span className={styles.statValue}>PCI & AICTE</span>
                        <span className={styles.statLabel}>Approved Degrees</span>
                    </div>
                    <div
                        className={`${styles.statCard} ${styles.animateOnScroll}`}
                        style={{ transitionDelay: '0.12s' }}
                    >
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Placement Support</span>
                    </div>
                    <div
                        className={`${styles.statCard} ${styles.animateOnScroll}`}
                        style={{ transitionDelay: '0.19s' }}
                    >
                        <span className={styles.statValue}>18+</span>
                        <span className={styles.statLabel}>Modern Laboratories</span>
                    </div>
                    <div
                        className={`${styles.statCard} ${styles.animateOnScroll}`}
                        style={{ transitionDelay: '0.26s' }}
                    >
                        <span className={styles.statValue}>JIPS</span>
                        <span className={styles.statLabel}>AP EAPCET Code</span>
                    </div>
                </section>

                {/* 3. Section Title */}
                <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
                    <h2 className={styles.sectionTitle}>Offered Degrees & Intakes</h2>
                    <p className={styles.sectionDescription}>
                        Explore our comprehensive undergraduate, postgraduate, and professional doctoral offerings.
                    </p>
                </div>

                {/* 4. Adaptive Responsive Grid (320px to Desktop) with Individual Component Animations */}
                <section className={styles.coursesGrid}>
                    {COURSES_DATA.map((course, idx) => (
                        <article
                            key={course.id}
                            className={`${styles.courseCard} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${(idx % 3) * 0.12}s` }}
                        >
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className={styles.cardImage}
                                    priority={idx < 2}
                                />
                                <span className={styles.cardTag}>{course.degree}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.courseName}>{course.title}</h3>
                                <p className={styles.courseDesc}>{course.description}</p>

                                <div className={styles.metaList}>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaKey}>
                                            <Clock size={12} style={{ marginRight: 5 }} />
                                            Duration
                                        </span>
                                        <span className={styles.metaVal}>{course.duration}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaKey}>
                                            <Users size={12} style={{ marginRight: 5 }} />
                                            Intake
                                        </span>
                                        <span className={styles.metaVal}>{course.intake}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaKey}>
                                            <Award size={12} style={{ marginRight: 5 }} />
                                            Eligibility
                                        </span>
                                        <span className={styles.metaVal}>{course.eligibility}</span>
                                    </div>
                                </div>

                                <Link
                                    href="/admissions/admission-process"
                                    className={styles.cardActionBtn}
                                >
                                    <span>Apply for Admission</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}