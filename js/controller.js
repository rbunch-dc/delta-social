var deltaSocial = angular.module('deltaSocial', ['ngRoute']);

// deltaApp.config(function($routeProvider, $locationProvider){
// 	$routeProvider.when('/', {
// 		templateUrl: 'XXXXX',
// 		controller: 'deltaController'
// 	}).
// 	when('/XXXX',{
// 		templateUrl: '',
// 		controller: ''
// 	}).
// 	otherwise({
// 		redirectTo: ''    // --default page to display.
// 	});

// });

deltaSocial.controller('deltaController', function ($scope, $http, $location, $interval){
	var accessToken = "";
	var url = "https://api.instagram.com/v1/users/delta/media/recent/?access_token=" + accessToken;

	$http.get(url).success(function(data){
		data.images.url
		console.log(data);
	})
});