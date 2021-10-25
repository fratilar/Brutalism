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
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
