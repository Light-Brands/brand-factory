import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Newsletter } from '@/components/ui';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Unified Sanctuaries | Where Land and People Heal Together',
    template: '%s | Unified Sanctuaries',
  },
  description: 'A living blueprint for regenerative living & community resilience in Southern Vermont. Four platforms working together: Farm, Retreat, Venue, and Community Living.',
  keywords: ['regenerative community', 'Vermont', 'permaculture', 'intentional community', 'sustainable living', 'healing arts'],
  authors: [{ name: 'Unified Sanctuaries' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Unified Sanctuaries',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Source+Sans+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
