const cron = require('node-cron');
const PING_TIME = process.env.PING_TIME || 30;


let pingTime = `* */${PING_TIME} * * * *`;

cron.schedule(pingTime, () => {
  console.log('running a task every minute');
});