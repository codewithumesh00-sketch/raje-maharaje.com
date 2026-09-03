/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111111',
          black: '#000000',
          charcoal: '#222222',
          gray: '#767676',
          lightgray: '#E4E4E4',
          offwhite: '#F4F4F4',
          bg: '#FAF8F5',
          red: '#E50010',
          gold: '#C99E54',
          navy: '#0F2537'
        },
        jaipur: {
          DEFAULT: '#C23867',
          light: '#D84B75',
          soft: '#FDF2F4',
          dark: '#981A42',
        },
        terracotta: {
          DEFAULT: '#DE6B48',
          light: '#E88569',
          soft: '#FAF0EB',
          dark: '#B54928',
        },
        marigold: {
          DEFAULT: '#E59500',
          light: '#F3B438',
          soft: '#FDF8EC',
          dark: '#B37400',
        },
        crimson: {
          DEFAULT: '#8B1E2D',
          light: '#A82B3C',
          soft: '#F9ECEE',
          dark: '#5C121D',
        },
        cream: {
          50: '#FFFDFB',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#E8E1D3',
          400: '#D5CCBA',
        },
        gold: {
          DEFAULT: '#C99E54',
          light: '#DEBA78',
          dark: '#A37B30',
        },
        persian: {
          DEFAULT: '#186B7E',
          dark: '#0F4450',
        }
      },
      borderRadius: {
        'arch': '200px 200px 0 0',
        'arch-sm': '100px 100px 0 0',
        'jharokha': '160px 160px 8px 8px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Cinzel', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      },
      transitionTimingFunction: {
        'gravity': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'marquee-reverse': 'marquee-reverse 22s linear infinite',
        'progress': 'progress 2s linear infinite',
        'gravity-fade': 'gravity-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'gravity-reveal': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
