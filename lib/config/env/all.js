'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var host = process.env.IP_ADDRESS || process.env.VCAP_APP_HOST || '127.0.0.1';
var audience = 'http://' + host + ':' + port;
if (process.env.VCAP_APPLICATION) {
  var vcap = JSON.parse(process.env.VCAP_APPLICATION);
  audience = 'http://' + vcap.uris[0];
}
var session_secret = process.env.SESSION_SECRET || 'mytestsessionsecret';


var mongo_uri = 'mongodb://localhost/my_database';
if (process.env.VCAP_SERVICES) {
  var services = JSON.parse(process.env.VCAP_SERVICES);
  var mongo_data = services.mongodb[0].credentials;
  mongo_uri = 'mongodb://' + mongo_data.username + ':' + mongo_data.password +
              '@' + mongo_data.host + ':' + mongo_data.port + '/' + mongo_data.db;
} else if (process.env.MONGO_URL) {
  mongo_uri = process.env.MONGO_URL;
}


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
    },
    uri: mongo_uri
  }
};