module.exports = {
  purge: {
    // enabled: true,
    content: ["./**/*.html"],
    options: {
      // Pass directly to PurgeCss options
      // https://purgecss.com/configuration.html#options
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#49BBE9",
          DEFAULT: "#1eace3",
          dark: "#1996C8",
        },
        secondary: {
          light: "#EE5994",
          DEFAULT: "#e9327c",
          dark: "#DE1767",
        },
      },
      fontFamily: {
        display: ["Rajdhani"],
        sans: ["Roboto"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"], // not enabled by default
    },
  },
  plugins: [],
};
