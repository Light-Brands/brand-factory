import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const exploreLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Vision', href: '/vision' },
  { label: 'Governance', href: '/governance' },
  { label: 'News & Updates', href: '/news' },
];

const involveLinks = [
  { label: 'Memberships', href: '/get-involved/memberships' },
  { label: 'Volunteer', href: '/get-involved/volunteer' },
  { label: 'Partner With Us', href: '/get-involved/partner' },
  { label: 'Support Us', href: '/support' },
];

const connectLinks = [
  { label: 'Email Us', href: 'mailto:unifiedsanctuaries@gmail.com', external: true },
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'Contact', href: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <h4 className={styles.heading}>Unified Sanctuaries</h4>
          <p>A living blueprint for regenerative living & community resilience in Southern Vermont.</p>
        </div>

        <div>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.links}>
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Get Involved</h4>
          <ul className={styles.links}>
            {involveLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Connect</h4>
          <ul className={styles.links}>
            {connectLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Unified Sanctuaries 2026. The vessel holds. The water nourishes.</p>
      </div>
    </footer>
  );
};
