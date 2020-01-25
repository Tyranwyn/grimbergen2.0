import { CustomWebpackBrowserSchema } from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

export default (config: webpack.Configuration, options: CustomWebpackBrowserSchema) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        PRODUCTION: JSON.stringify(process.env.PRODUCTION)
      },
      'process.env.firebase': {
        API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        APP_ID: JSON.stringify(process.env.FIREBASE_APP_ID),
        MEASUREMENT_ID: JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
      },
      'process.env.collections': {
        CATEGORIES: JSON.stringify(process.env.COLLECTION_CATEGORIES),
        STATUS_UPDATES: JSON.stringify(process.env.COLLECTION_STATUS_UPDATES),
        REPORTS: JSON.stringify(process.env.COLLECTION_REPORTS),
        PAIR_REPORTS: JSON.stringify(process.env.COLLECTION_PAIR_REPORTS),
        STATUSES: JSON.stringify(process.env.COLLECTION_STATUSES),
        USER_DATA: JSON.stringify(process.env.COLLECTION_USER_DATA),
        MAIL: JSON.stringify(process.env.COLLECTION_MAIL)
      },
      'process.env.storage': {
        IMAGES: JSON.stringify(process.env.STORAGE_IMAGES),
        REPORTS: JSON.stringify(process.env.STORAGE_REPORTS),
        CATEGORIES: JSON.stringify(process.env.STORAGE_CATEGORIES)
      },
      'process.env.mailAddresses': {
        TO_DEFAULT: JSON.stringify(process.env.MAIL_TO_DEFAULT),
        FROM_DEFAULT: JSON.stringify(process.env.MAIL_FROM_DEFAULT)
      }
    })
  );
  return config;
};
