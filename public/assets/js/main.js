$(document).ready(function(){
    firebase.onAuthStateChanged(user);
});

setTimeout(
    function() {
        $(".notification").animate({
            left: "20px", 
        }, {
            duration: 1050,
            easing: 'easeInOutQuint'
        });
    }, 3000);

setTimeout(
    function() {
        $(".notification").animate({
            left: "-500px", 
        }, {
            duration: 1050,
            easing: 'easeInOutQuint'
        });
    }, 8000);

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'en';

$(".sign-in").click(function() {
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});					
});

/*
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
*/
$("#sign-out").click(function(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
});

var rootRef = firebase.database().ref().child('users');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  var displayName = user.displayName;
	  document.getElementById("yeetyeet").innerHTML = displayName;
	  if (location.href.split(location.host)[1] !== "/dashboard.html"){
		  rootRef.set({
			  name:user.displayName,
			  username:user.displayName,
			  location: "Richardson, TX",
			  bio:"lfucksdaf"
		  });
	  	  window.location.href = "dashboard.html";
	  }

  } else {
    // No user is signed in.
	  if (location.href.split(location.host)[1] === "/dashboard.html"){
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
