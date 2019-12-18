import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {StatusUpdate} from '../models/status-update';
import {environment} from '../../../environments/environment';
import {from, Observable, of} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {Report} from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdateService {
  private statusUpdatesCollection: AngularFirestoreCollection<StatusUpdate>;

  constructor(private afs: AngularFirestore) {
    this.statusUpdatesCollection = afs.collection(environment.collections.statusUpdates);
  }

  getStatusUpdatesByReportId(id: string): Observable<StatusUpdate[]> {
    const reportReference: DocumentReference = this.afs.collection(environment.collections.reports).doc<Report>(id).ref;
    return this.afs.collection<StatusUpdate>(
      environment.collections.statusUpdates,
      ref => ref.where('report', '==', reportReference)
        .orderBy('datumStatusChange')
    ).valueChanges({ idField: 'id' });
  }

  getLastStatusUpdateByReportId(id: string): Observable<StatusUpdate> {
    return this.getStatusUpdatesByReportId(id)
      .pipe(mergeMap(statusUpdates => of(statusUpdates[statusUpdates.length - 1])));
  }

  saveStatusUpdate(report: DocumentReference, status: DocumentReference): Observable<DocumentReference> {
    return from(this.statusUpdatesCollection.add({
      status,
      report,
      datumStatusChange: firebase.firestore.Timestamp.now()
    }));
  }

  deleteStatusUpdate(id: string): Observable<void> {
    return from(this.statusUpdatesCollection.doc(id).delete());
  }
}
