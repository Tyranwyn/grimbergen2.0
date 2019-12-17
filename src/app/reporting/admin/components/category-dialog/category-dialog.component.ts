import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Crud} from "../../models/crud.enum";
import {Category} from "../../../models/category";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DialogData} from "../../models/dialog-data.model";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {
  types = Crud;

  formGroup: FormGroup  = this.fb.group({
    name: ['', Validators.required],
    note: '',
    picture: ''
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData<Category>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeDataToUpdate();
  }

  private initializeDataToUpdate() {
    if (this.data.type === Crud.UPDATE) {
      this.formGroup.addControl('id', new FormControl(this.data.resource.id));
      this.formGroup.patchValue({
        name: this.data.resource.name,
        note: this.data.resource.note,
        picture: this.data.resource.picture
      })
    }
  }
}
