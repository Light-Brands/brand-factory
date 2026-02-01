import React from 'react';
import { Section, SectionHeader } from '../ui';
import styles from './CircularNetwork.module.css';

export const CircularNetwork: React.FC = () => {
  return (
    <Section variant="light">
      <SectionHeader
        title="A Network That Nourishes"
        subtitle="Four vessels around one flowing center. Resources, wisdom, and support circulate continuously."
      />

      <div className={styles.network}>
        <svg viewBox="0 0 500 500" fill="none">
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E9AA2"/>
              <stop offset="50%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#5E9AA2"/>
            </linearGradient>
          </defs>

          {/* Orbit rings */}
          <circle cx="250" cy="250" r="180" stroke="url(#orbitGrad)" strokeWidth="2" fill="none" className="orbit-ring" opacity="0.3"/>
          <circle cx="250" cy="250" r="130" stroke="#5E9AA2" strokeWidth="1.5" fill="none" className="orbit-ring" opacity="0.2"/>

          {/* Flow lines between nodes */}
          <g stroke="#5E9AA2" strokeWidth="2" fill="none" opacity="0.4">
            <path d="M250 70 Q350 150 430 250" className="network-flow"/>
            <path d="M430 250 Q350 350 250 430" className="network-flow"/>
            <path d="M250 430 Q150 350 70 250" className="network-flow"/>
            <path d="M70 250 Q150 150 250 70" className="network-flow"/>
          </g>

          {/* Center vessel */}
          <circle cx="250" cy="250" r="50" fill="#15303F"/>
          <circle cx="250" cy="250" r="38" fill="#2E5A6A"/>
          <path d="M235 235 Q228 250 232 262 Q238 272 250 274 Q262 272 268 262 Q272 250 265 235 Q258 225 250 222 Q242 225 235 235 Z"
                fill="#D47850"/>
          <ellipse cx="250" cy="225" rx="15" ry="3" fill="#B85A35"/>

          {/* Farm node (top) */}
          <g transform="translate(220, 35)">
            <circle cx="30" cy="30" r="35" fill="white"/>
            <circle cx="30" cy="30" r="32" fill="#FAF8F5"/>
            <path d="M18 25 Q14 32 16 40 Q20 48 30 50 Q40 48 44 40 Q46 32 42 25 Q38 18 30 16 Q22 18 18 25 Z" fill="#5A360E"/>
            <path d="M30 32 L30 24" stroke="#5C7C5E" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="30" cy="22" r="3" fill="#5C7C5E"/>
          </g>
          <text x="250" y="15" textAnchor="middle" fontFamily="Source Sans Pro, sans-serif" fontSize="13" fontWeight="600" fill="#5A360E">FARM</text>

          {/* Retreat node (right) */}
          <g transform="translate(395, 220)">
            <circle cx="30" cy="30" r="35" fill="white"/>
            <circle cx="30" cy="30" r="32" fill="#FAF8F5"/>
            <path d="M18 25 Q14 32 16 40 Q20 48 30 50 Q40 48 44 40 Q46 32 42 25 Q38 18 30 16 Q22 18 18 25 Z" fill="#4A9199"/>
            <path d="M30 22 Q36 30 36 36 Q36 42 30 42 Q24 42 24 36 Q24 30 30 22 Z" fill="white" opacity="0.4"/>
          </g>
          <text x="485" y="255" textAnchor="middle" fontFamily="Source Sans Pro, sans-serif" fontSize="13" fontWeight="600" fill="#4A9199">RETREAT</text>

          {/* Venue node (bottom) */}
          <g transform="translate(220, 395)">
            <circle cx="30" cy="30" r="35" fill="white"/>
            <circle cx="30" cy="30" r="32" fill="#FAF8F5"/>
            <path d="M18 28 Q14 35 16 42 Q20 50 30 52 Q40 50 44 42 Q46 35 42 28 Q38 20 30 18 Q22 20 18 28 Z" fill="#D64527"/>
            <path d="M30 26 Q34 32 33 36 Q32 39 30 40 Q28 39 27 36 Q26 32 30 26" fill="#E8A84C" opacity="0.7"/>
          </g>
          <text x="250" y="490" textAnchor="middle" fontFamily="Source Sans Pro, sans-serif" fontSize="13" fontWeight="600" fill="#D64527">VENUE</text>

          {/* Community node (left) */}
          <g transform="translate(35, 220)">
            <circle cx="30" cy="30" r="35" fill="white"/>
            <circle cx="30" cy="30" r="32" fill="#FAF8F5"/>
            <path d="M18 25 Q14 32 16 40 Q20 48 30 50 Q40 48 44 40 Q46 32 42 25 Q38 18 30 16 Q22 18 18 25 Z" fill="#C45A15"/>
            <path d="M30 28 L34 32 L34 40 L26 40 L26 32 Z" fill="#8B4513"/>
          </g>
          <text x="15" y="255" textAnchor="middle" fontFamily="Source Sans Pro, sans-serif" fontSize="13" fontWeight="600" fill="#C45A15">COMMUNITY</text>
        </svg>
      </div>
    </Section>
  );
};
