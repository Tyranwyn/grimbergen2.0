import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {Category} from "../../../models/category";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {CategoryDialogComponent} from "../category-dialog/category-dialog.component";
import {Crud} from "../../models/crud.enum";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";
import {
  DeleteWarningDialogComponent,
  DeleteDialogWarningData
} from "../../../common/delete-warning-dialog/delete-warning-dialog.component";
import {DialogData} from "../../models/dialog-data.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class CategoriesComponent implements OnDestroy {

  private subsriptions: Subscription[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  _categories: MatTableDataSource<Category>;
  columnsToDisplay = ['name', 'note'];
  expandedElement: Category | null;

  types = Crud;

  constructor(public dialog: MatDialog) {
  }

  @Input()
  set categories(categories: Category[]) {
    this._categories = new MatTableDataSource(categories);
    if (categories) {
      this._categories.sort = this.sort;
    }
  }

  @Output()
  categoryEventEmitter = new EventEmitter<DialogData<Category>>();

  openDialog(type: Crud, category?: Category) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '20em',
      data: {type, resource: category} as DialogData<Category>
    });

    this.subsriptions.push(dialogRef.afterClosed()
      .pipe(
        filter(result => result)
      ).subscribe(result => this.categoryEventEmitter.emit(result)));
  }

  deleteCategory(category: Category) {
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      width: '20em',
      role: "alertdialog",
      data: {
        name: category.name,
        resource: category
      } as DeleteDialogWarningData
    });

    this.subsriptions.push(dialogRef.afterClosed()
      .pipe(
        filter(result => result)
      ).subscribe((result: Category) =>
        this.categoryEventEmitter.emit({type: Crud.DELETE, resource: result})));
  }

  ngOnDestroy(): void {
    this.subsriptions.forEach(sub => sub.unsubscribe());
  }
}
