import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from "./admin.component";
import {MatTabsModule} from "@angular/material/tabs";
import {AdminRoutingModule} from "./admin-routing.module";
import {CategoriesContainer} from "./containers/categories/categories.container";
import {CategoriesComponent} from './components/categories/categories.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TableFilterModule} from "../common/table-filter/table-filter.module";
import {MatSortModule} from "@angular/material/sort";
import {CategoryDialogComponent} from './components/category-dialog/category-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {DeleteWarningDialogModule} from "../common/delete-warning-dialog/delete-warning-dialog.module";
import {MatIconModule} from "@angular/material/icon";
import {StatusesContainer} from './containers/statuses/statuses.container';
import {StatusesComponent} from './components/statuses/statuses.component';
import {StatusDialogComponent} from './components/status-dialog/status-dialog.component';
import {ReportsContainer} from './containers/reports/reports.container';
import {ReportsComponent} from './components/reports/reports.component';
import {StatusUpdatesDialogComponent} from './components/status-updates-dialog/status-updates-dialog.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AdminComponent,
    CategoriesContainer,
    CategoriesComponent,
    CategoryDialogComponent,
    StatusesContainer,
    StatusesComponent,
    StatusDialogComponent,
    ReportsContainer,
    ReportsComponent,
    StatusUpdatesDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    TableFilterModule,
    MatSortModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    DeleteWarningDialogModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  entryComponents: [CategoryDialogComponent, StatusDialogComponent, StatusUpdatesDialogComponent]
})
export class AdminModule {
}
