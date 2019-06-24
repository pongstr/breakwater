import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Breakwater } from 'app/app.types';

import * as actions from 'app/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Breakwater Gallery';
  constructor(private store: Store<Breakwater.GalleryState>) {}
  ngOnInit() {
    this.store.dispatch(new actions.fetchCollection());
    return;
  }
}
