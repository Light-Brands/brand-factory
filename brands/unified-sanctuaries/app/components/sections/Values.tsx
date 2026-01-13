import React from 'react';
import { Section, SectionHeader } from '../ui';
import styles from './Values.module.css';

const values = [
  'Regeneration',
  'Non-Speculative Land',
  'Equity Through Contribution',
  'Participatory Governance',
  'Open-Source Sharing',
  'Indigenous Wisdom',
  'Joy as Medicine',
  'Flexibility & Resilience',
];

export const Values: React.FC = () => {
  return (
    <Section variant="dark">
      <SectionHeader
        title="Rooted in Values"
        subtitle="The principles that flow through everything we grow"
      />

      <div className={styles.flow}>
        {values.map((value) => (
          <span key={value} className={styles.drop}>
            {value}
          </span>
        ))}
      </div>
    </Section>
  );
};
