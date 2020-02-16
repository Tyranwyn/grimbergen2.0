import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RequestResetPasswordDialogComponent } from './request-reset-password-dialog/request-reset-password-dialog.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [ {
  path: 'auth', component: AuthComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]
}];

@NgModule({
  declarations: [ LoginComponent, RegisterComponent, RequestResetPasswordDialogComponent, AuthComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgxAuthFirebaseUIModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexModule
  ],
  entryComponents: [ RequestResetPasswordDialogComponent ]
})
export class AuthModule {
}
