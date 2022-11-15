import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';
import {PoiService} from "../poi.service";
import {map} from "rxjs";

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      fetch({
        run: (action) => {
          return this.poiService.getAll().pipe(
            map(pois => PoiActions.loadPoiSuccess({ poi:
              pois }))
          )
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private poiService: PoiService) {}
}
