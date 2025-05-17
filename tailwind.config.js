/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Colors removed to default to Tailwind's palette initially for the new theme
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 