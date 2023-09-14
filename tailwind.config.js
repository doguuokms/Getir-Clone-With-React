/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      }),
      boxShadow: {
        "dogi": "rgba(93, 62, 188, 0.04) 0px 6px 24px"
      }
    },
  },
  plugins: [],
}

