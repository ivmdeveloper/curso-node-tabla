
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Multiplication Base',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra tabla en consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Número máximo',
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true
    })
    .argv;

module.exports = argv;