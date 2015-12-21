app.controller('saveUserController', ['$scope', '$routeParams', 'users' , '$location',function($scope, $routeParams, users, $location) {
  $scope.UserData={};
 
  if($routeParams.userid!=undefined) {
	 
    $scope.UserData =  users.getUser($routeParams.userid);
    $scope.UserData.userid=  $routeParams.userid;
    if($scope.UserData.firstName== undefined) {
      $location.path('/');  
    }
  } 
  
  $scope.saveData = function(userid) {
    UserValues= $scope.UserData;
    if(userid!=undefined) {
      UserValues.userid=userid;  
    }
    users.saveUser(UserValues);
    $location.path('/');
  }

  $scope.cancel = function () {
    $location.path('/');
  }

}]);
