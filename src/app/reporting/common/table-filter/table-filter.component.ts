import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input()
  tableDataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(value: string) {
    this.tableDataSource.filter = value.trim().toLowerCase();
  }
}
