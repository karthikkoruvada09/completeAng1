import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'src/daya';
//import'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) { }

  toRou1():Observable<data[]>
  {
   return this.http.get<data[]>('/assets/data.json');
  }
}
