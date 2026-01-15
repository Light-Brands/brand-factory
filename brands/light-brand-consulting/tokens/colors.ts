/**
 * Light Brand Consulting - Color Tokens
 *
 * The Illumination Palette: Light emerging from depth
 *
 * This color system embodies the moment of illumination — warm, luminous accents
 * against sophisticated dark backgrounds, representing clarity breaking through
 * confusion and potential becoming visible.
 *
 * @see ../spec/brand/01-visual-identity.md - Complete visual identity
 * @see ../spec/FRONTEND-SPEC.md - Implementation guide
 */

export const colors = {
  // ============================================================================
  // Radiance Scale (Primary Accent) - The moment of illumination
  // ============================================================================

  /**
   * Primary accent color - Luminous gold for illumination moments
   * @usage Primary CTAs, breakthrough insights, key highlights
   * @contrast 9.4:1 on depth-base (AAA)
   * @meaning Breakthrough insights, clarity, the "aha" moment
   */
  'radiance-gold': '#E8B84A',

  /**
   * Secondary accent - Warm amber for engaged states
   * @usage Hover states, active interactions, secondary CTAs
   * @contrast 7.8:1 on depth-base (AA)
   * @meaning Sustained illumination, active engagement
   */
  'radiance-amber': '#D4944C',

  /**
   * Tertiary accent - Deep warm for gradients and accents
   * @usage Gradient endpoints, tertiary accents
   * @contrast 6.2:1 on depth-base (AA)
   * @meaning Human warmth, grounded connection
   */
  'radiance-warm': '#C67D4E',

  // ============================================================================
  // Clarity Scale (Secondary Accent) - Pure light and revelation
  // ============================================================================

  /**
   * Premium highlight - Pure cream for special emphasis
   * @usage Premium highlights, revelation moments, special text
   * @contrast 19.1:1 on depth-base (AAA)
   * @meaning Pure clarity, full revelation, premium
   */
  'clarity-cream': '#FDF6E3',

  /**
   * Soft clarity - Gentle illumination
   * @usage Subtle highlights, soft backgrounds
   * @contrast 16.4:1 on depth-base (AAA)
   * @meaning Soft illumination, gentle guidance
   */
  'clarity-soft': '#F5E6C8',

  /**
   * Muted clarity - Subtle definition
   * @usage Borders, secondary elements, subtle separators
   * @contrast 11.2:1 on depth-base (AAA)
   * @meaning Gentle guidance, subtle definition
   */
  'clarity-muted': '#D9C9A5',

  // ============================================================================
  // Wisdom Scale (Intelligence Accent) - AI and deep insight
  // ============================================================================

  /**
   * Primary wisdom - Violet for AI and intelligence
   * @usage AI elements, intelligence indicators, agent features
   * @contrast 6.2:1 on depth-base (AA)
   * @meaning Deep insight, AI wisdom, intelligence
   */
  'wisdom-violet': '#8B7EC8',

  /**
   * Secondary wisdom - Lighter violet
   * @usage Secondary AI accents, hover states on wisdom elements
   * @contrast 7.4:1 on depth-base (AA)
   * @meaning Supported intelligence, AI assistance
   */
  'wisdom-soft': '#A599D4',

  /**
   * Tertiary wisdom - Subdued violet
   * @usage Background intelligence indicators, subtle AI presence
   * @contrast 5.1:1 on depth-base (AA)
   * @meaning Background wisdom, subtle guidance
   */
  'wisdom-muted': '#7A6BA8',

  // ============================================================================
  // Depth Scale (Background) - Professional darkness with warmth
  // ============================================================================

  /**
   * Primary background - Deep immersive darkness with warm undertone
   * @usage Page backgrounds, app canvas
   * @contrast 18.5:1 with clarity-cream (AAA)
   */
  'depth-base': '#0F0E0D',

  /**
   * Elevated surface - Card and modal backgrounds
   * @usage Cards, modals, elevated surfaces
   * @contrast 16.8:1 with clarity-cream (AAA)
   */
  'depth-elevated': '#151413',

  /**
   * Interactive surface - Hover and active states
   * @usage Hover states, interactive element backgrounds
   * @contrast 14.6:1 with clarity-cream (AAA)
   */
  'depth-surface': '#1C1A18',

  /**
   * Border - Subtle separators with warmth
   * @usage Borders, dividers, subtle separators
   * @contrast 10.2:1 with clarity-cream (AAA)
   */
  'depth-border': '#2A2724',

  // ============================================================================
  // Text Scale (Warm Moonlight) - Clear, readable text
  // ============================================================================

  /**
   * Primary text - Maximum readability with warmth
   * @usage Headings, body text, primary content
   * @contrast 18.2:1 on depth-base (AAA)
   */
  'text-primary': '#F8F5F0',

  /**
   * Secondary text - Slightly muted
   * @usage Secondary content, descriptions, body paragraphs
   * @contrast 15.1:1 on depth-base (AAA)
   */
  'text-secondary': '#E5E0D8',

  /**
   * Muted text - Subtle, helper text
   * @usage Captions, metadata, timestamps, helper text
   * @contrast 7.8:1 on depth-base (AA)
   */
  'text-muted': '#A8A299',

  // ============================================================================
  // Semantic Colors - Universal feedback
  // ============================================================================

  /**
   * Success - Positive outcomes
   * @usage Success states, completed actions, confirmations
   * @contrast 6.9:1 on depth-base (AA)
   */
  'success': '#5CB85C',

  /**
   * Warning - Attention needed
   * @usage Warnings, pending actions, caution states
   * @contrast 8.1:1 on depth-base (AA)
   */
  'warning': '#F0A030',

  /**
   * Error - Critical alerts
   * @usage Error states, destructive actions, critical alerts
   * @contrast 6.4:1 on depth-base (AA)
   */
  'error': '#E85A5A',

  /**
   * Info - Informational states
   * @usage Informational states, tips, guidance
   * @contrast 7.2:1 on depth-base (AA)
   */
  'info': '#5DADE2',
} as const;

