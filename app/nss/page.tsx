import type { Metadata } from 'next';
import NssOverview from '@/components/nss/NssOverview';

export const metadata: Metadata = {
    title: "NSS & Extension | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore the NSS and Extension activities at JIPS: blood donation camps, Swachh Bharat drives, village adoption, and rural healthcare outreach in Nellore.",
};

export default function Page() {
    return <NssOverview />;
}