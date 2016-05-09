# heroku-alarm-clock
:clock9: cron node app to prevent heroku apps from sleeping.

### How it works?
Simple: any X minutes a cron job will ping all the url's (heroku apps) you have configured. The job will also be schedule to be executed any hour/s you want. Notice that free heroku apps should be asleep at least 6 hours per day.

### Pre Requisites
1. You need db [redis](http://redis.io/). 
*I am using the free online subscription of [redislab](https://redislabs.com)*

### Install
1. Clone or download the repo.
2. Open a terminal and locate the repo directory.
3. Run: `$ npm i`

### Set Up
You need to run the application with 
