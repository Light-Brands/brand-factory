import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'platform';
  platform?: 'farm' | 'retreat' | 'venue' | 'community';
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  platform,
  className = '',
  hover = true,
}) => {
  const classes = [
    styles.card,
    styles[variant],
    platform ? styles[platform] : '',
    hover ? styles.hover : '',
    className,
  ].filter(Boolean).join(' ');

  return <article className={classes}>{children}</article>;
};
