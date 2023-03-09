require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('======================'.blue);
        console.log('Seleccione una opcion'.blue);
        console.log('======================\n'.blue);
    
    
        console.log(`${'1'.blue}. Crear tarea`);
        console.log(`${'2'.blue}. Listar tareas`);
        console.log(`${'3'.blue}. Listar tareas Completadas`);
        console.log(`${'4'.blue}. Listar tareas Pendientes`);
        console.log(`${'5'.blue}. Completar tarea(s)`);
        console.log(`${'6'.blue}. Borrar tarea`);
        console.log(`${'0'.blue}. Salir`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPrecione ${'ENTER'.blue} para continuar\n`, () => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}