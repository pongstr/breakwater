import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  MatButtonModule,
  MatBottomSheetModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule {}
