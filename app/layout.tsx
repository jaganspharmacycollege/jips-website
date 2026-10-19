import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuickActionsDock from '@/components/layout/QuickActionsDock';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jagan's Institute of Pharmaceutical Sciences | JIPS",
  description:
    'Premier pharmaceutical education, research excellence, and clinical training approved by PCI and affiliated with JNTUA.',
  icons: {
    icon: '/logo/JIPSLOGO.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <QuickActionsDock />
        <Footer />
      </body>
    </html>
  );
}