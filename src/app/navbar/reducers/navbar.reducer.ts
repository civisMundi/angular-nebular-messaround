import { Action } from '@ngrx/store';
import { NavbarActions, NavbarActionTypes } from '../actions/navbar.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: NavbarActions): State {
  switch (action.type) {

    case NavbarActionTypes.LoadNavbars:
      return state;


    default:
      return state;
  }
}
