const ftp = require("basic-ftp");
require('dotenv').config();

const host = process.env.FTP_HOST;
const port = process.env.FTP_PORT || 21;
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const secure = false;
const override = false;
const localDir = './dist/grimpunt';
const remoteDir = process.env.FTP_BASE_DIR || '/test';

if (!localDir) {
  throw new Error('Missing localDir.');
}

if (!remoteDir) {
  throw new Error('Missing remoteDir.');
}

upload();

async function upload() {
  const client = new ftp.Client();
  // client.ftp.verbose = true;
  console.log('trying to access ftp server.');
  client.access({host, user, port, password, secure})
    .then(() => console.log('login success.'))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => client.ensureDir(remoteDir))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => console.log('clear working dir.'))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(value => {
      if (override) {
        return client.clearWorkingDir().catch(error => console.log(error));
      } else return value;
    })
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    ).then(() => console.log('upload dir from ', localDir))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => client.uploadFromDir(localDir).catch(x => console.log(x)))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => console.log('upload success.'))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => console.log('closing client'))
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    )
    .then(() => client.close())
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    );
}
