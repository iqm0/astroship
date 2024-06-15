/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#232424',
        accent: '#272727',
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'text-shadow': '0 1px 1px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
