import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from 'app/modules/routing.module';
import { MaterialModule } from 'app/modules/material.module';
import { GalleryModule } from 'app/modules/gallery.module';

import { interceptorProvider } from 'app/providers/interceptors';
import { AppComponent } from 'app/app.component';
import { GalleryEffects } from 'app/store/effects/gallery.effects';

const metaReducers: MetaReducer<any>[] = [];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    GalleryModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([GalleryEffects])
  ],
  providers: [
    interceptorProvider()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
