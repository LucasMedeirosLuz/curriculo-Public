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
        'l-yellow-1': '#FF9E00',
        'l-yellow-2': '#FF9100',
        'l-yellow-3': '#FF8500',
        'l-yellow-4': '#FF7900',
        'l-yellow-5': '#FF6D00',
        'l-purple-1': '#9D4EDD',
        'l-purple-2': '#7B2CBF',
        'l-purple-3': '#5A189A',
        'l-purple-4': '#3C096C',
        'l-purple-5': '#240046',
      },
      width: {
        120: '30rem',
        125: '31.25rem',
      },
      height: {
        125: '31.25rem',
      },
    },
  },
  plugins: [],
}
