/** @type {import('tailwindcss').Config} */
module.exports = {
  // Especifica los archivos donde Tailwind debe buscar clases
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Busca en todos los archivos de la carpeta `pages`
    './components/**/*.{js,ts,jsx,tsx}', // Busca en todos los archivos de la carpeta `components`
    './app/**/*.{js,ts,jsx,tsx}', // Si usas la carpeta `app` (Next.js 13+)
  ],
  // Personaliza el tema de Tailwind (colores, fuentes, etc.)
  theme: {
    extend: {
      // Aquí puedes extender o sobrescribir los valores por defecto de Tailwind
      colors: {
        primary: '#1E90FF', // Ejemplo: agregar un color personalizado
        secondary: '#FF6347',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ejemplo: cambiar la fuente predeterminada
      },
    },
  },
  // Agrega plugins de Tailwind (opcional)
  plugins: [
    require('@tailwindcss/forms'), // Ejemplo: plugin para estilizar formularios
    require('@tailwindcss/typography'), // Ejemplo: plugin para estilizar tipografía
  ],
};

