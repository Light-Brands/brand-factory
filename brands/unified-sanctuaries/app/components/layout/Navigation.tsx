'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo, Menu, X } from '../icons';
import styles from './Navigation.module.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Vision', href: '/vision' },
  { label: 'Governance', href: '/governance' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Support', href: '/support' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Logo size={38} />
        <span className={styles.logoText}>Unified Sanctuaries</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className={styles.links}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
