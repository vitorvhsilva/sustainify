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
        'cor1': '#005C42',
        'cor2': '#47AB4A',
        'cor3': '#B2CA31',
        'cor4': '#1E3A8A',
        'cor5': '#60A5FA',
        'cor6': '#F1F5F9',
        'corBranca': '#FFF',
        'corPreta': '#000'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
