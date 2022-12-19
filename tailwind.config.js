/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js.ts,jsx,tsx}",
    "./section/**/*.{js.ts,jsx,tsx}",
    "./Layout/*.{js.ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sfPro: ["displayRegular", "cursive"],
      },
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
        "6xl": ["5.125rem", "98px"], //82px
      },

      colors: {
        primary: {
          DEFAULT: "#8944CE",
          100: "#BF7EFF",
          600: "#8944CE",
          700: "#8944CE",
        },
        secondary: {
          400: "#404040",
          DEFAULT: "#222020",
        },
        black: {
          DEFAULT: "#000000",
          100: "#222020",
          200: "#404040",
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#F5F5F5",
          200: "#F6FAF9",
        },
        gray: {
          DEFAULT: "#E6E6E6",
          100: "#AEAEAE",
        },
        skyBlue: "#4A99E9",
      },
    },
    fontFamily: {
      body: ["sf-pro-regular", "sans-serif"],
      display: ["sf-pro-regular", "sans-serif"],
      displayHead: ["sf-pro-bold", "sans-serif"],
      displaySemibold: ["sf-pro-semibold", "sans-serif"],
      displayHeavy: ["sf-pro-heavy", "sans-serif"],
      displayLight: ["sf-pro-light", "sans-serif"],
      displayItalic: ["display-BoldItalic", "sans-serif"],
      displayMedium: ["sf-pro-medium", "sans-serif"],
    },
    screens: {
      sm: "640px",

      md: "998px",

      lg: "1024px",

      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
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
            maxWidth: "1380px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "1380px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },

    require("@tailwindcss/typography"),
  ],
};
