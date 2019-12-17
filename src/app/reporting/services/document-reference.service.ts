import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/firestore";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentReferenceService {

  constructor(private afs: AngularFirestore) { }

  getCategoryReference(id: string): DocumentReference {
    return this.afs.collection(environment.collections.categories).doc(id).ref;
  }

  getReportReference(id: string): DocumentReference {
    return this.afs.collection(environment.collections.reports).doc(id).ref;
  }

  getStatusReference(id: string): DocumentReference {
    return this.afs.collection(environment.collections.statuses).doc(id).ref;
  }

  getStatusUpdateReference(id: string): DocumentReference {
    return this.afs.collection(environment.collections.statusUpdates).doc(id).ref;
  }

  getUserDataReference(id: string): DocumentReference {
    return this.afs.collection(environment.collections.userData).doc(id).ref;
  }
}
