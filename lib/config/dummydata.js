'use strict';

var mongoose = require('mongoose'),
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
    { name: 'Achiever'},
    { name: 'Activator'},
    { name: 'Adaptability'},
    { name: 'Analytical'},
    { name: 'Arranger'},
    { name: 'Belief'},
    { name: 'Command'},
    { name: 'Communication'},
    { name: 'Competition'},
    { name: 'Connectedness'},
    { name: 'Consistency'},
    { name: 'Context'},
    { name: 'Deliberative'},
    { name: 'Developer'},
    { name: 'Discipline'},
    { name: 'Empathy'},
    { name: 'Focus'},
    { name: 'Futuristic'},
    { name: 'Harmony'},
    { name: 'Ideation'},
    { name: 'Inclusiveness'},
    { name: 'Individualization'},
    { name: 'Input'},
    { name: 'Intellection'},
    { name: 'Learner'},
    { name: 'Maximizer'},
    { name: 'Positivity'},
    { name: 'Relator'},
    { name: 'Responsibility'},
    { name: 'Restorative'},
    { name: 'Self-Assurance'},
    { name: 'Significance'},
    { name: 'Strategic'},
    { name: 'Woo'},
    function() {
      console.log('finished populating strengths');
    }
  );
});

Person.find({}).remove(function() {
  Person.create({
    name : 'Blake Winton',
    email : 'bwinton@mozilla.com',
    strengths: [
      { name: 'Ideation'},
      { name: 'Strategic'},
      { name: 'Learner'},
      { name: 'Input'},
      { name: 'Self-Assurance'},
    ]
  }, function() {
    console.log('finished populating people');
  });
});

