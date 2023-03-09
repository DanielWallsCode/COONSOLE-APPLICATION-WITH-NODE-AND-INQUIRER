import { v4 as uuidv4 } from 'uuid';

class Tarea{
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.id = uuidv4();
        this.descripcion = desc;
        this.completadoEn = null;
    }
}

export default Tarea;