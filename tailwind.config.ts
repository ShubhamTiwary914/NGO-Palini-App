import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //somborg
        'sompink': '#f9e7cf',
        'somdarkgreen': '#0d7157',

        //besnik
        'bes-blue': {
          300: '#e7f0ff',
          600: '#0e184d'
        },

        //ryser
        'rys-blue': {
          300: '#eff4f8'
        },
        'rys-pink': '#ff685b',
        'rys-green': {
          400: '#61a8ae'
        },
        'rys-purple': {
          600: '#433c7f'
        },

        //canva
        'can-dark': '#212121',
        'can-purple': '#8577e6',
        'can-blue': {
          100: '#f8f9fa',
          200: '#f5f5ff',
          400: '#e8f0fe',
          600: '#1967d2' 
        }
      },

      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
