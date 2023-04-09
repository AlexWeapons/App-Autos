import { Component, OnInit } from '@angular/core';
import { Submarca } from './submarca';
import { SubmarcaService } from './submarca.service';

@Component({
  selector: 'app-submarcas',
  templateUrl: './submarcas.component.html'
})
export class SubmarcasComponent implements OnInit{
  submarcas: Submarca[];

  constructor(private submarcaService: SubmarcaService) { }

  ngOnInit() {
      this.submarcaService.getSubmarcas().subscribe(
        submarcas => this.submarcas = submarcas
      );
  }
}
