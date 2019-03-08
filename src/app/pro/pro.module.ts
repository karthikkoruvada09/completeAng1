import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { Routing2Module } from './routing2/routing2.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    Routing2Module
  ],
  exports:[ProfileComponent]  //dont forget to export these components in new module
   //and i think this pro module dont need to register in app module
})
export class ProModule { }
