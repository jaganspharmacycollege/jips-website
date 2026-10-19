'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    CheckCircle2,
    MapPin,
} from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);
    const timerRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

    useEffect(() => {
        setOpenDropdown(null);
        setOffcanvasOpen(false);
        setMobileSubmenu(null);
    }, [pathname]);

    useEffect(() => {
        if (offcanvasOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [offcanvasOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 110) {
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
            name: 'Autonomous',
            href: '/autonomous',
            options: [
                { name: 'Academic Council', href: '/autonomous/academic-council' },
                { name: 'Board of Studies', href: '/autonomous/bos' },
                { name: 'Regulations & Syllabi', href: '/autonomous/regulations' },
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
        { name: 'Virtual Tour', href: '/virtual-tour' },
    ];

    return (
        <>
            {/* 1. Scrollable Top Header Banner */}
            <header className={styles.scrollableHeader}>
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
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
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

                <div className={styles.brandBanner}>
                    <div className={styles.brandContainer}>
                        <Link href="/" className={styles.brandMainGroup} aria-label="College Home">
                            <div className={styles.logoOuter}>
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        src="/logo/JIPSLOGO.png"
                                        alt="Jagan's Institute of Pharmaceutical Sciences Logo"
                                        fill
                                        priority
                                        sizes="60px"
                                        style={{ objectFit: 'contain', padding: '3px' }}
                                    />
                                </div>
                            </div>
                            <div className={styles.brandTextGroup}>
                                <h1 className={styles.collegeName}>JAGAN&apos;S</h1>
                                <h2 className={styles.collegeSubName}>INSTITUTE OF PHARMACEUTICAL SCIENCES</h2>
                            </div>
                        </Link>

                        <div className={styles.sealsGroup}>
                            <div className={styles.naacSealWrapper}>
                                <div className={styles.naacBadge}>
                                    <span className={styles.naacStars}>*****</span>
                                    <span className={styles.naacTitle}>NAAC</span>
                                    <span className={styles.naacSub}>Accredited</span>
                                    <span className={styles.naacSub}>Institution</span>
                                </div>
                                <div className={styles.naacRibbons}>
                                    <div className={styles.ribbonLeft}></div>
                                    <div className={styles.ribbonRight}></div>
                                </div>
                            </div>

                            <div className={styles.isoSealWrapper}>
                                <div className={styles.isoInner}>
                                    <span className={styles.isoTop}>QUALITY ASSURED</span>
                                    <CheckCircle2 size={24} className={styles.isoCheck} />
                                    <div className={styles.isoBanner}>
                                        <span>ISO 9001:2015 CERTIFIED</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.circleSeal}>
                                <div className={styles.circleSealInner}>
                                    <span className={styles.sealLabel}>EAMCET CODE</span>
                                    <span className={styles.sealCodeText}>JIPS</span>
                                </div>
                            </div>

                            <div className={styles.circleSeal}>
                                <div className={styles.circleSealInner}>
                                    <span className={styles.sealCodeText}>JIPS</span>
                                    <span className={styles.sealSubText}>ESTD: 2005</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. Placeholder element preventing page jumps */}
            {isSticky && <div className={styles.navPlaceholder} />}

            {/* 3. Navigation Bar (Locks to top on scroll) */}
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

            {/* 4. Mobile Drawer */}
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
                                                        transform: mobileSubmenu === item.name ? 'rotate(180deg)' : 'none',
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