import * as firebase from 'firebase/app';

export interface User {
  uid: string;
  displayName: string;
  email: string;
  loading?: boolean;
  error?: string;
}

export interface UserData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  registrationDate: firebase.firestore.Timestamp;
  lastLogin: firebase.firestore.Timestamp;
  role: Role;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}
