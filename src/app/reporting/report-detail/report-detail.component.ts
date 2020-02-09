import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDto } from '../models/report';
import { Observable } from 'rxjs';
import { StatusUpdateDto } from '../models/status-update';
import { ReportService } from '../services/report.service';
import { StatusUpdateService } from '../services/status-update.service';
import { map } from 'rxjs/operators';
import { StatusUpdateMapper } from '../mappers/status-update-mapper';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: [ './report-detail.component.scss' ]
})
export class ReportDetailComponent implements OnInit {
  reportId: string;
  report$: Observable<ReportDto>;
  statusUpdates$: Observable<StatusUpdateDto[]>;

  constructor(private route: ActivatedRoute,
              private reportService: ReportService,
              private statusUpdateService: StatusUpdateService) {
    this.reportId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.report$ = this.reportService.getReportById(this.reportId);
    this.statusUpdates$ = this.statusUpdateService.getStatusUpdatesByReportId(this.reportId)
      .pipe(map(statusUpdates => StatusUpdateMapper.mapStatusUpdatesToDto(statusUpdates)));
  }

}
