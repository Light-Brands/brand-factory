import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, Button, Card } from '@/components/ui';
import { CTA } from '@/components/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Unified Sanctuaries - our story, our team, and the values that guide us in creating a regenerative community in Vermont.',
};

const team = [
  { name: 'Sydney', role: 'Community Builder & Visionary', bio: 'Weaving connections and holding the vision for what Unified Sanctuaries can become.' },
  { name: 'Lynney', role: 'Farmer & Herbalist', bio: 'Bringing deep knowledge of regenerative agriculture and medicinal plant cultivation.' },
  { name: 'Nina', role: 'Storyteller & Communications', bio: 'Crafting the narratives that share our mission with the world.' },
  { name: 'Josie', role: 'Earth Lawyer', bio: 'Navigating legal frameworks to protect land and community interests.' },
  { name: 'Tiff', role: 'Somatic Therapist', bio: 'Holding space for healing and embodied transformation.' },
  { name: 'Eslerh', role: 'Filmmaker & Visual Artist', bio: 'Documenting our journey and creating visual expressions of our work.' },
  { name: 'Scotty', role: 'Soil Scientist', bio: 'Understanding the ground beneath us and helping it thrive.' },
  { name: 'Jess', role: 'Civil Engineer', bio: 'Designing infrastructure that works with natural systems.' },
  { name: 'Michael', role: 'Financial Steward', bio: 'Managing resources with integrity and transparency.' },
  { name: 'Pato', role: 'Permaculturist', bio: 'Designing systems that mimic nature&apos;s wisdom and abundance.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="light">
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Our Story</p>
          <h1>Where Land and People<br/>Heal Together</h1>
          <p className={styles.lead}>
            Unified Sanctuaries emerged from a simple truth: when people come together
            with shared purpose and deep respect for the land, transformation becomes possible.
          </p>
        </div>
      </Section>

      {/* Origin Story */}
      <Section>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2>How We Began</h2>
            <p>
              Our journey started with Permatours - traveling the world to learn from regenerative
              communities and indigenous land stewards. We gathered wisdom from dozens of intentional
              communities, permaculture farms, and healing centers across continents.
            </p>
            <p>
              We returned home with a vision: to create something that wove together everything
              we&apos;d learned - a living blueprint that could serve as a model for others.
              Southern Vermont called to us with its rich soil, flowing waters, and community
              of like-minded souls.
            </p>
            <p>
              Now, we&apos;re in the land search phase - seeking the right piece of earth to begin
              this experiment in regenerative living. We&apos;re not building a place. We&apos;re growing one.
            </p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.vesselShape}></div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section variant="gradient">
        <SectionHeader
          title="Our Core Team"
          subtitle="The humans weaving this vision into reality"
        />
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <Card key={member.name}>
              <div className={styles.teamMember}>
                <div className={styles.avatar}>{member.name[0]}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Regeneration Over Extraction</h3>
            <p>We give back more than we take, building soil, community, and possibility with every action.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Non-Speculative Land Stewardship</h3>
            <p>Land is not a commodity. We remove it from the speculative market forever, holding it in trust for future generations.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Equity Through Contribution</h3>
            <p>Everyone earns their place through what they give, not just what they can pay. Labor, skills, and care all build equity.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Participatory Governance</h3>
            <p>Decisions flow from those most affected. Our Anchor Circle model ensures diverse voices shape our direction.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Open-Source Sharing</h3>
            <p>What we learn, we share. Our blueprint is designed to be replicated, adapted, and improved by communities worldwide.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Indigenous Wisdom</h3>
            <p>We honor the original stewards of this land and center their knowledge in how we relate to place.</p>
          </div>
        </div>
      </Section>

      {/* Links to Sub-pages */}
      <Section variant="light">
        <div className={styles.exploreLinks}>
          <h2>Explore More</h2>
          <div className={styles.linkCards}>
            <Link href="/vision" className={styles.linkCard}>
              <h3>Our Vision</h3>
              <p>Discover the four platforms and our phases of development</p>
            </Link>
            <Link href="/governance" className={styles.linkCard}>
              <h3>How We Govern</h3>
              <p>Learn about our participatory decision-making model</p>
            </Link>
            <Link href="/get-involved" className={styles.linkCard}>
              <h3>Get Involved</h3>
              <p>Find your place in the network</p>
            </Link>
          </div>
        </div>
      </Section>

      <CTA
        title="Join Our Journey"
        subtitle="We're looking for the land and the people to make this vision real."
        primaryText="Get Involved"
        primaryHref="/get-involved"
        secondaryText="Support Us"
        secondaryHref="/support"
      />
    </>
  );
}
