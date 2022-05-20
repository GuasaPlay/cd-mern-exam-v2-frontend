module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
