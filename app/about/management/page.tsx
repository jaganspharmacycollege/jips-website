'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { GraduationCap, FlaskConical, HeartHandshake, ShieldCheck, ChevronLeft, ChevronRight, Sparkles, Building2, Users2, CheckCircle2 } from 'lucide-react';
import styles from './Society.module.css';

const sliderImages = [
    {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
        title: 'Managing Society Governance',
        subtitle: 'Guiding Institutional Development, Student Welfare & Academic Standards',
    },
    {
        url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80',
        title: 'Cutting-Edge Analytical R&D',
        subtitle: 'Continuous Investment in Advanced Pharmacology & Formulation Laboratories',
    },
    {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
        title: 'Student-Centric Education',
        subtitle: 'Nurturing Compassionate Clinicians and Pharmaceutical Researchers',
    },
];

const societyPillars = [
    {
        num: '01',
        title: 'Student Welfare & Equity',
        tag: 'Welfare Policy',
        desc: 'Empowering students with comprehensive welfare policies, scholarship support, and accessible pharmaceutical education.',
        icon: GraduationCap,
        accent: '#0284c7',
    },
    {
        num: '02',
        title: 'Translational Infrastructure',
        tag: 'R&D Rigor',
        desc: 'Continuous investment in advanced instrumentation: HPLC, UV-Vis, pilot compounding plants, and pharmacology research facilities.',
        icon: FlaskConical,
        accent: '#ca8a04',
    },
    {
        num: '03',
        title: 'Clinical & Societal Impact',
        tag: 'Outreach',
        desc: 'Conducting community health screenings, free rural drug distribution, and regional pharmacovigilance workshops.',
        icon: HeartHandshake,
        accent: '#16a34a',
    },
    {
        num: '04',
        title: 'Statutory Rigor & Ethics',
        tag: 'Governance',
        desc: 'Upholding strict institutional standards aligned with PCI, AICTE, and JNTUA benchmarks for continuous academic distinction.',
        icon: ShieldCheck,
        accent: '#e11d48',
    },
];

