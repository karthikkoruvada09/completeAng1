import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import{Router,ParamMap,ActivatedRoute}from'@angular/router';

@Component({
  selector: 'app-rou1',
  templateUrl: './rou1.component.html',
  styleUrls: ['./rou1.component.css']
})
export class Rou1Component implements OnInit {

  constructor(private ser:SerService,private router:Router,private ar:ActivatedRoute) { }

  data;
  backcollectedId; //this collects route parameters

  backcollectedId2
  ngOnInit() {
    this.ar.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      let id2=(params.get('name'));

      this.backcollectedId=id;
      this.backcollectedId2=id2;

    })




    this.ser.toRou1().subscribe(data=>{
      this.data=data;
    })
  }

  //route paarmeters
  get(i){
    this.router.navigate(['/rou3',i.id])
  }

}
