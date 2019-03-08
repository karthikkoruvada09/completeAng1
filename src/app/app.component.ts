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


  newMod(){
    this.rou.navigate(['/profile/pro']);  //it will first check the profile path and navigates further

  }

  forms(){
    this.rou.navigate(['/forms']); 
  }

  hooks(){
    this.rou.navigate(['/hooks']); 

  }



  
}
