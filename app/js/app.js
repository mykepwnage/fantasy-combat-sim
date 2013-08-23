'use strict';

/* App Module */

angular.module('roar', ['roarFilters', 'roarServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/monsters', {templateUrl: 'partials/monster-list.html',   controller: MonsterListCtrl}).
      when('/monsters/:monsterId', {templateUrl: 'partials/monster-detail.html', controller: MonsterDetailCtrl}).
      when('/yourMonster/:monsterId',  {templateUrl: 'partials/yourMonster.html',   controller: YourMonsterCtrl}).
      when('/fight/:monsterId/:monsterId',  {templateUrl: 'partials/fight.html',   controller: FightCtrl}).
      otherwise({redirectTo: '/monsters'});
}]);
