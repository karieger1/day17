$(window).load(function() {
			$("main").hide();
			$("#loader").delay(4000).fadeOut("slow");
			$("main").delay(4000).fadeIn("slow");
		});

$(document).on("ready",(function() {

		var routerConfig = Backbone.Router.extend({
			routes: {
				"":              "goHome",
				"home":          "goHome",
				"play":          "goPlay",   
				"leaderboard":   "goLeaderboard",   
				"settings":      "goSettings"
			},
		


		goHome: function() {
			$('#home').show();
			$('.stuff').hide();
		},

		goPlay: function() {
			$('.stuff').hide();
			$('#home').hide(); 
			$('#play-game').show(); 
		}, 

		goLeaderboard: function() {
			$('.stuff').hide();
			$('#home').hide();
			$('#leaderboard').show();
		}, 

		goSettings: function() {
			$('.stuff').hide();
			$('#home').hide();
			$('#settings').show();
		}

	}); 


	
}));