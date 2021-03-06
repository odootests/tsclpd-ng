import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TscSec1Component } from './tsc-sec1/tsc-sec1.component';
import { TscSec2Component } from './tsc-sec2/tsc-sec2.component';

import { NavComponent} from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TscSec1Component,
    TscSec2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
