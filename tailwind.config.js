/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js" // Add this to scan JS files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#059669',
        accent: '#EA580C',
        dark: '#1E293B',
        light: '#F8FAFC'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'button, [type="button"], [type="reset"], [type="submit"]': {
          '-webkit-appearance': 'none',
          'appearance': 'none',
        }
      });
    }
  ]
}

