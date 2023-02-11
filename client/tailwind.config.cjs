/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // => @media (0-639px) will run bg-primary (default)

      tablet: "640px",
      // => sm @media (min-width: 640px)  640 -1023px this will run

      laptop: "1024px",
      // => lg @media (min-width: 1024px) 1024 -1079px this will run

      desktop: "1280px",
      // => xl @media (min-width: 1280px) 1280 -> beyond this will run
    },
    fontFamily: {
      inconsolata: ["Inconsolata", "monospace"],
    },
    extend: {
      colors: {
        "primary": "#5d51b5",
        "secondary": "#c6913b",
        "accent": "#e8c1ff",
        "neutral": "#1C161D",
        "base-100": "#3C4044",    
        "info": "#29BDDB",   
        "success": "#7BEAA4",   
        "warning": "#D47E0C",  
        "error": "#EB5275",
        "logo": "#695E93",
      },
    }
  },
  plugins: [],
}