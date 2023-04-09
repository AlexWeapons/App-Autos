import { Submarca } from "../submarcas/submarca";

export class Marca {
    id: number;
    nombre: string;
    submarcas: Submarca[];

    constructor(id: number, nombre:string, submarcas:Submarca[]){
        this.id = id;
        this.nombre = nombre;
        this.submarcas = submarcas;
    }
}
