// $(window).load(function() {
// 			$("main").hide();
// 			$("#loader").delay(4000).fadeOut("slow");
// 			$("main").delay(4000).fadeIn("slow");
// 		});

// $(document).on("ready",(function() {

// 		var routerConfig = Backbone.Router.extend({
// 			routes: {
// 				"":              "goHome",
// 				"home":          "goHome",
// 				"play":          "goPlay",   
// 				"leaderboard":   "goLeaderboard",   
// 				"settings":      "goSettings"
// 			},
		


// 		$("#homebutton li").click(function() {
// 			$("#navbar").show();
// 			$(main).hide();
// 		});

// 		$("#playbutton li").click(function() {
// 			$("#game").show();
// 		});

// 		$("#leaderbutton li").click(function() {
// 			$("#leaders").show();
// 		});

// 		$("#settingsbutton li").click(function() {
// 			$("#settings").show();
// 		});

// 	}); 

// 	Backbone.history.start()
	
// }));


$(document).ready(function () {
	
	$(window).load(function() {
	        $('main').hide();
	        $('nav').show();
	        $('#game').hide();
	        $('#loader').delay(4000).fadeOut('fast');
	        
	    });

	$('#playbutton li').click(function () {
		window.location.href = "#play";
		
		});

	$('#leaderbutton li').click(function () {
		window.location.href = "#leader";
		
		});

	$('#settingsbutton li').click(function () {
		window.location.href = "#settings";
		
		});

	var routerConfig = {
		routes: {
			'': 'menu',
			'menu': 'menu',
			'play': 'play',
			'leader': 'leaderboard',
			'settings': 'settings',
	},

		menu: function() {
			
			$('main').hide();
			$('.navbar').show();
		},

		play: function() {
			
			$('.navbar').show();
			$('#game').show();
			$('#leaders').hide();
			$('#settings').hide();
		},

		leaderBoard: function() {
		
			$('.navbar').show();
			$('#leaders').show();
			$('#settings').hide();
			$('#game').hide();
		},

		settings: function() {
		
			$('.navbar').show();
			$('#settings').show();
			$('#game').hide();
			$('#leaders').hide();
		},
	};
	

	var app = Backbone.Router.extend(routerConfig);

	var myRouter = new app();
	Backbone.history.start();

}); 
