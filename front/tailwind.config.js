/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E3E1DC",
        textColor: "#291507",
        colorGray: "rgba(151, 151, 151, 0.1)",
        lineColor: "#4D270C",
        secondText: "rgba(41, 21, 7, 0.6)",
        secondTextHover: "rgba(41, 21, 7)",
        boxColor: "#DEC68B",
        skillColor: "#544439",
        noSkill: "#E0E0E0",
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
