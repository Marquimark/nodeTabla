
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe    : 'Es la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    // demandOption: true,
    default: false,
    describe: 'Muestra una tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Define el limite elementos a multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base debe ser un valor numerico';
    }
    return true;
  })
  .check((argv, option) => {
    if (isNaN(argv.hasta)) {
      throw 'Hasta debe tener un valor numerico';
    }
    return true;
  })
  .argv;

  module.exports = argv;
