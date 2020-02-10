import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';
import { from, Observable } from 'rxjs';
import { Reference } from '@angular/fire/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private reportImgStorage: AngularFireStorageReference;

  constructor(private storage: AngularFireStorage) {
    this.reportImgStorage = storage.ref(`${environment.storage.images}/${environment.storage.reports}`);
  }

  saveReportImage(image: File): Observable<Reference> {
    return from(
      (this.reportImgStorage.child(`${Date.now().toString()}_${image.name}`) as Reference)
        .put(image)
        .then(a => a.ref)
    );
  }

  getReportImage(id: string): Reference {
    return this.reportImgStorage.child(id) as Reference;
  }
}
