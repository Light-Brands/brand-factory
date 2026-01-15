import React from 'react';
import { Section } from '../ui';
import styles from './Quote.module.css';

interface QuoteProps {
  text: string;
  attribution?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  text = '"The vessel holds. The water nourishes. The network connects. Together, they create abundance."',
  attribution = 'The Unified Sanctuaries Ethos',
}) => {
  return (
    <Section className={styles.section}>
      <div className={styles.vessel}>
        <svg viewBox="0 0 60 75" fill="none">
          <defs>
            <linearGradient id="quoteVesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0A568"/>
              <stop offset="50%" stopColor="#D47850"/>
              <stop offset="100%" stopColor="#5E9AA2"/>
            </linearGradient>
          </defs>
          <path d="M15 25 Q8 38 12 52 Q18 65 30 68 Q42 65 48 52 Q52 38 45 25 Q40 15 30 12 Q20 15 15 25 Z"
                fill="url(#quoteVesselGrad)"/>
          <ellipse cx="30" cy="14" rx="15" ry="4" fill="#B85A35"/>
        </svg>
      </div>
      <div className={styles.content}>
        <blockquote>{text}</blockquote>
        <cite>{attribution}</cite>
      </div>
    </Section>
  );
};
