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
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          headline: "var(--color-text-headline)",
          subhead: "var(--color-text-subhead)",
        },
      },
      backgroundColor: {
        skin: {
          app: "var(--color-app)",
        },
      },
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
  plugins: [
    require("@tailwindcss/forms")
  ],
};
