/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080a16',
        neon: '#7dd3fc',
      },
      boxShadow: {
        glow: '0 0 40px rgba(125, 211, 252, 0.35)',
      },
    },
  },
  plugins: [],
};
