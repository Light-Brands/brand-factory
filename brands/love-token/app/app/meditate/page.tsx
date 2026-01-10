'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  MeditationIcon,
  CheckIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';

type MeditationState = 'intro' | 'ready' | 'active' | 'complete';

const meditationDurations = [
  { value: 1, label: '1 min', description: 'Quick reset' },
  { value: 5, label: '5 min', description: 'Short practice' },
  { value: 10, label: '10 min', description: 'Standard' },
  { value: 20, label: '20 min', description: 'Deep practice' },
];

const lumiMessages = {
  intro: "Welcome. Take a moment to arrive here, fully present.",
  ready: "Find a comfortable position. When you're ready, place your thumb on the heart to begin.",
  active: "Breathe. Be present. Your love is flowing.",
  complete: "Thank you for being here. Your presence creates value.",
};

export default function MeditatePage() {
  const [state, setState] = useState<MeditationState>('intro');
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startMeditation = useCallback(() => {
    setState('active');
    setTimeRemaining(selectedDuration * 60);
  }, [selectedDuration]);

  const completeMeditation = useCallback(() => {
    const minutesMeditated = selectedDuration;
    const basePoints = minutesMeditated; // 1 point per minute for demo
    setEarnedPoints(basePoints);
    setState('complete');
  }, [selectedDuration]);

  const resetMeditation = () => {
    setState('intro');
    setTimeRemaining(0);
    setEarnedPoints(0);
    setIsHolding(false);
  };

  // Timer effect
  useEffect(() => {
    if (state !== 'active') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          completeMeditation();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, completeMeditation]);

  // Handle space bar for holding
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && state === 'ready') {
        e.preventDefault();
        setIsHolding(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsHolding(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [state]);

  // Start meditation when holding for 2 seconds
  useEffect(() => {
    if (!isHolding || state !== 'ready') return;

    const holdTimer = setTimeout(() => {
      startMeditation();
    }, 2000);

    return () => clearTimeout(holdTimer);
  }, [isHolding, state, startMeditation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-meditation-dusk via-deep-root to-deep-root text-white">
      <Header />

      <main className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center">
        <div className="container-love">
          <AnimatePresence mode="wait">
            {/* Intro State */}
            {state === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl mx-auto"
              >
                {/* Lumi */}
                <div className="mb-8">
                  <Lumi
                    message={lumiMessages.intro}
                    state="speaking"
                    size="lg"
                  />
                </div>

                {/* Duration Selection */}
                <Card className="bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                  <CardContent>
                    <h3 className="text-lg font-medium text-white/90 mb-4">
                      Choose your practice duration
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {meditationDurations.map((duration) => (
                        <button
                          key={duration.value}
                          onClick={() => setSelectedDuration(duration.value)}
                          className={cn(
                            'p-4 rounded-love border-2 transition-all',
                            selectedDuration === duration.value
                              ? 'border-sunlit-gold bg-sunlit-gold/20'
                              : 'border-white/20 hover:border-white/40'
                          )}
                        >
                          <div className="text-xl font-bold text-white">
                            {duration.label}
                          </div>
                          <div className="text-xs text-white/60">
                            {duration.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setState('ready')}
                  className="px-12"
                >
                  Begin
                </Button>
              </motion.div>
            )}

            {/* Ready State */}
            {state === 'ready' && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl mx-auto"
              >
                {/* Lumi */}
                <div className="mb-12">
                  <Lumi
                    message={lumiMessages.ready}
                    state="speaking"
                    size="lg"
                  />
                </div>

                {/* Heart Button */}
                <motion.button
                  onMouseDown={() => setIsHolding(true)}
                  onMouseUp={() => setIsHolding(false)}
                  onMouseLeave={() => setIsHolding(false)}
                  onTouchStart={() => setIsHolding(true)}
                  onTouchEnd={() => setIsHolding(false)}
                  className="relative mx-auto"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Outer glow */}
                  <motion.div
                    className={cn(
                      'absolute inset-0 -m-8 rounded-full bg-heart-rose/30 blur-xl',
                      isHolding && 'bg-heart-rose/50'
                    )}
                    animate={{
                      scale: isHolding ? [1, 1.3, 1] : [1, 1.1, 1],
                    }}
                    transition={{
                      duration: isHolding ? 0.5 : 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Heart button */}
                  <motion.div
                    className={cn(
                      'w-32 h-32 rounded-full flex items-center justify-center',
                      'bg-love-flow shadow-love-glow cursor-pointer',
                      'transition-all duration-300',
                      isHolding && 'scale-110'
                    )}
                    animate={{
                      scale: isHolding ? 1.1 : 1,
                    }}
                  >
                    <HeartIcon
                      size={56}
                      className={cn(
                        'text-white transition-all',
                        isHolding && 'scale-110'
                      )}
                    />
                  </motion.div>

                  {/* Progress ring */}
                  {isHolding && (
                    <motion.svg
                      className="absolute inset-0 -m-2 w-36 h-36"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.circle
                        cx="72"
                        cy="72"
                        r="68"
                        fill="none"
                        stroke="#D4A574"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="427"
                        initial={{ strokeDashoffset: 427 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: 'linear' }}
                      />
                    </motion.svg>
                  )}
                </motion.button>

                <p className="mt-8 text-white/60 text-sm">
                  Hold the heart for 2 seconds to begin
                </p>
                <p className="text-white/40 text-xs mt-2">
                  Or press and hold spacebar
                </p>
              </motion.div>
            )}

            {/* Active Meditation State */}
            {state === 'active' && (
              <motion.div
                key="active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl mx-auto"
              >
                {/* Breathing Circle */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  {/* Outer breathing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-lotus-soft/30"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Inner circle with timer */}
                  <motion.div
                    className="absolute inset-4 rounded-full bg-lotus-soft/10 backdrop-blur-sm flex flex-col items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="text-5xl font-light text-white mb-2">
                      {formatTime(timeRemaining)}
                    </div>
                    <div className="text-white/60 text-sm">remaining</div>
                  </motion.div>

                  {/* Center glow */}
                  <motion.div
                    className="absolute inset-16 rounded-full bg-heart-rose/20 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Lumi message */}
                <motion.p
                  className="text-white/70 text-lg mb-8"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {lumiMessages.active}
                </motion.p>

                {/* Skip button */}
                <Button
                  variant="ghost"
                  className="text-white/40 hover:text-white/60"
                  onClick={completeMeditation}
                >
                  End Early
                </Button>
              </motion.div>
            )}

            {/* Complete State */}
            {state === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl mx-auto"
              >
                {/* Celebration */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-success-sage/20 flex items-center justify-center"
                >
                  <CheckIcon size={48} className="text-success-sage" />
                </motion.div>

                {/* Lumi */}
                <div className="mb-8">
                  <Lumi
                    message={lumiMessages.complete}
                    state="celebrating"
                    size="lg"
                  />
                </div>

                {/* Stats Card */}
                <Card className="bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                  <CardContent>
                    <h3 className="text-lg font-medium text-white/90 mb-4">
                      Your Meditation
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-love">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <MeditationIcon size={20} className="text-lotus-soft" />
                          <span className="text-2xl font-bold text-white">
                            {selectedDuration}
                          </span>
                        </div>
                        <div className="text-xs text-white/60">minutes</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-love">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HeartIcon size={20} className="text-heart-rose" />
                          <span className="text-2xl font-bold text-sunlit-gold">
                            +{earnedPoints}
                          </span>
                        </div>
                        <div className="text-xs text-white/60">Love Points</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-white/60 text-sm mb-6">
                  Sign up to track your meditations and earn Love Credits
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={resetMeditation}
                  >
                    Meditate Again
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Create Account
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {state === 'intro' && <Footer />}
    </div>
  );
}
