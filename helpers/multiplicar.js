const crearArchivo = (base = 5, listar, hasta) => {
  const fs = require("fs");
  const colors = require("colors");

  return new Promise((resolve, reject) => {
    if (listar) {
      console.log(`=================================`);
      console.log(`========== Tabla del ${base} ==========`);
      console.log(`=================================`);
    }

    let salida = "";
    for (let index = 1; index <= hasta; index++) {
      salida += `${index} x ${base} = ${index * base}\n`;
    }
    if (listar) console.log(salida.green);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  });
};

module.exports = {
  crearArchivo,
};
