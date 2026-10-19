import type { Metadata } from 'next';
import PrincipalSpotlight from '@/components/faculty/PrincipalSpotlight';
import FacultyDirectory from '@/components/faculty/FacultyDirectory';
import FacultyResearchMetrics from '@/components/faculty/FacultyResearchMetrics';
import FacultyResearchDetails from '@/components/faculty/FacultyResearchDetails';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Faculty Directory & Research | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Meet our eminent pharmaceutical faculty, research patents, and Scopus publications led by Dr. J. Venkata Suresh.",
};

export default function FacultyPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Dean & Principal Executive Spotlight */}
            <PrincipalSpotlight />

            {/* 2. Interactive Departmental Filter & Scholar Dossiers */}
            <FacultyDirectory />

            {/* 3. Detailed Research Projects, Patents & Publications with Images */}
            <FacultyResearchDetails />

            {/* 4. Research Impact Ledger & Patent Portfolio */}
            <FacultyResearchMetrics />
        </main>
    );
}