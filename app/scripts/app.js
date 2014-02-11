/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, browser:true, indent:2, maxerr:50, devel:true,
  boss:true, white:true, globalstrict:true, nomen:false, newcap:true*/

/*global angular:false */

'use strict';

angular.module('strengthsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-tools.persona'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .when('/profile', {
      templateUrl: 'partials/profile',
      controller: 'ProfileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

}).run(function (AuthenticationService, $rootScope) {
  // get session user
  AuthenticationService.authenticate();

  $rootScope.permissions = AuthenticationService.getPermissions();

  $rootScope.$watch('loggedInUser.email', function () {
    $rootScope.permissions = AuthenticationService.getPermissions();
  });

});