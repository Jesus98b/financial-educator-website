import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        primary: {
          DEFAULT: '#000000',
          light: '#111111',
        },
        accent: {
          DEFAULT: '#A8D5BA', // Soft pastel green
          light: '#C4E4D1',
          dark: '#7FB89A',
        },
        background: {
          DEFAULT: '#FFFFFF',
          subtle: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Questrial', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#111111',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

