# React-Learn-Projects
# 1. Create Vite + React project
npm create vite@latest

# Project name: my-app
# Framework: React
# Variant: JavaScript

cd my-app

# 2. Install dependencies
npm install

# Install TailwindCSS v3 specifically
npm install -D tailwindcss@^3.4.0 postcss@latest autoprefixer@latest

# Install other dependencies
npm install

# Now initialize TailwindCSS
npx tailwindcss init -pndCSS


# For index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# For tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}