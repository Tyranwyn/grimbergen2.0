import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {Observable, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";
import {ReportForAdminWithoutObservablesDto} from "../../../models/report";
import {ReportMapper} from "../../../mappers/report-mapper";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports.container.html',
  styleUrls: ['./reports.container.scss']
})
export class ReportsContainer implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  reports$: Observable<ReportForAdminWithoutObservablesDto[]>;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.reports$ = this.reportService.getReportsForAdmin()
      .pipe(map(reports => reports.map(report =>
        ReportMapper.reportForAdminDtoToReportForAdminWithoutObservablesDto(report, this.subs))));

  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
