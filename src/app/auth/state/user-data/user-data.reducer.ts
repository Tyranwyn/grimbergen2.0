import {Role, UserData} from '../../user';
import * as UserDataActions from './user-data.actions';
import {Action, createReducer, on} from '@ngrx/store';

const defaultUserData: UserData = {
  firstName: null,
  lastName: null,
  email: null,
  registrationDate: null,
  lastLogin: null,
  role: Role.USER
};

const reducer = createReducer(
  defaultUserData,
  on(UserDataActions.GetUserData, state => state),
  on(UserDataActions.GetUserDataSuccess, (state: UserData, userData: UserData) => ({ ...state, ...userData })),
  on(UserDataActions.GetUserDataFail, (state: UserData, error: Error) => ({ ...defaultUserData })),
  on(UserDataActions.CreateUserData, state => state),
  on(UserDataActions.CreateUserDataSuccess, (state: UserData, userData: UserData) => ({ ...state, ...userData })),
  on(UserDataActions.CreateUserDataFail, (state: UserData, error: Error) => ({ ...defaultUserData })),
  on(UserDataActions.ClearUserData, () => ({ ...defaultUserData })),
  on(UserDataActions.UpdateUserData, state => state),
  on(UserDataActions.UpdateUserDataSuccess, (state: UserData, partial: any) => ({ ...state, ...partial })),
  on(UserDataActions.UpdateUserDataFail, (state: UserData, error: Error) => state)
);

export function UserDataReducer(state: UserData | undefined, action: Action) {
  return reducer(state, action);
}
