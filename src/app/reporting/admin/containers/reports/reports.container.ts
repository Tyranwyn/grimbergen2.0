import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {Observable} from "rxjs";
import {Report, ReportDto} from "../../../models/report";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports.container.html',
  styleUrls: ['./reports.container.scss']
})
export class ReportsContainer implements OnInit {
  reports$: Observable<ReportDto[]>;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reports$ = this.reportService.getReports();
  }

}
