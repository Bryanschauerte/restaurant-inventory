var app = angular.module('inventory').controller('itemsCtrl', function($scope){






$scope.ingredients = [
  {
    name:'beef', servingSizeIn: 'pounds', totalInStorage: 20
  },
  {
    name:'lettuce', servingSizeIn: 'ounces', totalInStorage: 100
  },
  {
    name: 'cheese', servingSizeIn: 'ounces', totalInStorage: 20
  },
  {
    name: 'hamburger buns', servingSizeIn: 'bun', totalInStorage: 20
  }];

$scope.addIngredient = function(inputName, inputServingSizeIn, howMany){
    var newIngredient = { name: inputName, servingSizeIn: inputServingSizeIn, howMany: howMany};
    $scope.newItem.ingredients.push(newIngredient);

    $scope.numberOfIncrements = '';
    $scope.ingredientsIncrement= '';
    $scope.ingredientName= '';

    console.log(newIngredient);


  }





$scope.newItemFormShow = false;
$scope.addItemStart = function(){
$scope.newItemFormShow = !$scope.newItemFormShow;
$scope.newItem = {name: '', type: '', ingredients:[], price: 0};
};


// $scope.item = {name:name, type:type, indgredients: array with serving, price:price}

$scope.desserts = {};
$scope.dishes = {};
$scope.drinks = {};

});
