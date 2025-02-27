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
        sideBar:'#A64102',
        black:'#000000',
        white:'#ffffff',
        ash: '#5B5F62'

      },
      backgroundImage:{
        tricycle: "url('/src/assets/images/tricycle.png')"
      },
      fontSize: {
        xxs: "12px",
        xs: "14px",
        sm: "16px",
        base: "18px",
        blg:"20px",
        lg: "22px",
        xl: "24px",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      padding: {
        xsm: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xlg: "1.5rem",
        max: "2rem",
      },
    },
  },
  plugins: [],
};
