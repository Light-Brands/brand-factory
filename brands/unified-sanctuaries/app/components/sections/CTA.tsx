import React from 'react';
import { Section, Button } from '../ui';
import styles from './CTA.module.css';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = 'Be Part of the Flow',
  subtitle = "Whether you're ready to pour in or just curious to receive, there's a place for you here.",
  primaryText = 'Get Involved',
  primaryHref = '/get-involved',
  secondaryText = 'Support the Vision',
  secondaryHref = '/support',
}) => {
  return (
    <Section variant="light" className={styles.section}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={styles.buttons}>
        <Button href={primaryHref} size="lg">
          {primaryText}
        </Button>
        <Button href={secondaryHref} variant="secondary" size="lg">
          {secondaryText}
        </Button>
      </div>
    </Section>
  );
};
