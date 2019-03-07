import { Component, OnInit } from '@angular/core';
import{Router} from'@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private rou:Router){}
ngOnInit(){

  }

  rou1(){
    this.rou.navigate(['/rou1']);
  }
  rou2(){
    this.rou.navigate(['/rou2']);
  }



  
}
