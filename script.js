var myApp = angular.module('myApp', ['infinite-scroll']);
myApp.controller('DemoController', function($scope) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
  $scope.ddd = Date;
  console.log($scope.ddd.now());
  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };
});