/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'tablet': '481px',
      'laptop': '769px ',
      'desktop': '1025px',
    },
    fontSize: {
      '3xl': '4rem',
      '2xl': '2.25rem',
      xl: '2rem',
      lg: '1.5rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem',
      'subheading': '2.1rem'
    },
    extend: {
      colors: {
        'primary': 'hsl(235, 100%, 50%)',
        'primary-light': 'hsl(235, 100%, 30%)',
        'secondary': 'hsl(55, 100%, 50%)',
        'font-light': 'hsl(0, 0%, 95%)',
        'font-dull': 'hsl(0, 0%, 75%)'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}


