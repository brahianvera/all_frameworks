import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { VerbComponent } from './verb/verb.component';
import { VerbsListComponent } from './verbs-list/verbs-list.component';
import { NewVerbComponent } from './new-verb/new-verb.component';

const routes: Routes = [
  { path: 'verb/:id', component:VerbComponent},
  { path: 'verbs', component: VerbsListComponent},
  { path: 'newverb', component: NewVerbComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
