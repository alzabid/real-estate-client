/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["emerald"],
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "teal",
          secondary: "#f5b921",
        },
      },
    ],
  },
};

