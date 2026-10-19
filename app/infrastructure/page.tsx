import type { Metadata } from 'next';
import InfraHero from '@/components/infrastructure/InfraHero';
import LaboratoriesInfra from '@/components/infrastructure/LaboratoriesInfra';
import InstrumentationInfra from '@/components/infrastructure/InstrumentationInfra';
import ClassroomsInfra from '@/components/infrastructure/ClassroomsInfra';
import ComputerLabInfra from '@/components/infrastructure/ComputerLabInfra';
import MedicinalGardenInfra from '@/components/infrastructure/MedicinalGardenInfra';
import TransportCanteenInfra from '@/components/infrastructure/TransportCanteenInfra';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Campus Infrastructure & Laboratories | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore JIPS infrastructure: dedicated pharmaceutics & pharmacology labs, central instrumentation (UV/IR/HPLC), smart classrooms, CADD computer labs, medicinal plant garden, and transport amenities.",
};

export default function InfrastructurePage() {
    return (
        <main className={styles.mainWrapper}>
            {/* 1. Cinematic Hero Banner */}
            <InfraHero />

            {/* 2. Dedicated Laboratories */}
            <LaboratoriesInfra />

            {/* 3. Central Analytical Instrumentation */}
            <InstrumentationInfra />

            {/* 4. Spacious Classrooms with Audio-Visual Aids */}
            <ClassroomsInfra />

            {/* 5. CADD & Python Computer Laboratory */}
            <ComputerLabInfra />

            {/* 6. Living Medicinal Plant Garden */}
            <MedicinalGardenInfra />

            {/* 7. Transport Network & Campus Canteen */}
            <TransportCanteenInfra />
        </main>
    );
}