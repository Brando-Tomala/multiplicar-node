const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valos ingresado: ${base}, no es un numero`)
            return;
        }
        let data = forMultiplicar(base, limite);
        const contenido = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err)
                reject(err);
            resolve(`Archivo creado: tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valos ingresado: ${base} :: ${limite}, no es un numero`)
            return;
        }
        let data = forMultiplicar(base, limite);
        resolve(data);
    });

}

let forMultiplicar = (base, limite = 12) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        let resultado = i * base;
        data += `${base} * ${i} = ${resultado}\n`;
    }
    return data;
}

module.exports = {
    crearArchivo,
    listarTabla
}