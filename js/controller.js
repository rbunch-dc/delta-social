var deltaSocial = angular.module('deltaSocial', []);


deltaSocial.controller('instagramController', function ($scope, $http){

	var url = "http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/delta/instagram/";

	$('#instagram-modal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})

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