/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F5F7FA",
        "color-primary": "#4CAF4F",
        "text-primary": "#18191F",
      },
    },
  },
  plugins: [],
};
