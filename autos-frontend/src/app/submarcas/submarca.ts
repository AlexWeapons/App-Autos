import { Marca } from "../marcas/marca";
import { Modelo } from "../modelos/modelo";

export class Submarca {
    id:number;
    nombre:string;
    marca:Marca;
    modelos:Modelo[];


    constructor(id:number, nombre:string, marca:Marca, modelos:Modelo[]) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.modelos = modelos;
      }
}
