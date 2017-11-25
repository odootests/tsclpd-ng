import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TscSec1Component }  from './tsc-sec1/tsc-sec1.component';

const routes: Routes = [
  { path: 'sec1', component: TscSec1Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
