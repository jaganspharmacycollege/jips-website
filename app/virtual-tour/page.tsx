import type { Metadata } from 'next';
import VirtualTourHero from '@/components/virtual-tour/VirtualTourHero';
import CampusVideoShowcase from '@/components/virtual-tour/CampusVideoShowcase';
import ZoneWalkthrough from '@/components/virtual-tour/ZoneWalkthrough';
import CampusMapBooking from '@/components/virtual-tour/CampusMapBooking';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Virtual Campus Tour | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore JIPS through our video walkthrough, laboratory facilities, smart classrooms, botanical medicinal garden, and digital library.",
};

export default function VirtualTourPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Panoramic Aerial Hero Banner */}
            <VirtualTourHero />

            {/* 2. Clean Campus Video Showcase (Replaces the awkward 360 viewer) */}
            <CampusVideoShowcase />

            {/* 3. Sector-by-Sector Walkthrough Tabs */}
            <ZoneWalkthrough />

            {/* 4. Geography, Directions & Visit Booking Terminal */}
            <CampusMapBooking />
        </main>
    );
}