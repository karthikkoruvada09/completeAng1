import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private ser:SerService) { }

  ngOnInit() {
  }

  method($event){
console.log($event);
this.ser.post($event);
  }


obj={
  name :"karthik",
  password :"1234",
  
  
}
rad1="India";

powers=['karthik1','karthik2','karthik3','karthik4']
powers1=['karthik1','karthik2','karthik3','karthik4']


}
