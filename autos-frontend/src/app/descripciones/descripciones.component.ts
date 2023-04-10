import { Component, OnInit } from '@angular/core';
import { Descripcion } from './descripcion';
import { DescripcionService } from './descripcion.service';

@Component({
  selector: 'app-descripciones',
  templateUrl: './descripciones.component.html'
})
export class DescripcionesComponent implements OnInit{

  descripciones:Descripcion[];

  constructor(private descripcionService: DescripcionService) { }

  ngOnInit(){
      this.descripcionService.getDescripciones().subscribe(
        descripciones => this.descripciones = descripciones
      );
  }
}
