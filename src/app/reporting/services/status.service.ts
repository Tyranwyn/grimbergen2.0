import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {environment} from '../../../environments/environment';
import {Status} from '../models/status';
import {from, Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusCollection: AngularFirestoreCollection<Status>;

  constructor(private afs: AngularFirestore) {
    this.statusCollection = afs.collection<Status>(environment.collections.statuses);
  }

  getStatuses(): Observable<Status[]> {
    return this.statusCollection.valueChanges({ idField: 'id' });
  }

  addStatus(status: Status): Observable<void> {
    const afd = this.statusCollection.doc<Status>(status.id);
    delete status.id;
    return from(afd.set(status));
  }

  updateStatus(status: Status): Observable<void> {
    const afd = this.statusCollection.doc<Status>(status.id);
    delete status.id;
    return from(afd.update(status));
  }

  deleteStatus(id: string): Observable<void> {
    return from(this.statusCollection.doc<Status>(id).delete())
      .pipe(tap(() => console.log('Implement deleting status updates with this status')));
  }
}
