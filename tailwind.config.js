/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tokens extraídos directamente del archivo blanca.pen → variables
      colors: {
        surface: {
          primary: '#F5F2E9',
          secondary: '#E8E4D8',
          deep: '#2D2926',
        },
        foreground: {
          primary: '#2D2926',
          secondary: '#5E5954',
          muted: '#8C8782',
          'on-deep': '#F5F2E9',
        },
        accent: {
          primary: '#7D6B3D',
          secondary: '#4A3F24',
          cacao: '#5C3A21',
          clay: '#B8865B',
        },
        border: {
          subtle: '#DCD8CB',
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
