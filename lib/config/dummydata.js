'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  Strength = mongoose.model('Strength'),
  Person = mongoose.model('Person');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

Strength.find({}).remove(function() {
  Strength.create(
    { name: 'Achiever', area: 'Executing'},
    { name: 'Activator', area: 'Influencing'},
    { name: 'Adaptability', area: 'Relationship'},
    { name: 'Analytical', area: 'Strategic Thinking'},
    { name: 'Arranger', area: 'Executing'},
    { name: 'Belief', area: 'Executing'},
    { name: 'Command', area: 'Influencing'},
    { name: 'Communication', area: 'Influencing'},
    { name: 'Competition', area: 'Influencing'},
    { name: 'Connectedness', area: 'Relationship'},
    { name: 'Consistency', area: 'Executing'},
    { name: 'Context', area: 'Strategic Thinking'},
    { name: 'Deliberative', area: 'Executing'},
    { name: 'Developer', area: 'Relationship'},
    { name: 'Discipline', area: 'Executing'},
    { name: 'Empathy', area: 'Relationship'},
    { name: 'Focus', area: 'Executing'},
    { name: 'Futuristic', area: 'Strategic Thinking'},
    { name: 'Harmony', area: 'Relationship'},
    { name: 'Ideation', area: 'Strategic Thinking'},
    { name: 'Inclusiveness', area: 'Relationship'},
    { name: 'Individualization', area: 'Relationship'},
    { name: 'Input', area: 'Strategic Thinking'},
    { name: 'Intellection', area: 'Strategic Thinking'},
    { name: 'Learner', area: 'Strategic Thinking'},
    { name: 'Maximizer', area: 'Influencing'},
    { name: 'Positivity', area: 'Relationship'},
    { name: 'Relator', area: 'Relationship'},
    { name: 'Responsibility', area: 'Executing'},
    { name: 'Restorative', area: 'Executing'},
    { name: 'Self-Assurance', area: 'Influencing'},
    { name: 'Significance', area: 'Influencing'},
    { name: 'Strategic', area: 'Strategic Thinking'},
    { name: 'Woo', area: 'Influencing'},
    function() {
      console.log('finished populating strengths');
      Person.find({}).remove(function() {
        Strength.find({}, function (err, strengths) {
          var ideation = _.find(strengths, function (s) {
            return s.name === 'Ideation';
          });
          var strategic = _.find(strengths, function (s) {
            return s.name === 'Strategic';
          });
          var learner = _.find(strengths, function (s) {
            return s.name === 'Learner';
          });
          var input = _.find(strengths, function (s) {
            return s.name === 'Input';
          });
          var selfAssurance = _.find(strengths, function (s) {
            return s.name === 'Self-Assurance';
          });
          var positivity = _.find(strengths, function (s) {
            return s.name === 'Positivity';
          });
          var woo = _.find(strengths, function (s) {
            return s.name === 'Woo';
          });
          var activator = _.find(strengths, function (s) {
            return s.name === 'Activator';
          });
          Person.create({
            name : 'Blake Winton',
            email : 'bwinton@mozilla.com',
            strengths: [ideation, strategic, learner, input, selfAssurance]
          }, {
            name : 'Joey deVilla',
            email : 'joey@joeydevilla.com',
            strengths: [positivity, strategic, woo, ideation, activator]
          }, function() {
            console.log('finished populating people');
          });
        });
      });
    }
  );
});

