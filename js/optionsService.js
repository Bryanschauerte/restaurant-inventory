var app = angular.module('inventory').service('optionsService', function($firebaseObject, $firebase,$firebaseArray, fb){

this.removeItem = function(itemID, typeOfFood){
var urlToGo = new Firebase(fb.url + '/'+typeOfFood + 's/' + itemID);

  var objectToRemove = $firebaseObject(urlToGo);

  objectToRemove.$remove().then(function(ref){

  },
function(error){
});}

})
