import type { Metadata } from 'next';
import PublicationsPage from '@/components/research/PublicationsPage';

export const metadata: Metadata = {
    title: "Publications | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Peer-reviewed publications by faculty and students in molecular docking, ADMET, anti-TB leads, endophytes, and network pharmacology.",
};

export default function Page() {
    return <PublicationsPage />;
}