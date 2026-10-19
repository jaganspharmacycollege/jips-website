import type { Metadata } from 'next';
import LibraryHero from '@/components/library/LibraryHero';
import LibraryHoldings from '@/components/library/LibraryHoldings';
import LibraryResourceTable from '@/components/library/LibraryResourceTable';
import EResourcesConsole from '@/components/library/EResourcesConsole';
import LibraryIncharges from '@/components/library/LibraryIncharges';
import LibraryRulesServices from '@/components/library/LibraryRulesServices';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Central Library & Digital Resource Center | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the JIPS central library holding over 15,000 volumes, international print journals, DELNET/NDLI e-resources, and departmental library in-charges.",
};

export default function LibraryPage() {
    return (
        <main className={styles.mainWrapper}>
            {/* 1. Kinetic 3D Hero */}
            <LibraryHero />

            {/* 2. Print Holdings & Rare Reference Stacks */}
            <LibraryHoldings />

            {/* 3. Official Holdings Count Ledger Table (Animated 0 -> Target) */}
            <LibraryResourceTable />

            {/* 4. E-Journals & Consortia Terminals */}
            <EResourcesConsole />

            {/* 5. Library Administration & Department In-Charges */}
            <LibraryIncharges />

            {/* 6. Lending Quotas & Code of Conduct */}
            <LibraryRulesServices />
        </main>
    );
}