import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule, MatButtonModule, MatListModule } from '@angular/material';
import { InstallSheetComponent } from './install-sheet.component';

@NgModule({
  declarations: [ InstallSheetComponent ],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        MatListModule,
        MatButtonModule
    ],
  entryComponents: [ InstallSheetComponent ]
})
export class InstallSheetModule {
}
