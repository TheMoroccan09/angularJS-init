angular
  .module('App')
  .controller('FormController', ['$scope', function($scope) {
    $scope.title = 'Dynamin form';
    $scope.users = [];

    $scope.addUser = function() {
      var user = {};
      $scope.users.push(user);
    }

    $scope.removeUser = function (user) {
      var i = $scope.users.indexOf(user);
      $scope.users.splice(i, 1);
    }
  }])