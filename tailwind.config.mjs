/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        DeepOrange:'#FF8031',
        DeepBlue:'#0587D0',
        LightOrange:'#FF803166',
        LightBlue:'#0587D066',
        Fade:'#EDE1D9',
        black:'#000000',
        white:'#ffffff',

      },
      backgroundImage:{
        tricycle: "url('/src/assets/images/tricycle.png')"
      }
    },
  },
  plugins: [],
};
