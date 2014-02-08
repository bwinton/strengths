'use strict';

angular.module('strengthsApp')
  .filter('personStrengths', function () {
    return function (input, delimiter) {
      return (input || []).map(function (strength) {
        return strength.name;
      }).join(delimiter || ', ');
    };
  });