$(document).ready(function(){
  $('.jcarousel').jcarousel({
  	
  });
});

deltaSocial.controller('twitterController', function($scope, $http){
	

	
	var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=delta&secondHash=airlines';
	
	$http.get(url).success(function(twitterData){
		$scope.tweets = twitterData.statuses;
		
		console.log(twitterData);
		
	});

	

});


