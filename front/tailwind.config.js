/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E3E1DC",
        textColor: "#291507",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-lg": "url('/src/assets/HeroImagelg.png')",
        "hero-md": "url('/src/assets/HeroImagemd.png')",
        "hero-sm": "url('/src/assets/HeroImagesm.png')",
      },
      borderRadius: {
        boxes: "42px",
      },
      spacing: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
