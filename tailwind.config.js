/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fam1: ['Arvo', 'serif'],
        fam2: ['Catamaran', 'sans-serif'],
        fam3: ['Chivo', 'sans-serif'],
        fam4: ['Eczar', 'serif'],
        fam5: ['Inter', 'sans-serif'],
        fam6: ['Poppins', 'sans-serif'],
        fam7: ['Proza Libre', 'sans-serif'],
        fam8: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
