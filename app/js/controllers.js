'use strict';

/* Controllers */

function MonsterListCtrl($scope, Monster) {
  $scope.monsters = Monster.query();
  $scope.orderProp = 'age';
}

//MonsterListCtrl.$inject = ['$scope', 'Monster'];



function MonsterDetailCtrl($scope, $routeParams, Monster) {
  $scope.monster = Monster.get({monsterId: $routeParams.monsterId}, function(monster) {
    $scope.mainImageUrl = monster.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//MonsterDetailCtrl.$inject = ['$scope', '$routeParams', 'Monster'];
