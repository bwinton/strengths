/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, browser:true, indent:2, maxerr:50, devel:true,
  boss:true, white:true, globalstrict:true, nomen:false, newcap:true*/

/*global angular:false */

'use strict';

var mapStrengths = function (strengths, topFiveStrengths) {
  var s = {};
  strengths.map(function (item) {
    s[item._id] = item;
  });

  var rv = topFiveStrengths.concat([{}, {}, {}, {}, {}]).slice(0, 5);
  rv = rv.map(function (strength) {
    if (strength._id) {
      return s[strength._id];
    } else {
      return {};
    }
  });
  return rv;
};

angular.module('strengthsApp')
  .controller('ProfileCtrl', function ($scope, $http) {
    $http.get('/api/strengths').success(function (strengths) {
      $scope.strengths = strengths;

      $scope.topFiveStrengths = mapStrengths(strengths, $scope.loggedInUser.strengths);
    });

    $scope.save = function () {
      $scope.loggedInUser.strengths = $scope.topFiveStrengths.slice(0);
      $http.post('/api/people', $scope.loggedInUser).success(function (person) {
        console.log('Saved!!!', person);
      });
    };
  });
