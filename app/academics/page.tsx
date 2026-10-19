import type { Metadata } from 'next';
import AcademicsHero from '@/components/academics/AcademicsHero';
import TriFeaturesBar from '@/components/academics/TriFeaturesBar';
import AboutAcademics from '@/components/academics/AboutAcademics';
import AcademicPillars from '@/components/academics/AcademicPillars';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Academics | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore academic programs at JIPS: B. Pharmacy, M. Pharmacy (Pharmaceutics/Analysis), and Pharm.D under PCI and JNTUA standards.",
};

export default function AcademicsPage() {
    return (
        <main className={styles.academicsRoot}>
            <AcademicsHero />
            <TriFeaturesBar />
            <AboutAcademics />
            <AcademicPillars />
        </main>
    );
}