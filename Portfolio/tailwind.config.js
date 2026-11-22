/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#f4e400',
          blue: '#d5d1c7',
          purple: '#b7a97c',
          cyan: '#f4f0e8',
          magenta: '#f4e400',
        },
        cyber: {
          dark: '#111313',
          darker: '#0b0c0c',
          card: '#151817',
        }
      },
      boxShadow: {
        'neon-pink': '0 5px 24px rgba(244, 228, 0, .12)',
        'neon-blue': '0 5px 24px rgba(244, 240, 232, .08)',
        'neon-purple': '0 5px 24px rgba(183, 169, 124, .09)',
        'neon-cyan': '0 5px 24px rgba(244, 240, 232, .08)',
        'neon-magenta': '0 5px 24px rgba(244, 228, 0, .12)',
        'neon-glow': '0 0 0 transparent',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        cyber: ['Barlow Condensed', 'Impact', 'sans-serif'],
        body: ['DM Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


