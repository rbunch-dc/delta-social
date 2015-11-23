myApp.controller('twitterController', function($scope, $http){
					

		$scope.deltaTweets = function(){
			var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=delta&secondHash=airlines';
			
			$http.get(url).success(function(twitterData){
				$scope.deltaTweets = twitterData.statuses;
				console.log(twitterData);
				
			});

		}

	});

	
