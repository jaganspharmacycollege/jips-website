'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './QuickActionsDock.module.css';

interface DockItem {
    id: string;
    label: string;
    href: string;
    isExternal?: boolean;
    accentColor: string;
    icon: React.ReactNode;
}

const dockItems: DockItem[] = [
    {
        id: 'applications',
        label: 'Apply',
        href: '/admissions',
        accentColor: '#38b6ff',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        id: 'enquiry',
        label: 'Enquiry',
        href: '/enquiry',
        accentColor: '#facc15',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="10" r="0.5" fill="currentColor" />
                <path d="M12 6.5a1.5 1.5 0 0 1 1.5 1.5c0 1-1.5 1.5-1.5 2.5" />
            </svg>
        ),
    },
    {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        accentColor: '#4ade80',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        id: 'maps',
        label: 'Maps',
        href: '/map',
        isExternal: true,
        accentColor: '#f87171',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
];

export default function QuickActionsDock() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <aside className={styles.dockWrapper} aria-label="Quick Actions">
            <motion.nav
                className={styles.dockContainer}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
                {dockItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className={styles.actionBtn}
                        aria-label={item.label}
                    >
                        <div className={styles.iconWrapper} style={{ color: item.accentColor }}>
                            {item.icon}
                        </div>
                        <span className={styles.itemLabel}>{item.label}</span>
                    </Link>
                ))}
            </motion.nav>
        </aside>
    );
}