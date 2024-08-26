const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    colors: {
      primary: '#307c8e',
      secondary: '#FDF9E4',
    },
  },
  plugins: [flowbite.plugin()],
};
