import * as UserActions from './user.actions';
import { User } from '../../user';
import { Action, createReducer, on } from '@ngrx/store';

const defaultUser: User = {
  uid: null,
  displayName: 'GUEST',
  email: null,
};

const reducer = createReducer(
  defaultUser,
  on(UserActions.GetUser, (state: User) => ({ ...state, loading: true })),
  on(UserActions.Authenticated, (state: User, user: User) => ({ ...user, loading: false })),
  on(UserActions.NotAuthenticated, state => ({ ...defaultUser, loading: false })),
  on(UserActions.AuthError, (state: User, error: Error) => ({ ...state, loading: false })),
  on(UserActions.Logout, state => ({ ...defaultUser }))
);

export function UserReducer(state: User | undefined, action: Action) {
  return reducer(state, action);
}
