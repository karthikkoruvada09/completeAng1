import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-rou2',
  templateUrl: './rou2.component.html',
  styleUrls: ['./rou2.component.css']
})
export class Rou2Component implements OnInit {

  constructor(private ser:SerService) { }
data;
  ngOnInit() {
    this.ser.toRou2().subscribe(data=>{
      this.data=data;
    })
  }

  name(){
    let a=2+3;
    console.log(a);
  };

  kar="karthik";

  public hasError=true;

  public nameClass={
    "text-danger":this.hasError,
    "text-center":this.hasError
  };

  public nameClass11={
    color:"red",
    
  };
greet;
  nam(){
   this.greet = "welcome"
  };

  gett;



}
