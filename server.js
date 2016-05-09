require('dotenv').load();

const request = require('request');
const cron = require('node-cron');
const config = require('./config');

let pingTime = `*/${config.pingMinutes} 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * *`;

cron.schedule(pingTime, () => {
  console.log('[info] starting apps ping...')
  pingHerokuApps(config.pingUrls);
});

function pingHerokuApp(url) {
  if (url) {
    console.log(`[info] ping to ${url}`);
    request(url, (error, response, body) => {
      console.log(`[info] status: ${response.statusCode}`);
      if (error) {
        return console.log(`[error] error: ${error}`);
      }
    });
  }
}

function pingHerokuApps(urls) {
  if (urls) {
    urls.forEach((url) => pingHerokuApp(url));
  }
}