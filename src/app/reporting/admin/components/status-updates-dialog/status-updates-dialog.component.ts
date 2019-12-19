import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StatusUpdateService} from "../../../services/status-update.service";
import {StatusService} from "../../../services/status.service";
import {EMPTY, Observable, of} from "rxjs";
import {Status} from "../../../models/status";
import {StatusUpdateDto} from "../../../models/status-update";
import {catchError, filter, map, take} from "rxjs/operators";
import {StatusUpdateMapper} from "../../../mappers/status-update-mapper";
import {
  DeleteDialogWarningData,
  DeleteWarningDialogComponent
} from "../../../common/delete-warning-dialog/delete-warning-dialog.component";
import {Category} from "../../../models/category";
import {FormControl} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-status-updates-dialog',
  templateUrl: './status-updates-dialog.component.html',
  styleUrls: ['./status-updates-dialog.component.scss']
})
export class StatusUpdatesDialogComponent implements OnInit {
  statuses$: Observable<Status[]>;
  statusUpdates$: Observable<StatusUpdateDto[]>;
  selectedStatusFormControl = new FormControl('');
  loading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { reportId: string },
              private statusUpdateService: StatusUpdateService,
              private statusService: StatusService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.statusUpdates$ = this.statusUpdateService.getStatusUpdatesByReportId(this.data.reportId)
      .pipe(map(updates => StatusUpdateMapper.mapStatusUpdatesToDto(updates)));
    this.statuses$ = this.statusService.getStatuses();
  }

  deleteUpdate(status: Status, statusUpdate: StatusUpdateDto) {
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      width: '20em',
      role: "alertdialog",
      data: {
        name: status.name,
        resource: statusUpdate
      } as DeleteDialogWarningData
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(result => result)
      ).subscribe((result: Category) => this.statusUpdateService.deleteStatusUpdate(result.id));
  }

  updateStatus() {
    this.statusUpdateService.saveStatusUpdate(this.selectedStatusFormControl.value, this.data.reportId)
      .pipe(take(1), catchError(err => EMPTY))
      .subscribe(result => {
        if (result) {
          this.snackBar.open('Status geüpdatet', 'X', { duration: 2000 });
          this.selectedStatusFormControl.reset();
        } else {
          this.snackBar.open('Er ging iets verkeerd, probeer opnieuw later', 'X', { duration: 2000 });
        }
      });
  }

}
