import type { Metadata } from 'next';
import AdmissionsOverview from '@/components/admissions/AdmissionsOverview';

export const metadata: Metadata = {
    title: "Admissions | Jagan's Institute of Pharmaceutical Sciences (JIPS)",
    description:
        "Join B.Pharm & M.Pharm programs at JIPS. PCI approved, JNTUA affiliated, AP EAPCET / PGECET code JAGP with complete fee reimbursement eligibility.",
};

export default function AdmissionsPage() {
    return <AdmissionsOverview />;
}