import {NgModule} from '@angular/core';
import {DeleteWarningDialogComponent} from './delete-warning-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [DeleteWarningDialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: [DeleteWarningDialogComponent]
})
export class DeleteWarningDialogModule { }
