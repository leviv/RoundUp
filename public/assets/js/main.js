$(document).ready(function(){
    firebase.onAuthStateChanged(user);
});

$("#sign-up").click(function(){
	var email = $('#email');
  	var password = $('#password');
	
	if(email.val() && password.val()){

    firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then(function(user){
        console.log('everything went fine');
        console.log('user object:' + user);
        //you can save the user data here.
    }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
    });

	} else {
		console.log('fill in both fields');
	}  
});

$("#login2").click(function(){
	var email = $('#email2');
  	var password = $('#password1');
	
	if(email.val() && password.val()){

    firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then(function(user){
        console.log('everything went fine');
        console.log('user object:' + user);
        //you can save the user data here.
    }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
    });

	} else {
		console.log('fill in both fields');
	}  
});

$("#sign-out").click(function(){
	firebase.auth().signOut().then(function() {
	  console.log('Signed Out');
	}, function(error) {
	  console.error('Sign Out Error', error);
	});
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  var displayName = user.displayName;
	  document.getElementById("yeetyeet").innerHTML = displayName;
	  if (location.href.split(location.host)[1] !== "/dashboard"){
	  	  window.location.href = "dashboard.html";
	  }

  } else {
    // No user is signed in.
	  if (location.href.split(location.host)[1] === "/dashboard"){
	  	  window.location.href = "index.html";
	  }
  }
});
































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

$("#show-chat").click(function(){
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