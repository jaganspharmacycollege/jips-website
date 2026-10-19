import type { Metadata } from 'next';
import ResearchOverview from '@/components/research/ResearchOverview';

export const metadata: Metadata = {
    title: "Research & Innovation | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the research ecosystem at JIPS: molecular docking, anti-TB drug discovery, natural products, and R&D cell initiatives.",
};

export default function Page() {
    return <ResearchOverview />;
}