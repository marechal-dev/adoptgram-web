/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'hero': '75% 25%',
      },
      colors: {
        adoptgram: {
          text: {
            main: '#2C2828',
          },
          brand: {
            orange: {
              100: '#FBE9CD',
              500: '#F7D3A4',
            },
            blue: {
              300: '#6C8EAD',
              800: '#195891',
            },
            red: {
              error: '#D94E41'
            },
          },
        }
      }
    },
  },
  plugins: [],
}
