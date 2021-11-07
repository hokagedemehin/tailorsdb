const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        orange: colors.orange,
        trueGray: colors.trueGray,
        blueGray: colors.blueGray,
        yellow: colors.yellow,
        lime: colors.lime,
        amber: colors.yellow,
        trueGreen: colors.green,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },

      fontFamily: {
        fam1: ["Arvo", "serif"],
        fam2: ["Catamaran", "sans-serif"],
        fam3: ["Josefin Sans", "sans-serif"],
        fam4: ["Merriweather Sans", "sans-serif"],
        fam5: ["Montserrat", "sans-serif"],
        fam6: ["Oswald", "sans-serif"],
        fam7: ["Poppins", "sans-serif"],
        fam8: ["Source Sans Pro", "sans-serif"],
        fam9: ["Stardos Stencil", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
