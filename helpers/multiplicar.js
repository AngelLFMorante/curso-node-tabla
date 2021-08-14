const fs = require('fs');
const color = require('colors');
//para exportar este método en otra clase, se hace con module
const crearArchivo = async(base = 7, listar = false, hasta = 10) => {

    //para hacerlo mas sencillo y mejorable se pone async, ya que es como decir es una promesa. 
    //y ya solo hacemos un return con el resolve y ya esta. Como no podemos hacer el reject, se hace con try catch

    //haciendo una promesa
    // return new Promise( //otra funcion 
    // (resolve, reject) => {
    //aqui dentro toda la lógica y debería funcionar igual
    try {
        let salida = '===============\n' +
            `= TABLA DEL ${base} =\n` +
            '===============\n';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base} ${'x'} ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida, );
        //mensaje de salida de que todo ha funcionado bien
        console.log(`tabla-${ base }.txt creada con éxito`);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

    // }
    // );

    //esto es sin hacer promesa
    //     //creamos una variable de string
    //     let salida = '===============\n' +
    //         `= TABLA DEL ${base} =\n` +
    //         '===============\n';

    //     for (let i = 1; i <= 10; i++) {
    //         salida += `${ base } x ${ i } = ${ base * i }\n`;
    //     }

    //     //exportamos la salida a un fichero
    //     //requiere el nombre del archivo, lo que metemos en el archivo, un callback
    //     //el callback recibe el error de si no ha salido bien, está en la documentacion de node
    //     fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    //         if (err) throw err;
    //         //mensaje de salida de que todo ha funcionado bien
    //         console.log(`tabla-${ base }.txt creada con éxito`);
    //     })
    // }
    //lo hacemos con el módulo para pdoer exportar
}

module.exports = {
    crearArchivo //cuando es redundante lo podemos dejar en uno solo en vez de poner crearArchivo:crearArchivo
}