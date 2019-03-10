angular.module('App')
  .controller('HomeController', ['$scope', function($scope){
    console.log('Home Controller')

    $scope.title = 'Home Page';
    $scope.contact = {
      tel: '+212645727577'
    }
  }]);