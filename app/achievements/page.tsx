import type { Metadata } from 'next';
import AchievementsHero from '@/components/achievements/AchievementsHero';
import InstitutionalAccolades from '@/components/achievements/InstitutionalAccolades';
import StudentAcademicLaurels from '@/components/achievements/StudentAcademicLaurels';
import ResearchPatentsShowcase from '@/components/achievements/ResearchPatentsShowcase';
import SportsCulturalTriumphs from '@/components/achievements/SportsCulturalTriumphs';
import FacultyHonors from '@/components/achievements/FacultyHonors';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Achievements & Laurels | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore academic honors, university gold medals, GPAT All India Ranks, research patents, sports championships, and faculty laurels at JIPS.",
};

export default function AchievementsPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Cinematic Hero with Telemetry Metrics */}
            <AchievementsHero />

            {/* 2. Institutional Accolades (Autonomy, PCI, ISO) */}
            <InstitutionalAccolades />

            {/* 3. Student Academic Laurels (GPAT AIR 14, University Ranks) */}
            <StudentAcademicLaurels />

            {/* 4. Research Patents & Intellectual Property Showcase */}
            <ResearchPatentsShowcase />

            {/* 5. Sports & Cultural Championships */}
            <SportsCulturalTriumphs />

            {/* 6. Faculty Honors & Academic Fellowships */}
            <FacultyHonors />
        </main>
    );
}