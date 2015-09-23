var app = angular.module('inventory').directive('addMenu', function(){

var controller = function($scope, firebaseService, $firebaseArray, $mdToast, optionsService){

  $scope.removeItem = function(itemID, typeOfFood){
    console.log(itemID);
    optionsService.removeItem(itemID, typeOfFood);
  }

  $firebaseArray(firebaseService.getIngredients()).$loaded()
  .then(function(res){
    $scope.ingredients = res;
  });



$scope.enoughIngredients = function(foodItem){
var isThere = false;
for(var item in foodItem.ingredients){
  // console.log(foodItem.ingredients[item].name);
  for(var i = 0; i < $scope.ingredients.length; i++){
    if(foodItem.ingredients[item].name == $scope.ingredients[i].name){
      isThere = true;
    }
  };
};

if(isThere){
  $scope.SuccessToast()
}
else {$scope.FailToast()}
};

$scope.FailToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Missing ingredients! NOT available')
        .hideDelay(3000)
    );

  };
  $scope.SuccessToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .content('Available! Order now')
          .hideDelay(3000)
      );

    };

//end of controller
};
  return {
    templateUrl: 'directives/templates/singleItem.html',
    restrict: 'AE',
    scope: {
      type: '='
    },
    controller: controller


   };

});
