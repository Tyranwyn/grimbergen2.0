import {Component, OnInit} from '@angular/core';
import {ReportService} from '../services/report.service';
import {ReportDtoWithCurrentStatus} from '../models/report';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {switchMap} from 'rxjs/operators';
import {nonNull} from '../../utils/custom-rxjs-pipes';
import {StatusUpdateService} from '../services/status-update.service';
import {StatusService} from '../services/status.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: [ './reports.component.scss' ]
})
export class ReportsComponent implements OnInit {
  reports$: Observable<ReportDtoWithCurrentStatus[]>;

  constructor(private reportService: ReportService,
              private statusUpdateService: StatusUpdateService,
              private statusService: StatusService,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.reports$ = this.store.select(fromRoot.getUserUid)
      .pipe(
        nonNull(),
        switchMap(uid => this.reportService.getReportsByUserIdWithCurrentStatus(uid))
      );
  }
}
