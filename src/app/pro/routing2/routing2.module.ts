import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{path:'pro',component:ProfileComponent}])
  ]
})
export class Routing2Module { }
