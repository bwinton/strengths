/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, browser:true, indent:2, maxerr:50, devel:true,
  boss:true, white:true, globalstrict:true, nomen:false, newcap:true*/

/*global angular:false */

'use strict';

angular.module('strengthsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/strengths').success(function (strengths) {
      $scope.strengths = strengths;
    });
    $http.get('/api/people').success(function (people) {
      $scope.people = people.filter(function (person) {
        return person.strengths && person.strengths.length === 5;
      });
    });
    $scope.$watch('loggedInUser.email', function () {
      $http.get('/api/people').success(function (people) {
        $scope.people = people.filter(function (person) {
          return person.strengths && person.strengths.length === 5;
        });
      });
    });
  });
