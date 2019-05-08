angular
    .module('App', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
          .when('/', {
            templateUrl: '../templates/pages/home.html',
            controller: 'HomeController'
          })
          .when('/About', {
            templateUrl: '../templates/pages/about.html',
            controller: 'HomeController'
          })
          .when('/Contact', {
            templateUrl: '../templates/pages/contact.html',
            controller: 'HomeController'
          })
          .otherwise({
            templateUrl: '../templates/pages/404.html'
          });

        // $locationProvider.html5Mode(true);
    });