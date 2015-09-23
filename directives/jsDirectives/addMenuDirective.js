var app = angular.module('inventory').directive('addItem', function(){

  return {
    templateUrl: 'directives/templates/addItem.html',
    restrict: 'E',
    scope: {
      typeOfFood: '=info'
    }

  };


});
