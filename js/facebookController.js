<<<<<<< HEAD

=======
>>>>>>> c147d7efbed57f072fea7c1895f9fc8ae7afff19
deltaSocial.controller('facebookCtrl', function ($scope, $http){

	var facebookUrl = "http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/delta/facebook/"

	$http.get(facebookUrl).success(function (deltaData){
<<<<<<< HEAD

		$scope.posts = deltaData.data;

=======
		
		$scope.posts = deltaData.data;
	
>>>>>>> c147d7efbed57f072fea7c1895f9fc8ae7afff19
	})

})