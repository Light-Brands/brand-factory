'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge, ImagePlaceholder } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  FlowIcon,
  UsersIcon,
  StoreIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const currencyComparison = [
  {
    type: 'Love Points (LP)',
    description: 'Global recognition currency',
    features: [
      'Earned by all meditators worldwide',
      'Non-transferable',
      'Cannot be redeemed for money',
      'Tracks global contribution',
    ],
    color: 'heart-rose',
  },
  {
    type: 'Love Credits (LVC)',
    description: 'Local economic currency',
    features: [
      'Earned by Love Farmers only',
      'Spendable at local vendors',
      'Redeemable for local currency',
      'Creates real economic value',
    ],
    color: 'sunlit-gold',
  },
];

const earningRates = [
  { label: 'Base Rate', value: '0.01 LVC', detail: 'per minute of meditation' },
  { label: 'Individual Bonus', value: '+10%', detail: 'for solo meditations' },
  { label: 'Day 7 Streak', value: '+50%', detail: 'bonus on that day' },
  { label: 'Day 30 Streak', value: '+100%', detail: 'bonus on that day' },
  { label: 'Monthly Bonus', value: '+5%', detail: 'on all credits earned' },
];

const roles = [
  {
    icon: UsersIcon,
    title: 'Public User',
    description: 'Anyone can participate',
    details: [
      'Meditate and earn Love Points',
      'Join global meditation sessions',
      'Track your contribution to global love',
      'No registration required to start',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Donor',
    description: 'Fund the love economy',
    details: [
      'Subscribe monthly ($50/$100/custom)',
      'Receive daily love notifications',
      'See your impact in real-time',
      'Connect with communities you support',
    ],
  },
  {
    icon: MeditationIcon,
    title: 'Love Farmer',
    description: 'Earn real value through presence',
    details: [
      'Join a registered Love Farm community',
      'Earn Love Credits through meditation',
      'Spend credits at local vendors',
      'Build streaks for bonus earnings',
    ],
  },
  {
    icon: StoreIcon,
    title: 'Vendor',
    description: 'Accept love as payment',
    details: [
      'Register your business',
      'Accept Love Credits for goods/services',
      'Redeem credits for local currency',
      'Serve and support your community',
    ],
  },
];

const flowSteps = [
  {
    step: 1,
    title: 'Donors Subscribe',
    description: 'Monthly contributions fund the Love Economy, creating the pool that backs Love Credits.',
    icon: HeartIcon,
    imagePromptId: 'flow-step-1-donors',
    imageDescription: 'Heart being given, donor generosity',
  },
  {
    step: 2,
    title: 'Farmers Meditate',
    description: 'Love Farmers participate in guided meditations, earning Love Credits based on their practice.',
    icon: MeditationIcon,
    imagePromptId: 'flow-step-2-meditate',
    imageDescription: 'Meditation with timer, presence',
  },
  {
    step: 3,
    title: 'Credits Flow to Wallets',
    description: 'Earned credits appear in digital wallets, ready to spend at participating vendors.',
    icon: CoinIcon,
    imagePromptId: 'flow-step-3-credits',
    imageDescription: 'Love Credits appearing in wallet',
  },
  {
    step: 4,
    title: 'Farmers Spend Locally',
    description: 'Credits are spent at local vendors for groceries, services, and daily necessities.',
    icon: StoreIcon,
    imagePromptId: 'flow-step-4-spend',
    imageDescription: 'Community market transaction',
  },
  {
    step: 5,
    title: 'Vendors Redeem',
    description: 'Vendors submit credits for redemption, receiving local currency from the fund.',
    icon: FlowIcon,
    imagePromptId: 'flow-step-5-redeem',
    imageDescription: 'Vendor receiving redemption',
  },
  {
    step: 6,
    title: 'Love Circulates',
    description: 'Donors receive notifications of their impact. The cycle continues. Love grows.',
    icon: SparklesIcon,
    imagePromptId: 'flow-step-6-circulates',
    imageDescription: 'Full circle of love flowing',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        {/* IMAGE PLACEMENT: Hero Background
            File: lovetoken-hero-flow-river-1920x1080.png
            A flowing river metaphor for love circulation */}

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
                <FlowIcon size={16} />
                The Love Economy
              </span>
              <h1 className="heading-1 mb-6">
                How Love Token
                <span className="gradient-text block">Works</span>
              </h1>
              <p className="body-large text-deep-root/70">
                A complete guide to understanding how meditation creates real economic value
                and transforms communities.
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
                promptId="hero-love-flow-river"
                description="Flowing river at golden hour - love circulating through landscape"
                aspectRatio="square"
                variant="hero"
                alt="A flowing river symbolizing love circulation through communities"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Flow Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Love Flow Cycle</h2>
            <p className="body-large text-deep-root/70">
              Love moves in circles, not lines. Every participant gives and receives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {flowSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  <CardContent>
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-clay text-white text-lg font-bold flex items-center justify-center z-10">
                      {item.step}
                    </div>
                    <div className="pt-4">
                      {/* IMAGE PLACEMENT: Flow step illustration
                          Replace icon with step-specific image */}
                      <div className="mb-4">
                        <ImagePlaceholder
                          promptId={item.imagePromptId}
                          description={item.imageDescription}
                          aspectRatio="wide"
                          variant="icon"
                          className="h-24"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-deep-root mb-2">
                        {item.title}
                      </h3>
                      <p className="text-deep-root/70 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Currency Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Dual Currency System</h2>
            <p className="body-large text-deep-root/70">
              Two currencies, two purposes — global recognition and local economic impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currencyComparison.map((currency, index) => (
              <motion.div
                key={currency.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="warm" className="h-full">
                  <CardContent>
                    <Badge variant={currency.color === 'heart-rose' ? 'love' : 'warning'} className="mb-4">
                      {currency.type}
                    </Badge>
                    <h3 className="text-xl font-semibold text-deep-root mb-2">
                      {currency.type}
                    </h3>
                    <p className="text-stone-grey mb-4">{currency.description}</p>
                    <ul className="space-y-2">
                      {currency.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-deep-root/80">
                          <CheckIcon size={16} className={`flex-shrink-0 mt-0.5 text-${currency.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Rates Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">How Credits Are Earned</h2>
            <p className="body-large text-white/70">
              Love Farmers earn credits based on meditation time, with bonuses for consistency.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/10">
              <div className="grid gap-4">
                {earningRates.map((rate, index) => (
                  <motion.div
                    key={rate.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-love"
                  >
                    <div>
                      <span className="font-medium text-white">{rate.label}</span>
                      <span className="text-white/60 text-sm ml-2">{rate.detail}</span>
                    </div>
                    <span className="text-xl font-bold text-sunlit-gold">{rate.value}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-sunlit-gold/20 rounded-love border border-sunlit-gold/30">
                <p className="text-center text-white/90">
                  <span className="font-semibold">Example:</span> A 20-minute meditation earns{' '}
                  <span className="text-sunlit-gold font-bold">0.20 LVC</span> base +{' '}
                  <span className="text-sunlit-gold font-bold">0.02 LVC</span> individual bonus ={' '}
                  <span className="text-sunlit-gold font-bold">0.22 LVC</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Who Participates</h2>
            <p className="body-large text-deep-root/70">
              Everyone plays a vital role in the Love Economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-love-flow flex items-center justify-center flex-shrink-0">
                        <role.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-deep-root">{role.title}</h3>
                        <p className="text-stone-grey">{role.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {role.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-deep-root/80">
                          <CheckIcon size={16} className="flex-shrink-0 mt-0.5 text-success-sage" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-love-flow">
        <div className="container-love text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-2 text-white mb-4">Ready to Join?</h2>
            <p className="body-large text-white/80 mb-8">
              Whether you want to meditate, donate, or participate as a vendor,
              there&apos;s a place for you in the Love Economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Choose Your Path
                </Button>
              </Link>
              <Link href="/meditate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Try a Meditation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
