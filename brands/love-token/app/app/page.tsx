'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { LumiGreeting } from '@/components/lumi';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  FlowIcon,
  UsersIcon,
  StoreIcon,
  GlobalIcon,
  ArrowRightIcon,
  SparklesIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium">
                <SparklesIcon size={16} />
                The World&apos;s Greatest Experiment
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeIn}
              className="heading-1 text-balance mb-6"
            >
              Where Love Becomes
              <span className="gradient-text block">Real Currency</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeIn}
              className="body-large text-deep-root/70 max-w-2xl mx-auto mb-8"
            >
              Building the world&apos;s first functioning Love Economy where meditation,
              intention, and presence generate measurable social and economic value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                Begin Your Journey
              </Button>
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </motion.div>

            {/* Lumi Greeting */}
            <motion.div variants={fadeIn} className="mt-16">
              <LumiGreeting />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Core Philosophy</h2>
            <p className="text-2xl md:text-3xl font-light text-heart-rose italic">
              &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CoinIcon,
                title: 'Grounded Love',
                description:
                  'Love manifesting in material reality — Love Credits buying groceries, paying for services, creating real economic impact.',
              },
              {
                icon: MeditationIcon,
                title: 'Spiritual Love',
                description:
                  'Love cultivated through meditation and conscious intention. Your presence creates value. Your practice is contribution.',
              },
              {
                icon: FlowIcon,
                title: 'Living Love',
                description:
                  'Love in continuous motion, flowing between all participants. Donors receive love back. Meditators earn real value.',
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="warm" className="h-full text-center p-8">
                  <CardContent>
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-love-flow flex items-center justify-center">
                      <pillar.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-root mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-deep-root/70">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Love Economy in Action</h2>
            <p className="body-large text-deep-root/70">
              A circular system where everyone participates as equals, never as recipients.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                icon: MeditationIcon,
                title: 'Meditate',
                description: 'Love Farmers participate in guided meditations, creating intention and presence.',
              },
              {
                step: '2',
                icon: CoinIcon,
                title: 'Earn Credits',
                description: 'Each minute of meditation earns Love Credits — real local currency value.',
              },
              {
                step: '3',
                icon: StoreIcon,
                title: 'Spend Locally',
                description: 'Use credits at local vendors for groceries, services, and daily needs.',
              },
              {
                step: '4',
                icon: FlowIcon,
                title: 'Love Circulates',
                description: 'Vendors redeem credits. Donors receive love. The cycle continues.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-earth-clay text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                      <item.icon size={24} className="text-meditation-dusk" />
                    </div>
                    <h4 className="font-semibold text-deep-root mb-2">{item.title}</h4>
                    <p className="text-sm text-deep-root/70">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon size={24} className="text-border-mist" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/how-it-works">
              <Button variant="secondary" rightIcon={<ArrowRightIcon size={20} />}>
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">Join the Love Economy</h2>
            <p className="body-large text-white/70">
              Every participant plays a vital role in circulating love through the system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MeditationIcon,
                title: 'Love Farmers',
                description:
                  'Participate in meditations. Earn credits. Create real value through presence.',
                cta: 'Start Farming',
                href: '/join?role=farmer',
              },
              {
                icon: HeartIcon,
                title: 'Donors',
                description:
                  'Subscribe to fund communities. Receive daily love. See your impact flow.',
                cta: 'Become a Donor',
                href: '/join?role=donor',
              },
              {
                icon: StoreIcon,
                title: 'Vendors',
                description:
                  'Accept Love Credits. Serve your community. Redeem for local currency.',
                cta: 'Join as Vendor',
                href: '/join?role=vendor',
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center border border-white/10 hover:border-sunlit-gold/30 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sunlit-gold/20 flex items-center justify-center">
                  <role.icon size={32} className="text-sunlit-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{role.title}</h3>
                <p className="text-white/70 mb-6">{role.description}</p>
                <Link href={role.href}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    {role.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Love in Motion</h2>
            <p className="body-large text-deep-root/70">
              Real impact, measured and growing every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10K+', label: 'Minutes Meditated', icon: MeditationIcon },
              { value: '500+', label: 'Love Farmers', icon: UsersIcon },
              { value: '5K+', label: 'Credits Circulated', icon: CoinIcon },
              { value: '50+', label: 'Partner Vendors', icon: StoreIcon },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                  <stat.icon size={24} className="text-heart-rose" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-grey">{stat.label}</div>
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
            <GlobalIcon size={48} className="mx-auto mb-6 text-white/90" />
            <h2 className="heading-2 text-white mb-4">
              Ready to Be Part of Something Greater?
            </h2>
            <p className="body-large text-white/80 mb-8">
              Join thousands of people around the world building a new kind of economy —
              one meditation at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-heart-rose hover:bg-white/90"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Start Meditating
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
