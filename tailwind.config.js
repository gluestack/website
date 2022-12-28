/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
    './Layout/**/*.{js.ts,jsx,tsx}',
    './section/**/*.{js.ts,jsx,tsx}',
    './Layout/*.{js.ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sfPro: ['displayRegular', 'cursive'],
      },
      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        md: '20px', // 18px
        lg: '1.3rem', // 24px
        xl: ['2.5rem', '4rem'], //40
        xxl: '1.625rem', // 26px
        '3xl': '2.125rem', // 34px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': ['4.4rem', '78px'], //82px
      },

      colors: {
        primary: {
          DEFAULT: '#8944CE',
          50: '#FAF5FF',
          100: '#BF7EFF',
          200: '#853ECC',
          300: '#6726A7',
        },
        secondary: {
          DEFAULT: '#222020',
        },
        black: {
          DEFAULT: '#000000',
          200: '#404040',
          300: '#232323',
          400: '#565454',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#F5F5F5',
          200: '#F6FAF9',
          300: '#E6E6E6',
        },
        gray: {
          DEFAULT: '#E6E6E6',
          100: '#AEAEAE',
          200: '#F8F8F8',
          300: '#808080',
          400: '#DCDCDC',
          500: '#687076',
          600: '#696969',
        },
        skyBlue: '#4A99E9',
        purple: {
          DEFAULT: '#8B6CB2',
          100: '#F2E4FF',
        },
        beige: {
          DEFAULT: '#C77E35',
          100: '#FFEFDC',
        },
        blue: {
          DEFAULT: '#4D7EC0',
          100: '#DEECFF',
        },
        pink: {
          DEFAULT: '#E769AB',
          100: '#F8D8E9',
        },
        cyan: {
          DEFAULT: '#1EB4D4',
          100: '#E7FAFF',
        },
      },
    },
    fontFamily: {
      body: ['sf-pro-regular', 'sans-serif'],
      display: ['sf-pro-regular', 'sans-serif'],
      displayHead: ['sf-pro-bold', 'sans-serif'],
      displaySemibold: ['sf-pro-semibold', 'sans-serif'],
      displayHeavy: ['sf-pro-heavy', 'sans-serif'],
      displayLight: ['sf-pro-light', 'sans-serif'],
      displayItalic: ['display-BoldItalic', 'sans-serif'],
      displayMedium: ['sf-pro-medium', 'sans-serif'],
    },
  },
  plugins: [
    require ('@tailwindcss/line-clamp'),
    require ('@tailwindcss/typography'),

    function({addComponents}) {
      addComponents ({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@screen md': {
            maxWidth: '100%',
            paddingLeft: '30px',
            paddingRight: '30px',
          },
          '@screen lg': {
            maxWidth: '1024px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen xl': {
            maxWidth: '1280px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
      });
    },

    require ('@tailwindcss/typography'),
  ],
};
