import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from 'app/modules/routing.module';
import { MaterialModule } from 'app/modules/material.module';
import { AppReducers } from 'app/store/reducers'
import { GridComponent } from 'app/components/grid/grid.component';
import { ImageComponent } from 'app/components/image/image.component';
import { ImageInfoComponent } from 'app/components/image-info/image-info.component';
import { ImageShareComponent } from 'app/components/image-share/image-share.component';

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
    GridComponent,
    ImageComponent,
    ImageInfoComponent,
    ImageShareComponent
  ],
  entryComponents: [
    ImageInfoComponent,
    ImageShareComponent
  ],
  providers: [],

})
export class GalleryModule { }
