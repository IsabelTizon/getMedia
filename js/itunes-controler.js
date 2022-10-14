// defined in itunes_controller.js
// ensure the controller gets the view's scope and the http service.
var iTunesController = function ($scope, $http) {
	// define the search function called by the form.
	$scope.searchiTunes = function (artist) {
		// use the jsonp callback function from the $http service this
		// will get around any limitations for cross-domain scripting.
		$http
			.jsonp("http://itunes.apple.com/search", {
				params: {
					callback: "JSON_CALLBACK",
					term: artist,
				},
				// returns a promise. when returned, .then perform action..
			})
			.then(onSearchComplete, onError);
		// .catch(function (error) {
		// 	console.log("error", error);
		// });
	};

	// Get the data out of the response when search succeeds.
	const onSearchComplete = function (response) {
		// the response has a few data elements
		// so we will grab all of that.
		$scope.data = response.data;
		// we will also store just the songs into
		// a separate variable for the view to iterate
		$scope.songs = response.data.results;
		console.log("finding-console", response.data.results);
	};

	// if there's an error, store that for viewing.
	const onError = function (reason) {
		$scope.error = reason;
	};
};
