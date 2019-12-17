import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../auth/services/user-data.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as UserDataActions from '../../auth/state/user-data/user-data.actions';
import { Observable, Subscription } from 'rxjs';
import { UserData } from '../../auth/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  currentUid: string;
  loginEmail$: Observable<string>;
  userDataForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userDataService: UserDataService,
              private store: Store<fromRoot.State>) {
    this.subscriptions.push(store.select(fromRoot.getUserUid)
      .subscribe(uid => this.currentUid = uid));
    this.loginEmail$ = store.select(fromRoot.getUserEmail);
  }

  ngOnInit() {
    this.initUserDataForm();
    this.subscriptions.push(this.store.select(fromRoot.getUserDataSelector)
      .subscribe(userData => this.mapUserDataToForm(userData)));
  }

  private initUserDataForm() {
    this.userDataForm = this.fb.group({
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      phone: [ '' ]
    });
  }

  private mapUserDataToForm(userData: UserData) {
    this.firstName.setValue(userData.firstName);
    this.lastName.setValue(userData.lastName);
    this.email.setValue(userData.email);
    this.phone.setValue(userData.phone);
  }

  updateUserData() {
    this.store.dispatch(UserDataActions.UpdateUserData({id: this.currentUid, data: this.userDataForm.getRawValue()}));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get firstName(): FormControl {
    return this.userDataForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.userDataForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.userDataForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.userDataForm.get('phone') as FormControl;
  }
}
