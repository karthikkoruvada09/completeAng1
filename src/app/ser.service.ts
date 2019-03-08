import { Injectable } from '@angular/core';
import{HttpClient,HttpParams}from'@angular/common/http';
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


  toRou2():Observable<any>
  {
   return this.http.get('/assets/pipe.json')
      
  }


  getParams(){
let params1=new HttpParams().set('userId','1');
return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
  }
}
