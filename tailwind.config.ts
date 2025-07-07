import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // biru Tailwind
      },
    },
  },
  darkMode: 'class', // pakai class dark mode
  plugins: [],
};

export default config;
