$(window).load(function() {
		$("main").hide();
		$("#loader").delay(4000).fadeOut("medium");
		$("main").delay(4000).fadeIn("medium");
	});


$(document).ready(function() {
	var routerConfig = {
		routes: {
			"":              "goHome",
			"play":          "goPlay",   
			"leaderboard":   "goLeaderboard",   
			"settings":      "goSettings"
		},
	}
});



// $(document).ready(function() {
// 	 $("#loader").delay(4000).animate({
// 	        opacity:0,
// 	        width: 0,
// 	        height:0
//     }, 500);
