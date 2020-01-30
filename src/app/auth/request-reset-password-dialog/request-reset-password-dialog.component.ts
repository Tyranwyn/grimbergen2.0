import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../login/login.component';
import { FormControl, Validators } from '@angular/forms';
import { AuthProcessService } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-request-reset-password-dialog',
  templateUrl: './request-reset-password-dialog.component.html',
  styleUrls: [ './request-reset-password-dialog.component.scss' ]
})
export class RequestResetPasswordDialogComponent implements OnInit {

  formControl = new FormControl('', {validators: [Validators.required, Validators.email]});
  isLoading: boolean;
  message = '';

  constructor(public dialogRef: MatDialogRef<RequestResetPasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private auth: AuthProcessService) {
  }

  ngOnInit() {
    this.formControl.setValue(this.data.email);
  }

  request() {
    this.isLoading = true;
    this.auth.resetPassword(this.formControl.value)
      .then(value => {
        this.isLoading = false;
        this.message = 'Bekijk uw inbox om uw paswoord te resetten. Let op: De mail kan zich in de spam folder bevinden.';
      });
  }
}
