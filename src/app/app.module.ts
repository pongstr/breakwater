import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'app/modules/routing.module';
import { MaterialModule } from 'app/modules/material.module';

import { interceptorProvider } from 'app/providers/interceptors';


import { AppComponent } from 'app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    interceptorProvider()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
