'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent, ImagePlaceholder } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  GlobalIcon,
  UsersIcon,
  FlowIcon,
  CheckIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const values = [
  {
    title: 'Dignity First',
    description:
      'No pity, no hierarchy, no othering. Love Farmers are value creators, not beneficiaries. Donors are participants, not saviors.',
  },
  {
    title: 'Love as Currency',
    description:
      'We speak of love as real, practical, and powerful. This is economics, not just poetry. Your love becomes real value.',
  },
  {
    title: 'Simplicity is Respect',
    description:
      'Simple language includes everyone. We design for limited-literacy users and universal understanding.',
  },
  {
    title: 'Quality Over Speed',
    description:
      'Correctness over visual polish. Trust over speed. Dignity over efficiency. Simplicity over power.',
  },
];

const differentiators = [
  'Meditation IS contribution — not a reward, but the source of value itself',
  'Communities participate as equals — never recipients, always co-creators',
  'Love flows in circles — donors receive love back, meditators earn real value',
  'Dignity-first design — symbol-based interfaces for limited-literacy communities',
  'Future-proof architecture — built toward global digital currency infrastructure',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        {/* IMAGE PLACEMENT: Hero Background
            File: lovetoken-hero-community-gathering-1920x1080.png
            Wide shot of village community gathering */}

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
                <GlobalIcon size={16} />
                Our Story
              </span>
              <h1 className="heading-1 mb-6">
                The World&apos;s Greatest
                <span className="gradient-text block">Experiment</span>
              </h1>
              <p className="body-large text-deep-root/70">
                We&apos;re proving that love — real, measurable, practical love —
                can become the foundation of a new economic system.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <ImagePlaceholder
                promptId="hero-community-gathering"
                description="Village community gathering at dawn - authentic connection and warmth"
                aspectRatio="square"
                variant="hero"
                alt="A community gathering in a village courtyard at dawn"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-white">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="body-large text-deep-root/80 mb-6">
                Love Token is building the world&apos;s first functioning <strong>Love Economy</strong> —
                a system where meditation, intention, and presence generate measurable social and
                economic value.
              </p>
              <p className="body-text text-deep-root/70 mb-6">
                We believe that love is not just an emotion — it&apos;s a force that can transform
                communities, economies, and the world. Through our platform, we&apos;re demonstrating
                that inner work has outer impact.
              </p>
              <div className="p-6 bg-lotus-soft/30 rounded-card border border-lotus-soft">
                <p className="text-xl md:text-2xl font-light text-heart-rose italic text-center">
                  &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              {/* IMAGE PLACEMENT: Mission Image
                  Photo of intergenerational connection or community meditation */}
              <ImagePlaceholder
                promptId="mission-intergenerational"
                description="Elder and young person in meaningful connection - wisdom shared"
                aspectRatio="wide"
                variant="photo"
                className="w-full max-w-md"
                alt="An elder and young person sharing a meaningful moment together"
              />
              <Lumi
                message="We're stewarding something sacred — a system where love creates real value."
                state="speaking"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">What Makes Us Different</h2>
            <p className="body-large text-deep-root/70">
              Love Token isn&apos;t charity. It&apos;s not a donation platform.
              It&apos;s a completely new economic paradigm.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 mb-4 bg-white rounded-card shadow-gentle"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success-sage/10 flex items-center justify-center">
                  <CheckIcon size={18} className="text-success-sage" />
                </div>
                <p className="text-deep-root/80 pt-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">Our Core Values</h2>
            <p className="body-large text-white/70">
              Every decision we make is guided by these principles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-sunlit-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card variant="warm" className="text-center p-6">
                  <CardContent>
                    <HeartIcon size={32} className="mx-auto mb-3 text-heart-rose" />
                    <div className="text-2xl font-bold text-deep-root">Phase 1</div>
                    <div className="text-sm text-stone-grey">MVP Core</div>
                  </CardContent>
                </Card>
                <Card variant="warm" className="text-center p-6">
                  <CardContent>
                    <UsersIcon size={32} className="mx-auto mb-3 text-earth-clay" />
                    <div className="text-2xl font-bold text-deep-root">Phase 2</div>
                    <div className="text-sm text-stone-grey">Donor Impact</div>
                  </CardContent>
                </Card>
                <Card variant="warm" className="text-center p-6">
                  <CardContent>
                    <FlowIcon size={32} className="mx-auto mb-3 text-meditation-dusk" />
                    <div className="text-2xl font-bold text-deep-root">Phase 3</div>
                    <div className="text-sm text-stone-grey">Energy</div>
                  </CardContent>
                </Card>
                <Card variant="warm" className="text-center p-6">
                  <CardContent>
                    <GlobalIcon size={32} className="mx-auto mb-3 text-om-sage" />
                    <div className="text-2xl font-bold text-deep-root">Phase 4</div>
                    <div className="text-sm text-stone-grey">Global Scale</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="heading-2 mb-6">Our Vision</h2>
              <p className="body-large text-deep-root/80 mb-6">
                We&apos;re building toward a future where the Love Economy operates at global scale —
                with Love Coin as a recognized digital currency and meditation-generated value
                funding sustainable development worldwide.
              </p>
              <p className="body-text text-deep-root/70">
                Starting with small communities, we&apos;re proving the model works.
                Then scaling thoughtfully — because love shouldn&apos;t be rushed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TWGE Section */}
      <section className="section-padding bg-white">
        <div className="container-love text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlobalIcon size={48} className="mx-auto mb-6 text-earth-clay" />
            <h2 className="heading-2 mb-4">Part of Something Bigger</h2>
            <p className="body-large text-deep-root/70 mb-8">
              Love Token is a project of <strong>The World&apos;s Greatest Experiment (TWGE)</strong> —
              an organization dedicated to demonstrating new ways of living, working, and
              creating value together.
            </p>
            <p className="text-lg text-heart-rose font-medium">
              Together, we&apos;re proving that another world is possible.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
