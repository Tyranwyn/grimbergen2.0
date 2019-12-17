import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FileUploadComponent} from './common/file-upload/file-upload.component';
import {ProgressComponent} from './common/progress/progress.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {NavigationComponent} from './common/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ReportingComponent} from './reporting.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportingRoutingModule} from './reporting-routing.module';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {CommonModule} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DeleteWarningDialogModule} from "./common/delete-warning-dialog/delete-warning-dialog.module";
import {DeleteWarningDialogComponent} from "./common/delete-warning-dialog/delete-warning-dialog.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AdminGuard} from "./services/admin.guard";

@NgModule({
  declarations: [
    HomeComponent,
    FileUploadComponent,
    ProgressComponent,
    NavigationComponent,
    ReportingComponent,
    ProfileComponent,
    ReportsComponent,
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    DeleteWarningDialogModule,
    MatAutocompleteModule,
  ],
  providers: [AngularFireAuthGuard, AdminGuard],
  entryComponents: [DeleteWarningDialogComponent]
})
export class ReportingModule {
}
