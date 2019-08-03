angular.module('App')
  .controller('HomeController', ['$scope', function($scope){

    $scope.title = 'Title : Home Page';
    $scope.contact = {
      tel: '+212645727577'
    }
  }]);