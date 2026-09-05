/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm ivory / off-white — primary background
        ivory: {
          50: '#FBF8F2',
          100: '#F7F2E9',
          200: '#F0E8DA',
        },
        // Soft sand / warm gray — secondary surface
        sand: {
          100: '#EDE7DB',
          200: '#E1D8C6',
          300: '#D2C6AD',
        },
        // Deep charcoal — primary text
        charcoal: {
          900: '#1D1A16',
          700: '#32302B',
          500: '#4C4840',
          400: '#6B665C',
          300: '#8C8679',
        },
        // Muted olive / sophisticated green — accent
        olive: {
          500: '#6C7350',
          600: '#5B6344',
          700: '#4C5439',
          800: '#3E4530',
          900: '#323828',
          100: '#EDEFE3',
          200: '#DCE0CC',
        },
        // Subtle champagne — secondary accent
        champagne: {
          100: '#F5EEDC',
          300: '#E5D5B4',
          500: '#CBB684',
        },
      },
      fontFamily: {
        display: ['"Noto Kufi Arabic"', 'system-ui', 'sans-serif'],
        body: ['"Readex Pro"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'clamp-hero': 'clamp(2.4rem, 8vw, 5.25rem)',
      },
      lineHeight: {
        tightest: '1.05',
        snugish: '1.2',
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(29, 26, 22, 0.06)',
        lift: '0 22px 60px rgba(29, 26, 22, 0.14)',
        card: '0 12px 40px rgba(29, 26, 22, 0.10)',
        'card-hover': '0 26px 70px rgba(29, 26, 22, 0.18)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      maxWidth: {
        shell: '80rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1s ease both',
        'scale-in': 'scale-in 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-bounce': 'scroll-bounce 2.2s ease-in-out infinite',
        'soft-float': 'soft-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
