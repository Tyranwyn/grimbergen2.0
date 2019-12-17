import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReportDto} from '../models/report';
import {from, Observable, of} from 'rxjs';
import {StatusUpdate, StatusUpdateDto} from '../models/status-update';
import {ReportService} from '../services/report.service';
import {StatusUpdateService} from '../services/status-update.service';
import {flatMap} from 'rxjs/operators';
import {Status} from '../models/status';

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
      .pipe(
        flatMap(statusUpdates => of(this.mapStatusUpdatesToDto(statusUpdates)))
      );
  }

  private mapStatusUpdatesToDto(statusUpdates: StatusUpdate[]): StatusUpdateDto[] {
    const dtos: StatusUpdateDto[] = [];
    statusUpdates.forEach(update => {
      dtos.push({
        status: from(update.status.get().then(u => u.data() as Status)),
        datumStatusChange: update.datumStatusChange,
        note: update.note
      });
    });
    return dtos;
  }

}
