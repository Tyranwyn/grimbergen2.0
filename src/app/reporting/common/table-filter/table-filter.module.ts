import {NgModule} from '@angular/core';
import {TableFilterComponent} from "./table-filter.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [TableFilterComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [TableFilterComponent]
})
export class TableFilterModule { }
