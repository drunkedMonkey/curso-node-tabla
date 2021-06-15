const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Número hasta donde quieres la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw "Debe ser numérico";
    }
    return true;
  }).argv;

module.exports = argv;
