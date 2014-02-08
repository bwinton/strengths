'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Strength = mongoose.model('Strength');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.strengths = function(req, res) {
  return Strength.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};