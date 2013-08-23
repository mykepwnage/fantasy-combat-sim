'use strict';

/* Services */

angular.module('roarServices', ['ngResource'])
    .factory('Monster', function($resource){
  return $resource('monsters/:monsterId.json', {}, {
    query: {method:'GET', params:{monsterId:'monsters'}, isArray:true}
  });
})
.service('fight', function () {
        var property = 'First';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });