const colors = require('colors');
const fs      = require('fs');

const crearArchivo =  async ( base=5, listar = false, hasta = 10 ) =>{

  try{
    // return new Promise(( resolve, reject )=> {


      let salida, consola = '';


      for (let i = 1; i <= hasta; i++) {
        salida  += `${base} X ${i} = ${base * i}\n`;
        consola += `${colors.inverse(base)} ${'X'.green} ${colors.yellow(i)} = ${colors.inverse(base * i)}\n`;
      }

      if( listar ){
        console.log('=================='.yellow)
        console.log('Tabla del:', colors.blue(base))
        console.log('=================='.green)

        console.log(consola);
      }

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

      // resolve(`tabla-${base}.txt`);

      return `tabla-${base}.txt`;

  }catch (err) { throw ( err )};

}


module.exports = {
  crearArchivo
}