'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  MeditationIcon,
  StoreIcon,
  UsersIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/icons';

type Role = 'farmer' | 'donor' | 'vendor' | 'public' | null;

const roleData = {
  farmer: {
    icon: MeditationIcon,
    title: 'Love Farmer',
    subtitle: 'Earn real value through meditation',
    description:
      'Join a registered community and earn Love Credits through daily meditation practice.',
    benefits: [
      'Earn Love Credits for every minute of meditation',
      'Build streaks for bonus earnings',
      'Spend credits at local vendors',
      'Join a supportive community',
    ],
    cta: 'Join a Love Farm',
    color: 'heart-rose',
    lumiMessage: 'Welcome, future Love Farmer. Your presence will create real value.',
  },
  donor: {
    icon: HeartIcon,
    title: 'Donor',
    subtitle: 'Fund the love economy',
    description:
      'Subscribe monthly to support communities and receive daily notifications of your impact.',
    benefits: [
      'Choose your monthly contribution level',
      'Receive daily love from your communities',
      'Track your impact in real-time',
      'Connect with the people you support',
    ],
    cta: 'Start Contributing',
    color: 'sunlit-gold',
    lumiMessage: 'Your generosity will flow to those who need it. Thank you for being here.',
  },
  vendor: {
    icon: StoreIcon,
    title: 'Vendor',
    subtitle: 'Accept love as payment',
    description:
      'Register your business to accept Love Credits and serve your local community.',
    benefits: [
      'Accept Love Credits for goods and services',
      'Redeem credits for local currency',
      'Support your community economically',
      'Join a network of conscious businesses',
    ],
    cta: 'Register Your Business',
    color: 'om-sage',
    lumiMessage: 'Your business can be part of the love economy. Let me show you how.',
  },
  public: {
    icon: UsersIcon,
    title: 'Public Meditator',
    subtitle: 'Participate globally',
    description:
      'Meditate and earn Love Points — contribute to the global love flow without joining a community.',
    benefits: [
      'Meditate without registration',
      'Earn Love Points (global recognition)',
      'Join worldwide meditation sessions',
      'Track your global contribution',
    ],
    cta: 'Start Meditating Now',
    color: 'meditation-dusk',
    lumiMessage: 'You can start right now. No registration needed. Just breathe.',
  },
};

function JoinPageContent() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') as Role;
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole);
  const [step, setStep] = useState<'select' | 'form'>(initialRole ? 'form' : 'select');

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep('form');
  };

  const handleBack = () => {
    setSelectedRole(null);
    setStep('select');
  };

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 mb-4">
              Join the
              <span className="gradient-text block">Love Economy</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Choose how you want to participate. Every role is essential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container-love">
          <AnimatePresence mode="wait">
            {step === 'select' ? (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Lumi Guide */}
                <div className="flex justify-center mb-12">
                  <Lumi
                    message="Which path calls to you? Take your time."
                    state="speaking"
                    size="md"
                  />
                </div>

                {/* Role Selection Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {(Object.keys(roleData) as Role[]).filter(Boolean).map((role) => {
                    const data = roleData[role!];
                    return (
                      <motion.button
                        key={role}
                        onClick={() => handleRoleSelect(role)}
                        className="text-left group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card className="h-full transition-all duration-300 group-hover:shadow-deep-ground group-hover:border-heart-rose/30 border-2 border-transparent">
                          <CardContent>
                            <div className="flex items-start gap-4">
                              <div className={`w-14 h-14 rounded-full bg-${data.color}/10 flex items-center justify-center flex-shrink-0 group-hover:bg-${data.color}/20 transition-colors`}>
                                <data.icon size={28} className={`text-${data.color}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-deep-root mb-1">
                                  {data.title}
                                </h3>
                                <p className="text-stone-grey text-sm mb-2">
                                  {data.subtitle}
                                </p>
                                <p className="text-deep-root/70 text-sm">
                                  {data.description}
                                </p>
                              </div>
                              <ArrowRightIcon
                                size={20}
                                className="text-border-mist group-hover:text-heart-rose transition-colors flex-shrink-0"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-stone-grey hover:text-deep-root transition-colors mb-8"
                >
                  <ArrowRightIcon size={16} className="rotate-180" />
                  Choose a different path
                </button>

                {selectedRole && (
                  <>
                    {/* Lumi with Role Message */}
                    <div className="flex justify-center mb-8">
                      <Lumi
                        message={roleData[selectedRole].lumiMessage}
                        state="speaking"
                        size="md"
                      />
                    </div>

                    {/* Role Info Card */}
                    <Card variant="warm" className="mb-8">
                      <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-full bg-${roleData[selectedRole].color}/20 flex items-center justify-center`}>
                            {React.createElement(roleData[selectedRole].icon, {
                              size: 32,
                              className: `text-${roleData[selectedRole].color}`,
                            })}
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold text-deep-root">
                              {roleData[selectedRole].title}
                            </h2>
                            <p className="text-stone-grey">
                              {roleData[selectedRole].subtitle}
                            </p>
                          </div>
                        </div>

                        <h3 className="font-medium text-deep-root mb-3">What you&apos;ll get:</h3>
                        <ul className="space-y-2 mb-6">
                          {roleData[selectedRole].benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-deep-root/80">
                              <CheckIcon size={18} className="flex-shrink-0 mt-0.5 text-success-sage" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Registration Form */}
                    <Card className="mb-8">
                      <CardContent>
                        <h3 className="text-lg font-semibold text-deep-root mb-6">
                          Get Started
                        </h3>
                        <form className="space-y-4">
                          <Input
                            label="Full Name"
                            placeholder="Enter your name"
                          />
                          <Input
                            label="Email"
                            type="email"
                            placeholder="your@email.com"
                          />
                          {selectedRole === 'farmer' && (
                            <Input
                              label="Community / Love Farm"
                              placeholder="Which community are you joining?"
                              hint="Contact your local Love Farm administrator if you're unsure"
                            />
                          )}
                          {selectedRole === 'donor' && (
                            <div>
                              <label className="block text-sm font-medium text-deep-root mb-2">
                                Monthly Contribution
                              </label>
                              <div className="grid grid-cols-3 gap-3">
                                {['$50', '$100', 'Custom'].map((amount) => (
                                  <button
                                    key={amount}
                                    type="button"
                                    className="py-3 px-4 border-2 border-border-mist rounded-button text-deep-root hover:border-heart-rose hover:text-heart-rose transition-colors focus:outline-none focus:ring-2 focus:ring-heart-rose"
                                  >
                                    {amount}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          {selectedRole === 'vendor' && (
                            <>
                              <Input
                                label="Business Name"
                                placeholder="Your business name"
                              />
                              <Input
                                label="Location"
                                placeholder="City, Region"
                              />
                            </>
                          )}
                          <Button
                            variant="primary"
                            size="lg"
                            className="w-full mt-6"
                            rightIcon={<ArrowRightIcon size={20} />}
                          >
                            {roleData[selectedRole].cta}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>

                    {selectedRole === 'public' && (
                      <div className="text-center">
                        <p className="text-stone-grey mb-4">
                          Or skip registration and start meditating right away
                        </p>
                        <Button variant="outline">
                          Start Without Account
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-sacred-cream flex items-center justify-center">
        <div className="animate-pulse text-heart-rose">Loading...</div>
      </div>
    }>
      <JoinPageContent />
    </Suspense>
  );
}
