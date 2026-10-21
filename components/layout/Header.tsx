'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    MapPin,
    FileText,
    Bell,
    Award,
    GraduationCap,
    FileCheck2,
    ShieldAlert,
    Briefcase,
} from 'lucide-react';

// Direct imports of components/forms/
import AdmissionApplicationForm from '@/components/forms/AdmissionApplicationForm';
import BonafideCertificateForm from '@/components/forms/BonafideCertificateForm';
import TransferCertificateForm from '@/components/forms/TransferCertificateForm';
import AntiRaggingDeclarationForm from '@/components/forms/AntiRaggingDeclarationForm';
import FacultyRecruitmentForm from '@/components/forms/FacultyRecruitmentForm';
import styles from './Header.module.css';

type FormModalKey = 'admission' | 'bonafide' | 'tc' | 'antiragging' | 'faculty' | null;

const applicationFormsNav = [
    {
        key: 'admission' as FormModalKey,
        name: 'Admission Application',
        sub: 'B.Pharm, M.Pharm & Pharm.D 2026',
        icon: GraduationCap,
    },
    {
        key: 'bonafide' as FormModalKey,
        name: 'Bonafide Certificate Request',
        sub: 'Study, Conduct & Loan Verification',
        icon: FileText,
    },
    {
        key: 'tc' as FormModalKey,
        name: 'Transfer Certificate (T.C.)',
        sub: 'Graduation Clearance & Migration',
        icon: FileCheck2,
    },
    {
        key: 'antiragging' as FormModalKey,
        name: 'Anti-Ragging Undertaking',
        sub: 'UGC & PCI Statutory Affidavit',
        icon: ShieldAlert,
    },
    {
        key: 'faculty' as FormModalKey,
        name: 'Faculty Recruitment Form',
        sub: 'Academic Positions & Preceptors',
        icon: Briefcase,
    },
];

