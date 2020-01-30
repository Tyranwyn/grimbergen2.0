import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as firebase from 'firebase/app';
import * as fromRoot from '../../reducers';
import * as UserDataActions from '../state/user-data/user-data.actions';
import { MatDialog } from '@angular/material';
import { RequestResetPasswordDialogComponent } from '../request-reset-password-dialog/request-reset-password-dialog.component';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers: AuthProvider[] = [
    AuthProvider.Facebook,
    AuthProvider.Google,
    AuthProvider.Twitter,
    AuthProvider.EmailAndPassword
  ];
  email: string;

  constructor(private router: Router,
              private store: Store<fromRoot.State>,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  onSuccess(event: any) {
    if (event.uid) {
      this.store.dispatch(UserDataActions.UpdateUserData({ id: event.uid, data: {lastLogin: firebase.firestore.Timestamp.now() }}));
    }
    this.router.navigate(['']);
  }

  requestResetPassword() {
    this.dialog.open(RequestResetPasswordDialogComponent, {
      width: '30em',
      data: {email: this.email}
    });
  }
}
