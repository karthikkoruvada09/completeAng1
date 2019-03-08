import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  method($event){
console.log($event)
  }


obj={
  name :"karthik",
  password :"1234",
  
  
}
rad1="India";

powers=['karthik','karthik','karthik','karthik']

}
