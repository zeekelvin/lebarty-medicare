import type { Config } from 'tailwindcss';

/**
 * Lebarty Medi-Care — brand tokens (per the Lebarty Brand Guide).
 *
 * Palette: Lebarty Pink #f21872 · Deep Navy #12324A · Clinical Teal #0E8D8B
 *          Mint Wash #E9F9F6 · Soft Cloud #F7FAFC · Slate Text #31485A
 * Legacy token names (`forest`, `terracotta`) are kept so existing components
 * compile unchanged; the values now carry the real brand colors. Interactive
 * teal/pink are slightly deepened for WCAG AA contrast.
 *
 *  - forest:     structural scale — Clinical Teal mids, Deep Navy darks
 *  - terracotta: Lebarty Pink — heart, italics, foundation CTAs
 *  - cream:      Soft Cloud page background + Mint Wash surface
 *  - charcoal:   Slate body text
 *  - moss:       light mint supporting tint
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0C7B79',
          50:  '#E9F9F6',  // Mint Wash — light tints
          100: '#D3F0EC',
          200: '#AEE3DD',
          300: '#6FC9C2',
          400: '#2BA29E',
          500: '#0C7B79',  // Clinical Teal (AA-tuned) — text, buttons
          600: '#0A6260',  // hover
          700: '#12324A',  // Deep Navy — dark surfaces (footer, dark sections)
          800: '#0B1F30',  // deeper navy — overlays
          900: '#081826',
        },
        cream: {
          DEFAULT: '#F7FAFC',
          50:  '#FFFFFF',
          100: '#F7FAFC',  // Soft Cloud
          200: '#E9F9F6',  // Mint Wash
          300: '#DCEAEC',
        },
        terracotta: {
          DEFAULT: '#F21872',
          50:  '#FDE7F0',
          100: '#FBC9DF',
          400: '#F65B9C',
          500: '#F21872',  // Lebarty Pink
          600: '#D11062',  // deep pink (AA-tuned) — CTAs
          700: '#A30F54',
        },
        moss: {
          DEFAULT: '#C7DDDA',
          100: '#EEF7F5',
          200: '#C7DDDA',
        },
        charcoal: {
          DEFAULT: '#12324A',  // Deep Navy
          700: '#31485A',      // Slate Text — body copy
          500: '#5A6B78',
          300: '#8FA0AE',      // placeholders
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Source Serif Pro', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6vw, 5.25rem)', { lineHeight: '1.04', letterSpacing: '-0.025em', fontWeight: '500' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display':    ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '500' }],
        'eyebrow':    ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.18em', fontWeight: '600' }],
      },
      maxWidth: {
        prose: '68ch',
        page: '76rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18,50,74,0.06), 0 8px 24px -8px rgba(18,50,74,0.18)',
        ring: '0 0 0 4px rgba(14,141,139,0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
