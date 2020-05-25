var globalFunc = {
	init: function(){
		globalFunc.resize();
	},

	resize: function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

	},

};

$(window).resize(function() {
	globalFunc.init();
});

$(document).ready(function() {
	globalFunc.init();

});

$(window).on('load', function() {
	globalFunc.init();
});

// preloader once done
Pace.on('done', function() {
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
});
