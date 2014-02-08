'use strict';

angular.module('strengthsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/strengths').success(function(strengths) {
      $scope.strengths = strengths;
    });
    $http.get('/api/people').success(function(people) {
      $scope.people = people;
    });
  });
