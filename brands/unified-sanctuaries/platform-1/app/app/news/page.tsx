import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Calendar } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated on Unified Sanctuaries - our land search progress, community events, and journey toward creating a regenerative community in Vermont.',
};

const updates = [
  {
    date: 'January 2026',
    title: 'Land Search Continues in Southern Vermont',
    excerpt: 'We have narrowed our search to three promising properties in the Brattleboro-Guilford-Putney triangle. Each offers unique possibilities for our four-platform vision.',
    category: 'Land Search',
  },
  {
    date: 'December 2025',
    title: 'Winter Gathering: Community Visioning Session',
    excerpt: 'Over 30 people joined us for a day of shared dreaming, mapping out what the first year on land might look like.',
    category: 'Community',
  },
  {
    date: 'November 2025',
    title: 'Fiscal Sponsorship Secured',
    excerpt: 'We are now fiscally sponsored, allowing us to receive tax-deductible donations. This is a major milestone for our fundraising efforts.',
    category: 'Milestone',
  },
  {
    date: 'October 2025',
    title: 'Core Team Grows to Ten',
    excerpt: 'We welcome Pato to the core team, bringing deep permaculture expertise and decades of experience designing regenerative systems.',
    category: 'Team',
  },
  {
    date: 'September 2025',
    title: 'Brand Identity Complete',
    excerpt: 'Our new visual identity reflects our core values: vessels that hold and pour, networks that connect and nourish. The vessel holds. The water nourishes.',
    category: 'Milestone',
  },
  {
    date: 'August 2025',
    title: 'First Community Survey Results',
    excerpt: 'Over 200 people responded to our community needs survey. Top priorities: affordable housing, local food access, and healing arts spaces.',
    category: 'Research',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>News & Updates</p>
          <h1>The Journey Unfolds</h1>
          <p className={styles.lead}>
            Follow along as we search for land, build community, and move toward
            our vision of regenerative living in Vermont.
          </p>
        </div>
      </Section>

      {/* Updates */}
      <Section>
        <div className={styles.updatesList}>
          {updates.map((update, i) => (
            <article key={i} className={styles.updateCard}>
              <div className={styles.updateMeta}>
                <span className={styles.category}>{update.category}</span>
                <span className={styles.date}>
                  <Calendar size={14} />
                  {update.date}
                </span>
              </div>
              <h2>{update.title}</h2>
              <p>{update.excerpt}</p>
              <Link href="#" className={styles.readMore}>Read more</Link>
            </article>
          ))}
        </div>

        <div className={styles.loadMore}>
          <p>More updates coming as our journey continues.</p>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="gradient">
        <div className={styles.newsletterCTA}>
          <h2>Stay in the Flow</h2>
          <p>
            Join our newsletter for monthly updates on the land search,
            community events, and ways to get involved.
          </p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </Section>

      <CTA
        title="Want to Be Part of the Story?"
        subtitle="There are many ways to contribute to what we're building."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
