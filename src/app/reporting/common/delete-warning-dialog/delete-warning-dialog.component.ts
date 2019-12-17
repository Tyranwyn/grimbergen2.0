import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoriesComponent} from "../../admin/components/categories/categories.component";

export interface DeleteDialogWarningData {
  name: string;
  resource: any;
}

@Component({
  selector: 'app-delete-dialog-warning',
  templateUrl: './delete-warning-dialog.component.html',
  styleUrls: ['./delete-warning-dialog.component.scss']
})
export class DeleteWarningDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CategoriesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DeleteDialogWarningData) { }

  ngOnInit() {
  }

}
