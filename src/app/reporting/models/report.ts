import {DocumentReference} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import {Status} from './status';
import {Observable} from 'rxjs';
import {UserData} from "../../auth/user";
import {Category} from "./category";

export interface Report {
  id?: string;
  user: DocumentReference;
  category: DocumentReference;
  location: { address: string, mapsUrl: string, coords: firebase.firestore.GeoPoint };
  locationDescription?: string;
  picture?: string;
  note?: string;
  dateSubmitted: firebase.firestore.Timestamp;
}

export interface ReportDto {
  id?: string;
  user: Observable<UserData>;
  category: Observable<Category>;
  location: { address: string, mapsUrl: string, coords: firebase.firestore.GeoPoint };
  locationDescription?: string;
  picture?: string;
  note?: string;
  dateSubmitted: firebase.firestore.Timestamp;
}

export interface ReportInputDto {
  userId: string;
  categoryId: string;
  location: { address: string, mapsUrl: string, lat: string, long: string };
  locationDescription?: string;
  picture?: string;
  note?: string;
}

export interface ReportDtoWithCurrentStatus extends ReportDto {
  currentStatus?: Observable<Status>;
}

export interface ReportForAdminDto {
  id?: string;
  user: Observable<UserData>;
  category: Observable<Category>;
  dateSubmitted: Date;
  currentStatus?: Observable<Status>;
}

export interface ReportForAdminWithoutObservablesDto {
  id: string;
  userEmail: string;
  categoryName: string;
  dateSubmitted: string;
  currentStatusName: string;
}
