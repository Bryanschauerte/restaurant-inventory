var app = angular.module('inventory').service('firebaseService', function(fb){

  // var firebaseRef = new Firebase;
  this.getIngredients = function(){
    return new Firebase(fb.url + '/ingredients');
  };

  this.getDesserts = function(){
    return new Firebase(fb.url + '/desserts');

  };

  this.getDishes = function(){
    return new Firebase(fb.url + '/dishes');
  };

  this.getDrinks = function(){
    return new Firebase(fb.url + '/drinks');
  };




});
