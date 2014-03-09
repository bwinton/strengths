'use strict';

angular.module('strengthsApp')
  .filter('personStrengths', function () {
    return function (input, searchText) {
      if (!searchText) {
        return input;
      }
      return (input || []).filter(function (person) {
        var strengths = person.name + ',' + person.strengths.map(function (strength) {
          return strength.name;
        }).join(',');
        return strengths.toLowerCase().indexOf(searchText) !== -1;
      });
    };
  });
