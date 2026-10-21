import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import CampusMapSection from '@/components/contact/CampusMapSection';

export const metadata: Metadata = {
    title: "Campus Map & Directions | Jagan's Institute of Pharmaceutical Sciences",
    description: "Directions and Google Maps location for JIPS campus in Jangalakandriga, Muthukur, Nellore.",
};

export default function MapPage() {
    return (
        <main style={{ width: '100%', overflowX: 'clip', background: '#ffffff' }}>
            <ContactHero />
            <CampusMapSection />
        </main>
    );
}