/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0CDCDC",
        secondary: "#6979F8",
        accent: "#FF647C",
        "accent-purple": "#A66FED",
        "accent-orange": "#FFA756",
        neutral: {
          DEFAULT: "#F0F4F9",
          100: "#FFFFFF",
          200: "#F5F7FA",
          300: "#E4E7EC",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 4px 25px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-accent-purple",
    "bg-accent-orange",
  ],
};
