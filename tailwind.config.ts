const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car_logo': "url('./img/logo.png')",
        'car_home': "url('../img/home.png')",
      },
      colors: {
        'primary-red': '#F3133C',
        'primary-gray': '#2D2D37',
        'carro-card': '#F7F7F7',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = config;
