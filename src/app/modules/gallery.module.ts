import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from 'app/modules/routing.module';
import { MaterialModule } from 'app/modules/material.module';
import { AppReducers } from 'app/store/reducers'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forFeature('gallery', AppReducers)
  ],
  declarations: [],
  entryComponents: [],
  providers: [],

})
export class GalleryModule { }
