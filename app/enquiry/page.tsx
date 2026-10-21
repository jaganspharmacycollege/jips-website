import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata: Metadata = {
    title: "Admissions Enquiry | Jagan's Institute of Pharmaceutical Sciences",
    description: "Submit your inquiry for B.Pharm, M.Pharm, and Pharm.D admissions at JIPS Nellore (EAPCET Code: JAGP).",
};

export default function EnquiryPage() {
    return (
        <main style={{ width: '100%', overflowX: 'clip', background: '#ffffff' }}>
            <ContactHero />
            <ContactFormSection />
        </main>
    );
}