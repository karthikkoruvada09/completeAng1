import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements OnInit,OnChanges,OnDestroy,DoCheck  {

  
  constructor() {
    console.log("chold constructor");
   }

  ngOnInit() {
console.log("chold ng oninit")
  }

  ngOnDestroy(){
    console.log("chold ng onDestroy")

  }

  ngOnChanges(){
    console.log("chold onchanges")

  }
  ngDoCheck(){
    console.log("c Docheck")
  }

  @Input() childhook;

}
