// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  collections: {
    categories: 'categories-test',
    statusUpdates: 'status-updates-test',
    reports: 'reports-test',
    pairReports: 'pair-reports-test',
    statuses: 'statuses-test',
    userData: 'users-data-test',
    mail: 'mail'
  },
  storage: {
    images: 'images-test',
    reports: 'reports',
    categories: 'categories'
  },
  mailAddresses: {
    toDefault: 'sammi.fux@gmail.com',
    fromDefault: 'grimbergen.app@gmail.com',
  },
  nomatimApi: 'https://nominatim.openstreetmap.org',
  firebaseConfig: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
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
