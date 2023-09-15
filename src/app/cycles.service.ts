import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cycle } from './Cycle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CyclesService {
  baseUrl = 'http://localhost:8080/api/cycles';

  httOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getCycles(): Observable<Cycle[]> {
    return this.http.get<Cycle[]>(`${this.baseUrl}/list`);
  }
}
