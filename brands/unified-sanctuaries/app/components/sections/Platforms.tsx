import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader, Card } from '../ui';
import styles from './Platforms.module.css';

const platforms = [
  {
    id: 'farm',
    name: 'Permaculture Farm',
    description: 'Regenerative agriculture and food sovereignty',
    href: '/vision/platforms#farm',
  },
  {
    id: 'retreat',
    name: 'Retreat & Healing',
    description: 'Immersive wellness sanctuary',
    href: '/vision/platforms#retreat',
  },
  {
    id: 'venue',
    name: 'Event Venue',
    description: 'Gatherings and celebrations',
    href: '/vision/platforms#venue',
  },
  {
    id: 'community',
    name: 'Community Living',
    description: '20+ homes woven together',
    href: '/vision/platforms#community',
  },
] as const;

export const Platforms: React.FC = () => {
  return (
    <Section variant="gradient">
      <SectionHeader
        title="Four Vessels, One Purpose"
        subtitle="Each holds something essential for the whole"
      />

      <div className={styles.grid}>
        {platforms.map((platform) => (
          <Link key={platform.id} href={platform.href} className={styles.cardLink}>
            <Card variant="platform" platform={platform.id}>
              <div className={styles.vessel}>
                <PlatformIcon platform={platform.id} />
              </div>
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
};

interface PlatformIconProps {
  platform: 'farm' | 'retreat' | 'venue' | 'community';
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  switch (platform) {
    case 'farm':
      return (
        <svg viewBox="0 0 80 100" fill="none">
          <ellipse cx="40" cy="85" rx="35" ry="8" fill="#5E9AA2" opacity="0.12"/>
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="#5A360E"/>
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#704214"/>
          <path d="M40 45 L40 30" stroke="#5C7C5E" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="40" cy="27" r="4" fill="#5C7C5E"/>
          <path d="M40 38 Q34 35 30 27" stroke="#5C7C5E" strokeWidth="1.5" fill="none"/>
          <path d="M40 38 Q46 35 50 27" stroke="#5C7C5E" strokeWidth="1.5" fill="none"/>
        </svg>
      );
    case 'retreat':
      return (
        <svg viewBox="0 0 80 100" fill="none">
          <ellipse cx="40" cy="85" rx="35" ry="8" fill="#5E9AA2" opacity="0.12"/>
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="#4A9199"/>
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#3D7A82"/>
          <path d="M40 28 Q50 40 50 52 Q50 62 40 62 Q30 62 30 52 Q30 40 40 28 Z" fill="white" opacity="0.4"/>
          <ellipse cx="40" cy="62" rx="8" ry="3" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
        </svg>
      );
    case 'venue':
      return (
        <svg viewBox="0 0 80 100" fill="none">
          <ellipse cx="40" cy="85" rx="35" ry="8" fill="#D47850" opacity="0.12"/>
          <path d="M20 38 Q12 52 16 70 Q22 87 40 90 Q58 87 64 70 Q68 52 60 38 Q52 26 40 22 Q28 26 20 38 Z" fill="#D64527"/>
          <ellipse cx="40" cy="24" rx="20" ry="5" fill="#B03A1F"/>
          <path d="M40 35 Q48 48 46 56 Q44 62 40 65 Q36 62 34 56 Q32 48 40 35" fill="#E8A84C" opacity="0.75"/>
          <circle cx="34" cy="42" r="2" fill="#E8A84C" opacity="0.5"/>
          <circle cx="47" cy="40" r="1.5" fill="#E8A84C" opacity="0.5"/>
        </svg>
      );
    case 'community':
      return (
        <svg viewBox="0 0 80 100" fill="none">
          <ellipse cx="40" cy="85" rx="35" ry="8" fill="#C45A15" opacity="0.12"/>
          <path d="M20 35 Q12 50 16 68 Q22 85 40 88 Q58 85 64 68 Q68 50 60 35 Q52 22 40 18 Q28 22 20 35 Z" fill="#C45A15"/>
          <ellipse cx="40" cy="20" rx="20" ry="5" fill="#9A4510"/>
          <path d="M40 35 L48 43 L48 58 L32 58 L32 43 Z" fill="#8B4513"/>
          <rect x="37" y="50" width="6" height="8" fill="#5D4037"/>
          <path d="M26 46 L30 42 L34 46 L34 58 L26 58 Z" fill="#8B4513" opacity="0.7"/>
          <path d="M46 46 L50 42 L54 46 L54 58 L46 58 Z" fill="#8B4513" opacity="0.7"/>
        </svg>
      );
  }
};
