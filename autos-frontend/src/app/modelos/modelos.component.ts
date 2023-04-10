import { Component, OnInit } from '@angular/core';
import { ModeloService } from './modelo.service';
import { Modelo } from './modelo';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html'
})
export class ModelosComponent implements OnInit{

  modelos:Modelo[];

  constructor(private modeloService:ModeloService) { }

  ngOnInit() {
      this.modeloService.getModelos().subscribe(
        modelos => this.modelos = modelos
      );
  }

}
