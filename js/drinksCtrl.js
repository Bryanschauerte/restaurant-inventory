var app = angular.module('inventory').controller('drinksCtrl', function($scope, drinks, ingredients){

$scope.drinks = drinks;
$scope.ingredients = ingredients;



});
