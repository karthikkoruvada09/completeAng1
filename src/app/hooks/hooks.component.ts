import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges,OnDestroy {

  constructor() {
    console.log("parent constructor");
   }

  ngOnInit() {
console.log("parent ng oninit")
  }

  ngOnDestroy(){
    console.log("parent ng onDestroy")

  }

  ngOnChanges(){
    console.log("parent onchanges")

  }

  ngDoCheck(){
    console.log("P Docheck")
  }
  
  parentHook=1
  method(){
    this.parentHook++;
  }
}
