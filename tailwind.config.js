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
        "flow-yellow-deep": "#ffd957",
        "flow-green": "#78f1c0",
        "flow-green-deep": "#4bebaa",
        "nice-orange": "#FF991F",
        "gray-text": "#6B778C",
        "red-text": "#DE350B",
        "ticket-bg": "#DEEBFF",
        "ticket-bg-hover": "#B3D4FF",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
