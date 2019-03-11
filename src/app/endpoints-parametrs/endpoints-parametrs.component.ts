import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-endpoints-parametrs',
  templateUrl: './endpoints-parametrs.component.html',
  styleUrls: ['./endpoints-parametrs.component.css']
})
export class ENDPOINTSParametrsComponent implements OnInit {

  constructor(private ser:SerService) { }

  ngOnInit() {
    this.get();
  }

error;
  data:object;
  get(){
    this.ser.getParams().subscribe(data=> this.data=data ,
                  error=> this.error=error);
  }

}
