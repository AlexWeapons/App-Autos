import { Modelo } from "../modelos/modelo";

export class Descripcion {
    id:number;
    descripcion:string;
    descripcionId:string;
    modelo:Modelo;

    constructor(id:number, descripcion:string, descripcionId:string, modelo:Modelo) {
        this.id = id;
        this.descripcion = descripcion;
        this.descripcionId = descripcionId;
        this.modelo = modelo;
    }
}
