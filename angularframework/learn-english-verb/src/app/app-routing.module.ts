import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { VerbComponent } from './verb/verb.component';

const routes: Routes = [
  { path: 'verb/:id', component:VerbComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
