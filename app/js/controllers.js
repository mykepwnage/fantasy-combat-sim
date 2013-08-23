'use strict';

/* Controllers */

function MonsterListCtrl($scope, Monster)
{
    $scope.monsters = Monster.query();
    $scope.orderProp = 'age';
}
//MonsterListCtrl.$inject = ['$scope', 'Monster'];

function MonsterDetailCtrl($scope, $routeParams, Monster)
{
    $scope.monster = Monster.get({monsterId: $routeParams.monsterId}, function (monster)
    {
        $scope.mainImageUrl = monster.image;
    });

    $scope.setImage = function (imageUrl)
    {
        $scope.mainImageUrl = imageUrl;
    }
}

//MonsterDetailCtrl.$inject = ['$scope', '$routeParams', 'Monster'];

function YourMonsterCtrl($scope, $routeParams, Monster)
{
    $scope.yourMonster = Monster.get({monsterId: $routeParams.monsterId}, function (monster)
    {
        $scope.mainImageUrl = monster.image;
    });
}


function FightCtrl($scope, owlbear, redDragon)
{
    $scope.owlbear = owlbear.query();
    $scope.redDragon = redDragon.query();
}
