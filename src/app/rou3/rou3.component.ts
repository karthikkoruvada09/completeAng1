import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, ParamMap,Router} from'@angular/router';
@Component({
  selector: 'app-rou3',
  templateUrl: './rou3.component.html',
  styleUrls: ['./rou3.component.css']
})
export class Rou3Component implements OnInit {

  constructor(private ar:ActivatedRoute,private router:Router) { }

  collectedId;
  ngOnInit() {
    this.ar.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.collectedId=id;
    })
  }

  prev(){
    let prev = this.collectedId -1;
    this.router.navigate(['/rou3',prev])
  }
  next(){
    let next = this.collectedId + 1;
    this.router.navigate(['/rou3',next])
  }

  back(){
    let back=this.collectedId? this.collectedId:null;
    this.router.navigate(['/rou1',{id:back,name:"yoyo"}])
  }


}
