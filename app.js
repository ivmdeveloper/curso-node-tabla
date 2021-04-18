
const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();
console.log(argv);


createFile(argv.b, argv.l, argv.h)
    .then( fileName => console.log(fileName.rainbow, 'Archivo creado'))
    .catch(err => console.log(err));