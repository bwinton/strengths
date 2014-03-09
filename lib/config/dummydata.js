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
    { name: 'Achiever', area: 'Executing', url:'http://businessjournal.gallup.com/content/622/Achiever.aspx'},
    { name: 'Activator', area: 'Influencing', url:'http://businessjournal.gallup.com/content/625/Activator.aspx'},
    { name: 'Adaptability', area: 'Relationship', url:'http://businessjournal.gallup.com/content/628/Adaptability.aspx'},
    { name: 'Analytical', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/631/Analytical.aspx'},
    { name: 'Arranger', area: 'Executing', url:'http://businessjournal.gallup.com/content/634/Arranger.aspx'},
    { name: 'Belief', area: 'Executing', url:'http://businessjournal.gallup.com/content/637/Belief.aspx'},
    { name: 'Command', area: 'Influencing', url:'http://businessjournal.gallup.com/content/640/Command.aspx'},
    { name: 'Communication', area: 'Influencing', url:'http://businessjournal.gallup.com/content/643/Communication.aspx'},
    { name: 'Competition', area: 'Influencing', url:'http://businessjournal.gallup.com/content/646/Competition.aspx'},
    { name: 'Connectedness', area: 'Relationship', url:'http://businessjournal.gallup.com/content/649/Connectedness.aspx'},
    { name: 'Consistency', area: 'Executing', url:'http://businessjournal.gallup.com/content/652/Consistency.aspx'},
    { name: 'Context', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/655/Context.aspx'},
    { name: 'Deliberative', area: 'Executing', url:'http://businessjournal.gallup.com/content/658/Deliberative.aspx'},
    { name: 'Developer', area: 'Relationship', url:'http://businessjournal.gallup.com/content/661/Developer.aspx'},
    { name: 'Discipline', area: 'Executing', url:'http://businessjournal.gallup.com/content/664/Discipline.aspx'},
    { name: 'Empathy', area: 'Relationship', url:'http://businessjournal.gallup.com/content/667/Empathy.aspx'},
    { name: 'Focus', area: 'Executing', url:'http://businessjournal.gallup.com/content/670/Focus.aspx'},
    { name: 'Futuristic', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/673/Futuristic.aspx'},
    { name: 'Harmony', area: 'Relationship', url:'http://businessjournal.gallup.com/content/676/Harmony.aspx'},
    { name: 'Ideation', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/679/Ideation.aspx'},
    { name: 'Inclusiveness', area: 'Relationship', url:'http://businessjournal.gallup.com/content/682/Includer.aspx'},
    { name: 'Individualization', area: 'Relationship', url:'http://businessjournal.gallup.com/content/685/Individualization.aspx'},
    { name: 'Input', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/688/Input.aspx'},
    { name: 'Intellection', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/691/Intellection.aspx'},
    { name: 'Learner', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/694/Learner.aspx'},
    { name: 'Maximizer', area: 'Influencing', url:'http://businessjournal.gallup.com/content/697/Maximizer.aspx'},
    { name: 'Positivity', area: 'Relationship', url:'http://businessjournal.gallup.com/content/700/Positivity.aspx'},
    { name: 'Relator', area: 'Relationship', url:'http://businessjournal.gallup.com/content/703/Relator.aspx'},
    { name: 'Responsibility', area: 'Executing', url:'http://businessjournal.gallup.com/content/706/Responsibility.aspx'},
    { name: 'Restorative', area: 'Executing', url:'http://businessjournal.gallup.com/content/709/Restorative.aspx'},
    { name: 'Self-Assurance', area: 'Influencing', url:'http://businessjournal.gallup.com/content/712/SelfAssurance.aspx'},
    { name: 'Significance', area: 'Influencing', url:'http://businessjournal.gallup.com/content/715/Significance.aspx'},
    { name: 'Strategic', area: 'Strategic Thinking', url:'http://businessjournal.gallup.com/content/718/Strategic.aspx'},
    { name: 'Woo', area: 'Influencing', url:'http://businessjournal.gallup.com/content/721/Woo.aspx'},
    function() {
      console.log('finished populating strengths');
      // Person.find({}).remove(function() {
      //   Strength.find({}, function (err, strengths) {
      //     var s = {};
      //     strengths.map(function (item) {
      //       s[item.name.toLowerCase().replace(/-./, function (i) {
      //         return i[1].toUpperCase();
      //       })] = item;
      //     });
      //     Person.create(
      //     {
      //       name : 'Joey deVilla',
      //       email : 'joey@joeydevilla.com',
      //       authLevel: 1,
      //       strengths: [s.positivity, s.strategic, s.woo, s.ideation, s.activator]
      //     }, {
      //       name : 'Blake Winton',
      //       email : 'bwinton@mozilla.com',
      //       authLevel: 3,
      //       strengths: [s.ideation, s.strategic, s.learner, s.input, s.selfAssurance]
      //     }, {
      //       name : 'Sevaan Franks',
      //       email : 'sfranks@mozilla.com',
      //       authLevel: 1,
      //       strengths: [s.ideation, s.futuristic, s.adaptability, s.intellection, s.input]
      //     }, function() {
      //       console.log('finished populating people');
      //     });
      //   });
      // });
    }
  );
});

