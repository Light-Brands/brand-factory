/**
 * Light Brand Consulting - Design Tokens
 *
 * Central export for all Light Brand Consulting design tokens.
 * These tokens enable the unique "Illumination Palette" while maintaining
 * compatibility with the Onyx Design System infrastructure.
 *
 * @see ./colors.ts - Color system and mappings
 * @see ../spec/brand/01-visual-identity.md - Complete visual identity
 */

export {
  colors,
  type ColorToken,
  onyxToLightBrandMapping,
  cssCustomProperties,
  tailwindColors,
  gradients,
  shadows,
} from './colors';

// Re-export type for convenience
export type { ColorToken as LightBrandColorToken } from './colors';
