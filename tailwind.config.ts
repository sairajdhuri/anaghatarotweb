import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23049D",
        secondary: "#AA2EE6",
        accent: "#FFDF6B",
        highlight: "#FF79CD",
        backgroundBase: "#23049D",
        surface: "#AA2EE6",
        primaryText: "#EDE9FF",
        secondaryText: "#B9B2D8",
        darkText: "#1F1535",
      },
      backgroundImage: {
        "mystic-gradient":
          "radial-gradient(1200px 600px at 15% -10%, rgba(170, 46, 230, 0.22), transparent 55%), radial-gradient(900px 500px at 85% 0%, rgba(255, 121, 205, 0.18), transparent 50%), linear-gradient(160deg, rgba(255, 223, 107, 0.08), transparent 40%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        "fade-up-slow": "fade-up 900ms ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
