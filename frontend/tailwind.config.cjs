/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dj: {
          bg: "#05060a",
          panel: "#0b0d13",
          panelAlt: "#10121a",
          cyan: "#2dd4ff",
          accent: "#fb923c",
        },
      },
      boxShadow: {
        "dj-glow": "0 0 24px rgba(45, 212, 255, 0.35)",
        "dj-pad": "0 0 14px rgba(56, 189, 248, 0.5)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "70%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(1.15)", opacity: "0" },
        },
        "eq-bounce": {
          "0%, 100%": { transform: "scaleY(0.2)" },
          "50%": { transform: "scaleY(1)" },
        },
        "wheel-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "eq-slow": "eq-bounce 1.2s ease-in-out infinite",
        "eq-fast": "eq-bounce 0.8s ease-in-out infinite",
        "wheel-spin": "wheel-spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
