import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {Observable} from "rxjs";
import {Category} from "../../../models/category";
import {Crud} from "../../models/crud.enum";
import {DialogData} from "../../models/dialog-data.model";

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories.container.html',
  styleUrls: ['./categories.container.scss']
})
export class CategoriesContainer implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

  crudCategory(dialogData: DialogData<Category>) {
    switch (dialogData.type) {
      case Crud.CREATE: this.categoryService.addCategory(dialogData.resource); break;
      case Crud.UPDATE: this.categoryService.updateCategory(dialogData.resource); break;
      case Crud.DELETE: this.categoryService.deleteCategory(dialogData.resource.id); break;
    }
  }
}
