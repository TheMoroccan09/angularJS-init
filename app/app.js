angular
    .module('App', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
          .when('/', {
            templateUrl: '../templates/pages/home.html',
            controller: 'HomeController'
          })
          .otherwise({
            templateUrl: '../templates/pages/404.html'
          })
    });