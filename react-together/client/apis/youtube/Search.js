'use strict';

const {google} = require('googleapis');
const APIClient = require('./APIClient');

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: APIClient.oAuth2Client
});

// a very simple example of searching for youtube videos
function runSamples () {
  youtube.search.list({
    part: 'id,snippet',
    q: 'Node.js on Google Cloud'
  }, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    process.exit();
  });
}

const scopes = [
  'https://www.googleapis.com/auth/youtube'
];

APIClient.authenticate(scopes, err => {
  if (err) {
    throw err;
  }
  runSamples();
});