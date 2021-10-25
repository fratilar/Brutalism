module.exports = {
   mode: "jit",
   purge: ["./**/*.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            poppins: "'Poppins',sans-serif",
            eczar: "'Eczar',serif",
            robotomono: "'Roboto Mono',monospace",
         },
         backgroundImage: {
            hero: "url('/images/ctabg.png')",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
