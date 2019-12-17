import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../auth/state/user/user.reducer';
import * as fromUserData from '../auth/state/user-data/user-data.reducer';
import { User, UserData } from '../auth/user';

export interface State {
  user: User;
  userData: UserData;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.UserReducer,
  userData: fromUserData.UserDataReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const getUserSelector = createFeatureSelector<User>('user');

export const getUserUid = createSelector(getUserSelector, state => state.uid);
export const getUserDisplayName = createSelector(getUserSelector, state => state.displayName);
export const getUserEmail = createSelector(getUserSelector, state => state.email);
export const getUserLoading = createSelector(getUserSelector, state => state.loading);
export const getUserError = createSelector(getUserSelector, state => state.error);

export const getUserDataSelector = createFeatureSelector<UserData>('userData');

export const getUserDataUid = createSelector(getUserDataSelector, userData => userData.id);
export const getUserDataFirstName = createSelector(getUserDataSelector, userData => userData.firstName);
export const getUserDataLastName = createSelector(getUserDataSelector, userData => userData.lastName);
export const getUserDataEmail = createSelector(getUserDataSelector, userData => userData.email);
export const getUserDataPhone = createSelector(getUserDataSelector, userData => userData.phone);
export const getUserDataRegistrationDate = createSelector(getUserDataSelector, userData => userData.registrationDate);
export const getUserDataLastLogin = createSelector(getUserDataSelector, userData => userData.lastLogin);
export const getUserDataRole = createSelector(getUserDataSelector, userData => userData.role);
