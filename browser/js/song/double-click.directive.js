juke.directive('doubleClick', function(PlayerFactory) {
	return {
		scope: {
			doubleClick: '&'
		},
		link: function (scope, element, attr) {
			element.on('dblclick', function() {
				console.log('double-clicked');
				scope.doubleClick();
			});

			// scope.doubleClick = function(song) {
			// 	scope.toggle(song);
			// };

		
		}
	};
});