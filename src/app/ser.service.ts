import { Injectable } from '@angular/core';
import{HttpClient,HttpParams,HttpErrorResponse}from'@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { data } from 'src/daya';
import {catchError} from'rxjs/operators';
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



  //ERROR HANDLING OF HTTP  CALLS
  getParams(){
let params1=new HttpParams().set('userId','1');
return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
.pipe(catchError(this.method))  
  }
  method(error :HttpErrorResponse){
    return throwError(error)
  }

  


  
  post(data){
    console.log(data);
this.http.get('http://localhost:4000/')
         
  }

}
