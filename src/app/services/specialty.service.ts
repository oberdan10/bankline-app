import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {

  constructor(private http: HttpClient) { }

  create(especialidade:any): Observable<any> {
    return this.http.post(`${baseUrl}/especialidades`,especialidade);
  }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/especialidades`)
  }
}
