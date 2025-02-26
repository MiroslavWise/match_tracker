/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "red-500": "var(--red-500)",
      "red-700": "var(--red-700)",
      "red-950": "var(--red-950)",
    },
  },
  plugins: [],
}
