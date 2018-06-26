// materializecss
import "materialize-css";
import { MaterializeDirective } from 'angular2-materialize';
import * as M from "materialize-css/dist/js/materialize";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


