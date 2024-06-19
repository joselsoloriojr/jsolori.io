import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fadeIn-1s": "fadeIn 1s ease-in forwards",
        "fadeIn-2s": "fadeIn 2s ease-in forwards",
        "fadeIn-3s": "fadeIn 3s ease-in forwards",
        "slideIn-1s": "slideIn 1s ease-in forwards",
        "slideIn-2s": "slideIn 2s ease-in forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "space-blue": "#0070f3",
        "space-gray": "#333",
        "space-light-blue": "#3291FF",
        "space-light-gray": "#888",
        "space-white": "#F5F5F5",
        "space-black": "#000",
        "space-green": "#00FF00"
      },
      fontFamily: {
        rem: "var(--font-rem)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
export default config
