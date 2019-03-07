import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rou1Component } from '../rou1/rou1.component';
import { Rou2Component } from '../rou2/rou2.component';
import { Rou3Component } from '../rou3/rou3.component';

const routes: Routes = [
  {path:'rou1',component:Rou1Component},
  {path:'rou2',component:Rou2Component},
  {path:'rou3/:id',component:Rou3Component},

  {path:'**',component:Rou3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
