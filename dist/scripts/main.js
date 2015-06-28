$(window).load(function() {
		$('main').hide();
		$('#loader').delay(4000).fadeOut('fast');
		$('main').delay(4000).fadeIn('fast');
	});

$(document).on('ready', function(){
	
	var myRouter = Backbone.Router.extend({
		routes: {
			'': 				'home',
			'home': 			'home',
			'play':				'playGame',
			'leaders': 			'leaderBoard', 
			'settings': 		'settingsPage', 

		},

		home: function() {
			$('.navbar').show();
			$('.viewer').hide();
			
		}, 

		playGame: function() {
			$('.viewer').hide();
			$('.navbar').show(); 
			$('#game-screen').show(); 
			$('#home').hide();
		}, 

		leaderBoard: function() {
			$('.viewer').hide();
			$('.navbar').show();
			$('#leaders').show();
			$('#home').hide();

		}, 

		settingsPage: function() {
			$('.viewer').hide();
			$('.navbar').show();
			$('#settings').show();
			$('#home').hide();
		}
	
	});

var router = new myRouter();
Backbone.history.start();

});