/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
