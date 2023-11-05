const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'car_logo': "url('./img/logo.png')", // Caminho relativo da raiz
        // 'car_home': "url('./img/home.png')", // Caminho relativo da raiz
      },
      colors: {
        'primary-red': '#F3133C',
        'primary-gray': '#2D2D37',
      },
    },
  },
  plugins: [],
};

module.exports = config;
