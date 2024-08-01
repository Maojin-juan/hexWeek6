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

      colors: {},

      fontFamily: {
        sans: ["Noto Serif TC", "sans-serif"],
        Newsreader: ["Newsreader"],
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
    },
  },
  plugins: [],
};
