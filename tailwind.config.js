/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js.ts,jsx,tsx}",
    "./section/**/*.{js.ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        md: "1.125rem", // 18px
        lg: "1.5rem", // 24px
        xl: ["2.5rem", "4rem"], //40
        xxl: "1.625rem", // 26px
        "3xl": "2.125rem", // 34px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "5.125rem",
      },

      colors: {


        primary: {
          DEFAULT: "#8944CE",
          600: "#8944CE",
          700:'#8944CE',
        },
        secondary: {
          400: "#404040",
          DEFAULT: "#222020",
        
        },

      },
      fontWeight: {
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        bolder: 900,
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '998px',
      // => @media (min-width: 998px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "15px",
            paddingRight: "15px",
          },
          "@screen lg": {
            maxWidth: "1260px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "1260px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
