import { createAction, props } from '@ngrx/store';
import { UserData } from '../../user';

export const GetUserData = createAction('[UserData] Get user data', props<{uid: string}>());
export const GetUserDataSuccess = createAction('[UserData] Get user data succeeded', props<UserData>());
export const GetUserDataFail = createAction('[UserData] Get user data failed', props<Error>());
export const CreateUserData = createAction('[UserData] Creating user data', props<{uid: string}>());
export const CreateUserDataSuccess = createAction('[UserData] Creating user data was successful', props<UserData>());
export const CreateUserDataFail = createAction('[UserData] Creating user data failed', props<Error>());
export const ClearUserData = createAction('[UserData] Clearing user data');
export const UpdateUserData = createAction('[UserData] Updating user data', props<{id: string, data: Partial<UserData>}>());
export const UpdateUserDataSuccess = createAction('[UserData] Updating user data successful', props<Partial<UserData>>());
export const UpdateUserDataFail = createAction('[UserData] Updating user data failed', props<Error>());
