module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(auto, 336px))',
        auto1: 'repeat(auto-fit, 276px)',
      },
      colors: {
        blue: '#0000ff',
        'blue-hover': '#0044ff',
      },
    },
  },
  plugins: [],
};
