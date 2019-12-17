const ftp = require("basic-ftp");
require('dotenv').config();

const host = process.env.FTP_HOST;
const port = process.env.FTP_PORT || 21;
const user = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const secure = false;
const override =  true;
const localDir = './dist/grimbergen-app';
const remoteDir = '/';

console.log(localDir);
if (!localDir) {
  throw new Error('Missing localDir.');
}

if (!remoteDir) {
  throw new Error('Missing remoteDir.');
}

upload();

async function upload() {
  let connected = false;
  const client = new ftp.Client();

  try {
    console.log('trying to access ftp server.');
    await client.access({
      host: host,
      user: user,
      port: port,
      password: password,
      secure: secure
    });
    connected = true;
    console.log('login success.');
    console.log('ensure remote dir ', remoteDir);
    await client.ensureDir(remoteDir);

    if (override) {
      console.log('clear working dir.');
      await client.clearWorkingDir();
    }

    console.log('upload dir from ', localDir);
    await client.uploadFromDir(localDir);
    console.log('upload success.');

    client.close();
    // resolve();
  } catch (error) {
    console.log(error);
  }
  if (connected) {
    client.close();
  }
}
