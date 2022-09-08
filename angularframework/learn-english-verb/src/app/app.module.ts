import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerbComponent } from './verb/verb.component';
//TO WORK WITH APIS - HttpClientModule
import { HttpClientModule } from '@angular/common/http';
//TO WORK WITH A DUMMY APPI.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { VerbsTimesComponent } from './verbs-times/verbs-times.component';
import { VerbsStatementsComponent } from './verbs-statements/verbs-statements.component';
import { VerbsListComponent } from './verbs-list/verbs-list.component';
import { NewVerbComponent } from './new-verb/new-verb.component';

@NgModule({
  declarations: [
    AppComponent,
    VerbComponent,
    VerbsTimesComponent,
    VerbsStatementsComponent,
    VerbsListComponent,
    NewVerbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
