import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromRoot from '../../../reducers';
import * as UserDataActions from '../user-data/user-data.actions';

import * as UserAction from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth,
              private store: Store<fromRoot.State>) {
  }

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.GetUser),
      switchMap(() => this.afAuth.authState),
      switchMap(authData => {
        if (authData) {
          this.store.dispatch(UserDataActions.GetUserData({uid: authData.uid}));
          return of(UserAction.Authenticated({
            uid: authData.uid,
            displayName: authData.displayName,
            email: authData.email,
          }));
        } else {
          return of(UserAction.NotAuthenticated());
        }
      }),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.Logout),
      switchMap(() => {
        this.store.dispatch(UserDataActions.ClearUserData());
        return of(this.afAuth.auth.signOut());
      }),
      map(authData => UserAction.NotAuthenticated()),
      catchError(err => of(UserAction.AuthError(err)))
    )
  );
}
