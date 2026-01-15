import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'dark' | 'gradient';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  className = '',
  id,
}) => {
  const classes = `${styles.section} ${styles[variant]} ${className}`;

  return (
    <section className={classes} id={id}>
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <header className={`${styles.header} ${centered ? styles.centered : ''} ${className}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};
