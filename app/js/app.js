'use strict';

/* App Module */

angular.module('roar', ['roarFilters', 'roarServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/monsters', {templateUrl: 'partials/monster-list.html',   controller: MonsterListCtrl}).
      when('/monsters/:monsterId', {templateUrl: 'partials/monster-detail.html', controller: MonsterDetailCtrl}).
      otherwise({redirectTo: '/monsters'});
}]);
