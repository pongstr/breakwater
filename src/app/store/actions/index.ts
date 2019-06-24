import { Action } from '@ngrx/store';

export const FETCH_COLLECTION = '[GALLERY] Load Collection';
export const FETCH_COLLECTION_FAIL = '[GALLERY] Load Collection Fail';
export const FETCH_COLLECTION_SUCCESS = '[GALLERY] Load Collection Success';
export const FETCH_IMAGE = '[GALLERY:IMAGE] Select Current Image';

export class fetchCollection implements Action {
  readonly type = FETCH_COLLECTION;
}

export class fetchCollectionFail implements Action {
  readonly type = FETCH_COLLECTION_FAIL;
}

export class fetchCollectionSuccess implements Action {
  readonly type = FETCH_COLLECTION_SUCCESS;
  constructor(public payload) {}
}

export class fetchImageItem implements Action {
  readonly type = FETCH_IMAGE;
  constructor(public payload) {}
}

export type FetchCollection =
  fetchCollection |
  fetchCollectionFail |
  fetchCollectionSuccess |
  fetchImageItem;
