import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from './modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private endPoint:string = 'http://localhost:8080/api/modelos'

  constructor(private http:HttpClient) { }

  getModelos(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(this.endPoint);
  }
}
