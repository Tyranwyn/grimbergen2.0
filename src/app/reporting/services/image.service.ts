import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';
import { from, Observable } from 'rxjs';
import { Reference } from '@angular/fire/storage/interfaces';
import { readAndCompressImage } from 'browser-image-resizer';
import { map, mergeMap } from 'rxjs/operators';

const config = {
  quality: 0.7,
  maxWidth: 1000,
  maxHeight: 1000,
  autoRotate: true,
  debug: false
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private reportImgStorage: AngularFireStorageReference;

  constructor(private storage: AngularFireStorage) {
    this.reportImgStorage = storage.ref(`${environment.storage.images}/${environment.storage.reports}`);
  }

  saveReportImage(image: File): Observable<Reference> {
    return from(readAndCompressImage(image, config))
      .pipe(
        mergeMap((resizedImage: File) => (this.reportImgStorage.child(`${Date.now().toString()}_${image.name}`) as Reference)
          .put(resizedImage)),
        map(a => a.ref)
      );
  }

  getReportImage(id: string): Reference {
    return this.reportImgStorage.child(id) as Reference;
  }
}
