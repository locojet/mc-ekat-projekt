/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F627A',
        secondary:'#4f627abc',
        secondary2:'#313d4c',
        whitetransparent: '#f2f2f2bc',
      },
      borderRadius: {
          '1-sm': '0.0625rem', // 1 Pixel
          '2-sm': '0.125rem',   // 2 Pixel
          '3-sm': '0.1875rem',  // 3 Pixel
          '4-sm': '0.25rem',    // 4 Pixel
          '5-sm': '0.3125rem',  // 5 Pixel
          '6-sm': '0.375rem',   // 6 Pixel
          '7-sm': '0.4375rem',  // 7 Pixel
          '8-sm': '0.5rem',     // 8 Pixel
          '9-sm': '0.5625rem',  // 9 Pixel
          '10-sm': '0.625rem',  // 10 Pixel
          '11-sm': '0.6875rem', // 11 Pixel
          '12-sm': '0.75rem',   // 12 Pixel
          '13-sm': '0.8125rem', // 13 Pixel
          '14-sm': '0.875rem',  // 14 Pixel
          '15-sm': '0.9375rem', // 15 Pixel
          '16-sm': '1rem',      // 16 Pixel
          '17-sm': '1.0625rem', // 17 Pixel
          '18-sm': '1.125rem',  // 18 Pixel
          '19-sm': '1.1875rem', // 19 Pixel
          '20-sm': '1.25rem'    // 20 Pixel
        
      },

      spacing: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-7': '-1.75rem',
        '-8': '-2rem',
        '-9': '-2.25rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-14': '-3.5rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
      },
      padding: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-7': '-1.75rem',
        '-8': '-2rem',
        '-9': '-2.25rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-14': '-3.5rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
      }
    },
  },
  plugins: [],
}

