
app.controller('userListController', ['$scope', '$location', 'users', function($scope, $location, users) {
	$scope.userData = users.listUser();
	$scope.createUser = function(){
		$location.path('/addUser/');
		};
	$scope.viewUser = function(userid){
		$location.path('/viewUser/'+userid);	
	};
	$scope.editUser = function(userid){
		$location.path('/editUser/'+userid);
		};
	$scope.deleteUser = function(userid){
		users.deleteUser(userid);
		$location.path('/');
		};
}]);