export default function Header() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    // Click-only state for radial overlay and modal form rendering
    const [appsMenuOpen, setAppsMenuOpen] = useState(false);
    const [activeFormModal, setActiveFormModal] = useState<FormModalKey>(null);

    const prevPathnameRef = useRef(pathname);
    const timerRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

    useEffect(() => {
        if (prevPathnameRef.current !== pathname) {
            prevPathnameRef.current = pathname;
            const timer = setTimeout(() => {
                setOpenDropdown(null);
                setOffcanvasOpen(false);
                setMobileSubmenu(null);
                setAppsMenuOpen(false);
                setActiveFormModal(null);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    useEffect(() => {
        if (offcanvasOpen || appsMenuOpen || activeFormModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [offcanvasOpen, appsMenuOpen, activeFormModal]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 130) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (name: string) => {
        if (timerRef.current[name]) {
            clearTimeout(timerRef.current[name]);
        }
        setOpenDropdown(name);
    };

    const handleMouseLeave = (name: string) => {
        timerRef.current[name] = setTimeout(() => {
            setOpenDropdown((curr) => (curr === name ? null : curr));
        }, 150);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '/about',
            options: [
                { name: 'History & Inception', href: '/about/history' },
                { name: 'Society & Management', href: '/about/management' },
                { name: "Principal's Profile", href: '/about/principals-profile' },
                { name: "Principal's Message", href: '/about/principals-message' },
                { name: 'Organisation Chart', href: '/about/organisation-chart' },
                { name: 'Vision & Mission', href: '/about/vision-mission' },
                { name: 'Approvals & Affiliations', href: '/about/approvals-affiliations' },
                { name: 'Affiliating University', href: '/about/affiliating-university' },
            ],
        },
        {
            name: 'Admissions',
            href: '/admissions',
            options: [
                { name: 'Courses Offered', href: '/admissions/courses-offered' },
                { name: 'Tuition Fee', href: '/admissions/tuition-fee' },
                { name: 'Admission Process', href: '/admissions/admission-process' },
                { name: 'Scholarship portal', href: '/admissions/scholarship-portal' },
                { name: 'NRI / PIO Students', href: '/admissions/nri-pio-students' },
            ],
        },
        {
            name: 'Academics',
            href: '/academics',
            options: [
                { name: 'B. Pharmacy', href: '/courses/b-pharm' },
                { name: 'M. Pharmacy', href: '/courses/m-pharm' },
                { name: 'Pharm. D', href: '/courses/pharm-d' },
                { name: 'Academic Calendar', href: '/academics/calendar' },
            ],
        },
        {
            name: 'Placements',
            href: '/placements',
            options: [
                { name: 'Training & Placement Cell', href: '/placements/training-cell' },
                { name: 'MoUs & Collaborations', href: '/placements/mous' },
                { name: 'Recruiting Partners', href: '/placements/recruiters' },
            ],
        },
        { name: 'Faculty', href: '/faculty' },
        { name: 'Infrastructure', href: '/infrastructure' },
        { name: 'Library', href: '/library' },
        {
            name: 'Research',
            href: '/research',
            options: [
                { name: 'Publications', href: '/research/publications' },
                { name: 'R&D Cell', href: '/research/cell' },
            ],
        },
        {
            name: 'NSS & Extension',
            href: '/nss',
            options: [
                { name: 'NSS Activities', href: '/nss/activities' },
                { name: 'Community Outreach', href: '/nss/outreach' },
            ],
        },
        {
            name: 'Downloads',
            href: '/downloads',
            options: [
                { name: 'Application Forms', href: '/downloads/forms' },
                { name: 'Syllabus Copy', href: '/downloads/syllabus' },
            ],
        },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Virtual Tour', href: '/virtual-tour' },
    ];

    return (
        <>
            {/* 1. Scrollable Upper Header */}
            <header className={styles.scrollableHeader}>
                {/* Top Location & Socials */}
                <div className={styles.topBar}>
                    <div className={styles.topBarContainer}>
                        <div className={styles.topBarLeft}>
                            <div className={styles.topItem}>
                                <MapPin size={13} className={styles.topIcon} />
                                <span>Jangalakandriga, Muthukur Road, Nellore, Andhra Pradesh 524346</span>
                            </div>
                        </div>
                        <div className={styles.topBarRight}>
                            <div className={styles.socialGroup}>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Facebook"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Twitter / X"
                                >
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram"
                                >
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialLink}
                                    aria-label="YouTube"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Banner */}
                <div className={styles.brandBanner}>
                    <div className={styles.brandContainer}>
                        {/* Left: Logo & College Title */}
                        <Link href="/" className={styles.brandMainGroup} aria-label="College Home">
                            <div className={styles.logoOuter}>
                                <div className={styles.logoInnerWrap}>
                                    <Image
                                        src="/logo/JIPSLOGO.png"
                                        alt="Jagan's Institute of Pharmaceutical Sciences Logo"
                                        className={styles.collegeLogoImg}
                                        fill
                                        priority
                                        sizes="80px"
                                    />
                                </div>
                            </div>
                            <div className={styles.brandTextGroup}>
                                <h1 className={styles.collegeName}>JAGAN&apos;S</h1>
                                <h2 className={styles.collegeSubName}>INSTITUTE OF PHARMACEUTICAL SCIENCES</h2>
                            </div>
                        </Link>

                        {/* Right: 4 Circles + Actions */}
                        <div className={styles.headerRightCluster}>
                            <div className={styles.sealsGroup}>
                                {/* 1. PCI Seal */}
                                <div className={styles.pciSeal}>
                                    <div className={styles.pciInner}>
                                        <Award size={15} className={styles.sealGoldIcon} />
                                        <span className={styles.pciTop}>PCI</span>
                                        <span className={styles.pciSub}>NEW DELHI</span>
                                    </div>
                                </div>
                                {/* 2. JNTUA Seal */}
                                <div className={styles.jntuaSeal}>
                                    <div className={styles.jntuaInner}>
                                        <GraduationCap size={15} className={styles.sealBlueIcon} />
                                        <span className={styles.jntuaTop}>JNTUA</span>
                                        <span className={styles.jntuaSub}>AFFILIATED</span>
                                    </div>
                                </div>
                                {/* 3. EAMCET Code */}
                                <div className={styles.codeSeal}>
                                    <div className={styles.codeInner}>
                                        <span className={styles.codeLabel}>EAMCET</span>
                                        <span className={styles.codeVal}>JAGP</span>
                                    </div>
                                </div>
                                {/* 4. PGECET Code */}
                                <div className={styles.codeSeal}>
                                    <div className={styles.codeInner}>
                                        <span className={styles.codeLabel}>PGECET</span>
                                        <span className={styles.codeVal}>JAGP</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons: Click-only trigger on Applications */}
                            <div className={styles.actionButtonsCol}>
                                <button
                                    type="button"
                                    onClick={() => setAppsMenuOpen(true)}
                                    className={styles.applicationsBtn}
                                    aria-haspopup="true"
                                    aria-expanded={appsMenuOpen}
                                    title="Click to view and open official application forms"
                                >
                                    <FileText size={15} className={styles.btnIcon} />
                                    <span>Applications</span>
                                </button>
                                <Link
                                    href="/notifications"
                                    title="View Latest College Notifications"
                                    className={styles.latestNewsBtn}
                                >
                                    <span className={styles.livePulseDot} />
                                    <Bell size={13} className={styles.btnIcon} />
                                    <span>Latest News</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* RADIAL CIRCULAR OVERLAY (Click-Only Triggered Animation) */}
            <AnimatePresence>
                {appsMenuOpen && !activeFormModal && (
                    <div className={styles.radialOverlayBackdrop}>
                        {/* Wave 1: Outermost dark blue arc */}
                        <motion.div
                            className={styles.radialArc1}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        />
                        {/* Wave 2: Middle deep cobalt arc */}
                        <motion.div
                            className={styles.radialArc2}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        />
                        {/* Wave 3: Inner electric blue arc */}
                        <motion.div
                            className={styles.radialArc3}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Top-Right Close Button */}
                        <motion.div
                            className={styles.radialHubCenter}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <button
                                type="button"
                                className={styles.radialCloseBtn}
                                onClick={() => setAppsMenuOpen(false)}
                                aria-label="Close applications menu"
                            >
                                <X size={26} />
                            </button>
                        </motion.div>

                        {/* Content: Form Selector Cards */}
                        <div className={styles.radialContentContainer}>
                            <div className={styles.radialHeader}>
                                <span className={styles.radialKicker}>INSTITUTIONAL APPLICATIONS</span>
                                <h3 className={styles.radialTitle}>Official Application &amp; Certificate Forms</h3>
                                <p className={styles.radialSub}>Click any form below to open and submit directly.</p>
                            </div>

                            <div className={styles.radialFormsGrid}>
                                {applicationFormsNav.map((form, idx) => {
                                    const Icon = form.icon;
                                    return (
                                        <motion.div
                                            key={form.name}
                                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.4, delay: 0.12 + idx * 0.05 }}
                                        >
                                            <button
                                                type="button"
                                                className={styles.radialFormCardBtn}
                                                onClick={() => setActiveFormModal(form.key)}
                                            >
                                                <div className={styles.radialIconWrapper}>
                                                    <Icon size={20} />
                                                </div>
                                                <div className={styles.radialTextPane}>
                                                    <strong className={styles.formCardName}>{form.name}</strong>
                                                    <span className={styles.formCardSub}>{form.sub}</span>
                                                </div>
                                                <ChevronRight size={18} className={styles.formChevron} />
                                            </button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* MODAL VIEWER FOR SELECTED COMPONENT FORM */}
            <AnimatePresence>
                {activeFormModal && (
                    <div className={styles.modalBackdrop}>
                        <div className={styles.modalContainer}>
                            <div className={styles.modalTopBar}>
                                <div className={styles.modalLeftNav}>
                                    <button
                                        type="button"
                                        className={styles.modalBackBtn}
                                        onClick={() => setActiveFormModal(null)}
                                    >
                                        &larr; Back to Forms
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className={styles.modalCloseBtn}
                                    onClick={() => {
                                        setActiveFormModal(null);
                                        setAppsMenuOpen(false);
                                    }}
                                    aria-label="Close form"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Renders the actual selected component from components/forms/ */}
                            <div className={styles.modalContentScroll}>
                                {activeFormModal === 'admission' && <AdmissionApplicationForm />}
                                {activeFormModal === 'bonafide' && <BonafideCertificateForm />}
                                {activeFormModal === 'tc' && <TransferCertificateForm />}
                                {activeFormModal === 'antiragging' && <AntiRaggingDeclarationForm />}
                                {activeFormModal === 'faculty' && <FacultyRecruitmentForm />}
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* 2. Sticky Navbar Placeholder */}
            {isSticky && <div className={styles.navPlaceholder} />}

            {/* 3. Primary Sticky Navigation Bar */}
            <nav className={`${styles.stickyNavBar} ${isSticky ? styles.isPinned : ''}`}>
                <div className={styles.navContainer}>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setOffcanvasOpen(true)}
                        aria-label="Open Navigation Menu"
                    >
                        <Menu size={20} />
                        <span className={styles.mobileMenuLabel}>Menu</span>
                    </button>

                    <div className={styles.desktopNav}>
                        {navItems.map((item) => {
                            const isHome = item.href === '/';
                            const isActive = isHome ? pathname === '/' : pathname.startsWith(item.href);
                            const isOpen = openDropdown === item.name;

                            return (
                                <div
                                    className={styles.dropdownContainer}
                                    key={item.name}
                                    onMouseEnter={() => item.options && handleMouseEnter(item.name)}
                                    onMouseLeave={() => item.options && handleMouseLeave(item.name)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                                    >
                                        <span>{item.name}</span>
                                        {item.options && (
                                            <ChevronDown
                                                size={12}
                                                className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`}
                                            />
                                        )}
                                    </Link>

                                    {item.options && isOpen && (
                                        <div className={styles.dropdownMenu}>
                                            {item.options.map((opt) => (
                                                <Link
                                                    key={opt.name}
                                                    href={opt.href}
                                                    className={styles.dropdownItem}
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <span>{opt.name}</span>
                                                    <ChevronRight size={13} className={styles.subChevron} />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* 4. Mobile Offcanvas Drawer */}
            {offcanvasOpen && (
                <div className={styles.offcanvasOverlay} onClick={() => setOffcanvasOpen(false)}>
                    <div className={styles.offcanvasDrawer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.drawerHeader}>
                            <div className={styles.drawerTitleGroup}>
                                <h3 className={styles.drawerTitle}>JAGAN&apos;S</h3>
                                <p className={styles.drawerSubtitle}>INSTITUTE OF PHARMACEUTICAL SCIENCES</p>
                            </div>
                            <button
                                className={styles.drawerCloseBtn}
                                onClick={() => setOffcanvasOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Mobile Header Quick Actions */}
                        <div className={styles.drawerQuickActions}>
                            <button
                                type="button"
                                className={styles.drawerActionBtnGold}
                                onClick={() => {
                                    setOffcanvasOpen(false);
                                    setAppsMenuOpen(true);
                                }}
                            >
                                <FileText size={14} />
                                <span>Applications</span>
                            </button>
                            <Link
                                href="/notifications"
                                className={styles.drawerActionBtnNavy}
                                onClick={() => setOffcanvasOpen(false)}
                            >
                                <Bell size={14} />
                                <span>Latest News</span>
                            </Link>
                        </div>

                        <div className={styles.drawerContent}>
                            {navItems.map((item) => (
                                <div key={item.name} className={styles.drawerItem}>
                                    <div className={styles.drawerLinkRow}>
                                        <Link
                                            href={item.href}
                                            className={styles.drawerLink}
                                            onClick={() => setOffcanvasOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.options && (
                                            <button
                                                className={styles.drawerToggleBtn}
                                                onClick={() =>
                                                    setMobileSubmenu((prev) => (prev === item.name ? null : item.name))
                                                }
                                                aria-label={`Toggle ${item.name} submenu`}
                                            >
                                                <ChevronDown
                                                    size={16}
                                                    style={{
                                                        transform:
                                                            mobileSubmenu === item.name ? 'rotate(180deg)' : 'none',
                                                        transition: 'transform 0.2s ease',
                                                    }}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {item.options && mobileSubmenu === item.name && (
                                        <div className={styles.drawerSubMenu}>
                                            {item.options.map((opt) => (
                                                <Link
                                                    key={opt.name}
                                                    href={opt.href}
                                                    className={styles.drawerSubLink}
                                                    onClick={() => setOffcanvasOpen(false)}
                                                >
                                                    {opt.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}