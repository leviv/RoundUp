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

/* ===============================
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
