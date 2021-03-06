'use strict';

require('dotenv').load();

const request = require('request');
const cron = require('node-cron');
const config = require('./config');

const express = require('express');
const app = express();

const redis = require('redis');
const redisClient = redis.createClient(config.redisUrl);

let pingTime = `*/${config.pingMinutes} ${config.pingHours} * * *`;
let lastPing;

redisClient.on('error', (err) => console.log(`[error] ${err}`));
redisClient.on('connect', (msg) => console.log(`[info] redis client connected`));

cron.schedule(pingTime, () => {
  console.log('[info] starting apps ping...')
  lastPing = new Date();
  pingHerokuApps(config.pingUrls);
});

function pingHerokuApp(url) {
  if (url) {
    console.log(`[info] ping to ${url}`);
    
    request(url, (error, response, body) => {
      redisClient.set(url, JSON.stringify({
        statusCode: response.statusCode,
        date: new Date()
      }));

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

function getLastPings(urls, fn) {
  var counter = urls.length;
  var results = [];

  var callback = function (err, res, url) {
    results.push({ 
        url: url,
        response: JSON.parse(res) || err
    });      

    counter --;
    if (counter === 0) {
      fn(results);
    }
  }

  urls.forEach((url) => {
    redisClient.get(url, (err, res) => callback(err, res, url));
  });
}

app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function (req, res) {
  getLastPings(config.pingUrls, function(results) {
    res.render('index', {
      results: results,
      lastPing: lastPing
    });
  });
});

app.listen(config.port, function () {
  console.log(`[info] running web server at: ${config.port}`);
});
