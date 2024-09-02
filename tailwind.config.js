/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(at 0% 100%, #1F3757, #131537 100%)',
        'custom-gradient': 'linear-gradient(to right, #F3F3F3 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'custom': '0 3px 3px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

