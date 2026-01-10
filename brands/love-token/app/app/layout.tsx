import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Love Token | The World\'s Greatest Experiment',
  description: 'Building the world\'s first functioning Love Economy where meditation, intention, and presence generate measurable social and economic value.',
  keywords: ['love economy', 'meditation', 'love token', 'TWGE', 'love credits'],
  authors: [{ name: 'The World\'s Greatest Experiment' }],
  openGraph: {
    title: 'Love Token | The World\'s Greatest Experiment',
    description: 'Building the world\'s first functioning Love Economy where meditation, intention, and presence generate measurable social and economic value.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Token | The World\'s Greatest Experiment',
    description: 'Building the world\'s first functioning Love Economy.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sacred-cream antialiased">
        {children}
      </body>
    </html>
  );
}
