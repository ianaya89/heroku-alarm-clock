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
  
  1. `PING_MINUTES` -> **integer value from 1 to 59**
  2. `PING_HOURS` -> **list of all hours separated with ','**
  3. `PING_URLS` -> **list of all heroku apps url's separated with ','**
  4. `REDIS_URL` -> **redis db connection string**
 
    ```
    PING_MINUTES=30
    PING_HOURS=6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
    PING_URLS=http://my-domain.com,http://my-domain2.com
    REDIS_URL=redis://redisHost.com:17411
    ```
  
  **The app is using [dotenv](https://www.npmjs.com/package/dotenv) nodejs module to emulate environment variables. You can create a `.env` file at the root of the repo and put all the settings there (check the `sample.env` demo file).**

### Runt It
1. Open a terminal and locate the repo directory.
2. Run: 
  ```
    $ PING_MINUTES='30' PING_HOURS='6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23' PING_URLS='http://my-domain.com;http://my-domain2.com' REDIS_URL='redis://redisHost.com:17411' node server
  ```

### Run using `.env` file
1. Open a terminal and locate the repo directory.
2. Run: `$ node server`


### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fianaya89%2Fheroku-alarm-clock)