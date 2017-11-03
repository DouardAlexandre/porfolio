$(document).ready(function(){
	$(".article").fadeIn(3000).delay(3000);
	$(".article2").fadeIn(6000).delay(3000);
	$(".article3").fadeIn(9000).delay(3000);
	$(".article4").fadeIn(12000).delay(3000);
	$(".article5").fadeIn(15000).delay(3000);

	$("header").slideToggle( "slow", function() {
		
		$(".square").css("top","7.2rem");
		//$(".square2").css("top","6rem");
		
	});

});