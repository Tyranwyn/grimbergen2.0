import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { AdminGuard } from './services/admin.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([ 'login' ]);

const reportingRoutes: Routes = [
  {
    path: '',
    component: ReportingComponent,
    canActivate: [ AngularFireAuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [ AdminGuard ], canActivate: [ AdminGuard ]
      },
      {path: 'profile', component: ProfileComponent},
      {path: 'reports/:id', component: ReportDetailComponent},
      {path: 'reports', component: ReportsComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(reportingRoutes) ],
  exports: [ RouterModule ]
})
export class ReportingRoutingModule {
}
