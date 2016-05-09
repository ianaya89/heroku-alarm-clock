# heroku-alarm-clock
:clock9: cron node app to prevent heroku apps from sleeping.

### How it works?
Simple: any X minutes a cron job will ping all the url's (heroku apps) you have configured. The job will also be schedule to be executed any hour/s you want. Notice that free heroku apps should be asleep at least 6 hours per day.

### Pre Requisites
1. [nodejs](http://nodejs.org)
2. [redis](http://redis.io/). 

*I am using the free online subscription of [redislab](https://redislabs.com)*

### Install
1. Clone or download the repo.
2. Open a terminal and locate the repo directory.
3. Run: `$ npm i`

### Set Up
You need to run the application with these environment variables:
  ```
  PING_MINUTES=minutes
  PING_HOURS=hours
  PING_URLS=url1;url2;url3
  REDIS_URL=redisUrl
  ```
The app is using [dotenv](https://www.npmjs.com/package/dotenv) nodejs module to emulate environment variables. 
You can create a `.env` file at the root of the repo and put all the settings there (check the `sample.env` demo file).

### Run It
1. Open a terminal and locate the repo directory.
2. Run: `$ npm start`