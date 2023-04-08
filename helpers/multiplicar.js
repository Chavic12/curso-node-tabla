
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {


        let salida = ''
        let consola = ''
        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`);
            consola += (`${base} x ${index} = ${base * index}\n`);
        }


        if (listar) {
            console.log('====================='.green)
            console.log(`   Tabla del`, base)
            console.log('====================='.green)

            console.log(salida)
        }


        fs.writeFileSync(`./salida/  tabla-${base}.txt`, consola)

        return (`tabla-${base}.txt`)


    } catch (error) {
        throw (error)
    }

}

module.exports = {
    crearArchivo
}
