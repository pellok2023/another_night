/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#57534e",
            h1: {
              color: "#292524",
              fontWeight: "700",
            },
            h2: {
              color: "#292524",
              fontWeight: "600",
            },
            h3: {
              color: "#292524",
              fontWeight: "600",
            },
            h4: {
              color: "#292524",
              fontWeight: "600",
            },
            strong: {
              color: "#292524",
            },
            a: {
              color: "#d97706",
              "&:hover": {
                color: "#b45309",
              },
            },
            blockquote: {
              borderLeftColor: "#d97706",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
