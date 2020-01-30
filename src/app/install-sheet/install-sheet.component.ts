import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-install-sheet',
  templateUrl: './install-sheet.component.html',
  styleUrls: ['./install-sheet.component.scss']
})
export class InstallSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<InstallSheetComponent>) { }

  ngOnInit() {
  }

}
