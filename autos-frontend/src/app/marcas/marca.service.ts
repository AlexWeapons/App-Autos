import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Marca } from './marca';
import { Submarca } from '../submarcas/submarca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor() { }

  getMarcas(): Observable<Marca[]> {
    return of ([
      {id: 1, nombre: 'Audi', submarcas: [new Submarca('R8'), new Submarca('A1'), new Submarca('A2')]},
      {id: 2, nombre: 'BMW', submarcas: [new Submarca('Serie 1'), new Submarca('Serie 2'), new Submarca('Serie 3')]}
    ]);
  }
}
