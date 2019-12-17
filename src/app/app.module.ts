import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {ReportingModule} from './reporting/reporting.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {stringify} from './utils/serializer';
import {UserEffects} from './auth/state/user/user.effects';
import {UserDataEffects} from './auth/state/user-data/user-data.effects';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    AuthModule,
    ReportingModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'Grimbergen 2.0',
      maxAge: 25,
      logOnly: environment.production,
      actionSanitizer: action => JSON.parse(stringify(action))
    }),
    EffectsModule.forRoot([AppEffects, UserEffects, UserDataEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
