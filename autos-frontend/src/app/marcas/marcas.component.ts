import { Component, OnInit } from '@angular/core';
import { Marca } from './marca'; 
import { MarcaService } from './marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html'
})
export class MarcasComponent implements OnInit{
  marcas: Marca[];

  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.marcaService.getMarcas().subscribe(
      marcas => this.marcas = marcas
    );
  }
}
