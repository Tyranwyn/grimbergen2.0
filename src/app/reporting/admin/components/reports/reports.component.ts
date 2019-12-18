import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ReportForAdminWithoutObservablesDto} from "../../containers/reports/reports.container";
import {WidthAware} from "../../../models/width-aware";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent extends WidthAware implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private _reports: MatTableDataSource<ReportForAdminWithoutObservablesDto>;
  private _columnsToDisplay = ['id', 'userEmail', 'categoryName', 'dateSubmitted', 'currentStatusName'];
  private _monbileColumnsToDisplay = ['userEmail', 'dateSubmitted', 'currentStatusName'];

  ngOnInit() {
  }

  @Input()
  set reports(reports: ReportForAdminWithoutObservablesDto[]) {
    this._reports = new MatTableDataSource(reports);
    if (reports) {
      this._reports.sort = this.sort;
    }
  }

  get reports(): ReportForAdminWithoutObservablesDto[] {
    return this._reports.data;
  }

  get columnsToDisplay() {
    if (this.isSmallScreen) {
      return this._monbileColumnsToDisplay;
    }
    return this._columnsToDisplay;
  }

}
