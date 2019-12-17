import {Injectable, OnDestroy} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Role, UserData} from '../user';
import {environment} from '../../../environments/environment';
import {from, Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnDestroy {
  private userDataCollection: AngularFirestoreCollection;
  private currentDisplayName: string;
  private currentEmail: string;

  private displayNameSubscription: Subscription;
  private emailSubscription: Subscription;

  constructor(private afs: AngularFirestore,
              private store: Store<fromRoot.State>) {
    this.userDataCollection = afs.collection<UserData>(environment.collections.userData);
    this.displayNameSubscription = store.select(fromRoot.getUserDisplayName)
      .subscribe(displayName => this.currentDisplayName = displayName);
    this.emailSubscription = store.select(fromRoot.getUserEmail)
      .subscribe(email => this.currentEmail = email);
  }

  getUserData(uid: string): Observable<UserData> {
    return this.userDataCollection.doc<UserData>(uid).valueChanges();
  }

  updateUser(id: string, data: Partial<UserData>) {
    return from(this.userDataCollection.doc<UserData>(id).update(data));
  }

  createUserData(uid: string): Observable<UserData> {
    const date = firebase.firestore.Timestamp.now();
    const name = this.splitDisplayNameIntoFirstAndLastName(this.currentDisplayName);
    const newUser: UserData = {
      firstName: name[0],
      lastName: name[1],
      email: this.currentEmail,
      lastLogin: date,
      registrationDate: date,
      role: Role.USER
    };
    return from(
      this.userDataCollection.doc<UserData>(uid)
        .set(newUser)
        .then(() => newUser)
    );
  }

  ngOnDestroy(): void {
    this.displayNameSubscription.unsubscribe();
    this.emailSubscription.unsubscribe();
  }

  private splitDisplayNameIntoFirstAndLastName(displayName: string): string[] {
    const splittedName = displayName.split(' ');
    const firstName = splittedName[0];
    let lastName = '';
    for (let i = 1; i < splittedName.length; i++) {
      lastName += splittedName[i];
      if (i !== splittedName.length - 1) {
        lastName += ' ';
      }
    }
    return [ firstName, lastName ];
  }
}
