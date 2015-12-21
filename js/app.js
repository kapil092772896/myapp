var app = angular.module('kApp', ['ngRoute']);

app.config(['$routeProvider',
function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl: 'views/userList.html',
		controller: 'userListController'
		}).	
		when('/addUser/',{
			 templateUrl: 'views/userForm.html',
			 controller: 'saveUserController'
			}).
		when('/viewUser/:userid', {
        templateUrl: 'views/userView.html',
        controller: 'viewUserController'
      }).
      when('/editUser/:userid', {
			templateUrl: 'views/userForm.html',
			controller: 'saveUserController'
		  }).
		  when('/admin/', {
			templateUrl: 'admin/index.html',
			controller: 'admin/adminController'
		  }).
		  otherwise({
			  redirectTo: '/'
			  });
	}]);
