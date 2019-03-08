import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Rou1Component } from './rou1/rou1.component';
import { Rou2Component } from './rou2/rou2.component';
import { Rou3Component } from './rou3/rou3.component';
import { RouteModule } from './route/route.module';
import { SerService } from './ser.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe';
import{FormsModule}from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
import { ENDPOINTSParametrsComponent } from './endpoints-parametrs/endpoints-parametrs.component';

@NgModule({
  declarations: [
    AppComponent,
    Rou1Component,
    Rou2Component,
    Rou3Component,
    PipePipe,
    FormsComponent,
    HooksComponent,
    HooksChildComponent,
    ENDPOINTSParametrsComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
