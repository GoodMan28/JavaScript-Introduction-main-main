/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // this tells tailwind where are we writing the tailwind code to convert it to css
  theme: {
    extend: {},
  },
  plugins: [],
}

// https://g.co/gemini/share/e64e93d4ee68  : working of "content" array and other config files