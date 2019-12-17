import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesContainer} from "./containers/categories/categories.container";
import {AdminComponent} from "./admin.component";
import {StatusesContainer} from "./containers/statuses/statuses.container";
import {ReportsContainer} from "./containers/reports/reports.container";

export const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'reports', component: ReportsContainer},
      {path: 'categories', component: CategoriesContainer},
      {path: 'statuses', component: StatusesContainer}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
