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
        inter:[`var(--font-inter)`, 'system-ui', 'sans-serif'],
        display:[`var(--font-sora)`, `var(--font-inter)`, 'system-ui', 'sans-serif'],
      },
      colors:{
        background:`rgb(var(--background))`,
        surface:`rgb(var(--surface))`,
        foreground:`rgb(var(--foreground))`,
        muted:`rgb(var(--muted))`,
        accent:`rgb(var(--accent))`,
        'accent-deep':`rgb(var(--accent-deep))`,
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(34, 211, 238, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(34, 211, 238, 0.08)',
        'glass-sm': '5px 5px 20px 0px rgba(34, 211, 238, 0.4)',
        'cyan-glow': '0 0 25px rgba(34, 211, 238, 0.4)',
        'cyan-glow-strong': '0 0 35px rgba(34, 211, 238, 0.6)',
        'cyan-pulse': '0 0 20px rgba(34, 211, 238, 0.3)',
      },      
      keyframes:{
        'spin-reverse':{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(-360deg)'},
        },
        'cyan-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)'
          }
        },
        'cyan-wave': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
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
        'cyan-pulse': 'cyan-pulse 2s ease-in-out infinite',
        'cyan-wave': 'cyan-wave 3s ease-in-out infinite',
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