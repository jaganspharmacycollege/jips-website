'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle,
    Compass,
    FileCheck,
    ShieldCheck,
    Building2
} from 'lucide-react';
import styles from './AdmissionProcess.module.css';

interface Milestone {
    id: string;
    step: string;
    phase: string;
    title: string;
    description: string;
    authority: string;
    timeline: string;
    image: string;
}

const CONVENER_PATHWAY: Milestone[] = [
    {
        id: 'c-1',
        step: 'Phase 01',
        phase: 'Merit Assessment',
        title: 'State Entrance Examination Qualification',
        description: 'Candidates appear for AP EAPCET (for B. Pharm & Pharm. D) or GPAT / AP PGECET (for M. Pharm & Pharm. D PB) and obtain qualifying merit state ranks.',
        authority: 'APSCHE Examination Authority',
        timeline: 'April – June',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'c-2',
        step: 'Phase 02',
        phase: 'Documentation',
        title: 'Online Registration & Certificate Verification',
        description: 'Upload required qualifying credentials onto the state web counselling portal. Physical helpline centres verify candidate reservation and category privileges.',
        authority: 'Government Helpline Centers (HLC)',
        timeline: 'July',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'c-3',
        step: 'Phase 03',
        phase: 'Choice Filling',
        title: 'Exercising Web Options (Code: JIPS)',
        description: 'Log into the state portal to prioritize degree selections. Place Jagan\'s Institute of Pharmaceutical Sciences (EAPCET Code: JIPS) as option #1.',
        authority: 'APSCHE Web Counselling',
        timeline: 'July – August',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'c-4',
        step: 'Phase 04',
        phase: 'Confirmation',
        title: 'Official Seat Allotment & Provisional Letter',
        description: 'Download the formal electronic allotment order determining course seat placement based on state merit rankings and candidate category quotas.',
        authority: 'Convener AP Admissions',
        timeline: 'August',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'c-5',
        step: 'Phase 05',
        phase: 'Onboarding',
        title: 'Campus Reporting & Academic Induction',
        description: 'Report directly to the JIPS Nellore campus with original credentials, complete biometrics verification, finalize hostel allocation, and attend orientation.',
        authority: 'JIPS Admissions Directorate',
        timeline: 'September',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
    },
];

const MANAGEMENT_PATHWAY: Milestone[] = [
    {
        id: 'm-1',
        step: 'Phase 01',
        phase: 'Eligibility Check',
        title: 'Academic Scrutiny & Minimum Qualification',
        description: 'Candidates must possess at least 45% aggregate in 10+2 (40% for reserved classes) with Physics, Chemistry, and Mathematics/Biology from recognized boards.',
        authority: 'PCI & University Norms',
        timeline: 'June – Ongoing',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-2',
        step: 'Phase 02',
        phase: 'Application',
        title: 'Direct Institutional Registration (Cat-B)',
        description: 'Obtain and fill the institutional Category-B admission form directly through our campus admissions office or via digital pre-registration assistance.',
        authority: 'College Admissions Desk',
        timeline: 'July – August',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-3',
        step: 'Phase 03',
        phase: 'Verification',
        title: 'Merit Assessment & Document Validation',
        description: 'Transparent evaluation of qualifying marks followed by personal academic counseling and seat reservation under the statutory management intake.',
        authority: 'College Governing Body',
        timeline: 'August',
        image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'm-4',
        step: 'Phase 04',
        phase: 'Final Enrollment',
        title: 'University Ratification & Fee Completion',
        description: 'Formal confirmation of Category-B registration with affiliating university approval and onboarding kit distribution.',
        authority: 'Registrar & Principal',
        timeline: 'September',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    },
];

