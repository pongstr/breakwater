import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Breakwater } from 'app/app.types'
import * as gallery from './gallery.reducer'

export const AppReducers: ActionReducerMap<Breakwater.AppState> = {
  gallery: gallery.reducer
};

export const getGalleryState = createFeatureSelector('gallery');

export const galleryState = createSelector(
  getGalleryState,
  gallery.getGalleryState
);

export const selectorGetCollection = createSelector(
  galleryState,
  gallery.galleryGetCollection);

export const selectorGetLoading = createSelector(
  galleryState,
  gallery.galleryIsLoading
);

export const selectorGetLoaded = createSelector(
  galleryState,
  gallery.galleryIsLoaded
);
