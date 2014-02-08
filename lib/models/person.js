'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    strength = require('./strength'),
    Strength = mongoose.model('Strength');

/**
 * Person Schema
 */
var PersonSchema = new Schema({
  name: String,
  email: String,
  strengths: [Strength]
});


/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Person', PersonSchema);
