import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import CampusMapSection from '@/components/contact/CampusMapSection';

export const metadata: Metadata = {
    title: "Contact Us | Jagan's Institute of Pharmaceutical Sciences",
    description: "Get in touch with JIPS Nellore. Explore admissions contact numbers, official emails, campus address, and interactive map directions.",
};

export default function ContactPage() {
    return (
        <main style={{ width: '100%', overflowX: 'clip', background: '#ffffff' }}>
            <ContactHero />
            <ContactFormSection />
            <CampusMapSection />
        </main>
    );
}