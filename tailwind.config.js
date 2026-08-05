/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Tight",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        // Named design tokens — 6 core tokens
        ink: {
          DEFAULT: "#0D1B2A",
          mid: "#152435",
          light: "#1E3448",
        },
        sand: {
          DEFAULT: "#F4EFE6",
          mid: "#E9E3D8",
          dark: "#D8D0C4",
        },
        gold: {
          DEFAULT: "#C8A84B",
          light: "#D9BC6E",
          dark: "#A88A35",
        },
        teal: {
          DEFAULT: "#2A7F7F",
          light: "#3A9E9E",
          dark: "#1E5F5F",
        },
      },
      keyframes: {
        waveBar: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "wave-1": "waveBar 1.2s ease-in-out infinite 0s",
        "wave-2": "waveBar 1.2s ease-in-out infinite 0.15s",
        "wave-3": "waveBar 1.2s ease-in-out infinite 0.3s",
        "wave-4": "waveBar 1.2s ease-in-out infinite 0.45s",
        "wave-5": "waveBar 1.2s ease-in-out infinite 0.6s",
        "wave-6": "waveBar 1.2s ease-in-out infinite 0.75s",
        "wave-7": "waveBar 1.2s ease-in-out infinite 0.9s",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