const bentoHighlights = [
    {
        icon: Building2,
        title: 'Institutional Development Policies',
        desc: 'The managing society guides physical development, lab modernization, and institutional welfare initiatives.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    },
    {
        icon: Users2,
        title: 'Collaborative Governance',
        desc: 'Led by dedicated educationists, senior researchers, and healthcare professionals committed to academic quality.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
];

// Updated Leadership Profiles based on your exact institutional data
const keyLeaders = [
    {
        name: 'Sri S.V. Madhusudhan Reddy',
        role: 'Chairman',
        designation: 'Managing Society Leadership',
        bio: 'Leads the management in building an institution focused on quality pharmacy education and student welfare.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Dr. J. Venkata Suresh',
        role: 'Principal',
        designation: 'Professor & Head, Dept. of Pharmacology',
        bio: 'Directs academic administration, curriculum rigor, and research initiatives as Professor and Principal.',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Executive Secretary',
        role: 'Secretary',
        designation: 'Managing Society',
        bio: 'Oversees institutional policy execution, statutory compliance, and administrative operations.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Correspondent & Treasurer',
        role: 'Correspondent & Treasurer',
        designation: 'Managing Society',
        bio: 'Directs financial governance, resource allocation, and welfare scholarship endowments.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
];

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Society() {
    const shouldReduceMotion = useReducedMotion();
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    return (
        <div ref={containerRef} className={styles.societyWrapper}>
            {/* 1. Full-Size Hero Slider with LCP Optimization */}
            <section className={styles.heroSliderContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className={styles.slide}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <Image
                            src={sliderImages[currentSlide].url}
                            alt={sliderImages[currentSlide].title}
                            fill
                            priority
                            sizes="100vw"
                            className={styles.sliderImage}
                        />
                        <div className={styles.sliderOverlay} />
                        <div className={styles.sliderCaption}>
                            <span className={styles.sliderBadge}>
                                <Sparkles size={14} /> Managing Society &amp; Governance
                            </span>
                            <h1 className={styles.sliderHeading}>{sliderImages[currentSlide].title}</h1>
                            <p className={styles.sliderSubtext}>{sliderImages[currentSlide].subtitle}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* High-Contrast Carousel Controls */}
                <div className={styles.sliderControls}>
                    <button
                        onClick={handlePrev}
                        className={styles.sliderNavBtn}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={22} className={styles.arrowIcon} />
                    </button>
                    <div className={styles.sliderDots}>
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`${styles.sliderDot} ${index === currentSlide ? styles.activeSliderDot : ''
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className={styles.sliderNavBtn}
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={22} className={styles.arrowIcon} />
                    </button>
                </div>
            </section>

            {/* Main Container */}
            <div className={styles.container}>
                {/* 2. Overview Narrative & Managing Society Policies */}
                <motion.div
                    className={styles.introBlock}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.introLeft}>
                        <span className={styles.sectionEyebrow}>GOVERNING BODY</span>
                        <h2 className={styles.introTitle}>
                            Managing Society &amp; <span className={styles.highlightGold}>Welfare Policies</span>
                        </h2>
                        <p className={styles.introParagraph}>
                            The institute is run by its <strong>managing society</strong>, which guides its continuous development and welfare policies. Committed to creating a premier educational institution, the society ensures that every student gains access to high-standard pharmaceutical training, modernized laboratories, and comprehensive wellness initiatives.
                        </p>

                        <div className={styles.checklist}>
                            <div className={styles.checkItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Executive focus on student welfare and quality education</span>
                            </div>
                            <div className={styles.checkItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Statutory compliance with PCI, AICTE &amp; JNTUA standards</span>
                            </div>
                            <div className={styles.checkItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Continuous modernization of research labs &amp; hospital rotations</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.introRight}>
                        <div className={styles.quickStatCard}>
                            <span className={styles.statLargeNum}>20+</span>
                            <span className={styles.statLargeLabel}>Years of Educational Stewardship</span>
                        </div>
                        <div className={styles.quickStatCard}>
                            <span className={styles.statLargeNum}>100%</span>
                            <span className={styles.statLargeLabel}>PCI &amp; Statutory Compliance</span>
                        </div>
                        <div className={styles.quickStatCard}>
                            <span className={styles.statLargeNum}>B, M &amp; D</span>
                            <span className={styles.statLargeLabel}>B.Pharm, M.Pharm &amp; Pharm D</span>
                        </div>
                        <div className={styles.quickStatCard}>
                            <span className={styles.statLargeNum}>Autonomy</span>
                            <span className={styles.statLargeLabel}>Academic Excellence &amp; R&amp;D</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Leadership & Governing Body Members */}
                <div className={styles.trustMembersSection}>
                    <div className={styles.sectionHeaderCentered}>
                        <span className={styles.sectionEyebrow}>INSTITUTIONAL LEADERSHIP</span>
                        <h3 className={styles.sectionTitle}>Managing Society &amp; Key Leadership</h3>
                        <p className={styles.sectionSubtitle}>
                            Meet the leaders and academic administrators guiding our institution toward national prominence.
                        </p>
                    </div>

                    <div className={styles.membersGrid}>
                        {keyLeaders.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                className={styles.memberCard}
                                custom={idx}
                                variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.15 }}
                            >
                                <div className={styles.memberImgWrapper}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        className={styles.memberImg}
                                    />
                                    <div className={styles.memberOverlay} />
                                    <span className={styles.memberBadge}>{member.role}</span>
                                </div>
                                <div className={styles.memberBody}>
                                    <h4 className={styles.memberName}>{member.name}</h4>
                                    <span className={styles.memberQual}>{member.designation}</span>
                                    <p className={styles.memberBio}>{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Member Details Notice Box */}

                </div>

                {/* 4. Visual Bento Section */}
                <div className={styles.bentoSection}>
                    <div className={styles.sectionHeaderCentered}>
                        <span className={styles.sectionEyebrow}>TRANSLATIONAL IMPACT</span>
                        <h3 className={styles.sectionTitle}>Ecosystem of Research &amp; Governance</h3>
                    </div>
                    <div className={styles.bentoGrid}>
                        {bentoHighlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    className={styles.bentoCard}
                                    custom={idx}
                                    variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className={styles.bentoImageWrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className={styles.bentoImg}
                                        />
                                        <div className={styles.bentoOverlay} />
                                    </div>
                                    <div className={styles.bentoContent}>
                                        <div className={styles.bentoIconBadge}>
                                            <Icon size={22} />
                                        </div>
                                        <h4 className={styles.bentoHeading}>{item.title}</h4>
                                        <p className={styles.bentoDesc}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 5. Pillars of the Educational Society */}
                <div className={styles.pillarsSection}>
                    <div className={styles.sectionHeaderCentered}>
                        <span className={styles.sectionEyebrow}>FOUNDATIONAL TENETS</span>
                        <h3 className={styles.sectionTitle}>Pillars of the Managing Society</h3>
                        <p className={styles.sectionSubtitle}>
                            The core principles steering our institutional development, welfare initiatives, and clinical training.
                        </p>
                    </div>
                    <div className={styles.pillarGrid}>
                        {societyPillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    className={styles.modernPillarCard}
                                    key={pillar.num}
                                    custom={idx}
                                    variants={shouldReduceMotion ? undefined : fadeUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className={styles.pillarCardTop}>
                                        <div
                                            className={styles.pillarIconWrap}
                                            style={{ color: pillar.accent, borderColor: `${pillar.accent}40` }}
                                        >
                                            <Icon size={22} />
                                        </div>
                                        <span className={styles.pillarNumber}>{pillar.num}</span>
                                    </div>
                                    <span className={styles.pillarTag}>{pillar.tag}</span>
                                    <h4 className={styles.pillarHeading}>{pillar.title}</h4>
                                    <p className={styles.pillarDescription}>{pillar.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}