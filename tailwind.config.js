/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Productos (Sonido, Iluminación, Instrumentos, Tecnología)
        productos: {
          primary: '#DC143C',    // Crimson
          secondary: '#000000',  // Black
          accent: '#FFFFFF',     // White
          light: '#F5F5F5'
        },
        // DJ Party (Eventos generales)
        party: {
          primary: '#00CED1',    // Cyan
          secondary: '#FFFFFF',  // White
          accent: '#333333',     // Dark gray
          light: '#F0FFFF'
        },
        // Wedding DJ (Bodas)
        wedding: {
          primary: '#CC9900',    // Gold (darkened for WCAG AA)
          secondary: '#FFFFFF',  // White
          accent: '#333333',     // Dark gray
          light: '#FFFAF0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    }
  },
  plugins: [],
}
