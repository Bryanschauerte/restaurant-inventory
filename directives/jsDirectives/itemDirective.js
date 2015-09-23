var app = angular.module('inventory').directive('addMenu', function(){

var controller = function($scope){

//$scope.ingredients = ingredients;
$scope.enoughIngredients = function(ingredientsNeeded, ingredientsHave){
  console.log(ingredientsNeeded);
  for(var i = 0; i < ingredientsHave.length; i++){
    if(ingredientsHave[i].name == ingredientsNeeded.name){
      if(ingredientsHave[i].amount >= ingredientsNeeded.howMuchPerServing){
        console.log(ingredientsHave[i].amount);
        console.log($scope.ingredientsNeeded.howMuchPerServing);
        return false;}
    }
  }
  return true;
};
}
  return {
    templateUrl: 'directives/templates/singleItem.html',
    //controller: 'itemsCtrl',
    restrict: 'AE',
    scope: {
      type: '='

    },
    controller: controller

    // link: function(scope, elem, attr){
    //   elem.on('click',function(){
    //     elem.attr('ng-show', 'true')
      //
      // }
   }




});
