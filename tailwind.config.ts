import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor1': '#2C7A48',
        'cor2': '#A3E635',
        'cor3': '#1E3A8A',
        'cor4': '#60A5FA',
        'cor5': '#F1F5F9',
        'corBranca': '#FFF',
        'corPreta': '#000'
      },
    },
  },
  plugins: [],
} satisfies Config;
