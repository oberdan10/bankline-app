import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao`)
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao/${idConta}`)
  }

  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacao`,movimentacao);
 }
}