export default function AdmissionProcessPage() {
    const [activePathway, setActivePathway] = useState<'convener' | 'management'>('convener');
    const pageRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLElement>(null);
    const checklistRef = useRef<HTMLElement>(null);
    const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

    const currentMilestones = activePathway === 'convener' ? CONVENER_PATHWAY : MANAGEMENT_PATHWAY;

    useEffect(() => {
        let animationFrameId: number;
        let targetScroll = window.scrollY;
        let currentScroll = window.scrollY;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const updateLoop = () => {
            targetScroll = window.scrollY;
            currentScroll = lerp(currentScroll, targetScroll, 0.12);

            if (pageRef.current) {
                pageRef.current.style.setProperty('--smooth-scroll', `${currentScroll * 0.42}px`);
                pageRef.current.style.setProperty(
                    '--scroll-progress',
                    `${Math.min(currentScroll / 450, 1)}`
                );
            }

            if (timelineRef.current) {
                const rect = timelineRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const totalHeight = rect.height;
                const scrolledIntoTimeline = windowHeight * 0.7 - rect.top;
                const percentage = Math.min(Math.max((scrolledIntoTimeline / totalHeight) * 100, 0), 100);
                timelineRef.current.style.setProperty('--timeline-fill', `${percentage}%`);
            }

            animationFrameId = requestAnimationFrame(updateLoop);
        };

        animationFrameId = requestAnimationFrame(updateLoop);

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
            {
                threshold: 0.18,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        blocksRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        if (checklistRef.current) {
            observer.observe(checklistRef.current);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, [activePathway]);

    return (
        <main ref={pageRef} className={styles.pageWrapper}>
            {/* 1. Hero Header */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Admissions 2026 - 2027</span>
                    <h1 className={styles.heroTitle}>Admission Roadmap & Pathways</h1>
                    <p className={styles.heroSubtitle}>
                        A transparent, step-by-step roadmap to joining one of Andhra Pradesh&apos;s premier pharmaceutical education institutions.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* 2. Pathway Switcher */}
                <div className={styles.tabContainer}>
                    <div className={styles.tabPill}>
                        <button
                            onClick={() => setActivePathway('convener')}
                            className={`${styles.tabBtn} ${activePathway === 'convener' ? styles.tabBtnActive : ''}`}
                        >
                            <Compass size={16} />
                            <span>Category-A (Govt. Convener Quota)</span>
                        </button>
                        <button
                            onClick={() => setActivePathway('management')}
                            className={`${styles.tabBtn} ${activePathway === 'management' ? styles.tabBtnActive : ''}`}
                        >
                            <Building2 size={16} />
                            <span>Category-B (Management / Direct)</span>
                        </button>
                    </div>
                </div>

                {/* 3. Re-animating Timeline Stream */}
                <section ref={timelineRef} className={styles.timelineSection}>
                    <div className={styles.timelineProgressTrack} />

                    {currentMilestones.map((item, idx) => (
                        <div
                            key={item.id}
                            ref={(el) => {
                                blocksRef.current[idx] = el;
                            }}
                            className={styles.stepBlock}
                            style={{ transitionDelay: `${0.04 + (idx % 2) * 0.04}s` }}
                        >
                            <div className={styles.stepNode} />

                            <div className={styles.stepContent}>
                                <div className={styles.stepImagePane}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        className={styles.stepImage}
                                    />
                                    <span className={styles.stepNumberBadge}>{item.step}</span>
                                </div>

                                <div className={styles.stepDetails}>
                                    <div>
                                        <div className={styles.stepMetaRow}>
                                            <span>{item.phase}</span>
                                            <span>•</span>
                                            <span>{item.timeline}</span>
                                        </div>
                                        <h3 className={styles.stepTitle}>{item.title}</h3>
                                        <p className={styles.stepDesc}>{item.description}</p>
                                    </div>

                                    <div className={styles.stepFooter}>
                                        <div className={styles.stepChannel}>
                                            <ShieldCheck size={14} color="#1e3a8a" />
                                            <span>{item.authority}</span>
                                        </div>
                                        <div className={styles.stepTime}>Code: JIPS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 4. Document Checklist Terminal */}
                <section ref={checklistRef} className={styles.checklistSection}>
                    <div className={styles.checklistHeader}>
                        <h2 className={styles.checklistTitle}>
                            <FileCheck size={26} color="#1e3a8a" />
                            Document Verification Protocol
                        </h2>
                        <p className={styles.checklistSub}>
                            Ensure you have the original certificates plus 3 sets of photocopies prior to reporting at the campus desk.
                        </p>
                    </div>

                    <div className={styles.docList}>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>AP EAPCET / GPAT / PGECET Official Hall Ticket & Rank Card</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>SSC / 10th Standard Original Marks Memo (Proof of Date of Birth)</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Intermediate (10+2) / D.Pharm / B.Pharm Cumulative Marks Memorandum</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Transfer Certificate (TC) and Conduct Certificate from previous institution</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Bonafide / Study Certificates spanning Class 6 to the Qualifying Examination</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Integrated Caste / Community Certificate issued by MeeSeva (if applicable)</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Income Certificate / White Ration Card (for full fee reimbursement claims)</span>
                        </div>
                        <div className={styles.docItem}>
                            <CheckCircle size={16} className={styles.docIcon} />
                            <span>Aadhar Cards of Student & Parents alongside 6 Passport-size Photographs</span>
                        </div>
                    </div>

                    <div className={styles.ctaRow}>
                        <span className={styles.ctaText}>
                            Need personal guidance on Web Options or Category-B application forms?
                        </span>
                        <Link href="/admissions/tuition-fee" className={styles.ctaBtn}>
                            <span>Review Tuition Fees</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}