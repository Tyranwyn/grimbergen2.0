import {Component, Inject, OnInit} from '@angular/core';
import {Crud} from "../../models/crud.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Status} from "../../../models/status";
import {DialogData} from "../../models/dialog-data.model";

@Component({
  selector: 'app-statuses-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss']
})
export class StatusDialogComponent implements OnInit {

  types = Crud;

  formGroup: FormGroup  = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    note: '',
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData<Status>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeDataToUpdate();
  }

  private initializeDataToUpdate() {
    if (this.data.type === Crud.UPDATE) {
      this.formGroup.get('id').disable();
      this.formGroup.patchValue({
        id: this.data.resource.id.toUpperCase(),
        name: this.data.resource.name,
        note: this.data.resource.note,
      })
    }
  }

  idToUppercase() {
    this.id.setValue((this.id.value as string).toUpperCase());
  }

  get id(): FormControl {
    return this.formGroup.get('id') as FormControl;
  }

}
