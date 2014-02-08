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
  strengths: [Strength.schema]
});


/**
 * Validations
 */
PersonSchema.path('strengths').validate(function (strengths) {
  return strengths.length === 5;
}, 'You must have five strengths.');

mongoose.model('Person', PersonSchema);
