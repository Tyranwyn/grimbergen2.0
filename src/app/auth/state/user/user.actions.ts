import { createAction, props } from '@ngrx/store';
import { User } from '../../user';

export const GetUser = createAction('[Auth] Get user');
export const Authenticated = createAction('[Auth] Authenticated', props<User>());
export const NotAuthenticated = createAction('[Auth] Not authenticated');
export const Logout = createAction('[Auth] Logout');
export const AuthError = createAction('[Auth] Error', props<Error>());

