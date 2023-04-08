
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10
            })
            .check(( argv, options ) => {
                if( isNaN( argv.b ) ) {
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .argv;


module.exports = argv