import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Join Unified Sanctuaries through membership, residency, volunteering, or partnership. Find your place in our regenerative community network.',
};

const membershipTiers = [
  {
    name: 'Supporter',
    price: '$10/month',
    description: 'Stay connected and support our growth',
    benefits: [
      'Monthly newsletter updates',
      'Access to community events',
      'Voting rights on community surveys',
      'Unified Token rewards',
    ],
  },
  {
    name: 'Member',
    price: '$25/month',
    description: 'Deeper engagement and access',
    benefits: [
      'Everything in Supporter',
      'Priority event registration',
      'Discounts on retreats and workshops',
      'Farm stand discount',
      'Participation in working groups',
    ],
    featured: true,
  },
  {
    name: 'Steward',
    price: '$75/month',
    description: 'Full participation in community life',
    benefits: [
      'Everything in Member',
      'Governance participation',
      'Annual retreat included',
      'Housing consideration priority',
      'Pathway to residency',
    ],
  },
];

const pathways = [
  {
    title: 'Residency',
    description: 'Live on the land as part of our community. Residencies are earned through contribution and commitment.',
    link: '/get-involved/residency',
  },
  {
    title: 'Work Exchange',
    description: 'Trade your skills and labor for room and board during seasonal work periods.',
    link: '/get-involved/work-exchange',
  },
  {
    title: 'Volunteer',
    description: 'Give your time and skills to specific projects. Earn Unified Tokens for your contributions.',
    link: '/get-involved/volunteer',
  },
  {
    title: 'Partner',
    description: 'Collaborate with us on events, educational programs, or bioregional initiatives.',
    link: '/get-involved/partner',
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Get Involved</p>
          <h1>Find Your Place<br/>in the Network</h1>
          <p className={styles.lead}>
            Whether you&apos;re ready to move onto the land or just want to stay connected,
            there&apos;s a place for you in Unified Sanctuaries.
          </p>
        </div>
      </Section>

      {/* Memberships */}
      <Section id="memberships">
        <SectionHeader
          title="Membership"
          subtitle="Support our mission and access community benefits"
        />

        <div className={styles.membershipGrid}>
          {membershipTiers.map((tier) => (
            <div key={tier.name} className={`${styles.membershipCard} ${tier.featured ? styles.featured : ''}`}>
              {tier.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <h3>{tier.name}</h3>
              <div className={styles.price}>{tier.price}</div>
              <p className={styles.tierDescription}>{tier.description}</p>
              <ul className={styles.benefits}>
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>
                    <Check size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={tier.featured ? 'primary' : 'secondary'}>
                Join as {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Pathways */}
      <Section variant="gradient" id="pathways">
        <SectionHeader
          title="Pathways to Participation"
          subtitle="Multiple ways to weave yourself into the community"
        />

        <div className={styles.pathwaysGrid}>
          {pathways.map((pathway) => (
            <Card key={pathway.title}>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
              <Button href={pathway.link} variant="ghost" size="sm">
                Learn more
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Volunteer Section */}
      <Section id="volunteer">
        <div className={styles.volunteerContent}>
          <div className={styles.volunteerText}>
            <h2>Volunteer & Contribute</h2>
            <p>
              We&apos;re building something together, and every pair of hands helps.
              Volunteers earn Unified Tokens for their contributions—a community currency
              that can be exchanged for goods, services, and experiences within the network.
            </p>
            <h3>Current Needs</h3>
            <ul>
              <li>Land search support and research</li>
              <li>Website development and design</li>
              <li>Content creation and storytelling</li>
              <li>Legal and financial advising</li>
              <li>Event planning and coordination</li>
              <li>Permaculture design consultation</li>
            </ul>
            <Button href="/contact">Offer Your Skills</Button>
          </div>
          <div className={styles.volunteerVisual}>
            <div className={styles.tokenCircle}>
              <span>UT</span>
              <p>Unified Token</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner */}
      <Section variant="light" id="partner">
        <SectionHeader
          title="Partner With Us"
          subtitle="Collaborate on creating regenerative impact"
        />

        <div className={styles.partnerGrid}>
          <div className={styles.partnerCard}>
            <h3>Event Hosting</h3>
            <p>Host your retreat, workshop, or gathering at our venue when we&apos;re operational.</p>
          </div>
          <div className={styles.partnerCard}>
            <h3>Educational Programs</h3>
            <p>Develop curriculum together around permaculture, healing arts, or community building.</p>
          </div>
          <div className={styles.partnerCard}>
            <h3>Bioregional Collaboration</h3>
            <p>Connect with other Southern Vermont initiatives for mutual support and resource sharing.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to Connect?"
        subtitle="Reach out and let us know how you'd like to be involved."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
