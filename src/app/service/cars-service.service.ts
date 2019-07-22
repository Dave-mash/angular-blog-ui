import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ICar } from '../components/cars-list/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  url: string = window.location.hostname === 'localhost' ? 'http://127.0.0.1:8000/api' : 'https://car-classified.herokuapp.com/api';
  
  ParseHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]> {
    return this.http
      .get<ICar[]>(`${this.url}/cars`)
      .pipe(map(res => res));
  }

  getSingleCar(id): Observable<ICar[]> {
    return this.http
      .get<ICar[]>(`${this.url}/car/${id}`)
      .pipe(map(res => res));
  }

  postUser(postObj: {}) {
    return this.http.post(`${this.url}/register`, postObj, this.ParseHeaders);
  }

  logInUser(postObj: {}) {
    return this.http.post(`${this.url}/login`, postObj, this.ParseHeaders);
  }

  logInAdmin(postObj: {}) {
    return this.http.post(`${this.url}/admin_login`, postObj, this.ParseHeaders);
  }

  specifyCarType(make: string): Observable<any[]> {
    let modelUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`;

    return this.http.get<any[]>(modelUrl);
  }

  postCar(postObj: {}, userObj: {}) {
    if (userObj) {
      return this.http.post(`${this.url}/car/${userObj['id']}?token=${userObj['token']}`, postObj, this.ParseHeaders);
    } else {
      console.log('Invalid vendor Id');
    }
  }
}
