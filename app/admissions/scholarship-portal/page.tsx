'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    CheckCircle2,
    ExternalLink
} from 'lucide-react';
import styles from './ScholarshipPortal.module.css';

interface ScholarshipItem {
    id: string;
    agency: string;
    badge: string;
    title: string;
    description: string;
    criteria: string[];
    linkText: string;
    portalUrl: string;
    image: string;
}

const SCHOLARSHIP_DATA: ScholarshipItem[] = [
    {
        id: 'jvd-scheme',
        agency: 'Government of Andhra Pradesh',
        badge: '100% Tuition Waiver',
        title: 'Jagananna Vidya Deevena (JVD)',
        description: 'Government tuition fee reimbursement covering statutory fees for eligible convener-quota students in B. Pharm, M. Pharm, and Pharm. D programs.',
        criteria: [
            'Applicable to Andhra Pradesh domicile candidates admitted through AP EAPCET / AP PGECET counselling.',
            'Annual family household income must be within government prescribed limits (valid White Ration Card / Income Certificate).',
            'Mandatory minimum 75% biometric attendance maintenance per semester.',
        ],
        linkText: 'JnanaBhumi State Portal',
        portalUrl: 'https://jnanabhumi.ap.gov.in/',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop',
    },
    {
        id: 'gpat-stipend',
        agency: 'AICTE / Ministry of Education, Govt. of India',
        badge: '₹12,400 / Month Stipend',
        title: 'GPAT Post-Graduate Scholarship',
        description: 'Monthly direct-benefit transfer financial stipend granted to GPAT-qualified candidates admitted into postgraduate M. Pharmacy research specializations.',
        criteria: [
            'Candidate must possess a valid GPAT qualification score card at the time of admission.',
            'Enrolled full-time in AICTE & PCI approved M. Pharm (Pharmaceutics, Analysis, Pharmacology, Chemistry).',
            'Requires institutional bank account validation and regular academic progression endorsement.',
        ],
        linkText: 'AICTE PG Portal',
        portalUrl: 'https://www.aicte-india.org/',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=900&auto=format&fit=crop',
    },
    {
        id: 'national-portal',
        agency: 'Central Government of India',
        badge: 'Minority & Merit Schemes',
        title: 'National Scholarship Portal (NSP)',
        description: 'Central sector scholarship assistance for minority communities, single girl children, and meritorious students across pharmacy curricula.',
        criteria: [
            'Covers Post-Matric Scholarships for Minorities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).',
            'Central Sector Scheme of Scholarships for College and University Students.',
            'Requires national portal registration and Aadhaar-linked bank account verification.',
        ],
        linkText: 'National Scholarship Portal',
        portalUrl: 'https://scholarships.gov.in/',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
    },
];

export default function ScholarshipPortalPage() {
    const pageRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (pageRef.current) {
                pageRef.current.style.setProperty('--scroll-y', `${scrollY * 0.4}px`);
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
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        const animatedElements = pageRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
        animatedElements?.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <main ref={pageRef} className={styles.pageWrapper}>
            {/* 1. Hero Header */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Financial Assistance & Welfare</span>
                    <h1 className={styles.heroTitle}>Scholarship & Fee Support Portal</h1>
                    <p className={styles.heroSubtitle}>
                        Comprehensive guidance on government fee reimbursements, GPAT PG stipends, and national merit welfare schemes.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* 2. Metric Highlights */}
                <section className={styles.statsRow}>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Govt. Fee Reimbursement (JVD)</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>₹12,400/m</span>
                        <span className={styles.statLabel}>AICTE GPAT M.Pharm Stipend</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>NSP / DBT</span>
                        <span className={styles.statLabel}>Central Sector Support</span>
                    </div>
                    <div className={`${styles.statCard} ${styles.animateOnScroll}`}>
                        <span className={styles.statValue}>Help Desk</span>
                        <span className={styles.statLabel}>On-Campus Verification Support</span>
                    </div>
                </section>

                {/* 3. Scheme Showcases */}
                <section className={styles.schemeSection}>
                    {SCHOLARSHIP_DATA.map((scheme, idx) => (
                        <article
                            key={scheme.id}
                            className={`${styles.schemeBlock} ${idx % 2 === 1 ? styles.schemeBlockReverse : ''} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${idx * 0.08}s` }}
                        >
                            <div className={styles.schemeImagePane}>
                                <Image
                                    src={scheme.image}
                                    alt={scheme.title}
                                    fill
                                    sizes="(max-width: 820px) 100vw, 380px"
                                    className={styles.schemeImg}
                                    priority={idx === 0}
                                />
                                <span className={styles.schemeBadge}>{scheme.badge}</span>
                            </div>

                            <div className={styles.schemeBody}>
                                <div>
                                    <span className={styles.schemeAgency}>{scheme.agency}</span>
                                    <h2 className={styles.schemeTitle}>{scheme.title}</h2>
                                    <p className={styles.schemeDesc}>{scheme.description}</p>

                                    <div className={styles.criteriaList}>
                                        {scheme.criteria.map((item, cIdx) => (
                                            <div key={cIdx} className={styles.criteriaItem}>
                                                <CheckCircle2 size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.ctaRow}>
                                    <a
                                        href={scheme.portalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.portalBtn}
                                    >
                                        <span>{scheme.linkText}</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}