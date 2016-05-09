# heroku-alarm-clock
:clock:9 cron node app to prevent heroku apps from sleeping.

### How it works?
Simple: any X minutes a cron job will ping all the url's (heroku apps) you have configured. The job will also be schedule to be executed any hour/s you want. Notice that free heroku apps should be asleep at least 6 hours per day.