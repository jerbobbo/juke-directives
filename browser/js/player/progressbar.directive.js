juke.directive('progressBar', function(PlayerFactory) {
	return {
		templateUrl: '/js/player/templates/progressbar.html',
		link: function(scope, element, attr) {

			scope.showPosition = function(event) {
				
		    var progWidth = element[0].getBoundingClientRect().width;
		    var offsetX = event.offsetX;
		    console.log(progWidth + ',' + offsetX);
		    
		    PlayerFactory.setProgress(offsetX/progWidth);
		    PlayerFactory.setCurrentTime(PlayerFactory.getDuration() * offsetX/progWidth);
		  };

		  scope.getPercent = function () {
    		return PlayerFactory.getProgress() * 100;
  		};

		}
	};
});