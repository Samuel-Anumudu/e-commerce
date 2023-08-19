import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "hsla(21, 65%, 57%, 1)",
        lightorange: "hsla(22, 93%, 75%, 1)",
        grey: "hsla(0, 0%, 95%, 1)",
        lightgrey: "hsla(0, 0%, 98%, 1)",
        darkgrey: "hsla(0, 0%, 6%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
        black: "hsla(0, 0%, 0%, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
