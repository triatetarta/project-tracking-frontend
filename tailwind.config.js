const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    important: true,
    colors: colors,
    extend: {
      colors: {
        "light-blue": "#2684FF",
        "deep-blue": "#0254CF",
        "header-main": "#253858",
        "flow-yellow": "#FFE380",
        "flow-green": "#78f1c0",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
