/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        cyber: {
          bg: '#090d16',
          card: '#0f172a',
          cardHover: '#1e293b',
          border: '#1e293b',
          accent: '#6366f1',
          cyan: '#06b6d4',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
          purple: '#8b5cf6',
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(99, 102, 241, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
