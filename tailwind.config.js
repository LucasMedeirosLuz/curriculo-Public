/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'l-blue-1': '#DAE1E9',
        'l-blue-2': '#58789A',
        'l-blue-3': '#132C4D',
        'l-blue-4': '#12233F',
        'l-blue-5': '#0B1A2F',
      },
    },
  },
  plugins: [],
}
