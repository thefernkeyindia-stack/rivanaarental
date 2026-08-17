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
        charcoal: {
          DEFAULT: '#141312',
          50: '#f5f4f3',
          100: '#e5e3e1',
          200: '#c9c5c1',
          300: '#a39c95',
          400: '#7a7169',
          500: '#5a534c',
          600: '#453f3a',
          700: '#332e2a',
          800: '#221f1c',
          900: '#141312',
          950: '#0b0a09',
        },
        ivory: {
          DEFAULT: '#f7f3ec',
          50: '#fffdfa',
          100: '#f7f3ec',
          200: '#efe7d8',
          300: '#e3d5bd',
          400: '#d3bd99',
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
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(20, 19, 18, 0.35)',
        card: '0 10px 40px -12px rgba(20, 19, 18, 0.25)',
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
