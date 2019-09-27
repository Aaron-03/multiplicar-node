
// Requireds
//const fs = require('fs');
const colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = '5';

// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + colors.green(archivo)))
            .catch(err => console.log(`No se pudo guardar la base 7: ${err}`))
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);

// GIT Y github - último video que me quedé


