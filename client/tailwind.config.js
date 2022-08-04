/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1025px',
      xl: '1440px'
    },
    extend: {
      colors: {
        pampas: '#f8f6f4',
        'pampas-100': '#6e6e7f',
        avocado: '#889067',
        dingley: '#68744c',
        clay: '#7c5830',
        yellow: '#f7c35f',
        dark: '#292933'
      }
    },
    backgroundImage: {
      'hero-pattern':
        "linear-gradient(rgba(255,255,255, .65), rgba(255,255,255, .65)), url('/src/assets/imgs/banner.jpg')",

      'striped-pattern':
        'linear-gradient(rgba(255,255,255, .65), rgba(255,255,255, .65))',

      'video-pattern': "url('/src/util/video/coding.mp4')"
    },
    backgroundPosition: {
      'right-bottm-1': '50% 100%'
    },
    height: {
      48: '10rem',
      72: '15rem',
      96: '27rem',
      128: '40rem'
    },
    flexShrink: {
      4: 4
    },
    inset: {
      0: 0,
      1.5: '1.5rem',
      'nega-24': '-5rem',
      24: '5rem'
    }
  },
  plugins: []
};
