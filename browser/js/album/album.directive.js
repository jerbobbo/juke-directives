juke.directive('albumDirective', function() {
	return {
		templateUrl: '/js/album/templates/directive.html',
		scope: {
			albumList: '='
		},
		link: function(scope) {
			console.log(scope);
		}
	};
});