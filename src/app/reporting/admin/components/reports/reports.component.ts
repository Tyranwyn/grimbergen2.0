import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {WidthAware} from "../../../models/width-aware";
import {ReportForAdminWithoutObservablesDto} from "../../../models/report";
import {StatusUpdatesDialogComponent} from "../status-updates-dialog/status-updates-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent extends WidthAware implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private _reports: MatTableDataSource<ReportForAdminWithoutObservablesDto>;
  private _columnsToDisplay = ['id', 'userEmail', 'categoryName', 'dateSubmitted', 'currentStatusName'];
  private _mobileColumnsToDisplay = ['userEmail', 'dateSubmitted', 'currentStatusName'];

  constructor(private dialog: MatDialog) {
    super();
  }


  ngOnInit() {
  }

  @Input()
  set reports(reports: ReportForAdminWithoutObservablesDto[]) {
    this._reports = new MatTableDataSource(reports);
    if (reports) {
      this._reports.sort = this.sort;
    }
  }

  openStatusUpdateDialog(reportId: string) {
    this.dialog.open(StatusUpdatesDialogComponent, {
      width: '40em',
      data: {reportId}
    });
  }

  get reports(): ReportForAdminWithoutObservablesDto[] {
    return this._reports.data;
  }

  get columnsToDisplay() {
    if (this.isSmallScreen) {
      return this._mobileColumnsToDisplay;
    }
    return this._columnsToDisplay;
  }

}
