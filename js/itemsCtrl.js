var app = angular.module('inventory').controller('itemsCtrl', function($scope, ingredients, $mdToast, $document, $firebaseObject, $firebaseArray, fb){

$scope.ingredients = ingredients;
$scope.productButton =true;
$scope.showProductForm = false;
$scope.ingredientButton = true;
$scope.showIngredientForm = false;
$scope.addingIngredientsToAProduct = false;
$scope.desserts = [];
$scope.dishes = [];
$scope.drinks = [];

$scope.newItem = {name:'', type:'', price:0, ingredients:[], picture:'', numberSold:0, description:''};
$scope.ingredientToAdd = {name: '', servingSizeIn: '', amount: 0};

$scope.addIngredientToStoreRoom = function(){
  var ingredientsUrl = new Firebase(fb.url + '/ingredients');
  var ingredient = $firebaseArray(ingredientsUrl);
  ingredient.$add($scope.ingredientToAdd);
  $scope.ingredientToAdd = {};
  $scope.showSimpleToast();
}
$scope.readyToAddIngredient = function(){
$scope.productButton = false;
$scope.ingredientButton = false;
$scope.showIngredientForm = true;
$scope.showProductForm = false;

}


$scope.addItemStart = function(){
  $scope.productButton =false;
  $scope.showProductForm = true;
  $scope.ingredientButton = false;
  $scope.showIngredientForm = false;
  $scope.addingIngredientsToAProduct = true;
  $scope.newItem = {
    name: '', type: '', ingredients:[], price: 0
  };

};

//for product's ingredient
$scope.addIngredient = function(inputName, inputServingSizeIn, howMany){
    var newIngredient = { name: inputName, servingSizeIn: inputServingSizeIn, howMuchPerServing: howMany};
    $scope.newItem.ingredients.push(newIngredient);
    // $scope.cycleAndCheckIngredients(newIngredient);

    $scope.numberOfIncrements = '';
    $scope.ingredientsIncrement= '';
    $scope.ingredientName= '';

  };

// $scope.cycleAndCheckIngredients = function(nameOfIngredientToCheck){
//    var add= false;
//    var ingredientsUrl = new Firebase(fb.url + '/ingredients');
//    var ingredientsAddress = $firebaseArray(ingredientsUrl);
//    for(var i =0; i< $scope.ingredients.length; i++){
//      if($scope.ingredients[i].name == nameOfIngredientToCheck.name){
//        add = false;}
//    }
//    if(!add){
//      ingredientsAddress.$add(nameOfIngredientToCheck);
//    }
// }

$scope.newItemAllDone = function(){

// $scope.cycleAndCheckIngredients($scope.newItem);
  switch ($scope.newItem.type) {
    case 'dish':
      $scope.dishes.push($scope.newItem);
      var dishUrl = new Firebase(fb.url + '/dishes');
      var dishes = $firebaseArray(dishUrl);
      dishes.$add($scope.newItem);
      $scope.newItem ={};
      break;

    case 'dessert':
      $scope.desserts.push($scope.newItem);
      var dessertUrl = new Firebase(fb.url + '/desserts');
      var desserts = $firebaseArray(dessertUrl);
      desserts.$add($scope.newItem);
      $scope.newItem ={};
      break;

    case 'drink':
      $scope.drinks.push($scope.newItem);
      var drinksUrl = new Firebase(fb.url + '/drinks');
      var drinks = $firebaseArray(drinksUrl);
      drinks.$add($scope.newItem);
      $scope.newItem ={};
      break;
    default:
  }
  $scope.showSimpleToast();
};

  $scope.AddingIngredientsToProductButton = function(){
    $scope.addingIngredientsToAProduct = !$scope.addingIngredientsToAProduct;

  };

$scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('item Saved!')
        .hideDelay(3000)
    );

    $scope.productButton = true;
    $scope.ingredientButton = true;
    $scope.showIngredientForm = false;
    $scope.showProductForm = false;
    $scope.addingIngredientsToAProduct = false;
  };

});
