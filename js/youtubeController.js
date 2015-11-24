var apiKey = 'AIzaSyBATomUTaY39yeNeQi53eDi8Xj4ojLhvzI';
	

	deltaSocial.controller('youtubeController', function($http, $sce, $scope){
		queryTerm = $scope.videoSearch;
        var baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=';
        var searchUrl = queryTerm;
        var endUrl = '&key=';
        var totalUrl = baseUrl + searchUrl + endUrl + apiKey;
        var mainVideohtml="";
		var suggestedVideoUrl="https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjSrVD08nsyPDCNRjqSV7yA&safeSearch=moderate&order=date&maxResults=9&key="+apiKey;

    $http.get(suggestedVideoUrl).success(function(data) {
        $scope.suggestedVideos = data.items;
        $scope.mainUrl= $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+$scope.suggestedVideos[0].id);
        $scope.mainTitle = $scope.suggestedVideos[0].snippet.title;
        console.log($scope.suggestedVideos);
        $scope.suggestedVideosArray = [];
        for(i=1; i<9; i++){
            var youTubeUrl = 'https://www.youtube.com/embed/';
            var popularVideos = {
                vidtitle: $scope.suggestedVideos[i].snippet.title,
                thumb: $scope.suggestedVideos[i].snippet.thumbnails.default.url,
                url: youTubeUrl + $scope.suggestedVideos[i].id,
                duration: "2:43:58",
                postedBy: "Stuart Tiedemann",
                totalViews: 100000
                }
                $scope.suggestedVideosArray.push(popularVideos);
            }
            console.log($scope.suggestedVideosArray);
         });
	});
