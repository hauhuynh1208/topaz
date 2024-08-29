/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: {
    relative: true,
    files: [
      './apps/player/src/**/*.{html,js,ts,jsx,tsx}', // Include all your applications
      './UI/src/lib/**/*.{js,ts,jsx,tsx}', // Include all your libraries
    ],
  },
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'black-custom': '#222',
        white: '#FFF',
        primary: '#FFC067',
        secondary: '#FFBF00',
        // accent: '#4FD1C5',
        // muted: '#718096',
        // background: '#f7fafc',
      },
      fontFamily: {
        // Custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      //TYPOGRAPHY
      fontSize: (theme) => ({
        h1: [theme('spacing.4'), { lineHeight: 1, fontWeight: '700' }],
        'h1-tablet': [theme('spacing.6'), { lineHeight: 1, fontWeight: '700' }],
        'h1-desktop': [
          theme('spacing.8'),
          { lineHeight: 1, fontWeight: '700' },
        ],
      }),
      textColor: (theme) => ({
        h1: theme('colors.red.600'),
      }),
      screens: {
        tablet: '768px',
        desktop: '1024px',
      },
    },
  },
};

// mobile < 768px
// tablet from 768 to 1024
// desktop > 1024
// 'sm': '640px',
//       // => @media (min-width: 640px) { ... }
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       '2xl': '1536px',
