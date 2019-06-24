import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as collectionActions from 'app/store/actions'
import { MediaService } from 'app/services/media.services';

@Injectable()
export class GalleryEffects {
  constructor(private actions$: Actions, private media: MediaService) {}

  @Effect()
  fetchCollection = this.actions$.pipe(
    ofType(collectionActions.FETCH_COLLECTION),
    switchMap(() => {
      return this.media.fetchCollection().pipe(map((res) => {
        return new collectionActions.fetchCollectionSuccess(res)
      }))
    })
  )
}
