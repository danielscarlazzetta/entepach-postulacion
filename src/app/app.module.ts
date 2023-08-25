import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Index2Component } from './index2/index2.component';
import { Index1Component } from './index1/index1.component';

@NgModule({
  declarations: [
    AppComponent,
    Index2Component,
    Index1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
