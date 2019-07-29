angular
    .module('App', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider
          .state({
            name: 'home',
            url: '/home',
            templateUrl: './templates/pages/home.html'
          })
          .state({
            name: 'about',
            url: '/about',
            templateUrl: './templates/pages/about.html'
          })
          .state({
            name: 'contact',
            url: '/contact',
            templateUrl: './templates/pages/contact.html'
          })
      
      
      
      
      
      
      
      
      
      
      // Native Routing  ------------------------------------
      // $routeProvider
        //   .when('/', {
        //     templateUrl: '../templates/pages/home.html',
        //     controller: 'HomeController'
        //   })
        //   .when('/About', {
        //     templateUrl: '../templates/pages/about.html',
        //     controller: 'HomeController'
        //   })
        //   .when('/Contact', {
        //     templateUrl: '../templates/pages/contact.html',
        //     controller: 'HomeController'
        //   })
        //   .otherwise({
        //     templateUrl: '../templates/pages/404.html'
        //   });

        // $locationProvider.html5Mode(true);
    });