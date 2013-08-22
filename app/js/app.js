'use strict';

/* App Module */

angular.module('roar', ['roarFilters', 'roarServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/monsters', {templateUrl: 'partials/monster-list.html',   controller: PhoneListCtrl}).
      when('/monsters/:monsterId', {templateUrl: 'partials/monster-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/monsters'});
}]);
