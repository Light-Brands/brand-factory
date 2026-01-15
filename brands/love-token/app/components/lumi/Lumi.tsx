'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LumiProps {
  message?: string;
  state?: 'resting' | 'speaking' | 'listening' | 'celebrating';
  size?: 'sm' | 'md' | 'lg';
  showMessage?: boolean;
  className?: string;
}

export default function Lumi({
  message,
  state = 'resting',
  size = 'md',
  showMessage = true,
  className,
}: LumiProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };

  const glowSizes = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-40 h-40',
  };

  const stateStyles = {
    resting: 'animate-pulse-soft',
    speaking: 'scale-110 brightness-110',
    listening: 'brightness-105',
    celebrating: 'scale-115 brightness-125',
  };

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {/* Lumi Orb */}
      <div className="relative">
        {/* Outer Glow */}
        <motion.div
          className={cn(
            'absolute inset-0 -m-4 rounded-full bg-lotus-soft/30 blur-xl',
            glowSizes[size]
          )}
          animate={{
            scale: state === 'speaking' ? [1, 1.2, 1] : [1, 1.05, 1],
            opacity: state === 'celebrating' ? [0.3, 0.6, 0.3] : [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: state === 'speaking' ? 0.8 : 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Inner Glow */}
        <motion.div
          className={cn(
            'absolute inset-0 -m-2 rounded-full bg-heart-rose/20 blur-md',
            sizes[size]
          )}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Orb */}
        <motion.div
          className={cn(
            'relative rounded-full',
            'bg-gradient-to-br from-lotus-soft via-heart-rose/30 to-sunlit-gold/30',
            'shadow-warm-glow',
            sizes[size],
            stateStyles[state]
          )}
          animate={{
            scale: state === 'celebrating' ? [1, 1.1, 1] : [1, 1.02, 1],
          }}
          transition={{
            duration: state === 'celebrating' ? 1.2 : 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Inner Light */}
          <motion.div
            className={cn(
              'absolute inset-2 rounded-full',
              'bg-gradient-to-br from-white/40 to-transparent'
            )}
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Core Sparkle */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: state === 'speaking' ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-1/4 h-1/4 rounded-full bg-white/60 blur-sm" />
          </motion.div>
        </motion.div>
      </div>

      {/* Message Bubble */}
      <AnimatePresence>
        {message && showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={cn(
              'max-w-xs md:max-w-sm px-5 py-3',
              'bg-white/90 backdrop-blur-sm rounded-2xl',
              'shadow-gentle border border-lotus-soft/30',
              'text-center text-deep-root'
            )}
          >
            <p className="text-sm md:text-base leading-relaxed">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
