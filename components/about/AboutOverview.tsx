'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Building2,
    History,
    Users,
    UserCheck,
    MessageSquare,
    Network,
    Compass,
    Award,
    Landmark,
    ArrowRight,
} from 'lucide-react';
import styles from './AboutOverview.module.css';

interface AboutPortalLink {
    title: string;
    tag: string;
    desc: string;
    href: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

const aboutLinks: AboutPortalLink[] = [
    {
        title: 'About N.E.S',
        tag: 'Founding Society',
        desc: 'The guiding educational trust promoting merit equity, advanced laboratories, and clinical healthcare impact.',
        href: '/about/society',
        icon: Building2,
    },
    {
        title: 'Inception & History',
        tag: 'Chronology',
        desc: 'Tracing our legacy from the inaugural 2005 cohort to postgraduate expansion and industry training tie-ups.',
        href: '/about/history',
        icon: History,
    },
    {
        title: 'Board of Management',
        tag: 'Executive Governance',
        desc: 'Visionary leadership safeguarding academic rigor, laboratory modernization, and campus welfare.',
        href: '/about/management',
        icon: Users,
    },
    {
        title: "Principal's Profile",
        tag: 'Academic Leadership',
        desc: 'Academic research records, doctoral guideship, patents, and scientific appointments under Dr. S. K. Sundaram.',
        href: '/about/principals-profile',
        icon: UserCheck,
    },
    {
        title: "Principal's Message",
        tag: 'Institutional Desk',
        desc: 'A message welcoming aspiring pharmaceutical scientists to clinical exploration and drug discovery.',
        href: '/about/principals-message',
        icon: MessageSquare,
    },
    {
        title: 'Organisation Chart',
        tag: 'Administrative Matrix',
        desc: 'Governance structure connecting trustees, executive directors, institutional heads, and statutory IQAC councils.',
        href: '/about/organisation-chart',
        icon: Network,
    },
    {
        title: 'Vision & Mission',
        tag: 'Foundational Tenets',
        desc: 'Core tenets focusing on outcome-based pedagogy, clinical trial ethics, and nano-formulation research.',
        href: '/about/vision-mission',
        icon: Compass,
    },
    {
        title: 'Approvals & Affiliations',
        tag: 'Statutory Mandate',
        desc: 'Full regulatory compliance with the Pharmacy Council of India (PCI) and the Government of Andhra Pradesh.',
        href: '/about/approvals-affiliations',
        icon: Award,
    },
    {
        title: 'Affiliating University',
        tag: 'Academic Partner',
        desc: 'Curriculum syllabus framework, examinations, and university degree conferral under JNTU Ananthapuramu.',
        href: '/about/affiliating-university',
        icon: Landmark,
    },
];

export default function AboutOverview() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (containerRef.current) {
                containerRef.current.style.setProperty('--scroll-y', `${scrollY * 0.35}px`);
            }
        };

        const onScroll = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.inView);
                    } else {
                        entry.target.classList.remove(styles.inView);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
        );

        const elements = containerRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
        elements?.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={containerRef} className={styles.overviewWrapper}>
            {/* 1. Hero Header */}
            <div className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Institutional Profile</span>
                    <h1 className={styles.heroTitle}>About Jagan&apos;s Institute</h1>
                    <p className={styles.heroSubtitle}>
                        A comprehensive overview of our governing trust, two-decade history, executive leadership, statutory approvals, and university affiliations.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                {/* 2. Key Stats Strip */}
                <div className={styles.statsRow}>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>ESTD 2005</span>
                        <span className={styles.statLabel}>Two Decades of Excellence</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>PCI Approved</span>
                        <span className={styles.statLabel}>Pharmacy Council of India</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>JNTUA</span>
                        <span className={styles.statLabel}>Affiliated Technical University</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>ISO 9001:2015</span>
                        <span className={styles.statLabel}>Quality Certified Institution</span>
                    </div>
                </div>

                {/* 3. Featured Story / Vision Highlight */}
                <article className={`${styles.storyBlock} ${styles.animateOnScroll}`}>
                    <div className={styles.storyContent}>
                        <span className={styles.storyTag}>Foundational Journey</span>
                        <h2 className={styles.storyTitle}>Nurturing Next-Generation Healthcare Scientists</h2>
                        <p className={styles.storyText}>
                            Jagan&apos;s Institute of Pharmaceutical Sciences was founded with an uncompromising mission: to establish benchmark pharmaceutical education in coastal Andhra Pradesh, integrating hospital clinical practice with modern industrial formulation laboratories.
                        </p>
                        <p className={styles.storyText}>
                            Through sustained mentorship, active hospital rotations, and cutting-edge analytical instrumentation, we prepare our scholars for successful careers across clinical pharmacy, global research, and manufacturing.
                        </p>
                    </div>
                    <div className={styles.storyMediaPane}>
                        <Image
                            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=900&auto=format&fit=crop"
                            alt="Pharmacy Laboratory at JIPS"
                            fill
                            sizes="(max-width: 840px) 100vw, 420px"
                            className={styles.storyImg}
                            priority
                        />
                    </div>
                </article>

                {/* 4. Directory of Standalone Subsections */}
                <div className={`${styles.navHeadingRow} ${styles.animateOnScroll}`}>
                    <span className={styles.navSectionTag}>Explore Divisions</span>
                    <h3 className={styles.navSectionTitle}>Institutional Directory</h3>
                </div>

                <div className={styles.portalGrid}>
                    {aboutLinks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.portalCard} ${styles.animateOnScroll}`}
                                style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
                            >
                                <div>
                                    <div className={styles.cardTop}>
                                        <div className={styles.iconBox}>
                                            <Icon size={20} />
                                        </div>
                                        <span className={styles.cardTag}>{item.tag}</span>
                                    </div>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <span>Explore Details</span>
                                    <ArrowRight size={14} className={styles.footerArrow} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}