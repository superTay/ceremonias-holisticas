/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Paleta OOL Experiences (alineada al logo: crema, salvia/oliva, terracota/arcilla,
      // turquesa, contorno carbón). Se conservan los nombres semánticos para no romper
      // referencias existentes; los hex viajan hacia la nueva identidad.
      colors: {
        surface: {
          primary: '#F1ECDB',   // crema fondo del logo
          secondary: '#E5DDC6', // crema más profundo
          deep: '#1F1B17',      // carbón del contorno
        },
        foreground: {
          primary: '#23201C',
          secondary: '#5C5448',
          muted: '#6E6757',      // oscurecido para AA (4.75:1 sobre crema; antes #8A8273 = 3.22)
          'on-deep': '#F1ECDB',
        },
        accent: {
          primary: '#7A8B5F',    // verde salvia/oliva (acentos botánicos grandes/decorativos)
          secondary: '#4F5A3A',  // salvia profundo · eyebrows y texto salvia pequeño (AA 6.2:1)
          cacao: '#B8623F',      // terracota del logo · highlights grandes y decoración (3.66:1 = solo texto ≥24px)
          'cacao-text': '#964927',   // terracota para TEXTO pequeño sobre crema (AA 5.4:1)
          'cacao-action': '#A65432', // terracota para FONDOS de acción con texto crema (AA 4.5:1)
          clay: '#D49574',       // arcilla clara (decorativo cálido)
          turquoise: '#2E8C8C',  // turquesa del glifo central · acentos puntuales
        },
        border: {
          subtle: '#D8CFB8',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'token-md': '6px',
        'token-lg': '8px',
        'token-xl': '12px',
      },
      maxWidth: {
        page: '1440px',
        prose: '720px',
      },
      keyframes: {
        'soft-fade': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.06)', opacity: '0.9' },
        },
      },
      animation: {
        'soft-fade': 'soft-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 40s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
