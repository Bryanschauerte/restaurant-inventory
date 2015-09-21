var app = angular.module('inventory').directive('addItem', function(){

  return {
    templateUrl: 'directives/templates/addItem.html',
    controller: 'itemsCtrl',
    restrict: 'E',
    scope: {
      typeOfFood: '=info'
    }

  };


});
