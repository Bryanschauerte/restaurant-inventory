var app = angular.module('inventory', ['ngRoute', 'ngMaterial','firebase'])
  .constant('fb', {url: 'https://restaurantinventory.firebaseIO.com'})

  .config(function($routeProvider, $mdThemingProvider, $mdIconProvider){
    $routeProvider

    .when('/home', {
       templateUrl:'/routes/home.html'

    })

    .when('/dishes',{
      templateUrl:'/routes/Dishes.html',
      controller: 'dishesCtrl',

      resolve: {
        dishs: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDishs());
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
        },
        drinks: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDrinks()).$loaded();},
        desserts: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDesserts()).$loaded();
              },
        dishs: function(firebaseService, $firebaseArray){
          return $firebaseArray(firebaseService.getDishs());
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
            .primaryPalette('deep-purple', {
              'default': '300',
              'hue-1': '100',
              'hue-2': '600',
              'hue-3': '900'
            })
            .backgroundPalette('blue-grey', {
              'default': '50',
              'hue-1': '100',
              'hue-2': '600',
              'hue-3': 'A100'
            })
            .accentPalette('brown', {
              'default': '300',
              'hue-1': '100',
              'hue-2': '600',
              'hue-3': 'A100'
            });

        });
