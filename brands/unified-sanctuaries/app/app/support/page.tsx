import type { Metadata } from 'next';
import { Section, SectionHeader, Button } from '@/components/ui';
import { CTA } from '@/components/sections';
import { Check, Heart } from '@/components/icons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Support Us',
  description: 'Support Unified Sanctuaries through donations and impact investment. Help us secure land and build a regenerative community in Vermont.',
};

const donationTiers = [
  {
    amount: '$25',
    name: 'Seedling',
    description: 'Plant a seed of support',
    rewards: ['Thank you email', 'Name on supporter wall'],
  },
  {
    amount: '$100',
    name: 'Sapling',
    description: 'Help our roots grow deeper',
    rewards: ['All previous rewards', 'Quarterly update calls', 'Community event invite'],
  },
  {
    amount: '$500',
    name: 'Grove',
    description: 'Nourish the network',
    rewards: ['All previous rewards', 'Free retreat day (when operational)', 'Founding supporter recognition'],
  },
  {
    amount: '$1,000+',
    name: 'Forest',
    description: 'Become foundational support',
    rewards: ['All previous rewards', 'Annual dinner with founders', 'Legacy plaque on land'],
  },
];

const investmentFeatures = [
  'Non-speculative land removal',
  'Contribution-based equity model',
  'Transparent financial reporting',
  'Community governance participation',
  'Long-term stewardship focus',
  'Open-source documentation',
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Support Us</p>
          <h1>Pour Into the Vessel</h1>
          <p className={styles.lead}>
            Your support helps us find and secure land, build infrastructure,
            and create a model that other communities can replicate.
          </p>
        </div>
      </Section>

      {/* Donate Section */}
      <Section id="donate">
        <SectionHeader
          title="Donate"
          subtitle="Every contribution nourishes the network"
        />

        <div className={styles.donationGrid}>
          {donationTiers.map((tier) => (
            <div key={tier.name} className={styles.donationCard}>
              <div className={styles.donationAmount}>{tier.amount}</div>
              <h3>{tier.name}</h3>
              <p className={styles.donationDescription}>{tier.description}</p>
              <ul className={styles.rewards}>
                {tier.rewards.map((reward, i) => (
                  <li key={i}>
                    <Check size={14} />
                    {reward}
                  </li>
                ))}
              </ul>
              <Button href="#donate-form" size="sm">
                Donate {tier.amount}
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.donateInfo}>
          <div className={styles.fiscalSponsor}>
            <Heart size={24} />
            <div>
              <h4>Fiscal Sponsorship</h4>
              <p>
                We are fiscally sponsored, making your donation tax-deductible.
                You&apos;ll receive a tax receipt for all contributions.
              </p>
            </div>
          </div>

          <div className={styles.recurringGift}>
            <h4>Monthly Giving</h4>
            <p>
              Consider becoming a sustaining donor with a monthly gift.
              Recurring support helps us plan for the future with confidence.
            </p>
            <Button href="/contact" variant="secondary" size="sm">
              Set Up Monthly Gift
            </Button>
          </div>
        </div>
      </Section>

      {/* Invest Section */}
      <Section variant="gradient" id="invest">
        <div className={styles.investContent}>
          <div className={styles.investText}>
            <h2>Impact Investment</h2>
            <p className={styles.investLead}>
              Beyond donation, you can invest in our vision through contribution units—
              a model that removes land from speculation while creating shared value.
            </p>

            <h3>How It Works</h3>
            <p>
              Our contribution model allows investors to support land acquisition while
              building equity through a combination of financial investment and labor
              contribution. This is not a traditional real estate investment—it&apos;s a
              commitment to regenerative stewardship.
            </p>

            <h3>What We Offer</h3>
            <ul className={styles.investFeatures}>
              {investmentFeatures.map((feature, i) => (
                <li key={i}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="/contact">Inquire About Investment</Button>
          </div>

          <div className={styles.investVisual}>
            <div className={styles.vesselStack}>
              <div className={styles.stackVessel}></div>
              <div className={styles.stackVessel}></div>
              <div className={styles.stackVessel}></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Where Your Money Goes */}
      <Section id="transparency">
        <SectionHeader
          title="Where Your Support Goes"
          subtitle="Complete transparency in how we use funds"
        />

        <div className={styles.allocationGrid}>
          <div className={styles.allocationCard}>
            <div className={styles.percentage}>40%</div>
            <h3>Land Acquisition</h3>
            <p>Down payment and securing the right piece of land in Southern Vermont</p>
          </div>
          <div className={styles.allocationCard}>
            <div className={styles.percentage}>25%</div>
            <h3>Infrastructure</h3>
            <p>Essential systems: water, power, access roads, and first structures</p>
          </div>
          <div className={styles.allocationCard}>
            <div className={styles.percentage}>20%</div>
            <h3>Operations</h3>
            <p>Legal, administrative, and community organizing costs</p>
          </div>
          <div className={styles.allocationCard}>
            <div className={styles.percentage}>15%</div>
            <h3>Reserve</h3>
            <p>Emergency fund and unforeseen expenses</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Questions About Giving?"
        subtitle="We're happy to discuss how your support can make the biggest impact."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Learn About Our Vision"
        secondaryHref="/vision"
      />
    </>
  );
}
