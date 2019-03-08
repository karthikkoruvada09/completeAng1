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

  backcollectedId2;
  backcollectedId3
  ngOnInit() {
    this.ar.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('id'));
      let id2=(params.get('name'));
      let id3=(params.get('d'));


      this.backcollectedId=id;
      this.backcollectedId2=id2;
      this.backcollectedId3=id3;


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
