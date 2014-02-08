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
  authLevel: Number,
  strengths: [Strength.schema]
});


/**
 * Validations
 */
PersonSchema.path('strengths').validate(function (strengths) {
  return strengths.length === 5 || strengths.length === 0;
}, 'You must have five strengths.');

PersonSchema.path('authLevel').validate(function (authLevel) {
  return authLevel >= 1 && authLevel <= 3;
}, 'authLevel must be between 1 and 3.');

mongoose.model('Person', PersonSchema);
