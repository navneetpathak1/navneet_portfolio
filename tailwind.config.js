/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'coral': '#FF6B6B',
        'teal': '#4ECDC4',
        'deep-purple': '#6C5CE7',
        'neon-yellow': '#FDCB6E',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF6B6B, 0 0 10px #FF6B6B, 0 0 15px #FF6B6B' },
          '100%': { boxShadow: '0 0 10px #FF6B6B, 0 0 20px #FF6B6B, 0 0 30px #FF6B6B' },
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary": "#FF6B6B",
          "secondary": "#4ECDC4", 
          "accent": "#6C5CE7",
          "neutral": "#2A2A2A",
          "base-100": "#FFFFFF",
          "base-200": "#F8F9FA",
          "base-300": "#E9ECEF",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
    ],
  },
}
