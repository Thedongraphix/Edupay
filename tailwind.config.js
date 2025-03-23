/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#121723",
      dark: "#1D2430",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#788293",
      "body-color-dark": "#959CB1",
      "gray-dark": "#1E232E",
      "gray-light": "#F0F2FC",
      stroke: "#E3E8EF",
      "stroke-dark": "#353943",
      "bg-color-dark": "#171C28",
      card: "white",
      "card-foreground": "#121723",
      muted: "#F0F2FC",
      "muted-foreground": "#788293",
      border: "#E3E8EF",
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      amber: colors.amber,
      orange: colors.orange,
      purple: colors.purple,
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 3px 2px rgba(4, 10, 34, 0.15)",
        card: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        "card-hover": "0px 8px 24px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "feature-pattern": "url('/images/features/pattern.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fadeOut": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "slideUp": {
          from: { transform: "translateY(10px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "slideDown": {
          from: { transform: "translateY(-10px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "pulse": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        "bounce": {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '50%': {
            transform: 'translateY(-8px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          }
        },
        "ping": {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        },
        "spin": {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 0.5s ease-out",
        "fadeOut": "fadeOut 0.5s ease-out",
        "slideUp": "slideUp 0.5s ease-out",
        "slideDown": "slideDown 0.5s ease-out",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce": "bounce 1s infinite",
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
