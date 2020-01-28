import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as UserActions from './auth/state/user/user.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { get, set } from 'idb-keyval';
import { AlertController, ToastController } from '@ionic/angular';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GrimPunt';
  private authStateSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private afAuth: AngularFireAuth,
              private toastController: ToastController,
              private swUpdate: SwUpdate,
              private alertController: AlertController) {}

  ngOnInit(): void {
    this.showIosInstallBanner()
      .catch(err => console.log(err));
    this.authStateSubscription = this.afAuth.authState.subscribe(() => this.store.dispatch(UserActions.GetUser()));
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  async showIosInstallBanner() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    // @ts-ignore
    const isInStandaloneMode = () => ('standalone' in window.navigator) && window.navigator.standalone;

    // Show the banner once
    const isBannerShown = await get('isBannerShown');

    // Checks if it should display install popup notification
    if (isIos() && !isInStandaloneMode() && isBannerShown === undefined) {
      const toast = await this.toastController.create({
        showCloseButton: true,
        closeButtonText: 'OK',
        cssClass: 'custom-toast',
        position: 'bottom',
        message: `To install the app, tap "Share" icon below and select "Add to Home Screen".`,
      });
      toast.present();
      set('isBannerShown', true);
    }
  }

  private updater() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(async () => {
        const alert = await this.alertController.create({
          header: `App update!`,
          message: `Newer version of the app is available. It's a quick refresh away!`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            }, {
              text: 'Refresh',
              handler: () => {
                window.location.reload();
              },
            },
          ],
        });

        await alert.present();
      });
    }
  }
}
