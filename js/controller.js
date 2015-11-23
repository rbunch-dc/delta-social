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

	var url = "http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/delta/instagram/";

	$http.get(url).success(function(data){
		console.log(data);
		var instagramData = data.data.images.low_resolution.url;
		$scope.imageUrl = instagramData;

	})
});