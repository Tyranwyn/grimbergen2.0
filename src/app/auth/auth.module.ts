import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [ LoginComponent, RegisterComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgxAuthFirebaseUIModule
  ]
})
export class AuthModule {
}
