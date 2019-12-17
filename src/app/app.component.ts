import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as UserActions from './auth/state/user/user.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Grimbergen 2.0';
  private authStateSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe(() => this.store.dispatch(UserActions.GetUser()));
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
