import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        // "charcoal" is the dark-neutral token used for dark sections/text —
        // a deep palm green (not black) to match the Goa beach-villa brand.
        charcoal: {
          DEFAULT: '#123522',
          50: '#f4faf5',
          100: '#e2f3e6',
          200: '#c2e4cd',
          300: '#8ecaa0',
          400: '#5cab77',
          500: '#3a8c5a',
          600: '#2a7247',
          700: '#1f5c38',
          800: '#184a2d',
          900: '#123522',
          950: '#0d1f16',
        },
        // Warm sand/ivory base.
        ivory: {
          DEFAULT: '#faf4e7',
          50: '#fffdf8',
          100: '#faf4e7',
          200: '#f2e2c4',
          300: '#e6c894',
          400: '#d7a962',
        },
        gold: {
          DEFAULT: '#b78a4a',
          50: '#faf5eb',
          100: '#f0e2c4',
          200: '#e4cb98',
          300: '#d4af6f',
          400: '#c29a54',
          500: '#b78a4a',
          600: '#96703a',
          700: '#755630',
          800: '#5a4327',
          900: '#3d2e1c',
        },
        olive: {
          DEFAULT: '#6b6b4d',
          100: '#e6e6d8',
          300: '#b3b48a',
          500: '#6b6b4d',
          700: '#484834',
        },
        // Ocean teal accent — used sparingly for beachy touches (pool icon,
        // wave divider) alongside the green/gold/sand core palette.
        ocean: {
          DEFAULT: '#2f7f8c',
          50: '#eff8f9',
          100: '#d6eef1',
          200: '#ade0e6',
          300: '#7cc9d3',
          400: '#4fb0bd',
          500: '#2f7f8c',
          600: '#256672',
          700: '#1e525c',
          800: '#1a434b',
          900: '#17393f',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(13, 31, 22, 0.35)',
        card: '0 10px 40px -12px rgba(13, 31, 22, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        pulseSoft: 'pulseSoft 2.4s infinite',
        marquee: 'marquee 40s linear infinite',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
