import type { Metadata } from 'next';
import CellsHero from '@/components/cells/CellsHero';
import CommitteeMatrix from '@/components/cells/CommitteeMatrix';
import GrievanceGrievanceFiling from '@/components/cells/GrievanceGrievanceFiling';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Statutory Cells & Committees | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the official committees and statutory cells at JIPS: IQAC, Internal Complaints Committee (ICC), Anti-Ragging Squad, and Grievance Redressal Cell.",
};

export default function CellsPage() {
    return (
        <main className={styles.pageRoot}>
            {/* 1. Governance Hero */}
            <CellsHero />

            {/* 2. Committee Directory & Constituted Members Matrix */}
            <CommitteeMatrix />

            {/* 3. Confidential Representation & Grievance Portal */}
            <GrievanceGrievanceFiling />
        </main>
    );
}