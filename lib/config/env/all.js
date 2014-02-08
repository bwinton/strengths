'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var host = process.env.IP_ADDRESS || process.env.VCAP_APP_HOST || '127.0.0.1';
var audience = 'http://' + host + ':' + port;
if (process.env.VCAP_APPLICATION) {
  vcap = JSON.parse(process.env.VCAP_APPLICATION);
  audience = 'http://' + vcap.uris[0];
}
var session_secret = process.env.SESSION_SECRET || 'mytestsessionsecret';


module.exports = {
  root: rootPath,
  port: port,
  host: host,
  audience: audience,
  session_secret: session_secret,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};