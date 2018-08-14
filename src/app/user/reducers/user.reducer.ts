import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { AccessToken } from '../../../interfaces/AccessToken.interface';

export interface UserState {
    isLoggedIn: boolean;
    accessToken: AccessToken;
    nickname: string;
    isFetching: boolean;
}

export const initialUserState: UserState = {
    isLoggedIn: false,
    accessToken: null,
    nickname: null,
    isFetching: false,
};

export function userReducer(state = initialUserState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.LoadUsers:
        return state;
        default:
        return state;
    }
}
