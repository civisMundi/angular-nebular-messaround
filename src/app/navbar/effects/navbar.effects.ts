import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NavbarActionTypes } from '../actions/navbar.actions';

@Injectable()
export class NavbarEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(NavbarActionTypes.LoadNavbars));

  constructor(private actions$: Actions) {}
}
