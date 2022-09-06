import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { VerbComponent } from './verb/verb.component';
import { VerbsListComponent } from './verbs-list/verbs-list.component';

const routes: Routes = [
  { path: 'verb/:id', component:VerbComponent},
  { path: 'verbs', component: VerbsListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
