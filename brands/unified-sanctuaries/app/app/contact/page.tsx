'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, Input, Textarea, Button } from '@/components/ui';
import { Mail, MapPin, Instagram } from '@/components/icons';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Contact</p>
          <h1>Let&apos;s Connect</h1>
          <p className={styles.lead}>
            Questions, ideas, or just want to say hello? We&apos;d love to hear from you.
            Every connection strengthens the network.
          </p>
        </div>
      </Section>

      {/* Contact Content */}
      <Section>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h2>Send a Message</h2>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. We&apos;ll be in touch soon.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  name="name"
                  label="Your Name"
                  placeholder="How should we call you?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  label="Your Message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />
                <Button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles.infoContainer}>
            <div className={styles.infoCard}>
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <a href="mailto:unifiedsanctuaries@gmail.com">
                  unifiedsanctuaries@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Southern Vermont<br/>Brattleboro / Guilford / Putney Region</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <Instagram size={24} />
              <div>
                <h3>Social</h3>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  @unifiedsanctuaries
                </a>
              </div>
            </div>

            <div className={styles.responseNote}>
              <h4>Response Time</h4>
              <p>
                We&apos;re a small team doing big work. Please allow 2-3 business days
                for a response. If it&apos;s urgent, mention that in your subject line.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="light">
        <SectionHeader
          title="Common Questions"
          subtitle="Quick answers to things people often ask"
        />

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h3>Where are you located?</h3>
            <p>We&apos;re currently in the land search phase, focused on the Southern Vermont region around Brattleboro, Guilford, and Putney.</p>
          </div>
          <div className={styles.faqCard}>
            <h3>Can I visit?</h3>
            <p>Once we secure land, we&apos;ll host open days and community events. Sign up for our newsletter to be the first to know.</p>
          </div>
          <div className={styles.faqCard}>
            <h3>How can I get involved now?</h3>
            <p>Join as a member, volunteer your skills, or donate to our land fund. Every contribution helps us move forward.</p>
          </div>
          <div className={styles.faqCard}>
            <h3>Are you accepting residents?</h3>
            <p>Not yet - we&apos;re still searching for land. But we&apos;re building relationships with future community members now.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
