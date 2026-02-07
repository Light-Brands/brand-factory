import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cho Ventures & Future of Cities | AI Super Intelligent Communication Layer',
  description: 'Interactive dual-conglomerate ecosystem visualization — Cho Ventures (Family Office) and Future of Cities (RE Developer) connected through an AI Super Intelligent System.',
  keywords: ['Cho Ventures', 'Future of Cities', 'Tony Cho', 'regenerative development', 'Metro 1', 'ChoZen', 'ecosystem', 'AI'],
  authors: [{ name: 'Light Brand Consulting' }],
  openGraph: {
    title: 'Cho Ventures & Future of Cities Ecosystem',
    description: 'Dual-conglomerate ecosystem powered by AI super intelligence',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
