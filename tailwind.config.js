/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Escala real construida alrededor del ámbar de marca (#F59715).
        // Los tonos bajos sirven para texto sobre fondo oscuro; los altos, para fondos y sombras.
        amber: {
          50: "#FEF8EE",
          100: "#FCEDD3",
          200: "#F9DAA6",
          300: "#F8C26E",
          400: "#F7AB3D",
          500: "#F59715",
          600: "#DD820C",
          700: "#B5660C",
          800: "#8F4F10",
          900: "#744010",
          950: "#432107",
        },
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
}
