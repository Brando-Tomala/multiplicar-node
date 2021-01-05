const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp.green))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconozido');
}

//console.log(`base: ${argv.base} :: limite: ${argv.limite}`);