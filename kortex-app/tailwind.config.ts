import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(1,2,17,1) 0%, rgba(7,0,9,1) 80%)",
        "purple-gradient":
          "linear-gradient(0deg, rgba(44,14,81,0.8057598039215687) 6%, rgba(9,14,219,0.5648634453781513) 86%)",
      },
      colors: {
        "title-color": "#DADADA",
        "p-color": "#FFFFFF80",
        "kortex-color": "#71EBBA",
        "grey-color": "#20202B",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
