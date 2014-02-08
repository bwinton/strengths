'use strict';

var mongoose = require('mongoose'),
    Strength = mongoose.model('Strength'),
    Person = mongoose.model('Person');

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

exports.getUser = function(req, res) {
  if (req.session.email) {
    return Person.findOne({
      email: req.session.email
    }).exec(function(err, doc) {
      if (doc) {
        // doc.authLevel = getAuthLevel(doc.email);
        return res.send(doc);
      } else {
        return Person.create({
          email: req.session.email
        }, function(err, user) {
          // user.authLevel = getAuthLevel(user.email);
          return res.send(user);
        });
      }
    });
  } else {
    return res.send({});
  }
};