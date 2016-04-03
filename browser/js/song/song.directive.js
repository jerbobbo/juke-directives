juke.directive('songDirective', function(PlayerFactory) {
	return {
		templateUrl: '/js/song/templates/directive.html',
		scope: {
			songList: '='
		},
		link: function(scope) {
			scope.toggle = function (song) {
		    if (song !== PlayerFactory.getCurrentSong()) {
		      PlayerFactory.start(song, scope.songlist);
		    } else if ( PlayerFactory.isPlaying() ) {
		      PlayerFactory.pause();
		    } else {
		      PlayerFactory.resume();
		    }
	  };

		  scope.getCurrentSong = function () {
		    return PlayerFactory.getCurrentSong();
		  };

		  scope.isPlaying = function (song) {
		    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
		  };
		}

	};
});