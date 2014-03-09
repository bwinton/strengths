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

var showStrengths = function (session, person) {
  if (!session) {
    return false;
  }
  return (/@mozilla\.com$/).test(session.email);
};

exports.people = function(req, res) {
  return Person.find(function (err, people) {
    if (!err) {
      people = people.map(function (person) {
        if (!showStrengths(req.session, person)) {
          person.strengths = [];
        }
        return person;
      });
      return res.json(people);
    } else {
      return res.send(err);
    }
  });
};

exports.updatePerson = function(req, res) {
  if (req.session.email !== req.body.email) {
    return res.send(500, "Invalid email.");
  }

  Person.findOne({
    email: req.body.email
  }).exec(function(err, person) {
    if (err) {
      return res.send(err);
    }
    person.name = req.body.name;
    person.strengths = req.body.strengths;
    person.save(function (err, person) {
      if (err) {
        return res.send(err);
      }
      return res.send(person);
    });

  });
};

exports.getUser = function(req, res) {
  if (req.session.email) {
    return Person.findOne({
      email: req.session.email
    }).exec(function(err, doc) {
      if (doc) {
        return res.send(doc);
      } else {
        return Person.create({
          email: req.session.email,
          authLevel: 1
        }, function(err, user) {
          return res.send(user);
        });
      }
    });
  } else {
    return res.send({});
  }
};