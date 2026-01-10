'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * ImagePlaceholder Component
 *
 * Use this component as a placeholder for brand images that need to be generated.
 * Each placeholder includes a reference to the image-prompts.md file for the exact
 * AI generation prompt to use.
 *
 * Once images are generated, replace these placeholders with actual <Image> components.
 */

interface ImagePlaceholderProps {
  /** Unique identifier for this image placeholder - corresponds to prompt in image-prompts.md */
  promptId: string;
  /** Short description of what the image should show */
  description: string;
  /** Aspect ratio: 'square' (1:1), 'wide' (16:9), 'portrait' (3:4), 'ultrawide' (21:9) */
  aspectRatio?: 'square' | 'wide' | 'portrait' | 'ultrawide' | 'auto';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** Visual style variant */
  variant?: 'hero' | 'feature' | 'icon' | 'background' | 'photo';
  /** Additional className */
  className?: string;
  /** Optional alt text for when image is added */
  alt?: string;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  wide: 'aspect-video', // 16:9
  portrait: 'aspect-[3/4]',
  ultrawide: 'aspect-[21/9]',
  auto: '',
};

const sizeClasses = {
  sm: 'max-w-[200px]',
  md: 'max-w-[400px]',
  lg: 'max-w-[600px]',
  full: 'w-full',
};

const variantStyles = {
  hero: {
    bg: 'bg-gradient-to-br from-heart-rose/20 via-lotus-soft/30 to-sunlit-gold/20',
    border: 'border-heart-rose/30',
    icon: '48',
    text: 'text-heart-rose',
  },
  feature: {
    bg: 'bg-gradient-to-br from-earth-clay/20 to-meditation-dusk/20',
    border: 'border-earth-clay/30',
    icon: '32',
    text: 'text-earth-clay',
  },
  icon: {
    bg: 'bg-lotus-soft/30',
    border: 'border-lotus-soft',
    icon: '24',
    text: 'text-meditation-dusk',
  },
  background: {
    bg: 'bg-gradient-to-br from-sacred-cream to-lotus-soft/20',
    border: 'border-stone-grey/20',
    icon: '40',
    text: 'text-stone-grey',
  },
  photo: {
    bg: 'bg-gradient-to-br from-earth-clay/10 via-sunlit-gold/10 to-heart-rose/10',
    border: 'border-sunlit-gold/30',
    icon: '36',
    text: 'text-earth-clay',
  },
};

export function ImagePlaceholder({
  promptId,
  description,
  aspectRatio = 'wide',
  size = 'full',
  variant = 'feature',
  className,
  alt,
}: ImagePlaceholderProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-card',
        aspectRatioClasses[aspectRatio],
        sizeClasses[size],
        styles.bg,
        'border-2 border-dashed',
        styles.border,
        className
      )}
      role="img"
      aria-label={alt || description}
      data-prompt-id={promptId}
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${promptId}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${promptId})`} />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        {/* Image icon */}
        <svg
          className={cn('mb-3 opacity-40', styles.text)}
          width={styles.icon}
          height={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>

        {/* Description */}
        <p className={cn('text-sm font-medium opacity-60 max-w-[80%]', styles.text)}>
          {description}
        </p>

        {/* Prompt ID reference */}
        <p className="mt-2 text-xs opacity-40 text-stone-grey font-mono">
          Prompt: {promptId}
        </p>
      </div>

      {/* Dev mode indicator - shows in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-warning-amber/80 text-white text-xs rounded-full font-medium">
          Placeholder
        </div>
      )}
    </div>
  );
}

/**
 * ImagePlaceholderInline - For inline/icon sized placeholders
 */
interface ImagePlaceholderInlineProps {
  promptId: string;
  size?: number;
  className?: string;
}

export function ImagePlaceholderInline({
  promptId,
  size = 64,
  className,
}: ImagePlaceholderInlineProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-lotus-soft/30 border-2 border-dashed border-lotus-soft flex items-center justify-center',
        className
      )}
      style={{ width: size, height: size }}
      data-prompt-id={promptId}
    >
      <svg
        className="text-meditation-dusk opacity-40"
        width={size * 0.4}
        height={size * 0.4}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

export default ImagePlaceholder;
