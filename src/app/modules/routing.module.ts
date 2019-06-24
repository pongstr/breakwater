import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from 'app/components/grid/grid.component';
import { ImageComponent } from 'app/components/image/image.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'photos/:id', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
