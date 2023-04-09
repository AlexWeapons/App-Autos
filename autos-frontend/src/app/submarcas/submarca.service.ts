import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Submarca } from './submarca';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class SubmarcaService {
  private urlEndpoint:string = 'http://localhost:8080/api/submarcas';

  constructor(private http: HttpClient) { }

  getSubmarcas(): Observable<Submarca[]>{
    return this.http.get<Submarca[]>(this.urlEndpoint);
  }
  
}

