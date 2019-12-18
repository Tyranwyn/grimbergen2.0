import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {Observable} from "rxjs";
import {map, take} from "rxjs/operators";
import {ReportForAdminWithoutObservablesDto} from "../../../models/report";
import {ReportMapper} from "../../../mappers/report-mapper";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports.container.html',
  styleUrls: ['./reports.container.scss']
})
export class ReportsContainer implements OnInit {
  reports$: Observable<ReportForAdminWithoutObservablesDto[]>;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.reports$ = this.reportService.getReportsForAdmin()
      .pipe(map(reports => reports.map(report =>
        ReportMapper.reportForAdminDtoToReportForAdminWithoutObservablesDto(report))));

  }
}
