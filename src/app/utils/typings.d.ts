
declare var process: Process;

interface Process {
  env: Env;
}

interface Env {
  API_KEY: string;
  AUTH_DOMAIN: string;
  DATABASE_URL: string;
  PROJECT_ID: string;
  STORAGE_BUCKET: string;
  MESSAGING_SENDER_ID: string;
  APP_ID: string;
  MEASUREMENT_ID: string;
}

interface GlobalEnvironment {
  process: Process;
}
