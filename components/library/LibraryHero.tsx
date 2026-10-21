'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    type Variants,
} from 'framer-motion';
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from 'lucide-react';
import styles from './LibraryHero.module.css';

interface PopularBook {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

const popularHoldings: PopularBook[] = [
    {
        id: 'p1',
        title: 'Indian Pharmacopoeia',
        subtitle: 'Volume I • Standard Monograph',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'p2',
        title: 'Remington Pharmaceutical',
        subtitle: 'Volume II • Formulations',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'p3',
        title: 'Goodman & Gilman',
        subtitle: 'Volume III • Therapeutics',
        image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'p4',
        title: 'K.D. Tripathi Pharmacology',
        subtitle: 'Clinical Essentials',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
    },
];

const scheduleDays = [
    { day: 'Sun', date: '11', active: false },
    { day: 'Mon', date: '12', active: false },
    { day: 'Tue', date: '13', active: true },
    { day: 'Wed', date: '14', active: false },
    { day: 'Thu', date: '15', active: false },
    { day: 'Fri', date: '16', active: false },
    { day: 'Sat', date: '17', active: false },
];

const riseVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function LibraryHero() {
    const shouldReduceMotion = useReducedMotion();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // References for continuous scroll-driven parallax
    const sectionRef = useRef<HTMLElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const lowerRef = useRef<HTMLDivElement>(null);
    const bookSpreadRef = useRef<HTMLDivElement>(null);

    // Parallax Scroll Tracking
    const { scrollYProgress: sectionScroll } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const smoothScroll = useSpring(sectionScroll, { stiffness: 90, damping: 25 });
    const leftColY = useTransform(smoothScroll, [0, 1], ['25px', '-25px']);
    const centerBookY = useTransform(smoothScroll, [0, 1], ['35px', '-35px']);
    const rightColY = useTransform(smoothScroll, [0, 1], ['18px', '-18px']);
    const popularCardsY = useTransform(smoothScroll, [0, 1], ['30px', '-30px']);
    const communityY = useTransform(smoothScroll, [0, 1], ['20px', '-20px']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (shouldReduceMotion || !bookSpreadRef.current) return;
        const rect = bookSpreadRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <section ref={sectionRef} className={styles.sectionWrap} aria-label="Digital Library Reading Room">
            <div className={styles.dashboardContainer}>
                {/* =========================================================
            UPPER TIER: Reading Spotlight (With Multi-Layer Parallax)
        ========================================================= */}
                <div ref={spotlightRef} className={styles.spotlightRow}>
                    {/* Left Greeting & Lead Action */}
                    <motion.div
                        className={styles.spotlightLeft}
                        style={{ y: shouldReduceMotion ? 0 : leftColY }}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.greetingHeader}>
                            <span className={styles.kickerPill}>
                                <Sparkles size={12} />
                                <span>CENTRAL KNOWLEDGE REPOSITORY</span>
                            </span>
                            <h1 className={styles.greetingTitle}>
                                Scholarly reading, <br />
                                <span className={styles.userNameHighlight}>Researchers</span>
                            </h1>
                        </div>

                        <p className={styles.greetingLead}>
                            Welcome to the digital gateway of 15,000+ volumes, international pharmacopoeias, and 24/7 research databases[cite: 177]. Explore our academic repository and active monographs now!
                        </p>

                        <a href="#holdings" className={styles.startReadingBtn}>
                            <span>Start reading</span>
                            <ArrowUpRight size={15} />
                        </a>
                    </motion.div>

                    {/* Center 3D Open Book Spread with Floating & Mouse Tilt */}
                    <motion.div
                        className={styles.spotlightCenter}
                        style={{ y: shouldReduceMotion ? 0 : centerBookY }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        variants={riseVariants}
                        custom={1}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div
                            ref={bookSpreadRef}
                            className={styles.openBook3D}
                            style={{
                                transform: shouldReduceMotion
                                    ? 'none'
                                    : `perspective(1200px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) translateZ(15px)`,
                            }}
                            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                        >
                            {/* Left Open Page (Typesetting without Overflow) */}
                            <div className={styles.bookPageLeft}>
                                <div className={styles.pageInnerBorder}>
                                    <div className={styles.pageHeaderLabel}>CHAPTER 03 &bull; SECTION 4</div>
                                    <h4 className={styles.pageMiniHeading}>Analytical Dissolution &amp; Kinetics</h4>
                                    <p className={styles.pageTextParagraph}>
                                        The core release kinetics of the matrix tablets exhibited sustained diffusion patterns across standard phosphate buffer protocols.
                                    </p>
                                    <p className={styles.pageTextParagraph}>
                                        &quot;Observe the precipitation threshold carefully,&quot; noted the chief investigator. Secondary dissolution curves complied with official ICH Q2(R1) pharmacopeial limits.
                                    </p>
                                </div>
                                <div className={styles.pageFolioNumber}>154</div>
                            </div>

                            {/* Central Spine Binding & Shadow */}
                            <div className={styles.bookSpineCrease} />

                            {/* Right Open Page (Plate Illustration) */}
                            <div className={styles.bookPageRight}>
                                <div className={styles.pageIllustrationWrap} style={{ position: 'relative' }}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                                        alt="Active Pharmacopeial Flora Illustration"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 240px, 320px"
                                        className={styles.illustrationImg}
                                    />
                                    <div className={styles.illustrationOverlay} />
                                    <span className={styles.plateCaption}>Fig. 4.2: Extraction Chamber Atrium</span>
                                </div>
                                <div className={styles.pageFolioNumber}>155</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Spotlight Details Panel */}
                    <motion.div
                        className={styles.spotlightRight}
                        style={{ y: shouldReduceMotion ? 0 : rightColY }}
                        variants={riseVariants}
                        custom={2}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className={styles.spotlightBookTitle}>
                            The Principles of <br />
                            Pharmacology
                        </h2>

                        <div className={styles.pagesTracker}>
                            <span className={styles.currPage}>154</span>
                            <span className={styles.dividerSlash}>/</span>
                            <span className={styles.totalPage}>300 pages</span>
                        </div>

                        <p className={styles.spotlightBookDesc}>
                            A comprehensive clinical treatise detailing pharmacokinetics, bio-equivalence evaluations, and receptor-binding affinities for laboratory rotations.
                        </p>

                        <div className={styles.authorAttribution}>
                            <span>&mdash; Official Faculty Board</span>
                        </div>
                    </motion.div>
                </div>

                {/* Divider Line */}
                <div className={styles.sectionDivider} />

                {/* =========================================================
            LOWER TIER: Popular Holdings & Reading Schedule
        ========================================================= */}
                <div ref={lowerRef} className={styles.lowerGrid}>
                    {/* Left Column: Popular Now Books */}
                    <motion.div
                        className={styles.popularCol}
                        style={{ y: shouldReduceMotion ? 0 : popularCardsY }}
                        variants={riseVariants}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className={styles.colHeader}>
                            <h3 className={styles.colTitle}>Popular Now in Pharmacy</h3>
                            <div className={styles.headerDots}>
                                <span />
                                <span />
                            </div>
                        </div>

                        <div className={styles.booksGrid}>
                            {popularHoldings.map((book, idx) => (
                                <motion.div
                                    key={book.id}
                                    className={styles.popularBookCard}
                                    variants={riseVariants}
                                    custom={idx}
                                    initial={shouldReduceMotion ? 'visible' : 'hidden'}
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className={styles.bookCoverWrap} style={{ position: 'relative' }}>
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            sizes="(max-width: 640px) 130px, 160px"
                                            className={styles.coverImg}
                                        />
                                        <div className={styles.bookSpineHighlight} />
                                    </div>
                                    <h4 className={styles.coverBookTitle}>{book.title}</h4>
                                    <span className={styles.coverBookSubtitle}>{book.subtitle}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Schedule Reading & Reader Community */}
                    <motion.div
                        className={styles.communityCol}
                        style={{ y: shouldReduceMotion ? 0 : communityY }}
                        variants={riseVariants}
                        custom={2}
                        initial={shouldReduceMotion ? 'visible' : 'hidden'}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {/* Schedule Reading Calendar */}
                        <div className={styles.scheduleBlock}>
                            <div className={styles.colHeader}>
                                <h3 className={styles.colTitle}>Schedule Reading</h3>
                                <div className={styles.scheduleNav}>
                                    <button type="button" aria-label="Previous week" className={styles.navArrow}>
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button type="button" aria-label="Next week" className={styles.navArrow}>
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Days Row */}
                            <div className={styles.daysTrack}>
                                {scheduleDays.map((d) => (
                                    <div
                                        key={d.day}
                                        className={`${styles.dayPill} ${d.active ? styles.activeDayPill : ''}`}
                                    >
                                        <span className={styles.dayLabel}>{d.day}</span>
                                        <span className={styles.dateLabel}>{d.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Readers Block */}
                        <div className={styles.readersBlock}>
                            <div className={styles.colHeader}>
                                <h3 className={styles.colTitle}>Research Preceptors &amp; Scholars</h3>
                                <div className={styles.headerDots}>
                                    <span />
                                    <span />
                                </div>
                            </div>

                            <div className={styles.readersList}>
                                <div className={styles.readerItem}>
                                    <div className={styles.readerAvatar} style={{ position: 'relative' }}>
                                        <Image
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                                            alt="Dr. Priya S."
                                            fill
                                            sizes="48px"
                                            className={styles.avatarImg}
                                        />
                                    </div>
                                    <div className={styles.readerMeta}>
                                        <strong>Dr. Priya S.</strong>
                                        <span>Head of Clinical Reference</span>
                                    </div>
                                </div>

                                <div className={styles.readerItem}>
                                    <div className={styles.readerAvatar} style={{ position: 'relative' }}>
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                                            alt="Mr. K. Varma"
                                            fill
                                            sizes="48px"
                                            className={styles.avatarImg}
                                        />
                                    </div>
                                    <div className={styles.readerMeta}>
                                        <strong>Mr. K. Varma</strong>
                                        <span>Digital Systems Librarian</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}