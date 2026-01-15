'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lumi from './Lumi';

const greetings = [
  "Welcome. We've been waiting for you.",
  'Ready to send some love?',
  'Hello, dear one. How are you today?',
  'Welcome back. The world missed you.',
];

const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning. Ready to begin?';
  } else if (hour < 17) {
    return 'Good afternoon. The love is flowing.';
  } else {
    return 'Good evening. Peace be with you.';
  }
};

interface LumiGreetingProps {
  customMessage?: string;
  showTimeGreeting?: boolean;
}

export default function LumiGreeting({
  customMessage,
  showTimeGreeting = false,
}: LumiGreetingProps) {
  const [message, setMessage] = useState<string>('');
  const [state, setState] = useState<'resting' | 'speaking'>('resting');

  useEffect(() => {
    // Show greeting after a short delay
    const timer = setTimeout(() => {
      setState('speaking');
      if (customMessage) {
        setMessage(customMessage);
      } else if (showTimeGreeting) {
        setMessage(getTimeBasedGreeting());
      } else {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        setMessage(randomGreeting);
      }
    }, 500);

    // Return to resting after showing message
    const restTimer = setTimeout(() => {
      setState('resting');
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(restTimer);
    };
  }, [customMessage, showTimeGreeting]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Lumi message={message} state={state} size="lg" />
    </motion.div>
  );
}
