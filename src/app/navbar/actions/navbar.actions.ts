import { Action } from '@ngrx/store';

export enum NavbarActionTypes {
  LoadNavbars = '[Navbar] Load Navbars'
}

export class LoadNavbars implements Action {
  readonly type = NavbarActionTypes.LoadNavbars;
}

export type NavbarActions = LoadNavbars;
