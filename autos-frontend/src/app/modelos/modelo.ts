import { Descripcion } from "../descripciones/descripcion";
import { Submarca } from "../submarcas/submarca";

export class Modelo {
    id:number;
    nombre:string;
    submarca:Submarca;
    descirpciones:Descripcion[];


    constructor(id:number, nombre:string, submarca:Submarca, descripciones:Descripcion[]) {
        this.id = id;
        this.nombre = nombre;
        this.submarca = submarca;
        this.descirpciones = descripciones;
      }
}
