/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      backgroundImage: {
        "sm-banner":
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner-sm.png?raw=true")',
        banner:
          'url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024-week6/banner.png?raw=true")',
      },

      fontSize: {},

      colors: {
        "primary-100": "#FFFDF5",
        "primary-200": "#FFFBE5",
        "primary-300": "#E8E3DA",
        "primary-400": "#6E6B67",
        "accent-100": "#E0EFDE",
        "accent-200": "#569573",
        "accent-200-dark": "#3D7054",
        "gray-100": "#F8F9FA",
        "gray-300": "#ADB5BD",
        "gray-400": "#6C757D",
        "gray-500": "#343A40",
      },

      fontFamily: {
        sans: ["Noto Serif TC", "sans-serif"],
        Newsreader: ["Newsreader"],
        icon: ["Material Icons"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
      boxShadow: {
        card: "0px 2px 8px 0px #6E6B6714",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".no-spinner": {
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&[type='number']": {
            "-moz-appearance": "textfield",
          },
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-ellipsis": {
          display: "-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
