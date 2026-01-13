import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Vision',
  description: 'Discover the four interconnected platforms of Unified Sanctuaries: Permaculture Farm, Retreat Center, Event Venue, and Community Living.',
};

const platforms = [
  {
    id: 'farm',
    name: 'Permaculture Farm & Education Center',
    description: 'Regenerative agriculture, food sovereignty, and hands-on learning',
    features: [
      'Regenerative agriculture using permaculture principles',
      'Orchards, vegetable gardens, herb cultivation, mushroom growing',
      'Farm stand and CSA program for local food access',
      'Educational workshops and agritourism experiences',
      'Compost operation transforming waste to fertility',
      'Portion of harvest donated to local food-insecure families',
    ],
  },
  {
    id: 'retreat',
    name: 'Retreat & Healing Arts Center',
    description: 'Immersive wellness experiences and transformative healing',
    features: [
      'Multi-day immersive wellness retreats',
      'Healing arts: somatic therapy, bodywork, art therapy',
      'Bathhouse and spa facilities',
      'Campground for overnight guests',
      'Dance space and creative studios',
      'Scholarship fund for accessibility',
    ],
  },
  {
    id: 'venue',
    name: 'Event Venue',
    description: 'Gatherings, celebrations, and community connection',
    features: [
      'Indoor/outdoor event spaces for rent',
      'AV and event production services',
      'Festivals, concerts, markets, weddings',
      'Affordable rates for local entrepreneurs and artists',
      'Innovation hub for regenerative practices',
      'Community gathering space',
    ],
  },
  {
    id: 'community',
    name: 'Community Living Space',
    description: '20+ homes woven together in mutual support',
    features: [
      '20+ home neighborhood with diverse housing options',
      'Shared amenities: kitchen, bathrooms, laundry',
      'Tiny homes and van life support',
      'Visitor accommodations',
      'Pathways to residency through contribution',
      'Long-term stewardship model',
    ],
  },
];

const phases = [
  {
    number: 0,
    name: 'Land Acquisition',
    status: 'Current',
    description: 'Finding and securing the right piece of land in Southern Vermont. Building our core team and establishing legal structures.',
  },
  {
    number: 1,
    name: 'Foundation',
    status: 'Next',
    description: 'First dwelling construction, basic infrastructure, establishing resident stability and initial farming operations.',
  },
  {
    number: 2,
    name: 'Growth',
    status: 'Future',
    description: 'Farm systems expansion, cafe opening, foundational businesses established, more housing construction.',
  },
  {
    number: 3,
    name: 'Flourishing',
    status: 'Future',
    description: 'Retreat center and bathhouse construction, event venue build-out, full community capacity.',
  },
  {
    number: 4,
    name: 'Maturity',
    status: 'Future',
    description: 'Bioregional service, network expansion, becoming a teaching site for other communities.',
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Our Vision</p>
          <h1>Four Vessels, One Living Network</h1>
          <p className={styles.lead}>
            Like clay vessels filling and flowing into one another, our four platforms share
            resources, wisdom, and support. What nourishes one strengthens all.
          </p>
        </div>
      </Section>

      {/* Platforms */}
      <Section id="platforms">
        <SectionHeader
          title="The Four Platforms"
          subtitle="Each holds something essential for the whole"
        />

        <div className={styles.platformsContainer}>
          {platforms.map((platform) => (
            <div key={platform.id} id={platform.id} className={`${styles.platform} ${styles[platform.id]}`}>
              <div className={styles.platformHeader}>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
              </div>
              <ul className={styles.features}>
                {platform.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Phases */}
      <Section variant="gradient" id="phases">
        <SectionHeader
          title="Phases of Development"
          subtitle="Growing organically, one season at a time"
        />

        <div className={styles.phasesTimeline}>
          {phases.map((phase) => (
            <div key={phase.number} className={`${styles.phase} ${phase.status === 'Current' ? styles.current : ''}`}>
              <div className={styles.phaseNumber}>
                <span>{phase.number}</span>
              </div>
              <div className={styles.phaseContent}>
                <div className={styles.phaseStatus}>{phase.status}</div>
                <h3>{phase.name}</h3>
                <p>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Source */}
      <Section id="open-source">
        <div className={styles.openSource}>
          <h2>An Open-Source Blueprint</h2>
          <p className={styles.openSourceLead}>
            We&apos;re not just building a community—we&apos;re creating a replicable model.
            Everything we learn, we share openly with the world.
          </p>
          <div className={styles.openSourceGrid}>
            <div className={styles.openSourceCard}>
              <h3>Documentation</h3>
              <p>Every process, system, and lesson learned will be documented and freely available.</p>
            </div>
            <div className={styles.openSourceCard}>
              <h3>Templates</h3>
              <p>Governance structures, legal frameworks, and operational templates for other communities.</p>
            </div>
            <div className={styles.openSourceCard}>
              <h3>Network</h3>
              <p>Connecting with other regenerative communities to share resources and knowledge.</p>
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Help Us Grow This Vision"
        subtitle="Every contribution helps us move closer to finding and securing land."
        primaryText="Support Us"
        primaryHref="/support"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
