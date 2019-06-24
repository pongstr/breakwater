import 'hammerjs';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { GalleryEffects } from 'app/store/effects';
import { AppReducers } from 'app/store/reducers';
import { MaterialModule } from 'app/modules/material.module';
import { interceptorProvider} from 'app/providers/interceptors';
import { AppComponent } from 'app/app.component';

const metaReducers: MetaReducer<any>[] = [];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MaterialModule,
        StoreModule.forRoot(AppReducers, { metaReducers }),
        EffectsModule.forRoot([GalleryEffects]),
      ],
      providers: [
        interceptorProvider()
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'breakwater'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Breakwater Gallery');
  });

  it('should render title in span.toolbar-title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.toolbar-title').textContent).toContain('Breakwater Gallery');
  });

  it('should include `photo_library` icon', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.material-icons').textContent).toContain('photo_library');
  });
});
