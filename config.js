let config = {};

config.pingMinutes = process.env.PING_MINUTES || 30;
config.pingStartTime = process.env.PING_START_TIME || 6;
config.pingEndTime = process.env.PING_END_TIME || 24;

module.exports = config;
