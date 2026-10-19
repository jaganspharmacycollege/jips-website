import type { Metadata } from 'next';
import RdCellPage from '@/components/research/RdCellPage';

export const metadata: Metadata = {
    title: "R&D Cell | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Promoting research, funded projects, patents, journal clubs, and student project mentorship at JIPS.",
};

export default function Page() {
    return <RdCellPage />;
}