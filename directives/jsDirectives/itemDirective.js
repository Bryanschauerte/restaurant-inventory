var app = angular.module('inventory').directive('addMenu', function(){

  return {
    templateUrl: 'directives/templates/singleItem.html',
    //controller: 'itemsCtrl',
    restrict: 'E',
    scope: {
      type: '='
    }

  };


});
