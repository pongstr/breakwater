import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from 'app/modules/routing.module';
import { MaterialModule } from 'app/modules/material.module';
import { AppReducers } from 'app/store/reducers'
import { GridComponent } from 'app/components/grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forFeature('gallery', AppReducers)
  ],
  declarations: [
    GridComponent
  ],
  entryComponents: [],
  providers: [],

})
export class GalleryModule { }
