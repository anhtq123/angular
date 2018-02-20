// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		angular.forEach(arr, function(i){
			if(i.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
				result.push(i);
		})
		return result;
	};

});

app.filter('searchFor2', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		angular.forEach(arr, function(i){
			if(i.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
				result.push(i);
		});
		return result;
	}
})
// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Android tutorials',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'AngularJs Tutorials ',
			image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'HTML5 Tutorials',
			image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'CSS Tutorials',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Java Tutorials',
			image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Joomla Tutorials',
			image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'HTML Tutorials ',
			image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
		}
	];


}
