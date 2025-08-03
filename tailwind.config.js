const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:[`var(--font-inter)`]
      },
      colors:{
        background:`rgb(var(--background))`,
        foreground:`rgb(var(--foreground))`,
        muted:`rgb(var(--muted))`,
        accent:`rgb(var(--accent))`,
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(168, 85, 247, 0.08)',
        'glass-sm': '5px 5px 20px 0px rgba(168, 85, 247, 0.4)',
        'purple-glow': '0 0 25px rgba(168, 85, 247, 0.4)',
        'purple-glow-strong': '0 0 35px rgba(168, 85, 247, 0.6)',
      },      
      keyframes:{
        'spin-reverse':{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(-360deg)'},
        },
        'purple-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation:{
        'spin-slow':'spin 40s linear infinite',
        'spin-slow-reverse':'spin-reverse 40s linear infinite',
        'purple-pulse': 'purple-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      screens:{
        xs:'480px'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      }
    },
  },
  plugins: [],
};