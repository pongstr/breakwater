import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import parse from 'parse-link-header';

import { Breakwater } from 'app/app.types';
import { Injectable, NgModule } from '@angular/core';

@NgModule({ imports: [MediaService] })
@Injectable({ providedIn: 'root' })
export class MediaService {
  baseURL = 'https://api.unsplash.com/photos';

  constructor(private http: HttpClient) {}

  public fetchCollection() {
    const { http, baseURL } = this;
    const params = new HttpParams()
      .set('per_page', '25');

    return http.get<Breakwater.ImageCollection>(baseURL, { params, observe: 'response' })
      .pipe(tap((res) => res.clone()))
      .pipe(map((res) => {
        const pages = parse(res.headers.get('Link'))
        const { body } = res;
        return { body, ...pages };
      }))
  }
}
