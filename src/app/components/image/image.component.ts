import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatBottomSheet } from '@angular/material';
import { Store } from '@ngrx/store';

import * as reducers from 'app/store/reducers';
import { Breakwater } from 'app/app.types';
import { Observable } from 'rxjs';
import { ImageInfoComponent } from '../image-info/image-info.component';
import { ImageShareComponent } from '../image-share/image-share.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  modelId = this.route.snapshot.paramMap.get('id');
  model: Breakwater.ImageModel;
  prev: Breakwater.ImageModel;
  next: Breakwater.ImageModel;
  collection: Observable<Breakwater.ImageCollection>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private bottomSheet: MatBottomSheet,
    private store: Store<Breakwater.ImageCollection>
  ) {}

  ngOnInit() {
    this.collection = this.store.select<Breakwater.ImageCollection>(reducers.selectorGetCollection)
    this.route.params.subscribe((params) => this.updateComponent(params.id));
  }

  @HostListener('window:keyup', ['$event'])
  KeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.router.navigate(['/']);
    }

    if (event.keyCode === 37) {
      this.backward();
      return;
    }

    if (event.keyCode === 39) {
      this.forward();
      return;
    }
  }

  getURL(): string {
    const model = this.model;
    return model && model.urls
      ? `url(${this.model.urls.full})` : '';
  }

  updateComponent(id: string) {
    this.modelId = id;
    this.collection.subscribe((collection) => this.updateCursors(collection));
  }

  updateCursors(collection: Breakwater.ImageCollection) {
    const { body } = collection;
    if (body.length > 0) {
      const idx = body.findIndex((item) => item.id === this.modelId);
      this.model = body.find((item) => item.id == this.modelId);
      this.prev = body[idx - 1]
        ? body[idx - 1] : body[body.length - 1];
      this.next = body[idx + 1]
        ? body[idx + 1] : body[0];
    }
  }

  showInfo() {
    this.bottomSheet.open(ImageInfoComponent, { data: this.model.user });
    return;
  }

  showShare() {
    this.bottomSheet.open(ImageShareComponent, { data: this.model.links });
    return;
  }

  goBack() {
    return this.location.back();
  }

  close() {
    return this.router.navigateByUrl('/');
  }

  forward() {
    this.bottomSheet.dismiss();
    this.router.navigate([`photos/${this.next.id}`]);
  }

  backward() {
    this.bottomSheet.dismiss();
    this.router.navigate([`photos/${this.prev.id}`]);
  }
}
