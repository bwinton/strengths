/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, browser:true, indent:2, maxerr:50, devel:true,
  boss:true, white:true, globalstrict:true, nomen:false, newcap:true*/

/*global angular:false */

'use strict';

angular.module('strengthsApp')
  .service('UIHelperService', function Phases($http) {

    var self = this;

    self._phases = [];
    self._statuses = [];
    self._total = null;

    this.phases = function () {
      var promise = $http.get('/api/phases', { cache: false }).then(function (res) {
        self._phases = res.data;
        return res.data;
      });
      return promise;
    };

    this.statuses = function () {
      var promise = $http.get('/api/statuses', { cache: false }).then(function (res) {
        self._statuses = res.data;
        return res.data;
      });
      return promise;
    };

    this.total = function () {
      var promise = $http.get('/api/projects/total', { cache: false }).then(function (res) {
        return res.data.total;
      });
      return promise;
    };

    this.displayName = function (user) {
      if (!user) {
        return;
      }

      return user.name || user.email;
    };

  });