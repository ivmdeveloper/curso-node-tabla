const fs = require('fs');
const colors = require('colors');

// Imprimir tabla del 5
const createFile = async( base = 5, listar = false, hasta = 10 ) => {
    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida  += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar) {
            console.log('========================'.green);
            console.log('       TABLA DEL '.yellow, colors.yellow(base));
            console.log('========================'.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err('No se pudo guardar el archivo');
    }
}

module.exports = {
    createFile
}