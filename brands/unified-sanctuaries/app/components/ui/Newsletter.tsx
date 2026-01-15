'use client';

import React, { useState } from 'react';
import styles from './Newsletter.module.css';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Stay Connected</h3>
          <p>Updates on our land search, gatherings, and the journey ahead.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className={styles.success}>Welcome to the network!</p>
        )}
      </div>
    </section>
  );
};
