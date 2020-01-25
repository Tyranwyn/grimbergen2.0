
declare var process: Process;

interface Process {
  env: Env;
}

interface Env {
  PRODUCTION: boolean;
  firebase: {
    API_KEY: string;
    AUTH_DOMAIN: string;
    DATABASE_URL: string;
    PROJECT_ID: string;
    STORAGE_BUCKET: string;
    MESSAGING_SENDER_ID: string;
    APP_ID: string;
    MEASUREMENT_ID: string;
  };
  collections: {
    CATEGORIES: string;
    STATUS_UPDATES: string;
    REPORTS: string;
    PAIR_REPORTS: string;
    STATUSES: string;
    USER_DATA: string;
    MAIL: string;
  };
  storage: {
    IMAGES: string;
    REPORTS: string;
    CATEGORIES: string;
  };
  mailAddresses: {
    TO_DEFAULT: string;
    FROM_DEFAULT: string;
  };
}

interface GlobalEnvironment {
  process: Process;
}
