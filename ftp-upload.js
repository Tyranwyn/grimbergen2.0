const ftp = require("basic-ftp");
require('dotenv').config();

const host = process.env.FTP_HOST;
const port = process.env.FTP_PORT || 21;
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const secure = false;
const override = true;
const localDir = './dist/grimbergen-app';
const remoteDir = '/';

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
    .then(() => client.ensureDir(remoteDir))
    .then(() => console.log('clear working dir.'))
    .then(value => {
      if (override) {
        return client.clearWorkingDir().catch(error => console.log(error));
      } else return value;
    }).then(() => console.log('upload dir from ', localDir))
    .then(() => client.uploadFromDir(localDir).catch(x => console.log(x)))
    .then(() => console.log('upload success.'))
    .then(() => console.log('closing client'))
    .then(() => client.close())
    .catch(() => {
        console.log(error);
        process.exit(1);
      }
    );
}
