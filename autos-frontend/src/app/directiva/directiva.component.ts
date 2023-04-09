import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaMarca: string[] = ['Audi', 'Toyota', 'Volkswagen', 'Lamborgini', 'Mazda']

  habilitar: boolean = true;

    setHabilitar(): void {
      this.habilitar = (this.habilitar==true)? false : true;
    }
  

}
