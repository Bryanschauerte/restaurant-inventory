var app = angular.module('inventory').service('firebaseService', function(fb, $firebaseArray){


  this.getIngredients = function(){
    return new Firebase(fb.url + '/ingredients');

  };

  this.getDesserts = function(){
    return new Firebase(fb.url + '/desserts');

  };

  this.getDishs = function(){
    return new Firebase(fb.url + '/dishs');
  };

  this.getDrinks = function(){
    return new Firebase(fb.url + '/drinks');
  };




});
