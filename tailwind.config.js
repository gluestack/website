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
        lg: "1.25rem", // 20px
        xl: ["2.5rem", "4rem"], //40
        xxl: "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": ["4.5rem", "4.563rem"],
      },

      colors: {
        textColors: "#565454",

        primary: "#F9322C",
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
            paddingLeft: "15px",
            paddingRight: "15px",
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
