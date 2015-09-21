var app = angular.module('inventory', ['ngRoute', 'ngMaterial'])

//dont forget to add ngmaterial dependancy
  .config(function($routeProvider, $mdThemingProvider){
    $routeProvider

    .when('/home', {
       templateUrl:'/routes/home.html'
    })

    .when('/dishes',{
      templateUrl:'/routes/Dishes.html'

    })
    .when('/drinks',{
      templateUrl:'/routes/drinks.html'

    })
    .when('/management',{
      templateUrl:'/routes/management.html',
      controller: 'itemsCtrl'


    })
    .when('/tableHistory',{
      templateUrl:'/routes/tableHistory.html'


    })
    .when('/desserts',{
      templateUrl:'/routes/dessert.html'


    })
.otherwise({redirectTo: '/home'});


$mdThemingProvider.theme('default')

.primaryPalette('indigo', {
  'default': '400',
  'hue-1': '100',
  'hue-2': '600',
  'hue-3': 'A100'
})
// If you specify less than all of the keys, it will inherit from the
// default shades
.accentPalette('lime', {
  'default': '200' // use shade 200 for default, and keep all other shades the same
});

        });
