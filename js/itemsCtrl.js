var app = angular.module('inventory').controller('itemsCtrl', function($scope, $mdToast,$document){
$scope.test = 'hey';
$scope.addingANewItem = false;
$scope.areAddingIngredients = true;
$scope.areAddingItems = true;
$scope.newItemFormShow = false;
$scope.ingredientsToOrder = [];

$scope.desserts = [{name:'icecream', type:'dessert', price:10, ingredients:[{name:'notihing'}], picture:'', numberSold:0, description:'its good!'}];
$scope.dishes = [];
$scope.drinks = [];
$scope.newItem = {name:'', type:'', price:0, ingredients:[], picture:'', numberSold:0, description:''};

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
    name: 'hamburger buns', servingSizeIn: 'buns', totalInStorage: 20
  }];

$scope.addIngredient = function(inputName, inputServingSizeIn, howMany){
    var newIngredient = { name: inputName, servingSizeIn: inputServingSizeIn, howMuchPerServing: howMany};
    $scope.newItem.ingredients.push(newIngredient);
    $scope.cycleAndCheckIngredients(newIngredient);

    $scope.numberOfIncrements = '';
    $scope.ingredientsIncrement= '';
    $scope.ingredientName= '';

  };

$scope.cycleAndCheckIngredients = function(nameOfIngredientToCheck){
  var add= false;
  for(var i =0; i< $scope.ingredients.length; i++){
    if($scope.ingredients[i].name == nameOfIngredientToCheck.name){
      add = false;}
  }
  if(!add){$scope.ingredients.push(nameOfIngredientToCheck)}
}

$scope.newItemAllDone = function(){
  $scope.addingANewItem = false;
  $scope.areAddingIngredients = true;
  $scope.areAddingItems = true;
  $scope.newItemFormShow = false;

$scope.cycleAndCheckIngredients($scope.newItem);

  switch ($scope.newItem.type) {
    case 'dish':
      $scope.dishes.push($scope.newItem);
      $scope.newItem ={};
      break;
    case 'dessert':
      $scope.desserts.push($scope.newItem);
      $scope.newItem ={};
      break;
    case 'drink':
      $scope.drinks.push($scope.newItem);
      $scope.newItem ={};
      break;
    default:
  }
  $scope.showSimpleToast();
};





  $scope.doneAddingIngredients = function(){
$scope.areAddingIngredients = false;
  };

  $scope.addingIngredients = function(){
$scope.areAddingIngredients = true;
  };


$scope.addItemStart = function(){
$scope.newItemFormShow = !$scope.newItemFormShow;
$scope.newItem = {name: '', type: '', ingredients:[], price: 0};
$scope.addingANewItem = true;


};


// $scope.item = {name:name, type:type, indgredients: array with serving, price:price}


$scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('item Saved!')
        .hideDelay(3000)
    );
  };

});
