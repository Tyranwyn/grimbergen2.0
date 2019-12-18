import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ReportForAdminWithoutObservablesDto} from "../../containers/reports/reports.container";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private _reports: MatTableDataSource<ReportForAdminWithoutObservablesDto>;
  private columnsToDisplay = ['id', 'userEmail', 'categoryName', 'dateSubmitted', 'currentStatusName'];

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set reports(reports: ReportForAdminWithoutObservablesDto[]) {
    this._reports = new MatTableDataSource(reports);
    this._reports.sortingDataAccessor = this.sortingDataAccessor;
    if (reports) {
      this._reports.sort = this.sort;
    }
  }

  get reports(): ReportForAdminWithoutObservablesDto[] {
    return this._reports.data;
  }

  private sortingDataAccessor(item, property) {
    if (property.includes('.')) {
      return property.split('.')
        .reduce((object, key) => object[key], item);
    }
    return item[property];
  }

}
