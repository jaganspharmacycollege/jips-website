import type { Metadata } from 'next';
import PlacementsHero from '@/components/placements/PlacementsHero';
import PlacementStatistics from '@/components/placements/PlacementStatistics';
import StudentPlacementRecords from '@/components/placements/StudentPlacementRecords';
import RecruitingPartners from '@/components/placements/RecruitingPartners';
import TrainingPlacementCell from '@/components/placements/TrainingPlacementCell';
import PlacementTestimonials from '@/components/placements/PlacementTestimonials';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Placements & Career Opportunities | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the 100% placement support at JIPS: recruiting partners like Dr. Reddy's and Hetero, corporate salary trends, and Training & Placement Cell modules.",
};

export default function PlacementsPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Placement Telemetry Hero */}
            <PlacementsHero />

            {/* 2. Sector-Wise Placement Statistics */}
            <PlacementStatistics />

            {/* 3. Verified Student Placement Records Directory */}
            <StudentPlacementRecords />

            {/* 4. Corporate Recruiters Grid */}
            <RecruitingPartners />

            {/* 5. Training & Placement Cell Roadmap */}
            <TrainingPlacementCell />

            {/* 6. Placed Alumni Testimonials */}
            <PlacementTestimonials />
        </main>
    );
}