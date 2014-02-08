'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Strength = mongoose.model('Strength'),
    Person = mongoose.model('Person');

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
  return Strength.find(function (err, strengths) {
    if (!err) {
      return res.json(strengths);
    } else {
      return res.send(err);
    }
  });
};

exports.people = function(req, res) {
  return Person.find(function (err, people) {
    if (!err) {
      return res.json(people);
    } else {
      return res.send(err);
    }
  });
};