import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  searchFood(price,city,state) : Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/api/${price}/${city}/${state}`, httpOptions);
  }

}
