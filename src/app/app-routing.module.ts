import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TscSec1Component } from './tsc-sec1/tsc-sec1.component';
import { TscSec2Component } from './tsc-sec2/tsc-sec2.component';

const routes: Routes = [
  { path: '', component: TscSec1Component},
  { path: 'sec1', component: TscSec1Component },
  { path: 'sec2', component: TscSec2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
