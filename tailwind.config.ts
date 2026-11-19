import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080910", // Deep Space Black
        foreground: "#F5F7FC", // Soft White
        space: {
          950: "#040508",
          900: "#080910", // Deep Space Black
          800: "#101525", // Midnight Navy
          700: "#171e35",
          600: "#222c4d",
        },
        navy: {
          900: "#101525",
          800: "#151c31",
          700: "#1b243e",
        },
        neon: {
          magenta: "#FF3F9D",
          purple: "#925BFF",
          cyan: "#37DFFF",
          orange: "#FF8A45",
        },
        sunset: {
          orange: "#FF8A45",
          coral: "#FF5E62",
          pink: "#FF3F9D",
        },
        electric: {
          purple: "#925BFF",
          violet: "#B072FF",
        },
        cyber: {
          cyan: "#37DFFF",
          blue: "#1CA0FF",
        },
        chrome: {
          silver: "#C8D1DE",
          light: "#E1E7F0",
          dark: "#8493A8",
        },
        soft: {
          white: "#F5F7FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "neon-magenta": "0 0 25px -5px rgba(255, 63, 157, 0.4)",
        "neon-cyan": "0 0 25px -5px rgba(55, 221, 255, 0.4)",
        "neon-purple": "0 0 25px -5px rgba(146, 91, 255, 0.4)",
        "neon-orange": "0 0 25px -5px rgba(255, 138, 69, 0.4)",
        "glass-sm": "0 4px 30px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "cyber-glow": "0 0 50px -10px rgba(255, 63, 157, 0.3), 0 0 30px -10px rgba(55, 221, 255, 0.3)",
      },
      backgroundImage: {
        "futuristic-gradient": "linear-gradient(135deg, #FF3F9D 0%, #925BFF 50%, #37DFFF 100%)",
        "sunset-vice": "linear-gradient(135deg, #FF8A45 0%, #FF3F9D 50%, #925BFF 100%)",
        "cyber-glow": "radial-gradient(ellipse at top, rgba(255, 63, 157, 0.15), rgba(16, 21, 37, 0.8) 70%, #080910 100%)",
        "grid-pattern": "linear-gradient(to right, rgba(200, 209, 222, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 209, 222, 0.04) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-rotate": "glowRotate 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
