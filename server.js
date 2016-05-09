const cron = require('node-cron');
const config = require('./config');

let pingTime = `* */${config.pingMinutes} 6-0 * * *`;

cron.schedule(pingTime, () => {
  console.log('running a task every minute');
});