import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RequestResetPasswordDialogComponent } from './request-reset-password-dialog/request-reset-password-dialog.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [ LoginComponent, RegisterComponent, RequestResetPasswordDialogComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgxAuthFirebaseUIModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  entryComponents: [ RequestResetPasswordDialogComponent ]
})
export class AuthModule {
}
