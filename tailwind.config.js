/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        homeBg: "url('/images/background/bg.jpg')",
        "homeBg-dark": "url('/images/background/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
}
