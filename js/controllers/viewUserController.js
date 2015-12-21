app.controller('viewUserController', ['$scope', '$routeParams', 'users' , '$location',function($scope, $routeParams, users, $location) {
	$scope.userData =  users.getUser($routeParams.userid);
	$scope.list = function () {
    $location.path('/');
  }
}]);
