module.exports = {
  // mode: "jit",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}",
    "./public/*.{html}",
  ],
  theme: {
    colors: {
      gray: "#667085",
      purple: "#B1B2FF",
      green: "#56C795",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
};
