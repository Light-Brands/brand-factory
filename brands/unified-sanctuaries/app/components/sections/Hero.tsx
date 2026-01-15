import React from 'react';
import { Button } from '../ui';
import { ArrowRight } from '../icons';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      {/* Network background */}
      <div className={styles.networkBg}>
        <svg viewBox="0 0 1000 600" fill="none">
          <g stroke="#5E9AA2" strokeWidth="1.5">
            <path d="M50 300 Q250 200 450 300 T850 280" className="network-flow"/>
            <path d="M100 150 Q300 250 500 150 T900 180" className="network-flow"/>
            <path d="M80 450 Q280 350 480 450 T880 420" className="network-flow"/>
          </g>
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.tagline}>Regenerative Community in Vermont</p>
          <h1 className={styles.title}>
            The Vessel <em>Holds</em>.<br/>The Water <em>Nourishes</em>.
          </h1>
          <p className={styles.subtitle}>
            Like clay vessels filling and flowing into one another, our four platforms share resources,
            wisdom, and support. What nourishes one strengthens all through the living network.
          </p>
          <Button href="/vision" size="lg">
            Explore Our Vision
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className={styles.visual}>
          <HeroIllustration />
        </div>
      </div>
    </header>
  );
};

const HeroIllustration: React.FC = () => (
  <svg className={styles.diagram} viewBox="0 0 500 450" fill="none">
    <defs>
      <linearGradient id="vesselGradK" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0A568"/>
        <stop offset="50%" stopColor="#D47850"/>
        <stop offset="100%" stopColor="#B85A35"/>
      </linearGradient>
      <linearGradient id="waterGradK" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#5E9AA2"/>
        <stop offset="100%" stopColor="#2E5A6A"/>
      </linearGradient>
    </defs>

    {/* Main vessel - tilted, pouring */}
    <g className="vessel-pulse" transform="translate(170, 20) rotate(15, 80, 100)">
      <path d="M40 50 Q25 80 30 120 Q35 155 80 160 Q125 155 130 120 Q135 80 120 50 Q105 30 80 25 Q55 30 40 50 Z"
            fill="url(#vesselGradK)" />
      <path d="M50 85 Q40 105 45 130 Q50 150 80 153 Q110 150 115 130 Q120 105 110 85 Q100 72 80 68 Q60 72 50 85 Z"
            fill="url(#waterGradK)" opacity="0.7"/>
      <ellipse cx="80" cy="30" rx="40" ry="8" fill="#B85A35"/>
      <ellipse cx="80" cy="30" rx="32" ry="5" fill="#8B4513"/>
    </g>

    {/* Water pouring out */}
    <path d="M285 95 Q310 140 300 180 Q290 220 250 280"
          stroke="url(#waterGradK)" strokeWidth="18" fill="none" opacity="0.4" strokeLinecap="round"/>
    <path d="M285 95 Q310 140 300 180 Q290 220 250 280"
          stroke="url(#waterGradK)" strokeWidth="6" fill="none" className="water-pour" strokeLinecap="round"/>

    {/* Network spreading from pour point */}
    <g stroke="#5E9AA2" strokeWidth="2.5" fill="none">
      <path d="M250 280 Q200 320 120 360" className="network-flow"/>
      <path d="M250 280 Q250 330 250 380" className="network-flow"/>
      <path d="M250 280 Q300 320 380 360" className="network-flow"/>
    </g>

    {/* Four receiving vessels (smaller) */}
    {/* Farm */}
    <g className="node-glow" transform="translate(60, 340)">
      <ellipse cx="35" cy="55" rx="32" ry="6" fill="#5E9AA2" opacity="0.15"/>
      <path d="M15 25 Q8 38 12 48 Q18 58 35 60 Q52 58 58 48 Q62 38 55 25 Q48 15 35 12 Q22 15 15 25 Z" fill="#5A360E"/>
      <ellipse cx="35" cy="14" rx="20" ry="4" fill="#704214"/>
      <path d="M35 30 L35 22" stroke="#5C7C5E" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="35" cy="20" r="3" fill="#5C7C5E"/>
    </g>

    {/* Retreat */}
    <g className="node-glow" transform="translate(175, 360)">
      <ellipse cx="35" cy="55" rx="32" ry="6" fill="#5E9AA2" opacity="0.15"/>
      <path d="M15 25 Q8 38 12 48 Q18 58 35 60 Q52 58 58 48 Q62 38 55 25 Q48 15 35 12 Q22 15 15 25 Z" fill="#4A9199"/>
      <ellipse cx="35" cy="14" rx="20" ry="4" fill="#3D7A82"/>
      <path d="M35 20 Q42 30 42 38 Q42 45 35 45 Q28 45 28 38 Q28 30 35 20 Z" fill="white" opacity="0.4"/>
    </g>

    {/* Venue */}
    <g className="node-glow" transform="translate(290, 360)">
      <ellipse cx="35" cy="55" rx="32" ry="6" fill="#D47850" opacity="0.15"/>
      <path d="M15 28 Q8 40 12 50 Q18 60 35 62 Q52 60 58 50 Q62 40 55 28 Q48 18 35 15 Q22 18 15 28 Z" fill="#D64527"/>
      <ellipse cx="35" cy="17" rx="20" ry="4" fill="#B03A1F"/>
      <path d="M35 25 Q40 33 38 38 Q36 42 35 44 Q34 42 32 38 Q30 33 35 25" fill="#E8A84C" opacity="0.7"/>
    </g>

    {/* Community */}
    <g className="node-glow" transform="translate(405, 340)">
      <ellipse cx="35" cy="55" rx="32" ry="6" fill="#C45A15" opacity="0.15"/>
      <path d="M15 25 Q8 38 12 48 Q18 58 35 60 Q52 58 58 48 Q62 38 55 25 Q48 15 35 12 Q22 15 15 25 Z" fill="#C45A15"/>
      <ellipse cx="35" cy="14" rx="20" ry="4" fill="#9A4510"/>
      <path d="M35 26 L40 31 L40 40 L30 40 L30 31 Z" fill="#8B4513"/>
      <rect x="33" y="35" width="4" height="5" fill="#5D4037"/>
    </g>

    {/* Labels */}
    <text x="95" y="430" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#15303F">Farm</text>
    <text x="210" y="445" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#15303F">Retreat</text>
    <text x="325" y="445" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#15303F">Venue</text>
    <text x="440" y="430" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#15303F">Community</text>
  </svg>
);