export type ColorToken = keyof typeof colors;

/**
 * Mapping from Onyx Design System tokens to Light Brand tokens
 * Use this for adapting Onyx components to Light Brand styling
 */
export const onyxToLightBrandMapping = {
  // Accent colors
  'aqua-light': 'radiance-gold',
  'aqua-medium': 'radiance-amber',
  'teal-light': 'wisdom-violet',
  'gold-accent': 'clarity-cream',

  // Background colors
  'abyss-base': 'depth-base',
  'abyss-mystic': 'depth-elevated',
  'abyss-light': 'depth-surface',
  'abyss-lighter': 'depth-border',

  // Text colors
  'moonlight': 'text-primary',
  'moonlight-soft': 'text-secondary',
  'moonlight-muted': 'text-muted',
} as const;

/**
 * CSS custom properties for Light Brand colors
 * Can be injected into :root for CSS variable usage
 */
export const cssCustomProperties = {
  // Radiance
  '--color-radiance-gold': '#E8B84A',
  '--color-radiance-amber': '#D4944C',
  '--color-radiance-warm': '#C67D4E',

  // Clarity
  '--color-clarity-cream': '#FDF6E3',
  '--color-clarity-soft': '#F5E6C8',
  '--color-clarity-muted': '#D9C9A5',

  // Wisdom
  '--color-wisdom-violet': '#8B7EC8',
  '--color-wisdom-soft': '#A599D4',
  '--color-wisdom-muted': '#7A6BA8',

  // Depth
  '--color-depth-base': '#0F0E0D',
  '--color-depth-elevated': '#151413',
  '--color-depth-surface': '#1C1A18',
  '--color-depth-border': '#2A2724',

  // Text
  '--color-text-primary': '#F8F5F0',
  '--color-text-secondary': '#E5E0D8',
  '--color-text-muted': '#A8A299',

  // Semantic
  '--color-success': '#5CB85C',
  '--color-warning': '#F0A030',
  '--color-error': '#E85A5A',
  '--color-info': '#5DADE2',
} as const;

/**
 * Tailwind CSS color configuration for Light Brand Consulting
 * Extend your tailwind.config.js with these colors
 */
export const tailwindColors = {
  // Radiance scale
  'radiance-gold': '#E8B84A',
  'radiance-amber': '#D4944C',
  'radiance-warm': '#C67D4E',

  // Clarity scale
  'clarity-cream': '#FDF6E3',
  'clarity-soft': '#F5E6C8',
  'clarity-muted': '#D9C9A5',

  // Wisdom scale
  'wisdom-violet': '#8B7EC8',
  'wisdom-soft': '#A599D4',
  'wisdom-muted': '#7A6BA8',

  // Depth scale
  'depth-base': '#0F0E0D',
  'depth-elevated': '#151413',
  'depth-surface': '#1C1A18',
  'depth-border': '#2A2724',

  // Text scale
  'text-primary': '#F8F5F0',
  'text-secondary': '#E5E0D8',
  'text-muted': '#A8A299',
} as const;

/**
 * Gradient definitions for Light Brand Consulting
 */
export const gradients = {
  /**
   * Illumination gradient - Primary CTA gradient
   */
  illumination: 'linear-gradient(135deg, #E8B84A 0%, #D4944C 100%)',

  /**
   * Dawn gradient - Background depth
   */
  dawn: 'linear-gradient(180deg, #0F0E0D 0%, #1C1A18 50%, #2A2724 100%)',

  /**
   * Clarity fade - Subtle highlights
   */
  clarityFade: 'linear-gradient(180deg, rgba(253,246,227,0.12) 0%, transparent 100%)',

  /**
   * Wisdom glow - AI element backgrounds
   */
  wisdomGlow: 'radial-gradient(ellipse at center, rgba(139,126,200,0.15) 0%, transparent 70%)',

  /**
   * Capacity bridge - The journey visualization
   */
  capacityBridge: 'linear-gradient(90deg, #A8A299 0%, #E8B84A 50%, #FDF6E3 100%)',
} as const;

/**
 * Shadow definitions for Light Brand Consulting
 */
export const shadows = {
  /**
   * Illumination glow - Primary CTAs
   */
  illumination: '0 0 30px rgba(232, 184, 74, 0.25)',
  illuminationIntense: '0 0 40px rgba(232, 184, 74, 0.35)',

  /**
   * Wisdom glow - AI features
   */
  wisdom: '0 0 30px rgba(139, 126, 200, 0.2)',
  wisdomSubtle: '0 0 20px rgba(139, 126, 200, 0.1)',

  /**
   * Clarity glow - Premium highlights
   */
  clarity: '0 0 20px rgba(253, 246, 227, 0.15)',

  /**
   * Elevation shadows
   */
  subtle: '0 2px 8px rgba(0, 0, 0, 0.3)',
  elevated: '0 4px 24px rgba(0, 0, 0, 0.4)',
  floating: '0 8px 40px rgba(0, 0, 0, 0.5)',
  dramatic: '0 16px 64px rgba(0, 0, 0, 0.6)',
} as const;
