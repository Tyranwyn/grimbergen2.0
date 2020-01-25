// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: process.env.PRODUCTION || false,
  collections: {
    categories: process.env.collections.CATEGORIES,
    statusUpdates: process.env.collections.STATUS_UPDATES,
    reports: process.env.collections.REPORTS,
    pairReports: process.env.collections.PAIR_REPORTS,
    statuses: process.env.collections.STATUSES,
    userData: process.env.collections.USER_DATA,
    mail: process.env.collections.MAIL
  },
  storage: {
    images: process.env.storage.IMAGES,
    reports: process.env.storage.IMAGES,
    categories: process.env.storage.CATEGORIES
  },
  mailAddresses: {
    toDefault: process.env.mailAddresses.TO_DEFAULT,
    fromDefault: process.env.mailAddresses.FROM_DEFAULT
  },
  nomatimApi: 'https://nominatim.openstreetmap.org',
  firebaseConfig: {
    apiKey: process.env.firebase.API_KEY,
    authDomain: process.env.firebase.AUTH_DOMAIN,
    databaseURL: process.env.firebase.DATABASE_URL,
    projectId: process.env.firebase.PROJECT_ID,
    storageBucket: process.env.firebase.STORAGE_BUCKET,
    messagingSenderId: process.env.firebase.MESSAGING_SENDER_ID,
    appId: process.env.firebase.APP_ID,
    measurementId: process.env.firebase.MEASUREMENT_ID
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
