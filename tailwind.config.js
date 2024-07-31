/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.525rem",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["luxury", "light", "dark", "cupcake"],
  },
};
