import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rou1Component } from '../rou1/rou1.component';
import { Rou2Component } from '../rou2/rou2.component';
import { Rou3Component } from '../rou3/rou3.component';
import { FormsComponent } from '../forms/forms.component';
import { HooksComponent } from '../hooks/hooks.component';

const routes: Routes = [
  {path:'',redirectTo:'/rou1',pathMatch:"full"},

  {path:'rou1',component:Rou1Component},
  {path:'rou1/:id',component:Rou1Component},
  {path:'forms',component:FormsComponent},
  {path:'hooks',component:HooksComponent},


  {path:'profile',loadChildren:'../pro/pro.module#ProModule'},  //jst the starting with path of new module mentioned here

  {path:'rou2',component:Rou2Component},
  {path:'rou3/:id',component:Rou3Component},

  {path:'**',component:Rou3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
