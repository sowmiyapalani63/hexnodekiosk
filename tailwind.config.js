/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'], 
      },
      colors: {
        customGray: '#020A19', 
        customred:'#DD0735'
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1280px',
        
  
      },
      screenSize:{
        with:'1680px',
        
      },
    },
  },
  plugins: [],
}

