/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, browser:true, indent:2, maxerr:50, devel:true,
  boss:true, white:true, globalstrict:true, nomen:false, newcap:true*/

/*global angular:false */

'use strict';

angular.module('strengthsApp')
  .service('AuthenticationService', function AuthenticationService($http, $rootScope) {

    var self = this;
    self.user = null;
    self.contributorLevel = 2;
    self.adminLevel = 3;
    $rootScope.loggedInUser = {};

    this.authenticate = function (next) {

      $rootScope.$watch('loggedInUser', function () {
        if ($rootScope.loggedInUser === null) { // && !$rootScope.loggedInUser.authLevel) {
          self.getUser();
        } else {
          self.user = $rootScope.loggedInUser;
        }
      });

      self.getUser();

      if (next) {
        next();
      }
    };

    this.getUser = function () {
      $http.get('/api/getUser').then(function (res) {
        if (res.data.email) {
          $rootScope.loggedInUser = res.data;
          self.user = res.data;

          // if (!self.user.firstName || !self.user.lastName) {
          //   _.defer(function () {
          //     $('.profileLink').tooltip({
          //       title: 'Complete your profile!',
          //       placement: 'bottom'
          //     })
          //     .tooltip('show');
          //   });
          // }
        }
      });
    };

    this.canViewLevel = function (level) {
      if (self.authLevel() >= level) {
        return true;
      } else {
        return false;
      }
    };

    this.loggedInUser = function () {
      return self.user;
    };

    this.authLevel = function () {
      if (self.user !== null) {
        return self.user.authLevel;
      } else {
        return 0;
      }
    };

    this.isAdmin = function () {
      return (self.authLevel() >= self.adminLevel);
    };

    this.canAdd = function () {
      return self.authLevel() >= self.contributorLevel;
    };

    this.canEdit = function (model) {
      if (self.user !== null && model.owner !== null && model.owner.email === self.user.email) {
        return true;
      } else if (self.authLevel() >= self.adminLevel) {
        return true;
      } else if (model.email !== null && model.email === self.user.email) {
        return true;
      } else {
        return false;
      }
    };

    this.canDelete = this.canEdit;

    this.getUserType = function () {
      if (self.user === null) {
        return '';
      }

      switch (self.user.authLevel) {
        case 2:
          return 'CONTRIBUTOR';
        case 3:
          return 'ADMIN';
        default:
          return '';
      }
    };

    this.getPermissions = function (model) {
      if (!model) {
        model = {};
      }

      var perm = {
        edit: self.canEdit(model),
        remove: self.canDelete(model),
        add: self.canAdd(),
        admin: self.isAdmin(),
        userType: self.getUserType()
      };
      return perm;
    };
  });
