/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: { default: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
    },
    textShadow: {
      neon: "0 0 5px rgba(58, 255, 240, 0.8), 0 0 10px rgba(58, 255, 240, 0.8), 0 0 15px rgba(58, 255, 240, 0.8), 0 0 20px rgba(58, 255, 240, 0.8)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-neon": {
          "text-shadow":
            "0 0 5px rgba(58, 255, 240, 0.8), 0 0 10px rgba(58, 255, 240, 0.8), 0 0 15px rgba(58, 255, 240, 0.8), 0 0 20px rgba(58, 255, 240, 0.8)",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
