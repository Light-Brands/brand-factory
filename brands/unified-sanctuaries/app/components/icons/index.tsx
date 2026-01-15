import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ArrowRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const ArrowLeft: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
);

export const X: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

export const Mail: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 7l-10 5L2 7"/>
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const Instagram: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <path d="M17.5 6.5h.01"/>
  </svg>
);

export const Heart: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

export const Calendar: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

export const Sprout: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M7 20h10"/>
    <path d="M12 20v-8"/>
    <path d="M12 12c-3 0-5-2-5-5s2-5 5-5c0 3 2 5 5 5s-2 5-5 5z"/>
  </svg>
);

export const Droplet: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
  </svg>
);

export const Home: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

export const Flame: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
  </svg>
);

export const Check: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const ExternalLink: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size} className={className}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Logo component
export const Logo: React.FC<IconProps> = ({ className = '', size = 40 }) => (
  <svg viewBox="0 0 40 40" fill="none" width={size} height={size} className={className}>
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="20" r="3" fill="currentColor"/>
    <circle cx="20" cy="8" r="4" fill="#704214"/>
    <circle cx="8" cy="20" r="4" fill="#7BA3A8"/>
    <circle cx="32" cy="20" r="4" fill="#C65D3B"/>
    <circle cx="20" cy="32" r="4" fill="#B5651D"/>
    <path d="M20 12 L20 17 M12 20 L17 20 M20 28 L20 23 M28 20 L23 20" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
