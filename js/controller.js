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

	$http.get(url).success(function(instaData){
		console.log(instaData);
		var instagramData = [];
		$scope.firstImage = instaData.data[0].images.standard_resolution.url;
		for(i = 1; i < 10; i++){
			instagramData.push(instaData.data[i].images.standard_resolution.url);
		}

		$scope.imageUrl = instagramData;

	})
});