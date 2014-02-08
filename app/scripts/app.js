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
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

}).run(function (AuthenticationService) {
  // get session user
  AuthenticationService.authenticate();

  // $rootScope.permissions = AuthenticationService.getPermissions();

  // $rootScope.$watch('loggedInUser', function(){
  //   $rootScope.permissions = AuthenticationService.getPermissions();
  // });

});