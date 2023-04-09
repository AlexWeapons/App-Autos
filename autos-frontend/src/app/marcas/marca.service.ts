import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from './marca';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {
  private urlEndpoint:string = 'http://localhost:8080/api/marcas';

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.urlEndpoint)
  }
}
