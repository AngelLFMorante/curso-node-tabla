//imprimir la tabla del 5 en la consola  5x1 = 5

// let numeroAMultiplicar = 5;
// for (let i = 0; i <= 10; i++) {
//     console.log(numeroAMultiplicar + ' x ' + i + ' = ' + numeroAMultiplicar * i);
// }

/* for (let i = 0; i < 10; i++) {
 
    console.log(5 + ' x ' + parseInt(i + 1) + ' = ' + 5 * parseInt(i + 1));
}
 */

//Exportar la salida  a un fichero
const fs = require('fs');
//para recibir el módulo de la clase multiplicar 
const { crearArchivo } = require('./helpers/multiplicar');
//he recortado lo de argv que estaba aquí para ponerlo en config->yargs
//ahora lo llamamos importandolo.
const argv = require('./config/yargs');
//importando colores para sacarlo bonito 
const color = require('colors');

console.clear();
// console.log('===============');
// console.log('= TABLA DEL 5 =');
// console.log('===============');
// //mejor utilizar esta forma
// const base = 6;
// //creamos una variable de string
// let salida = '===============\n' +
//     `= TABLA DEL ${base} =\n` +
//     '===============\n';
// for (let i = 1; i <= 10; i++) {
//     salida += `${ base } x ${ i } = ${ base * i }\n`;
// }

// ****************************************************************************************

// //exportamos la salida a un fichero
// //requiere el nombre del archivo, lo que metemos en el archivo, un callback
// //el callback recibe el error de si no ha salido bien, está en la documentacion de node
// fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;
//     //mensaje de salida de que todo ha funcionado bien
//     console.log(`tabla-${ base }.txt creada con éxito`);
// })

//si utiulizamos wl writeFileSync, tendremos que poner un try catch;


//utilizamos el módulo para hacer las operaciones de multiplicar de la otra clase.
//const base = 8; //al ponerle la base aquí coge este valor, pero si no le ponemos nada coge el valor por defecto que tenemos en base en multiplicar.
//crearArchivo()así saldría la base por defecto.

// ****************************************************************************************

// const base = 3;
// creamos con promesa
// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));


// ****************************************************************************************

//progreso de los comando realizados desde el terminal
//CREAR COMANDOS PARA LANZARLOS DESDE EL TERMINAL

/**
 * PERO NO SE HACE ASI, PERO ES UNA MANERA.
 * //se le pued poner  base por defecto
// const [, , arg3 = 'base=5'] = process.argv;

//separamos por split, si no mandamos nada, por defecto es el 5
// const [, base = 5] = arg3.split('=');

//en este punto ya podemos hacer  un comando = ./archivo --base=9
 */

// ****************************************************************************************

//comprobamos los dos argv que tenemos 
// console.log(process.argv);
console.log(argv);

//para ahcer la primera opcion como comando
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));