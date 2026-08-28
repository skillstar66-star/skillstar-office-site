/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#07113D',
          200: '#050B2E',
          300: '#020617',
        },
        blue: {
          electric: '#00C6FF',
          primary: '#2563EB',
          light: '#3B82F6'
        },
        purple: {
          primary: '#7C3AED',
          light: '#9333EA'
        },
        magenta: '#D946EF',
        text: {
          primary: '#FFFFFF',
          secondary: '#B8C1E0'
        },
        glass: {
          DEFAULT: 'rgba(15, 30, 80, 0.55)',
          border: 'rgba(80, 130, 255, 0.35)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15) 0%, rgba(2, 6, 23, 0) 50%)',
        'gradient-text': 'linear-gradient(135deg, #2563EB, #7C3AED, #D946EF)',
      }
    },
  },
  plugins: [],
}
