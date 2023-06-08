/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        translateRight: "translateRight 2s ease-in forwards",
        translateLeft: "translateLeft 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        translateRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        translateLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
},
  plugins: [],
}

