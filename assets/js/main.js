function animateWithRandomNumber(myClass, from, to) {
	TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), { y: from }, { y: to,
																				onComplete: animateWithRandomNumber,
																				onCompleteParams: [myClass, from, to],
																				ease: Linear.easeNone });
}

var itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].forEach(function (e) {
	return animateWithRandomNumber(e, -1080, 1080);
});
var itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].forEach(function (e) {
	return animateWithRandomNumber(e, 1080, -1080);
});


// Bouncing arrow bottom of full screen
// Different arrow choices from Font Awesome
// Fades away as you scroll down

$(window).scroll(function(){
	$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
	//250 is fade pixels
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$("button").click(function(){
    if ($("iframe").hasClass("open-iframe")) {
		
		$("iframe").removeClass("open-iframe");
		$("iframe").animate({
            width: "0px", 
        }, {
            duration: 1050,
            easing: 'easeInOutQuint'
        });
		
	} else {
		$("iframe").animate({
            width: "30%", 
        }, {
            duration: 1050,
            easing: 'easeInOutQuint'
        });
		$("iframe").addClass("open-iframe");
	}
    // Animation complete.
});
