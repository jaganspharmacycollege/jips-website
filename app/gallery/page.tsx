import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Campus Gallery & Events | Jagan's Institute of Pharmaceutical Sciences",
    description:
        "Explore photo galleries of campus infrastructure, research laboratories, cultural fests, sports championships, and NSS community outreach at JIPS.",
};

export default function GalleryPage() {
    return (
        <main className={styles.pageRoot}>
            <GalleryGrid />
        </main>
    );
}