import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["light"],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} as Config;
