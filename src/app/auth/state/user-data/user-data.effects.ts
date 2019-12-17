import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserDataService } from '../../services/user-data.service';
import { of } from 'rxjs';
import * as UserDataActions from './user-data.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class UserDataEffects {
  constructor(private actions$: Actions,
              private userDataService: UserDataService) {
  }

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataActions.GetUserData),
      switchMap(action => this.userDataService.getUserData(action.uid)
        .pipe(
          map(user => {
            if (user) {
              return UserDataActions.GetUserDataSuccess(user);
            } else {
              return UserDataActions.CreateUserData({uid: action.uid});
            }
          }),
          catchError(err => of(UserDataActions.GetUserDataFail(err)))
        )
      )
    )
  );

  createUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataActions.CreateUserData),
      mergeMap(action => this.userDataService.createUserData(action.uid)
        .pipe(
          map(userData => UserDataActions.CreateUserDataSuccess(userData)),
          catchError(err => of(UserDataActions.CreateUserDataFail(err)))
        )
      )
    )
  );

  updateUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDataActions.UpdateUserData),
      switchMap(action => this.userDataService.updateUser(action.id, action.data)
        .pipe(
          map(() => UserDataActions.UpdateUserDataSuccess(action.data)),
          catchError(err => of(UserDataActions.UpdateUserDataFail(err)))
        )
      )
    )
  );
}
