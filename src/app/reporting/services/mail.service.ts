import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { from, Observable } from 'rxjs';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.mailCollection = afs.collection(environment.collections.mail);
  }

  sendReportMail(mail: Mail): Observable<any> {
    return from(this.mailCollection.add(mail));
  }
}
