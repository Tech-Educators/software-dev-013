import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Customising our Tailwind by extending the inbuilt themes:
  // Some examples:
  // -- https://tailwindcss.com/docs/customizing-colors#using-css-variables
  // -- https://tailwindcss.com/docs/screens#adding-new-breakpoints
  theme: {
    extend: {
      // Keyframes and animations:
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      // Custom colours
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "wills-colour": "var(--company-will)",
        "michelle-red": "var(--company-michelle)",
        "georges-and-shanes-ice": "var(--company-george)",
        "kyles-teal": "var(--company-kyle)",
      },
      // Custom Screens Within Extend
      screens: {
        xxs: { max: "425px" },
        xs: { max: "575px" },
      },
      // Custom Screens Outside of extend
      // screens: {
      //   xxs: { max: "425px" },
      //   xs: { max: "575px" },

      //   ...defaultTheme.screens,
      // },
    },

    plugins: [],
  },
};
