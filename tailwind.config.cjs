/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content:["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "from": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "to": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein900: "slidein 1s ease 900ms forwards",
        slidein1200: "slidein 1s ease 1200ms forwards",
      },
    },
  },
  plugins: [],
};
