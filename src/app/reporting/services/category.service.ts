import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Category } from '../models/category';
import { environment } from '../../../environments/environment';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) {
    this.categoryCollection = afs.collection<Category>(environment.collections.categories);
  }

  getCategories(): Observable<Category[]> {
    return this.categoryCollection.valueChanges({idField: 'id'});
  }

  getCategoryById(id: string): Observable<Category> {
    return this.categoryCollection.doc<Category>(id).valueChanges();
  }

  addCategory(category: Category): Observable<DocumentReference> {
    return from(this.categoryCollection.add(category));
  }

  updateCategory(category: Category): Observable<void> {
    let afd = this.categoryCollection.doc<Category>(category.id);
    delete category.id;
    return from(afd.update(category));
  }

  deleteCategory(id: string): Observable<void> {
    return from(this.categoryCollection.doc<Category>(id).delete());
  }
}
