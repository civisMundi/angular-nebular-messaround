import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserState, userReducer } from '../user/reducers/user.reducer';
import * as fromNavbar from '../navbar/reducers/navbar.reducer';

export interface State {
    user: UserState;
    navbar: fromNavbar.State;
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer,
    navbar: fromNavbar.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
