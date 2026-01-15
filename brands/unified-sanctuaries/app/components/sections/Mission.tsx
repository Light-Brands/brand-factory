import React from 'react';
import { Section } from '../ui';
import styles from './Mission.module.css';

export const Mission: React.FC = () => {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.visual}>
          <div className={styles.vessel}></div>
        </div>
        <div className={styles.text}>
          <h2>Land Heals People.<br/>People Heal Land.</h2>
          <p>
            Unified Sanctuaries is a regenerative, land-based community committed to solving
            for each other&apos;s basic needs of food, housing, and community within a supportive,
            earth-friendly environment.
          </p>
          <p>
            Like vessels that both receive and pour, each member and each platform gives and
            receives in turn. The water of shared purpose flows through everything, nourishing
            growth wherever it goes.
          </p>
        </div>
      </div>
    </Section>
  );
};
