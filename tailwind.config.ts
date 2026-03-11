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
        primary: "#6A0DAD",
        secondary: "#B19CD9",
        accent: "#D4AF37",
        highlight: "#B19CD9",
        backgroundBase: "#040A1B",
        surface: "#6A0DAD",
        primaryText: "#F8F9FA",
        secondaryText: "#B19CD9",
        darkText: "#040A1B",
        deepPurple: "#3c096c",
      },
      backgroundImage: {
        "mystic-gradient":
          "radial-gradient(1200px 600px at 15% -10%, rgba(60, 9, 108, 0.28), transparent 55%), radial-gradient(900px 500px at 85% 0%, rgba(124, 58, 237, 0.18), transparent 50%), radial-gradient(800px 400px at 50% 60%, rgba(60, 9, 108, 0.12), transparent 50%), linear-gradient(160deg, rgba(212, 175, 55, 0.06), transparent 40%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
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
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
