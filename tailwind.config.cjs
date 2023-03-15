const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        light: 'var(--aw-color-bg-page)',
        ns_green: '#63c7c3'
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pplComputer': "url('/src/assets/images/peopleComputer.jpg')",
        'home-bg': "url('/src/assets/images/video_test.gif')",
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
