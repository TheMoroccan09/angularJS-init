angular.module('App')
  .controller('HomeController', ['$scope', function($scope){

    $scope.title = 'Home Page';
    $scope.contact = {
      tel: '+212645727577'
    }
  }]);