import * as actions from 'app/store/actions';
import { Breakwater } from 'app/app.types'
import { Action } from 'rxjs/internal/scheduler/Action';

export const initial: Breakwater.GalleryState = {
  loading: false,
  loaded: false,
  selected: {
    prev: null,
    next: null,
    current: null
  },
  collection: {
    body: []
  }
}

export function reducer(
  state: Breakwater.GalleryState = initial,
  action: actions.FetchCollection
) {
  switch(action.type) {
    case actions.FETCH_COLLECTION:
      return {
        ...state,
        loading: true
      };

    case actions.FETCH_COLLECTION_SUCCESS:
      const collection = action.payload;
      return {
        ...state,
        collection,
        loading: false,
        loaded: true
      };

    case actions.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      }
  }
}

export const getGalleryState = (state: Breakwater.AppState) => state.gallery;
export const galleryGetCollection = (state: Breakwater.GalleryState) => state.collection;
export const galleryIsLoading = (state: Breakwater.GalleryState) => state.loading;
export const galleryIsLoaded = (state: Breakwater.GalleryState) => state.loaded;
