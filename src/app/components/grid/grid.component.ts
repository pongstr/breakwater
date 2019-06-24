import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Breakwater } from 'app/app.types';
import * as reducers from 'app/store/reducers'

@Component({
  selector: 'app-image-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {
  breakpoint: number;
  collection$: Observable<Breakwater.ImageCollection>;

  constructor(private store: Store<Breakwater.GalleryState>) {}

  ngOnInit() {
    this.collection$ = this.store.select<Breakwater.ImageCollection>(reducers.selectorGetCollection);
    this.getScreenWidth();
  }

  getSourceSet(srcSet: Breakwater.ImageSrcSet) {
    const { thumb, small, regular } = srcSet;
    return `${ thumb } 450w, ${ small } 728w, ${ regular } 860w`;
  }

  getBgImage(srcSet: Breakwater.ImageSrcSet) {
    return srcSet ? `url(${srcSet.regular})` : '';
  }

  getScreenWidth() {
    let width: number = window.innerWidth;

    if (width <= 450) {
      this.breakpoint = 1;
      return;
    }

    if (width <= 728) {
      this.breakpoint = 2;
      return
    }

    if (width < 860) {
      this.breakpoint = 3;
      return;
    }

    if (width < 1024) {
      this.breakpoint = 4;
      return;
    }

    this.breakpoint = 5;
    return;
  }
}
