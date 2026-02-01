import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Governance',
  description: 'Learn about how Unified Sanctuaries makes decisions through participatory governance, the Anchor Circle model, and community agreements.',
};

const principles = [
  {
    title: 'Two Realms of Governance',
    description: 'Community-wide decisions (shared resources, membership, values) are made collectively. Platform-specific decisions are made by those working within each platform.',
  },
  {
    title: 'Platform Autonomy',
    description: 'Each of our four platforms (Farm, Retreat, Venue, Community) operates with significant autonomy within shared agreements and values.',
  },
  {
    title: 'Consent-Based Decisions',
    description: 'Major decisions require no sustained objections rather than unanimous agreement. This allows progress while honoring concerns.',
  },
  {
    title: 'Transparency',
    description: 'All governance processes, financials, and decisions are documented and accessible to community members.',
  },
];

const circleRoles = [
  { title: 'Stewardship', description: 'Long-term vision and land care' },
  { title: 'Finance', description: 'Resource allocation and transparency' },
  { title: 'Membership', description: 'Community composition and pathways' },
  { title: 'Conflict Resolution', description: 'Mediation and repair' },
  { title: 'External Relations', description: 'Partnerships and public presence' },
];

const agreements = [
  {
    title: 'Nonviolent Communication',
    description: 'We practice NVC as our default mode of addressing needs and navigating disagreement.',
  },
  {
    title: 'Conflict Resolution Protocol',
    description: 'Three-step process: direct dialogue, facilitated conversation, circle review.',
  },
  {
    title: 'Contribution Expectations',
    description: 'All residents contribute through labor, skills, or other agreed-upon forms of participation.',
  },
  {
    title: 'Environmental Commitments',
    description: 'Shared standards for land use, waste, energy, and ecological impact.',
  },
  {
    title: 'Financial Transparency',
    description: 'Open books policy with regular community financial reviews.',
  },
  {
    title: 'Guest & Visitor Guidelines',
    description: 'Clear protocols for welcoming visitors while maintaining community privacy and safety.',
  },
];

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>How We Govern</p>
          <h1>Power Flows Like Water</h1>
          <p className={styles.lead}>
            Decisions emerge from those most affected, flowing through clear channels
            of participation and accountability. No one person holds the vessel—we all do.
          </p>
        </div>
      </Section>

      {/* How We Operate */}
      <Section id="how-we-operate">
        <SectionHeader
          title="How We Operate"
          subtitle="Principles that guide our collective decision-making"
        />

        <div className={styles.principlesGrid}>
          {principles.map((principle, i) => (
            <div key={i} className={styles.principleCard}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Anchor Circle */}
      <Section variant="gradient" id="anchor-circle">
        <SectionHeader
          title="The Anchor Circle"
          subtitle="A rotating elected body that holds community-wide decisions"
        />

        <div className={styles.circleContainer}>
          <div className={styles.circleVisual}>
            <svg viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="40" fill="rgba(255,255,255,0.1)" />
              <circle cx="150" cy="150" r="35" fill="var(--color-river-deep)" />
              <text x="150" y="155" textAnchor="middle" fill="var(--color-cream)" fontSize="10" fontWeight="500">ANCHOR</text>

              {/* Role nodes */}
              <circle cx="150" cy="30" r="20" fill="white" />
              <circle cx="264" cy="100" r="20" fill="white" />
              <circle cx="230" cy="230" r="20" fill="white" />
              <circle cx="70" cy="230" r="20" fill="white" />
              <circle cx="36" cy="100" r="20" fill="white" />
            </svg>
          </div>

          <div className={styles.circleInfo}>
            <h3>Structure</h3>
            <p>5-7 members elected by the community, serving staggered 2-year terms. No single person serves more than two consecutive terms.</p>

            <h3>Responsibilities</h3>
            <ul className={styles.rolesList}>
              {circleRoles.map((role, i) => (
                <li key={i}>
                  <strong>{role.title}:</strong> {role.description}
                </li>
              ))}
            </ul>

            <h3>Accountability</h3>
            <p>Monthly open meetings. Quarterly community reviews. Annual elections for rotating seats.</p>
          </div>
        </div>
      </Section>

      {/* Community Agreements */}
      <Section id="agreements">
        <SectionHeader
          title="Community Agreements"
          subtitle="The shared commitments that hold us together"
        />

        <div className={styles.agreementsGrid}>
          {agreements.map((agreement, i) => (
            <div key={i} className={styles.agreementCard}>
              <h3>{agreement.title}</h3>
              <p>{agreement.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Governance That Grows"
        subtitle="Our model is designed to evolve. We're always learning and adapting."
        primaryText="Learn More About Us"
        primaryHref="/about"
        secondaryText="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
