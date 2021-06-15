const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.red.inverse + " creado".red.inverse)
  )
  .catch((err) => console.log(err));
