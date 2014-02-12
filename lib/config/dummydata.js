'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  Strength = mongoose.model('Strength'),
  Person = mongoose.model('Person');

/**
 * Populate database with sample application data
 */

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
          var s = {};
          strengths.map(function (item) {
            s[item.name.toLowerCase().replace(/-./, function (i) {
              return i[1].toUpperCase();
            })] = item;
          });
          Person.create(
          {
            name : 'Joey deVilla',
            email : 'joey@joeydevilla.com',
            authLevel: 1,
            strengths: [s.positivity, s.strategic, s.woo, s.ideation, s.activator]
          // }, {
          //   name : 'Blake Winton',
          //   email : 'bwinton@mozilla.com',
          //   authLevel: 3,
          //   strengths: [s.ideation, s.strategic, s.learner, s.input, s.selfAssurance]
          // }, {
          //   name : 'Sevaan Franks',
          //   email : 'sfranks@mozilla.com',
          //   authLevel: 1,
          //   strengths: [s.ideation, s.futuristic, s.adaptability, s.intellection, s.input]
          }, function() {
            console.log('finished populating people');
          });
        });
      });
    }
  );
});

