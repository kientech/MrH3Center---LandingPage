/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flip: "flip 0.6s forwards",
      },
      perspective: {
        500: "500px", // Thay đổi giá trị nếu cần
      },

      fontFamily: {
        primary: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        iconColor: "#A2A2A8",
        pureWhite: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strockColor: "#F1F1F3",
        liteBackground: "#FCFCFD",
        errorColor: "#EB5757",
        darkBg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStrock: "#3A3A43",
        primaryColorExtra: "#F1FBF7",
        bgBar: "#EFEFEF",
      },
    },
  },
  plugins: [flowbite.content()],
};
