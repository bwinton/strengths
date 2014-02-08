'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Strength Schema
 */
var StrengthSchema = new Schema({
  name: String,
  area: String
});


/**
 * Validations
 */
var areas = ['Executing', 'Influencing',
  'Relationship', 'Strategic Thinking'];

StrengthSchema.path('area').validate(function (area) {
  return areas.indexOf(area) !== -1;
}, 'Area must be one of ' + areas.join(', '));

mongoose.model('Strength', StrengthSchema);