strengths
=========

A dashboard to keep track of Mozillian's strengths

### Developers: ###

1. Install node, npm, and grunt.
    1. `brew install node`
    1. `npm install grunt`
1. Install coffeescript.
    1. `brew install ruby`
    1. `sudo gem install coffeescript`
1. Install mongo.
    1. `brew install mongo`
    1. `mongod` (or perhaps `mongod --dbpath /usr/local/var/mongodb`)
1. `grunt serve` in the main directory to build the app and run the server.

### Deployers: ###

The first time:

1. Download the [stackato client](https://api.paas.allizom.org/console/client/)
and save it as `s`
1. `s target api.paas.allizom.org`
1. `s login`
1. `s info`, to make sure it‘s all working.

Every time:

1. `grunt build` to build the app.
1. `cd dist` to go into the built app.
1. `s push`