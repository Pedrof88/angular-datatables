import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightJsModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
