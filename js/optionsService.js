var app = angular.module('inventory').service('optionsService', function($firebaseObject, $firebase,$firebaseArray, fb){

this.removeItem = function(itemID, typeOfFood){
  console.log(234234,itemID);

  var urlToGo = new Firebase(fb.url + '/'+typeOfFood + 's/' + itemID);
  console.log(urlToGo);

  var objectToRemove = $firebaseObject(urlToGo);

  console.log(1111,objectToRemove);

  objectToRemove.$remove().then(function(ref){

    console.log(ref)
  },
function(error){
  console.log(error);
});

}

})
