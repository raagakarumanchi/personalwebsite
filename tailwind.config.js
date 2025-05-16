/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Colors removed to default to Tailwind's palette initially for the new theme
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}; 