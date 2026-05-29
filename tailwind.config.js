/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1117",
        surface: "#181c24",
        border: "#2c3443",
        neon: "#7c3aed",
        neonBlue: "#3b82f6"
      }
    }
  },
  plugins: []
};
