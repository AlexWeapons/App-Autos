import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descripcion } from './descripcion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {

  private urlEndpoint:string = 'http://localhost:8080/api/descripciones'

  constructor(private http:HttpClient) { }

  getDescripciones():Observable<Descripcion[]>{
    return this.http.get<Descripcion[]>(this.urlEndpoint)
  }
}
