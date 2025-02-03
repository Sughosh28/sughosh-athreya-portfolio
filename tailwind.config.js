/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'gradient-shift': 'gradient-shift 8s ease infinite',
      'tilt': 'tilt 10s infinite linear',
      'slideIn': 'slideIn 0.2s ease-out',
      'fadeIn': 'fadeIn 0.3s ease-out',
      'pulse-slow': 'pulse 6s infinite',
    },
    keyframes: {
      'gradient-shift': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      'tilt': {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(2deg)' },
        '75%': { transform: 'rotate(-2deg)' },
      },
      'slideIn': {
        '0%': { transform: 'translateY(-10px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      'fadeIn': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    backgroundSize: {
      '200%': '200% 200%',
    },
    colors: {
      'slate': {
        850: '#1e293b',
      },
    },
  },
};
export const plugins = [];
