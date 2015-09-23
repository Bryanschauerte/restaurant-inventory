var app = angular.module('inventory', ['ngRoute', 'ngMaterial','firebase'])
  .constant('fb', {url: 'https://restaurantinventory.firebaseIO.com'})
//dont forget to add ngmaterial dependancy
  .config(function($routeProvider, $mdThemingProvider){
    $routeProvider

    .when('/home', {
       templateUrl:'/routes/home.html'

    })

    .when('/dishes',{
      templateUrl:'/routes/Dishes.html',
      controller: 'dishesCtrl',
      resolve: {
        dishes: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDishes());
        },

        ingredients: function(firebaseService, $firebaseArray) {
          return $firebaseArray(firebaseService.getIngredients()).$loaded();
        }
      }

    })
    .when('/drinks',{
      templateUrl:'/routes/drinks.html',
      controller: 'drinksCtrl',
      resolve: {
        drinks: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDrinks()).$loaded();},

        ingredients: function(firebaseService, $firebaseArray) {
          return $firebaseArray(firebaseService.getIngredients()).$loaded();
        }
      }
    })
    .when('/management',{
      templateUrl:'/routes/management.html',
      controller: 'itemsCtrl',
      resolve: {
        ingredients: function(firebaseService, $firebaseArray) {
          return $firebaseArray(firebaseService.getIngredients()).$loaded();
        }
      }


    })
    .when('/desserts',{
      templateUrl:'/routes/dessert.html',
      controller: 'dessertsCtrl',
      resolve: {
        desserts: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDesserts()).$loaded();
        },
        ingredients: function(firebaseService, $firebaseArray) {
          return $firebaseArray(firebaseService.getIngredients()).$loaded();
        }
      }


    })
.otherwise({redirectTo: '/home'});


$mdThemingProvider.theme('default')

.primaryPalette('indigo', {
  'default': '400',
  'hue-1': '100',
  'hue-2': '600',
  'hue-3': 'A100'
})
.accentPalette('lime', {
  'default': '200' // use shade 200 for default, and keep all other shades the same
});

        });
