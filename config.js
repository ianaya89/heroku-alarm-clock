let config = {};
console.log(USER_ID);

config.pingMinutes = process.env.PING_MINUTES || 30;
config.pingHours = process.env.PING_HOURS || '6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
config.pingUrls = process.env.PING_URLS ? process.env.PING_URLS.split(',') : [];
config.redisUrl = process.env.REDIS_URL;
config.port = process.env.PORT || 3000;

module.exports = config;
