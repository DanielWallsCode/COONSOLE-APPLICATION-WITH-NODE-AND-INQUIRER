import colors from 'colors';
import {guardarDB, leerDB} from './helpers/guardarArchivo.js';
import {inquirerMenu,
    pausa,
    leerInput,
    listadoTareaBorrar,
    confirmar,
    mostrarListadoChecckList
} 
    from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

const main = async() => {
    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){ //CARGAR TAREAS
         tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        // Esta funcion retorna el menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3': //LISTAR COMPLETADAS
                tareas.listarPendientesCompletadas(true);
            break;

            case '4': //LISTAR PENDIENTES
                tareas.listarPendientesCompletadas(false);
            break;

            case '5': //COMPLETADO | PENDIENTE
                const ids = await mostrarListadoChecckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;

            case'6': //Borrar
                const id = await listadoTareaBorrar(tareas.listadoArr);
                if(id !== '0'){
                const ok = await confirmar('¿Esta seguro?');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);


        await pausa();

    }while(opt !== '0');
} 


main();