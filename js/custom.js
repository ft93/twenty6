$(document).ready(function(){
	
	$(".go-button").hover(function(event){
		$(this).addClass("animated pulse");
	});

	$(".go-button").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event){
		$(this).removeClass("animated pulse");
	});
});