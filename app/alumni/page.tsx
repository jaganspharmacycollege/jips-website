import type { Metadata } from 'next';
import AlumniHero from '@/components/alumni/AlumniHero';
import AlumniSpotlight from '@/components/alumni/AlumniSpotlight';
import AlumniNetworkMap from '@/components/alumni/AlumniNetworkMap';
import AlumniEventsReunion from '@/components/alumni/AlumniEventsReunion';
import AlumniRegistrationForm from '@/components/alumni/AlumniRegistrationForm';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Alumni Association & Global Network | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Connect with over 5,000 JIPS alumni worldwide across formulation R&D, clinical hospital pharmacy, regulatory affairs, and biotechnology leadership.",
};

export default function AlumniPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Global Alumni Hero */}
            <AlumniHero />

            {/* 2. Featured Alumni Leadership Spotlights */}
            <AlumniSpotlight />

            {/* 3. Global Chapters & International Network */}
            <AlumniNetworkMap />

            {/* 4. Events, Homecoming & Mentorship */}
            <AlumniEventsReunion />

            {/* 5. Online Alumni Registration Portal */}
            <AlumniRegistrationForm />
        </main>
    );
}