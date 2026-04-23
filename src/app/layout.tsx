import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'T.R.I.K.S. — Trinity River International Kayak School',
    template: '%s | T.R.I.K.S.',
  },
  description:
    'Professional whitewater kayaking instruction on Northern California\'s Trinity River. Youth camps, clinics, and adult programs for beginner to intermediate paddlers.',
  openGraph: {
    title: 'T.R.I.K.S. — Trinity River International Kayak School',
    description:
      'Professional whitewater kayaking instruction on Northern California\'s Trinity River.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 md:pt-28 lg:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
