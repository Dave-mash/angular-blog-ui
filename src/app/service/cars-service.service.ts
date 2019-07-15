import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ICar } from '../components/cars-list/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  url: string = 'https://car-classified.herokuapp.com/api'; // window.location.hostname === 'localhost' ? 'http://127.0.0.1:8000/api' : 

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]> {
    return this.http
      .get<ICar[]>(`${this.url}/cars`)
      .pipe(map(res => res));
  }

  postUser() {
    return this.http.post(`${this.url}/register`, {})
  }
}
