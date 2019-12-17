import { DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Status } from './status';
import { Observable } from 'rxjs';

export interface StatusUpdate {
  id?: string;
  report: DocumentReference;
  status: DocumentReference;
  datumStatusChange: firebase.firestore.Timestamp;
  note?: string;
}

export interface StatusUpdateDto {
  status: Observable<Status>;
  datumStatusChange: firebase.firestore.Timestamp;
  note?: string;
}
