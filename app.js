(function () {

angular.module('myFirstApp',[])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Shivam";
  $scope.sayHello = function () {
    return "Hello Courseera!";
  }
});

})();
