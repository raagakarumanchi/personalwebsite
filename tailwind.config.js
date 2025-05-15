module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F4', // warm off-white
        blush: '#F7E4E1',
        grey: '#D6D3D1',
        softyellow: '#FFF9C4',
        sky: '#C7E6FB',
        accent: '#FBBF24', // soft yellow accent
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 