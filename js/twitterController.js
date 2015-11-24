$(document).ready(function(){
  var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
});

deltaSocial.controller('twitterController', function($scope, $http){
	

	
	var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=delta&secondHash=airlines';
	
	$http.get(url).success(function(twitterData){
		$scope.tweets = twitterData.statuses;
		
		console.log(twitterData);
		
	});

	

});


