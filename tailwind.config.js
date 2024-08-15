/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}","./src/components/Desktop/**/*.{js,jsx,ts,tsx}","./src/components/Mobile/**/*.{js,jsx,ts,tsx}","./src/components/Common/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

