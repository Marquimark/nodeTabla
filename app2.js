const colors            = require('colors');
const { crearArchivo }  = require('./helpers/multiplicar');
const argv              = require('./config/yargs');

// const argv              = require('yargs')
//                             .option('b',{
//                               alias : 'base',
//                               type  : 'number',
//                               demandOption: true
//                             })
//                             .option('l',{
//                               alias: 'listar',
//                               type: 'boolean',
//                               demandOption: true,
//                               default: false
//                             })
//                             .check((argv, options) => {
//                               if(isNaN( argv.base)){
//                                 throw 'La base debe ser un valor numerico';
//                               }
//                                return true;
//                             })
//                             .argv;

console.clear();

// console.log(process.argv);
console.log( argv);

// console.log('base : yargs', argv.base);
// console.log('Listar ', argv.listar);


// const [,,arg3="base=5"] = process.argv;
// // console.log( arg3 );

// const [, base = 5 ] = arg3.split('=');
// console.log( base );
// const base = 9;
// console.log('==================')
// console.log('Tabla del:', base)
// console.log('==================')



// for ( let i = 1; i <= 10; i++){
//   salida += `${ base } * ${ i } = ${ 5*i }\n`;
// }

// console.log( salida );

// // fs.writeFile(`tabla-${ base }.txt`, salida, (err)=> {

// //   if( err ) throw err;
// //   console.log(`tabla-${ base }.txt Creada`);
// // })

//  fs.writeFileSync(`tabla-${ base }`, salida );

//  console.log(`tabla-${ base }.txt Creada`);

// crearArchivo( base )

crearArchivo( argv.b, argv.l, argv.hasta )
          .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
          .catch( err => console.log( err));