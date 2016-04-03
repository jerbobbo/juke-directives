juke.directive('scrubberBar', function(PlayerFactory) {
	return {
		
		link: function(scope, element, attr) {

			// scope.showPosition = function(event) {
				
		 //    var progWidth = element[0].getBoundingClientRect().width;
		 //    //console.log(element[0].offsetLeft + ', ' + event.clientX);
		 //    var offsetX = element[0].offsetRight - event.clientX;
		 //    console.log(progWidth + ',' + offsetX);
		 //    var position = offsetX/progWidth;

		 //    // var clickX = event.clientX - element[0].offsetLeft;
   //    //   var barWidth = element[0].clientWidth;
   //    //   var position = clickX / barWidth;
   //    //   console.log('barwidth: ', barWidth, 'position: ', position);
   //      // var root = scope.$root;
   //      // root.setProgress(position);

		    
		 //    PlayerFactory.setProgress(position);
		 //    PlayerFactory.setCurrentTime(PlayerFactory.getDuration() * position);
		 //  };

		 	var clicked = false;

      element.on('mousedown', function() {
        clicked = true;
        updateScrubber();
      });

      element.on('mousemove', function() {
        if (clicked) {
          updateScrubber();
        }
      });

      element.on('mouseup', function(event) {
        clicked = false;
      });

		  scope.getPercent = function () {
    		return PlayerFactory.getProgress() * 100;
  		};

  		function updateScrubber() {
  			var clickX = event.clientX - element[0].offsetLeft;
        var barWidth = element[0].clientWidth;
        var position = clickX / barWidth;
        PlayerFactory.setProgress(position);
        PlayerFactory.setCurrentTime();
  		}

		}
	};
});


 					// var clickX = event.clientX - element[0].offsetLeft;
      //     var barWidth = element[0].clientWidth;
      //     var position = clickX / barWidth;
      //     var root = scope.$root;
      //     root.setProgress(position);