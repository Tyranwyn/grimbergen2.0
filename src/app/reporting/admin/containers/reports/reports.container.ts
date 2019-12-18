import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {Observable} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports.container.html',
  styleUrls: ['./reports.container.scss']
})
export class ReportsContainer implements OnInit {
  reports$: Observable<ReportForAdminWithoutObservablesDto[]>;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reports$ = this.reportService.getReportsForAdmin()
      .pipe(map(reports => reports.map(report => {
        let newReport = { id: report.id, dateSubmitted: report.dateSubmitted };
        report.user.pipe(take(1)).subscribe(user => newReport['userEmail'] = user.email);
        report.currentStatus.pipe(take(1)).subscribe(status => newReport['currentStatusName'] = status.name);
        report.category.pipe(take(1)).subscribe(category => newReport['categoryName'] = category.name);
        return newReport as ReportForAdminWithoutObservablesDto;
      })));
  }

}

export interface ReportForAdminWithoutObservablesDto {
  id: string;
  userEmail: string;
  categoryName: string;
  dateSubmitted: Date;
  currentStatusName: string;
}
