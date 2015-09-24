var app = angular.module('inventory').controller('itemsCtrl', function($scope, ingredients, dishs, drinks, desserts, $mdToast, $document, $firebaseObject, $firebaseArray, fb){

$scope.ingredients = ingredients;
$scope.productButton =true;
$scope.showProductForm = false;
$scope.ingredientButton = true;
$scope.showIngredientForm = false;
$scope.addingIngredientsToAProduct = false;
$scope.desserts = desserts;
$scope.dishs = dishs;
$scope.drinks = drinks;

$scope.newItem = {name:'', type:'', price:0, ingredients:[], picture:'', numberSold:0, description:''};
$scope.ingredientToAdd = {name: '', servingSizeIn: '', amount: 0};

$scope.addIngredientToStoreRoom = function(){
  var ingredientsUrl = new Firebase(fb.url + '/ingredients');
  var ingredient = $firebaseArray(ingredientsUrl);
  ingredient.$add($scope.ingredientToAdd);
  $scope.ingredientToAdd = {};
  $scope.showSimpleToast();
};

$scope.readyToAddIngredient = function(){
  $scope.productButton = false;
  $scope.ingredientButton = false;
  $scope.showIngredientForm = true;
  $scope.showProductForm = false;

};


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
    $scope.numberOfIncrements = '';
    $scope.ingredientsIncrement= '';
    $scope.ingredientName= '';

  };

$scope.newItemAllDone = function(){

// $scope.cycleAndCheckIngredients($scope.newItem);
  switch ($scope.newItem.type) {
    case 'dish':
      $scope.dishs.push($scope.newItem);
      //dish instead of dishes to make removal easier
      var dishUrl = new Firebase(fb.url + '/dishs');
      var dishs = $firebaseArray(dishUrl);
      dishs.$add($scope.newItem);
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

//
//   $scope.enoughIngredients = function(foodItem){
//
//   var isThere = false;
//   for(var item in foodItem.ingredients){
//     for(var i = 0; i < $scope.ingredients.length; i++){
//       if(foodItem.ingredients[item].name == $scope.ingredients[i].name){
//         isThere = true;
//       }
//     };
//   };
//
//   if(isThere){
//     return true;
//   }
//   else {
//
//   return false;}
//   };
//
});
